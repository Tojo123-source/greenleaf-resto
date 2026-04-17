import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { menuItems } from '@/lib/data';
import type { MenuItem } from '@/types';
import { ChefHat } from 'lucide-react';

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#0f2b1f] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.nom}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2b1f] via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#c9a962]/90 text-[#0a1f17] text-xs font-semibold rounded-full uppercase tracking-wider">
            {item.categorie}
          </span>
        </div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          className="absolute top-4 right-4"
        >
          <span className="px-4 py-2 bg-[#0a1f17]/80 backdrop-blur-sm text-[#c9a962] font-serif text-lg font-semibold rounded-full">
            {item.prix}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif text-[#f5f0e8] mb-3 group-hover:text-[#c9a962] transition-colors">
          {item.nom}
        </h3>
        <p className="text-[#f5f0e8]/60 text-sm leading-relaxed line-clamp-3">
          {item.description}
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="mt-4 flex items-center gap-2 text-[#c9a962] text-sm font-medium"
        >
          <ChefHat className="w-4 h-4" />
          <span>Chef's Selection</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="menu" className="py-24 bg-[#0a1f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-full text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-6"
          >
            Notre Carte
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f0e8] mb-6"
          >
            Menu Signature
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#f5f0e8]/60 max-w-2xl mx-auto text-lg"
          >
            Des créations uniques où chaque plat raconte l'histoire de producteurs locaux 
            et de saisons respectées
          </motion.p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#f5f0e8]/50 text-sm mb-4">
            * Nos menus changent selon les saisons et l'arrivage des produits
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#c9a962] text-[#c9a962] font-semibold rounded-full hover:bg-[#c9a962] hover:text-[#0a1f17] transition-colors"
          >
            Réserver pour déguster
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
