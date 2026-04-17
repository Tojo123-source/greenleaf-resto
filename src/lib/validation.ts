import { z } from 'zod';

export const reservationSchema = z.object({
  nom: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100, 'Le nom ne peut pas dépasser 100 caractères'),
  email: z.string().email('Veuillez entrer une adresse email valide'),
  telephone: z.string().min(10, 'Le numéro de téléphone doit contenir au moins 10 chiffres').regex(/^[0-9+\s-]+$/, 'Format de téléphone invalide'),
  date: z.string().min(1, 'Veuillez sélectionner une date'),
  convives: z.number().min(1, 'Minimum 1 convive').max(20, 'Maximum 20 convives'),
  message: z.string().max(500, 'Le message ne peut pas dépasser 500 caractères').optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;
