import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/lib/data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref, isInView } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section id="avis" className="py-24 bg-[#0f2b1f] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2d6b4f]/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block px-4 py-2 bg-[#c9a962]/10 border border-[#c9a962]/30 rounded-full text-[#c9a962] text-sm font-medium tracking-wider uppercase mb-6"
          >
            Témoignages
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f0e8] mb-6"
          >
            Avis Clients
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[#c9a962] text-[#c9a962]" />
              ))}
            </div>
            <span className="text-[#f5f0e8]/60 ml-2">4.9/5 sur Google</span>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden min-h-[300px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="w-full"
              >
                <div className="bg-[#0a1f17] rounded-2xl p-8 sm:p-12 border border-[#2d6b4f]/20">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-[#c9a962]/20 mb-6" />

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(currentTestimonial.note)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#c9a962] text-[#c9a962]" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-[#f5f0e8] text-lg sm:text-xl leading-relaxed mb-8 italic">
                    "{currentTestimonial.commentaire}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#f5f0e8] font-semibold">{currentTestimonial.nom}</p>
                      <p className="text-[#f5f0e8]/50 text-sm">{currentTestimonial.date}</p>
                    </div>
                    <div className="w-12 h-12 bg-[#c9a962]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#c9a962] font-serif text-xl">
                        {currentTestimonial.nom.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-[#f5f0e8]/5 border border-[#2d6b4f]/20 flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#c9a962] hover:border-[#c9a962]/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-[#c9a962]'
                      : 'bg-[#f5f0e8]/20 hover:bg-[#f5f0e8]/40'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-[#f5f0e8]/5 border border-[#2d6b4f]/20 flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#c9a962] hover:border-[#c9a962]/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
