import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';

interface HomeProps {
  onOpenCart: () => void;
}

export default function Home({ onOpenCart }: HomeProps) {
  return (
    <div className="min-h-screen">
      <Navbar onOpenCart={onOpenCart} />
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <Footer />
    </div>
  );
}
