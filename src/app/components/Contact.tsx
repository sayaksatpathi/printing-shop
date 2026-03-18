import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D72638] font-bold text-sm tracking-widest mb-2 block" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            GET IN TOUCH
          </span>
          <h2 className="text-5xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            REQUEST A QUOTE
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
            Have a project in mind? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#E0DDD8] rounded focus:border-[#D72638] focus:outline-none transition-colors"
                  style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#E0DDD8] rounded focus:border-[#D72638] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-[#E0DDD8] rounded focus:border-[#D72638] focus:outline-none transition-colors"
                    style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#E0DDD8] rounded focus:border-[#D72638] focus:outline-none transition-colors"
                  style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                >
                  <option value="">Select a service</option>
                  <option value="offset">Offset Printing</option>
                  <option value="digital">Digital Printing</option>
                  <option value="cards">Visiting Cards</option>
                  <option value="banners">Flex & Banners</option>
                  <option value="brochures">Brochures</option>
                  <option value="packaging">Packaging</option>
                  <option value="stationery">Stationery</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-[#E0DDD8] rounded focus:border-[#D72638] focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: 'Source Sans Pro, sans-serif' }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#D72638] text-white font-bold rounded hover:bg-[#b81e2d] transition-all hover:shadow-xl flex items-center justify-center gap-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                SEND MESSAGE
                <Send size={20} />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-[#F8F8F6] rounded-lg p-6 border-l-4 border-[#D72638]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#D72638] rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Visit Our Store
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    HZ Print House, Nehru Place<br />
                    New Delhi - 110019
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F8F6] rounded-lg p-6 border-l-4 border-[#F5A623]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F5A623] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Call Us
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    +91 XXXXX XXXXX<br />
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F8F6] rounded-lg p-6 border-l-4 border-[#0097A7]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#0097A7] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Email Us
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    info@hzprinthouse.com<br />
                    orders@hzprinthouse.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F8F6] rounded-lg p-6 border-l-4 border-[#111111]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#111111] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Working Hours
                  </h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Source Sans Pro, sans-serif' }}>
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-8 py-4 bg-[#25D366] text-white font-bold rounded hover:bg-[#1ebe57] transition-all hover:shadow-xl text-center"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              💬 CHAT ON WHATSAPP
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}