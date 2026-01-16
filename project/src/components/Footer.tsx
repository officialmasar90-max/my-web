import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Masar90
            </h3>
            <p className="text-gray-400 text-sm mb-3">Sejak 2022</p>
            <p className="text-gray-400 leading-relaxed">
              Solusi Jasa & Produk Kreatif dalam Satu Platform untuk memenuhi berbagai kebutuhan Anda dengan kualitas terbaik.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {[
                { label: 'Beranda', href: '/' },
                { label: 'Tentang Kami', href: '/tentang' },
                { label: 'Kontak', href: '/kontak' },
                { label: 'Layanan', href: '/#layanan' },
                { label: 'Produk', href: '/#produk' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Produk</h4>
            <ul className="space-y-2">
              {['Tempe Kripik', 'Sermier', 'Kopi Bubuk'].map((item) => (
                <li key={item}>
                  <a href="/#produk" className="text-gray-400 hover:text-pink-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/6283119230055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/masar90"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>info@masar90.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5" />
                <span>+62 831-1923-0055</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8 mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-400/20 text-center"
          >
            <MapPin className="w-5 h-5 mx-auto mb-2 text-purple-400" />
            <p className="text-gray-300 font-medium mb-1">Lokasi</p>
            <p className="text-gray-400 text-sm">Indonesia</p>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Masar90. Semua hak dilindungi.
            </p>

            <div className="flex gap-4">
              {[
                {
                  Icon: MessageCircle,
                  color: 'hover:text-green-400',
                  href: 'https://wa.me/6281234567890',
                },
                {
                  Icon: Instagram,
                  color: 'hover:text-pink-400',
                  href: 'https://instagram.com/masar90',
                },
                { Icon: Mail, color: 'hover:text-blue-400', href: 'mailto:info@masar90.com' },
              ].map(({ Icon, color, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${color} transition-colors`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
