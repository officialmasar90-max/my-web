import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home onOpenCart={() => setIsCartOpen(true)} />}
          />
          <Route path="/tentang" element={<About />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/layanan/:id" element={<ServiceDetail />} />
          <Route path="/produk/:id" element={<ProductDetail />} />
        </Routes>
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
