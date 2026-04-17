import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Leaf, Heart, Award, Sprout } from 'lucide-react';

const values = [
  {
    icon: Sprout,
    title: '100% Bio',
    description: 'Tous nos produits sont certifiés biologiques, issus de l\'agriculture durable et respectueuse de l\'environnement.',
  },
  {
    icon: Leaf,
    title: 'Local & Saisonnier',
    description: 'Nous travaillons exclusivement avec des producteurs du Val-d\'Oise et des régions voisines pour une cuisine fraîche et responsable.',
  },
  {
    icon: Heart,
    title: 'Fait Maison',
    description: 'Chaque plat, chaque sauce, chaque pain est préparé sur place avec amour et expertise par notre chef passionné.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Une approche gastronomique innovante qui prouve que la cuisine végétale peut rivaliser avec les plus grandes tables.',
  },
];

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 bg-[#0f2b1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-full text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-6"
          >
            Notre Philosophie
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f0e8] mb-6"
          >
            L'Expérience GreenLeaf
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#f5f0e8]/60 max-w-3xl mx-auto text-lg"
          >
            Plus qu'un restaurant, un voyage culinaire qui célèbre la nature et ses saveurs authentiques
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Chef en cuisine"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f17]/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 bg-[#c9a962] p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <p className="text-[#0a1f17] font-serif text-lg italic">
                "La cuisine végétale est l'avenir de la gastronomie"
              </p>
              <p className="text-[#0a1f17]/70 text-sm mt-2">— Chef GreenLeaf</p>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#c9a962]/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-serif text-[#f5f0e8] mb-6">
              Une Cuisine Engagée
            </h3>
            
            <div className="space-y-4 text-[#f5f0e8]/70 leading-relaxed">
              <p>
                Situé au cœur du Val-d'Oise, GreenLeaf Restaurant est né d'une vision : 
                démontrer que la cuisine végétale peut être à la fois gastronomique, 
                créative et respectueuse de notre planète.
              </p>
              <p>
                Notre chef, passionné par les produits du terroir, travaille main dans 
                la main avec des agriculteurs bio locaux pour sélectionner les meilleurs 
                légumes, herbes aromatiques et épices. Chaque plat est une célébration 
                des saisons et de la biodiversité.
              </p>
              <p>
                Dans un cadre élégant et chaleureux, nous vous invitons à découvrir 
                une nouvelle façon de gastronomie — où le végétal n'est pas une 
                restriction, mais une source infinie d'inspiration.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-[#0f2b1f] bg-[#2d6b4f] flex items-center justify-center"
                  >
                    <Leaf className="w-5 h-5 text-[#c9a962]" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#f5f0e8] font-medium">+500 avis 5 étoiles</p>
                <p className="text-[#f5f0e8]/50 text-sm">sur Google & TripAdvisor</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#0a1f17] p-8 rounded-2xl border border-[#2d6b4f]/20 hover:border-[#c9a962]/30 transition-colors group"
            >
              <div className="w-14 h-14 bg-[#c9a962]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c9a962]/20 transition-colors">
                <value.icon className="w-7 h-7 text-[#c9a962]" />
              </div>
              <h4 className="text-xl font-serif text-[#f5f0e8] mb-3">{value.title}</h4>
              <p className="text-[#f5f0e8]/60 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
