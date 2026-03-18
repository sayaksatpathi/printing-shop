import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ScrollingMarquee } from './components/ScrollingMarquee';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  // Images from Unsplash
  const heroImages = {
    heroImage1: 'https://images.unsplash.com/photo-1758183961426-88d64eb5f787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmludGluZyUyMHByZXNzJTIwbWFjaGluZXJ5JTIwY29tbWVyY2lhbHxlbnwxfHx8fDE3NzM4NTM2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage2: 'https://images.unsplash.com/photo-1758887248912-03a0c34a2f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwc3RhY2slMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczODUzNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage3: 'https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZSUyMGRlc2lnbiUyMHByaW50ZWQlMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzczODUzNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const productImages = [
    'https://images.unsplash.com/photo-1758887248912-03a0c34a2f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwc3RhY2slMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczODUzNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZSUyMGRlc2lnbiUyMHByaW50ZWQlMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzczODUzNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1698319298199-b81a54ced28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5uZXIlMjBmbGV4JTIwYWR2ZXJ0aXNpbmclMjBwcmludGluZ3xlbnwxfHx8fDE3NzM4NTM2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1631010231888-777b6285ef84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBib3glMjBkZXNpZ24lMjBwcmludGVkfGVufDF8fHx8MTc3Mzg1MzYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1703756883351-baa57a645b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0ZXJoZWFkJTIwc3RhdGlvbmVyeSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3Mzg1MzYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1651419942041-e699a06d67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRhbG9nJTIwbWFnYXppbmUlMjBwcmludGluZyUyMHBhcGVyfGVufDF8fHx8MTc3Mzg1MzYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm9jaHVyZSUyMGRlc2lnbiUyMHByaW50ZWQlMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzczODUzNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758887248912-03a0c34a2f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNhcmRzJTIwc3RhY2slMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzczODUzNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1698319298199-b81a54ced28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5uZXIlMjBmbGV4JTIwYWR2ZXJ0aXNpbmclMjBwcmludGluZ3xlbnwxfHx8fDE3NzM4NTM2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1631010231888-777b6285ef84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBib3glMjBkZXNpZ24lMjBwcmludGVkfGVufDF8fHx8MTc3Mzg1MzYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1703756883351-baa57a645b05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXR0ZXJoZWFkJTIwc3RhdGlvbmVyeSUyMGJ1c2luZXNzfGVufDF8fHx8MTc3Mzg1MzYxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1651419942041-e699a06d67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRhbG9nJTIwbWFnYXppbmUlMjBwcmludGluZyUyMHBhcGVyfGVufDF8fHx8MTc3Mzg1MzYxMnww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const testimonialImages = [
    'https://images.unsplash.com/photo-1650110002977-3ee8cc5eac91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzc21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mzc2MjU2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1770627016447-cb9d29ed0398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMGNvcnBvcmF0ZXxlbnwxfHx8fDE3NzM4NTM2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero {...heroImages} />
      <ScrollingMarquee />
      <Services />
      <Products productImages={productImages} />
      <Gallery galleryImages={galleryImages} />
      <WhyChooseUs />
      <Process />
      <Testimonials testimonialImages={testimonialImages} />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}
