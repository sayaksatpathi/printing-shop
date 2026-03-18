import { motion } from 'motion/react';
import { ArrowRight, Award, Users, Package } from 'lucide-react';

interface HeroProps {
  heroImage1: string;
  heroImage2: string;
  heroImage3: string;
}

export function Hero({ heroImage1, heroImage2, heroImage3 }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#111111] to-[#0D0D0D] rounded-2xl -z-10 opacity-5"></div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-[#D72638] text-white text-sm font-bold rounded-full tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  SINCE 2005
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                PRINT IT RIGHT.
                <br />
                <span className="text-[#D72638] relative inline-block">
                  EVERY TIME.
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-2 left-0 h-1 bg-[#F5A623]"
                  ></motion.span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed"
                style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
              >
                Nehru Place's Most Trusted Printing Partner Since 2005. From business cards to banners, we deliver quality that speaks volumes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <a
                  href="#contact"
                  className="px-8 py-4 bg-[#D72638] text-white font-bold rounded hover:bg-[#b81e2d] transition-all hover:shadow-xl hover:scale-105 flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  GET A QUOTE
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 border-2 border-[#111111] text-[#111111] font-bold rounded hover:bg-[#111111] hover:text-white transition-all flex items-center gap-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  OUR SERVICES
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                    <Award className="text-[#D72638]" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-[#D72638]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    19+
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    Years Experience
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                    <Users className="text-[#D72638]" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-[#D72638]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    5000+
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    Happy Clients
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                    <Package className="text-[#D72638]" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-[#D72638]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                    50K+
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    Projects Done
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-0 right-0 w-3/4 h-2/3 rounded-lg overflow-hidden shadow-2xl"
            >
              <img src={heroImage1} alt="Printing Services" className="w-full h-full object-cover" />
            </motion.div>

            {/* Secondary Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-20 left-0 w-2/3 h-1/2 rounded-lg overflow-hidden shadow-2xl border-4 border-white"
            >
              <img src={heroImage2} alt="Printed Materials" className="w-full h-full object-cover" />
            </motion.div>

            {/* Accent Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute bottom-0 right-10 w-1/3 h-1/3 rounded-lg overflow-hidden shadow-2xl border-4 border-white"
            >
              <img src={heroImage3} alt="Quality Print" className="w-full h-full object-cover" />
            </motion.div>

            {/* CMYK Dots Decoration */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 opacity-30">
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i % 4 === 0 ? 'bg-[#0097A7]' : i % 4 === 1 ? 'bg-[#D72638]' : i % 4 === 2 ? 'bg-[#F5A623]' : 'bg-[#111111]'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}