import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { X } from 'lucide-react';

interface GalleryProps {
  galleryImages: string[];
}

export function Gallery({ galleryImages }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['All', 'Brochures', 'Banners', 'Packaging', 'Visiting Cards', 'Stationery'];

  const galleryItems = [
    { image: galleryImages[0], category: 'Brochures', title: 'Corporate Brochure Design' },
    { image: galleryImages[1], category: 'Visiting Cards', title: 'Premium Business Cards' },
    { image: galleryImages[2], category: 'Banners', title: 'Outdoor Flex Banner' },
    { image: galleryImages[3], category: 'Packaging', title: 'Custom Product Packaging' },
    { image: galleryImages[4], category: 'Stationery', title: 'Office Letterheads' },
    { image: galleryImages[5], category: 'Brochures', title: 'Product Catalog' },
    { image: galleryImages[0], category: 'Banners', title: 'Event Banner Design' },
    { image: galleryImages[1], category: 'Visiting Cards', title: 'Creative Business Cards' },
    { image: galleryImages[2], category: 'Packaging', title: 'Food Packaging Design' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#D72638] font-bold text-sm tracking-widest mb-2 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            OUR WORK
          </span>
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            PORTFOLIO GALLERY
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            Explore our collection of completed projects. Quality and creativity in every piece.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 font-bold rounded transition-all ${
                activeFilter === category
                  ? 'bg-[#D72638] text-white shadow-lg'
                  : 'bg-[#F8F8F6] text-[#111111] hover:bg-[#E0DDD8]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="1.5rem">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-xs font-bold text-[#F5A623] mb-2 tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#D72638] transition-colors"
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
