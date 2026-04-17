import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { reservationSchema } from '@/lib/validation';
import type { ReservationFormData } from '@/lib/validation';
import { saveReservation } from '@/lib/supabase';
import { sendReservationEmail } from '@/lib/brevo';
import type { Reservation } from '@/types';

export function useReservation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      nom: '',
      email: '',
      telephone: '',
      date: '',
      convives: 2,
      message: '',
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const reservation: Reservation = {
        nom: data.nom,
        email: data.email,
        telephone: data.telephone,
        date: data.date,
        convives: data.convives,
        message: data.message || '',
      };

      // Save to Supabase
      await saveReservation(reservation);

      // Send email via Brevo
      await sendReservationEmail(reservation);

      setIsSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de la réservation');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSuccess = () => {
    setIsSuccess(false);
    setError(null);
  };

  return {
    form,
    isSubmitting,
    isSuccess,
    error,
    onSubmit,
    resetSuccess,
  };
}
