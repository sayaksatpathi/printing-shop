import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { openWhatsApp } from '@/app/whatsapp';

interface ProductsProps {
  productImages: string[];
}

export function Products({ productImages }: ProductsProps) {
  const products = [
    {
      name: 'Business Cards',
      description: 'Premium quality with multiple finishes',
      price: '₹299',
      image: productImages[0],
    },
    {
      name: 'Brochures',
      description: 'A4/A5 size, full color printing',
      price: '₹499',
      image: productImages[1],
    },
    {
      name: 'Flex Banners',
      description: 'Weather-resistant outdoor banners',
      price: '₹35/sqft',
      image: productImages[2],
    },
    {
      name: 'Packaging Boxes',
      description: 'Custom sizes and designs',
      price: '₹15/piece',
      image: productImages[3],
    },
    {
      name: 'Letterheads',
      description: 'Professional office stationery',
      price: '₹3/piece',
      image: productImages[4],
    },
    {
      name: 'Catalogs',
      description: 'Perfect bound or saddle stitched',
      price: '₹45/page',
      image: productImages[5],
    },
  ];

  const orderMessageFor = (product: { name: string; price: string }) => {
    return `Hi! I want to place an order.\n\nProduct: ${product.name}\nStarting price: ${product.price}`;
  };

  return (
    <section id="products" className="py-20 bg-[#111111] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-2 h-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className={`w-full h-8 ${
                i % 4 === 0 ? 'bg-[#0097A7]' : i % 4 === 1 ? 'bg-[#D72638]' : i % 4 === 2 ? 'bg-[#F5A623]' : 'bg-white'
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
          <span className="text-[#F5A623] font-bold text-sm tracking-widest mb-2 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            EXPLORE OUR RANGE
          </span>
          <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            FEATURED PRODUCTS
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            Competitive pricing without compromising on quality. Get the best value for your printing needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#0D0D0D] rounded-lg overflow-hidden shadow-xl border border-[#333] hover:border-[#D72638] transition-all group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#D72638] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-4" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm text-gray-400">Starting at</span>
                    <div className="text-2xl font-bold text-[#F5A623]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      {product.price}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openWhatsApp({ text: orderMessageFor(product) });
                    }}
                    className="px-6 py-3 bg-[#D72638] text-white font-bold rounded hover:bg-[#b81e2d] transition-all flex items-center gap-2 group-hover:scale-105"
                  >
                    <span style={{ fontFamily: 'Montserrat, sans-serif' }}>ORDER</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
