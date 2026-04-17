import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { galleryImages } from '@/lib/data';
import type { GalleryImage } from '@/types';
import { X, ZoomIn } from 'lucide-react';

type Category = 'tous' | 'plats' | 'ambiance' | 'evenements';

const categories: { value: Category; label: string }[] = [
  { value: 'tous', label: 'Tous' },
  { value: 'plats', label: 'Plats' },
  { value: 'ambiance', label: 'Ambiance' },
  { value: 'evenements', label: 'Événements' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('tous');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const { ref, isInView } = useScrollAnimation();

  const filteredImages = activeCategory === 'tous'
    ? galleryImages
    : galleryImages.filter((img) => img.categorie === activeCategory);

  return (
    <section id="galerie" className="py-24 bg-[#0a1f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-full text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-6"
          >
            Notre Univers
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f0e8] mb-6"
          >
            Galerie
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#f5f0e8]/60 max-w-2xl mx-auto"
          >
            Plongez dans l'atmosphère unique de GreenLeaf
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? 'bg-[#c9a962] text-[#0a1f17]'
                  : 'bg-[#f5f0e8]/5 text-[#f5f0e8]/60 hover:bg-[#f5f0e8]/10 hover:text-[#f5f0e8]'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedImage(image)}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'h-full min-h-[400px]' : 'h-64'}`}>
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-[#0a1f17]/0 group-hover:bg-[#0a1f17]/40 transition-colors duration-300" />
                  
                  {/* Zoom Icon */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-14 h-14 bg-[#c9a962]/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-6 h-6 text-[#0a1f17]" />
                    </div>
                  </motion.div>

                  {/* Label */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 bg-[#0a1f17]/80 backdrop-blur-sm text-[#f5f0e8] text-xs rounded-full capitalize">
                      {image.categorie}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#0a1f17]/95 backdrop-blur-lg flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-[#f5f0e8]/10 rounded-full flex items-center justify-center text-[#f5f0e8] hover:bg-[#f5f0e8]/20 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <p className="text-[#f5f0e8] text-lg font-medium">{selectedImage.alt}</p>
              <span className="text-[#c9a962] text-sm capitalize">{selectedImage.categorie}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
