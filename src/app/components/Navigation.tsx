import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'} border-b-2 ${isScrolled ? 'border-[#D72638]' : 'border-[#D72638]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#D72638] rounded flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-3 h-3 bg-[#0097A7]"></div>
                  <div className="w-3 h-3 bg-[#D72638]"></div>
                  <div className="w-3 h-3 bg-[#F5A623]"></div>
                  <div className="w-3 h-3 bg-[#111111]"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  HZ PRINT HOUSE
                </h1>
                <p className="text-[10px] text-gray-600 -mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Nehru Place, New Delhi
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-semibold text-[#111111] hover:text-[#D72638] transition-colors group"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D72638] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#contact"
                className="px-6 py-3 bg-[#D72638] text-white font-bold rounded transition-all hover:bg-[#b81e2d] hover:shadow-lg"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                GET A QUOTE
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#111111] hover:text-[#D72638] transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#111111] z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold text-white hover:text-[#D72638] transition-colors"
                  style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-4 bg-[#D72638] text-white font-bold text-xl rounded hover:bg-[#b81e2d] transition-all"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                GET A QUOTE
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}