import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useReservation } from '@/hooks/useReservation';
import Confetti from '@/components/Confetti';
import { restaurantInfo } from '@/lib/data';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Calendar,
  Users,
  MessageSquare,
} from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const { form, isSubmitting, isSuccess, error, onSubmit, resetSuccess } = useReservation();

  // Auto-reset success state after 8 seconds
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        resetSuccess();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, resetSuccess]);

  return (
    <section id="contact" className="py-24 bg-[#0a1f17]">
      <Confetti trigger={isSuccess} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-full text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-6"
          >
            Réservez votre table
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f0e8] mb-6"
          >
            Contact & Réservation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#f5f0e8]/60 max-w-2xl mx-auto"
          >
            Réservez votre expérience gastronomique dès maintenant
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif text-[#f5f0e8] mb-8">Nos Coordonnées</h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a962]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <p className="text-[#f5f0e8] font-medium mb-1">Adresse</p>
                  <p className="text-[#f5f0e8]/60 text-sm">{restaurantInfo.adresse}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a962]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <p className="text-[#f5f0e8] font-medium mb-1">Téléphone & WhatsApp</p>
                  <a
                    href={`tel:${restaurantInfo.telephone}`}
                    className="text-[#f5f0e8]/60 text-sm hover:text-[#c9a962] transition-colors"
                  >
                    {restaurantInfo.telephone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a962]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <p className="text-[#f5f0e8] font-medium mb-1">Email</p>
                  <a
                    href={`mailto:${restaurantInfo.email}`}
                    className="text-[#f5f0e8]/60 text-sm hover:text-[#c9a962] transition-colors"
                  >
                    {restaurantInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#c9a962]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#c9a962]" />
                </div>
                <div>
                  <p className="text-[#f5f0e8] font-medium mb-1">Horaires d'ouverture</p>
                  <div className="text-[#f5f0e8]/60 text-sm space-y-1">
                    {Object.entries(restaurantInfo.horaires).map(([jour, horaire]) => (
                      <p key={jour}>
                        <span className="capitalize font-medium">{jour}</span> : {horaire}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#2d6b4f]/20 h-64">
              <iframe
                src={restaurantInfo.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GreenLeaf Restaurant Location"
              />
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-[#0f2b1f] rounded-2xl p-8 border border-[#2d6b4f]/20">
              <h3 className="text-2xl font-serif text-[#f5f0e8] mb-2">Formulaire de Réservation</h3>
              <p className="text-[#f5f0e8]/50 text-sm mb-8">
                Remplissez le formulaire ci-dessous, nous vous confirmerons sous 24h
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <CheckCircle className="w-20 h-20 text-[#c9a962] mx-auto mb-6" />
                  </motion.div>
                  <h4 className="text-2xl font-serif text-[#f5f0e8] mb-4">
                    Réservation envoyée !
                  </h4>
                  <p className="text-[#f5f0e8]/60 mb-8">
                    Nous avons bien reçu votre demande et vous contacterons très rapidement pour la confirmer.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetSuccess}
                    className="px-6 py-3 bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] rounded-full hover:bg-[#c9a962]/20 transition-colors"
                  >
                    Nouvelle réservation
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[#f5f0e8]/70 text-sm mb-2">Nom complet *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5f0e8]/30" />
                      <input
                        {...form.register('nom')}
                        type="text"
                        placeholder="Votre nom"
                        className={`w-full pl-12 pr-4 py-3 bg-[#0a1f17] border rounded-xl text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a962]/50 transition-colors ${
                          form.formState.errors.nom ? 'border-red-500/50' : 'border-[#2d6b4f]/20'
                        }`}
                      />
                    </div>
                    {form.formState.errors.nom && (
                      <p className="text-red-400 text-xs mt-1">{form.formState.errors.nom.message}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#f5f0e8]/70 text-sm mb-2">Email *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5f0e8]/30" />
                        <input
                          {...form.register('email')}
                          type="email"
                          placeholder="votre@email.com"
                          className={`w-full pl-12 pr-4 py-3 bg-[#0a1f17] border rounded-xl text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a962]/50 transition-colors ${
                            form.formState.errors.email ? 'border-red-500/50' : 'border-[#2d6b4f]/20'
                          }`}
                        />
                      </div>
                      {form.formState.errors.email && (
                        <p className="text-red-400 text-xs mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[#f5f0e8]/70 text-sm mb-2">Téléphone *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5f0e8]/30" />
                        <input
                          {...form.register('telephone')}
                          type="tel"
                          placeholder="+33 6 12 34 56 78"
                          className={`w-full pl-12 pr-4 py-3 bg-[#0a1f17] border rounded-xl text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a962]/50 transition-colors ${
                            form.formState.errors.telephone ? 'border-red-500/50' : 'border-[#2d6b4f]/20'
                          }`}
                        />
                      </div>
                      {form.formState.errors.telephone && (
                        <p className="text-red-400 text-xs mt-1">{form.formState.errors.telephone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Date & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#f5f0e8]/70 text-sm mb-2">Date *</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5f0e8]/30" />
                        <input
                          {...form.register('date')}
                          type="date"
                          className={`w-full pl-12 pr-4 py-3 bg-[#0a1f17] border rounded-xl text-[#f5f0e8] focus:outline-none focus:border-[#c9a962]/50 transition-colors ${
                            form.formState.errors.date ? 'border-red-500/50' : 'border-[#2d6b4f]/20'
                          }`}
                        />
                      </div>
                      {form.formState.errors.date && (
                        <p className="text-red-400 text-xs mt-1">{form.formState.errors.date.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[#f5f0e8]/70 text-sm mb-2">Nombre de convives *</label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f5f0e8]/30" />
                        <select
                          {...form.register('convives', { valueAsNumber: true })}
                          className={`w-full pl-12 pr-4 py-3 bg-[#0a1f17] border rounded-xl text-[#f5f0e8] focus:outline-none focus:border-[#c9a962]/50 transition-colors appearance-none ${
                            form.formState.errors.convives ? 'border-red-500/50' : 'border-[#2d6b4f]/20'
                          }`}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((num) => (
                            <option key={num} value={num} className="bg-[#0a1f17]">
                              {num} {num === 1 ? 'personne' : 'personnes'}
                            </option>
                          ))}
                        </select>
                      </div>
                      {form.formState.errors.convives && (
                        <p className="text-red-400 text-xs mt-1">{form.formState.errors.convives.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#f5f0e8]/70 text-sm mb-2">
                      Message (optionnel)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#f5f0e8]/30" />
                      <textarea
                        {...form.register('message')}
                        rows={4}
                        placeholder="Allergies, occasion spéciale, préférences..."
                        className={`w-full pl-12 pr-4 py-3 bg-[#0a1f17] border rounded-xl text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a962]/50 transition-colors resize-none ${
                          form.formState.errors.message ? 'border-red-500/50' : 'border-[#2d6b4f]/20'
                        }`}
                      />
                    </div>
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-xs mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-400 text-sm">{error}</p>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#c9a962] text-[#0a1f17] font-semibold rounded-xl hover:bg-[#d4b76a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-[#0a1f17] border-t-transparent rounded-full"
                        />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer ma réservation
                      </>
                    )}
                  </motion.button>

                  <p className="text-[#f5f0e8]/40 text-xs text-center">
                    * Champs obligatoires. Nous vous contacterons sous 24h pour confirmer votre réservation.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
