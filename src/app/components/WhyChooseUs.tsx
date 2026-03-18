import { motion } from 'motion/react';
import { CheckCircle2, Clock, Award, ThumbsUp, Shield, Zap } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: CheckCircle2,
      title: 'Premium Quality',
      description: 'State-of-the-art printing equipment',
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast delivery without delays',
    },
    {
      icon: Award,
      title: '19+ Years Experience',
      description: 'Trusted since 2005',
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      description: '5000+ happy clients',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every print is checked',
    },
    {
      icon: Zap,
      title: 'Competitive Pricing',
      description: 'Best value for money',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#D72638] font-bold text-sm tracking-widest mb-2 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              WHY CHOOSE US
            </span>
            <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              NEHRU PLACE'S #1 PRINT PARTNER
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              Since 2005, we've been delivering exceptional printing services to businesses across New Delhi. Our commitment to quality and customer satisfaction sets us apart.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-[#D72638] rounded-lg p-6 text-white">
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  5000+
                </div>
                <div className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  HAPPY CLIENTS
                </div>
              </div>
              <div className="bg-[#111111] rounded-lg p-6 text-white">
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  50K+
                </div>
                <div className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  PROJECTS DONE
                </div>
              </div>
              <div className="bg-[#F5A623] rounded-lg p-6 text-white">
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  19+
                </div>
                <div className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  YEARS EXPERIENCE
                </div>
              </div>
              <div className="bg-[#0097A7] rounded-lg p-6 text-white">
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  100%
                </div>
                <div className="text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  SATISFACTION
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-[#D72638] text-white font-bold rounded hover:bg-[#b81e2d] transition-all hover:shadow-xl"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              REQUEST BULK ORDER QUOTE
            </a>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all border-l-4 border-[#D72638] hover:scale-105 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#D72638] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}