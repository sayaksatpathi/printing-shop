import { motion } from 'motion/react';
import { Printer, FileText, CreditCard, Image, BookOpen, Package, Newspaper, FileCheck } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Printer,
      title: 'Offset Printing',
      description: 'High-quality bulk printing for magazines, catalogs, and more. Perfect for large volume orders.',
    },
    {
      icon: FileText,
      title: 'Digital Printing',
      description: 'Fast, flexible printing for short runs. Ideal for quick turnarounds and variable data printing.',
    },
    {
      icon: CreditCard,
      title: 'Visiting Cards',
      description: 'Premium business cards with various finishes. Make a lasting first impression.',
    },
    {
      icon: Image,
      title: 'Flex & Banners',
      description: 'Large format printing for outdoor advertising. Weather-resistant and vibrant colors.',
    },
    {
      icon: BookOpen,
      title: 'Brochures & Flyers',
      description: 'Eye-catching marketing materials that tell your story. Multiple folding options available.',
    },
    {
      icon: Package,
      title: 'Packaging Solutions',
      description: 'Custom packaging design and printing. Boxes, labels, and more for your products.',
    },
    {
      icon: Newspaper,
      title: 'Stationery',
      description: 'Complete office stationery solutions. Letterheads, envelopes, and more.',
    },
    {
      icon: FileCheck,
      title: 'Catalogs & Magazines',
      description: 'Professional binding and finishing. Perfect for product catalogs and publications.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D72638] font-bold text-sm tracking-widest mb-2 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            WHAT WE DO
          </span>
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            OUR SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            Comprehensive printing solutions for all your business needs. Quality, speed, and precision guaranteed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#D72638] group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-[#D72638] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#111111] transition-colors"
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#D72638] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
