import { motion } from 'framer-motion';
import { Sparkles, Package } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-purple-50 -z-10" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-40 right-20 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-purple-600 bg-clip-text text-transparent">
              Masar90
            </span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Solusi Jasa & Produk Kreatif dalam Satu Platform
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#layanan"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-amber-400/20 to-cyan-400/20 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                Lihat Layanan
              </span>
            </motion.a>

            <motion.a
              href="#produk"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 group-hover:from-purple-700 group-hover:to-pink-600 transition-all duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <Package className="w-5 h-5" />
                Lihat Produk
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/50 shadow-lg backdrop-blur-sm"
          >
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-2xl font-bold text-emerald-700 mb-2">
              Layanan Jasa
            </h3>
            <p className="text-gray-600">
              Solusi kreatif dan profesional untuk berbagai kebutuhan Anda
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/50 shadow-lg backdrop-blur-sm"
          >
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">
              Jual Produk
            </h3>
            <p className="text-gray-600">
              Produk berkualitas pilihan terbaik untuk Anda
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
