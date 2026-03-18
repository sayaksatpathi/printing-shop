import { motion } from 'motion/react';
import { MessageSquare, FileSearch, Printer, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Share Your Needs',
      description: 'Tell us what you need printed. Call, WhatsApp, or visit our store.',
    },
    {
      number: '02',
      icon: FileSearch,
      title: 'Get a Quote',
      description: 'Receive instant pricing and choose the best option for your budget.',
    },
    {
      number: '03',
      icon: Printer,
      title: 'We Print It',
      description: 'Our team handles everything with precision and care.',
    },
    {
      number: '04',
      icon: CheckCircle,
      title: 'Delivery',
      description: 'Collect from our store or get it delivered to your doorstep.',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-1">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i % 4 === 0 ? 'bg-[#0097A7]' : i % 4 === 1 ? 'bg-[#D72638]' : i % 4 === 2 ? 'bg-[#F5A623]' : 'bg-[#111111]'
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D72638] font-bold text-sm tracking-widest mb-2 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            HOW IT WORKS
          </span>
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            OUR SIMPLE PROCESS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            From concept to completion in 4 easy steps. We make printing hassle-free.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#D72638] via-[#F5A623] to-[#0097A7]"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-[#F8F8F6] rounded-lg p-8 text-center hover:shadow-xl transition-all border-2 border-transparent hover:border-[#D72638] group cursor-pointer">
                  {/* Number Badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 mx-auto mb-4 bg-[#D72638] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg relative z-10"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center group-hover:bg-[#111111] transition-colors shadow-md"
                  >
                    <Icon className="text-[#D72638] group-hover:text-white transition-colors" size={32} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D72638] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
