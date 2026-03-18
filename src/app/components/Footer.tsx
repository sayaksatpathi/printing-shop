import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#D72638] rounded flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-3 h-3 bg-[#0097A7]"></div>
                  <div className="w-3 h-3 bg-[#D72638]"></div>
                  <div className="w-3 h-3 bg-[#F5A623]"></div>
                  <div className="w-3 h-3 bg-white"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                HZ PRINT
              </h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              Print It Right. Every Time. Your trusted printing partner since 2005.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-[#D72638] rounded-full flex items-center justify-center hover:bg-[#b81e2d] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#D72638] rounded-full flex items-center justify-center hover:bg-[#b81e2d] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#D72638] rounded-full flex items-center justify-center hover:bg-[#b81e2d] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-[#D72638] rounded-full flex items-center justify-center hover:bg-[#b81e2d] transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F5A623]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#D72638] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#D72638] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-[#D72638] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#D72638] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#D72638] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#D72638] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F5A623]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              OUR SERVICES
            </h4>
            <ul className="space-y-2" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              <li className="text-gray-400">Offset Printing</li>
              <li className="text-gray-400">Digital Printing</li>
              <li className="text-gray-400">Visiting Cards</li>
              <li className="text-gray-400">Flex & Banners</li>
              <li className="text-gray-400">Brochures</li>
              <li className="text-gray-400">Packaging Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#F5A623]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              CONTACT INFO
            </h4>
            <ul className="space-y-3" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-[#D72638] flex-shrink-0 mt-1" size={18} />
                <span>Nehru Place, New Delhi - 110019</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-[#D72638] flex-shrink-0" size={18} />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-[#D72638] flex-shrink-0" size={18} />
                <span>info@hzprinthouse.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              © 2024 HZ Print House. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
              <a href="#" className="text-gray-400 hover:text-[#D72638] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D72638] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}