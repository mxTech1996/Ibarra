'use client';

import Navbar from '../../components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div>
      <Navbar textBlack={true} withAll={false} withCart={true} />
      <Products isHome={false} />
      <Footer />
    </div>
  );
}
