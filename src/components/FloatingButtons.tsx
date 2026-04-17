import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function FloatingButtons() {
  const phoneNumber = '+261367729958';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const telUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow"
        title="Réserver par WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.a>

      {/* Phone Button */}
      <motion.a
        href={telUrl}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#2d6b4f] rounded-full flex items-center justify-center shadow-lg shadow-[#2d6b4f]/30 hover:shadow-xl hover:shadow-[#2d6b4f]/40 transition-shadow"
        title="Appeler maintenant"
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.a>

      {/* Quick Reserve Button */}
      <motion.a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#c9a962] rounded-full flex items-center justify-center shadow-lg shadow-[#c9a962]/30 hover:shadow-xl hover:shadow-[#c9a962]/40 transition-shadow"
        title="Réserver une table"
      >
        <Calendar className="w-6 h-6 text-[#0a1f17]" />
      </motion.a>
    </div>
  );
}
