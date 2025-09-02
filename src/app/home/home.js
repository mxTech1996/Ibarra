'use client';

import Navbar from '../../components/organisms/Navbar';
import HeroSection from '@/components/organisms/Hero';
import AboutSection from '@/components/organisms/About';
import PracticeAreas from '@/components/organisms/Practice';
import WhyChooseUs from '@/components/organisms/WhyChoose';
import Products from '@/components/organisms/Products';
import Testimonials from '@/components/organisms/Testimonial';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PracticeAreas />
      <WhyChooseUs />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}
