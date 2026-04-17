import { motion } from 'framer-motion';
import { Leaf, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { restaurantInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#0a1f17] border-t border-[#2d6b4f]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-[#c9a962]" />
              <span className="text-2xl font-serif text-[#f5f0e8] font-semibold">
                GreenLeaf
              </span>
            </div>
            <p className="text-[#f5f0e8]/70 text-sm leading-relaxed mb-6">
              Cuisine végétale d'exception dans le Val-d'Oise. 
              Une expérience gastronomique unique, bio et locale.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-[#2d6b4f]/20 flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#c9a962] hover:bg-[#2d6b4f]/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-[#2d6b4f]/20 flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#c9a962] hover:bg-[#2d6b4f]/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#f5f0e8] font-serif text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#c9a962] mt-0.5 flex-shrink-0" />
                <span className="text-[#f5f0e8]/70 text-sm">{restaurantInfo.adresse}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                <a href={`tel:${restaurantInfo.telephone}`} className="text-[#f5f0e8]/70 text-sm hover:text-[#c9a962] transition-colors">
                  {restaurantInfo.telephone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#c9a962] flex-shrink-0" />
                <a href={`mailto:${restaurantInfo.email}`} className="text-[#f5f0e8]/70 text-sm hover:text-[#c9a962] transition-colors">
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-[#f5f0e8] font-serif text-lg mb-6">Horaires</h3>
            <ul className="space-y-3">
              {Object.entries(restaurantInfo.horaires).map(([jour, horaire]) => (
                <li key={jour} className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c9a962] mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-[#f5f0e8] text-sm capitalize font-medium">{jour}</span>
                    <p className="text-[#f5f0e8]/60 text-xs">{horaire}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#f5f0e8] font-serif text-lg mb-6">Newsletter</h3>
            <p className="text-[#f5f0e8]/70 text-sm mb-4">
              Recevez nos actualités et offres spéciales.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 bg-[#f5f0e8]/5 border border-[#2d6b4f]/20 rounded-lg text-[#f5f0e8] placeholder:text-[#f5f0e8]/30 focus:outline-none focus:border-[#c9a962]/50 text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-3 bg-[#c9a962] text-[#0a1f17] font-medium rounded-lg hover:bg-[#d4b76a] transition-colors text-sm"
              >
                S'inscrire
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#2d6b4f]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#f5f0e8]/40 text-sm">
            © 2026 GreenLeaf Restaurant. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#f5f0e8]/40 text-sm hover:text-[#c9a962] transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-[#f5f0e8]/40 text-sm hover:text-[#c9a962] transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
