import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface TestimonialsProps {
  testimonialImages: string[];
}

export function Testimonials({ testimonialImages }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, Tech Solutions Pvt Ltd',
      image: testimonialImages[0],
      text: 'Shree Print House has been our go-to printing partner for 5 years. Their quality and timely delivery are unmatched. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Head, Fashion Retail',
      image: testimonialImages[1],
      text: 'Amazing service! They handled our bulk order of 10,000 brochures with perfection. The color quality is outstanding.',
      rating: 5,
    },
    {
      name: 'Amit Singh',
      role: 'Owner, Local Restaurant',
      image: testimonialImages[0],
      text: 'From menu cards to outdoor banners, everything is printed with precision. Great pricing and excellent customer service.',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#D72638] rounded-full opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#F5A623] rounded-full opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] font-bold text-sm tracking-widest mb-2 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            CLIENT REVIEWS
          </span>
          <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0D0D0D] rounded-2xl p-8 md:p-12 border border-[#333] shadow-2xl"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#D72638] shadow-lg">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#D72638] rounded-full flex items-center justify-center">
                    <Quote className="text-white" size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="text-[#F5A623] fill-[#F5A623]" size={24} />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed italic" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Name & Role */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-[#F5A623]" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-[#D72638] text-white rounded-full flex items-center justify-center hover:bg-[#b81e2d] transition-all hover:scale-110 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-[#D72638] text-white rounded-full flex items-center justify-center hover:bg-[#b81e2d] transition-all hover:scale-110 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#D72638] w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
