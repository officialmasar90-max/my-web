import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap } from 'lucide-react';

export default function About() {
  const sections = [
    {
      title: 'Visi Kami',
      placeholder:
        'Menjadi perusahaan lokal berbasis digital yang unggul dalam layanan jasa dan produk berkualitas dengan menjunjung tinggi profesionalisme, etika, dan kebermanfaatan.',
    },
    {
      title: 'Misi Kami',
      placeholder:
    'a. Menyediakan layanan jasa yang profesional, etis, dan berorientasi solusi, mencakup layanan kreatif, edukasi, konseling, serta pengolahan data. b. Mengembangkan dan memasarkan produk lokal yang berkualitas, higienis, dan memiliki nilai autentik. c. Membangun ekosistem digital yang modern, mudah diakses, dan user-friendly melalui pendekatan mobile-first. d. Menjunjung tinggi kepercayaan, transparansi, dan kejelasan dalam setiap layanan maupun transaksi. e. Mendorong pemberdayaan potensi lokal dan pertumbuhan ekonomi kreatif secara berkelanjutan. f. Mengintegrasikan nilai sosial, budaya, dan etika dalam setiap praktik bisnis yang dijalankan. g. Melakukan peningkatan kualitas secara berkelanjutan pada layanan, produk, dan pemanfaatan teknologi.',
    },
    {
      title: 'Nilai-Nilai Kami',
      placeholder:
        'Kualitas, Integritas, Profesionalisme, Inovasi, Kepercayaan, Keberlanjutan.',
    },
    {
      title: 'Perjalanan Kami',
      placeholder:
'Masar90 berdiri pada tahun 2022 berangkat dari niat sederhana untuk menghadirkan layanan yang benar-benar dibutuhkan masyarakat. Dimulai dari skala kecil dengan mengandalkan keterampilan, kepercayaan, dan komitmen terhadap kualitas, Masar90 tumbuh melalui layanan jasa berbasis keahlian dengan pendekatan personal dan komunikasi yang terbuka. Konsistensi dalam kualitas menjadi fondasi utama dalam membangun kepercayaan di tengah berbagai keterbatasan dan tantangan awal. Kemudian seiring perkembangan, Masar90 memperluas perannya dengan menghadirkan produk lokal berkualitas serta memanfaatkan platform digital untuk membangun sistem yang lebih modern dan terstruktur. Hingga kini, Masar90 berkembang sebagai perusahaan lokal berbasis digital yang mengintegrasikan layanan jasa profesional dan produk lokal dalam satu ekosistem, dengan komitmen berkelanjutan untuk memberikan solusi, membangun hubungan, dan menciptakan dampak positif bagi masyarakat.',
    },
    {
      title: 'Tim Kami',
      placeholder:
        'Profesionalitas yang berdedikasi, berpengalaman, dan berorientasi pada kualitas. Kami bekerja secara kolaboratif untuk menghadirkan layanan dan produk yang dapat dipercaya serta bernilai nyata.',
    },
  ];

  const highlights = [
    { number: '2022', label: 'Sejak Tahun', icon: '🚀' },
    { number: '500+', label: 'Pelanggan Puas', icon: '👥' },
    { number: '100%', label: 'Komitmen Kualitas', icon: '✨' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Link>
        </div>
      </div>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6 shadow-lg"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              Tentang <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Masar90</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kami adalah brand yang berdedikasi untuk menghadirkan produk berkualitas tinggi dan layanan terbaik kepada Anda.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border-2 border-purple-200/50 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="text-4xl mb-3">{highlight.icon}</div>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {highlight.number}
                </p>
                <p className="text-gray-600 font-medium">{highlight.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (index % 2) * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-8 rounded-2xl bg-white border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-all">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center text-lg font-bold">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    {section.placeholder}
                  </p>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-600"></span>
                      Masar90 merupakan solusi komperhensif anda dalam satu platform
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-10 rounded-3xl bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Ingin Bergabung dengan Kami?</h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Hubungi kami melalui saluran komunikasi yang tersedia di bawah untuk pertanyaan, kolaborasi, atau sekadar ingin tahu lebih lanjut tentang Masar90.
            </p>
            <motion.a
              href="#kontak"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-xl font-semibold bg-white text-purple-600 hover:bg-gray-100 transition-colors"
            >
              Hubungi Kami Sekarang
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
