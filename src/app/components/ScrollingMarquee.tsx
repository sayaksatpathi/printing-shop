import { motion } from 'motion/react';

export function ScrollingMarquee() {
  const services = [
    'OFFSET PRINTING',
    'DIGITAL PRINTING',
    'VISITING CARDS',
    'FLEX BANNERS',
    'BROCHURES',
    'PACKAGING',
    'STATIONERY',
    'CATALOGS',
    'FLYERS',
    'LETTERHEADS',
  ];

  return (
    <div className="bg-[#D72638] py-4 overflow-hidden border-y-2 border-[#b81e2d]">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...services, ...services, ...services].map((service, index) => (
          <span
            key={index}
            className="text-white text-2xl font-bold tracking-widest"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            {service} <span className="text-[#F5A623] mx-4">●</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
