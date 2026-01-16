import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOpenCart: () => void;
}

export default function Navbar({ onOpenCart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCart();

  const navItems = [
    { label: 'Beranda', href: '/', isLink: true },
    { label: 'Layanan Jasa', href: '#layanan', isLink: false },
    { label: 'Jual Produk', href: '#produk', isLink: false },
    { label: 'Tentang', href: '/tentang', isLink: true },
    { label: 'Kontak', href: '/kontak', isLink: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent"
          >
            Masar90
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isLink ? (
                <Link key={item.label} to={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium cursor-pointer"
                  >
                    {item.label}
                  </motion.div>
                </Link>
              ) : (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                >
                  {item.label}
                </motion.a>
              )
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onOpenCart}
              className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </motion.button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onOpenCart}
              className="relative p-2 text-gray-700"
            >
              <ShoppingCart className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {items.length}
                </span>
              )}
            </motion.button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) =>
                item.isLink ? (
                  <Link key={item.label} to={item.href} onClick={() => setIsOpen(false)}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium cursor-pointer"
                    >
                      {item.label}
                    </motion.div>
                  </Link>
                ) : (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
