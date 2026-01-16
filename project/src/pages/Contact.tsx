import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat dengan kami untuk pertanyaan cepat',
      value: '+62 831-1923-0055',
      href: 'https://wa.me/6283119230055',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:text-green-600',
      borderColor: 'border-green-200',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow dan DM kami untuk update terbaru',
      value: '@masar90',
      href: 'https://instagram.com/masar90',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:text-pink-600',
      borderColor: 'border-pink-200',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Kirim email untuk pertanyaan formal',
      value: 'info@masar90.com',
      href: 'mailto:info@masar90.com',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      icon: Phone,
      title: 'Telepon',
      description: 'Hubungi kami langsung untuk bantuan',
      value: '+62 831-1923-0055',
      href: 'tel:+6283119230055',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:text-purple-600',
      borderColor: 'border-purple-200',
    },
  ];

  const faqs = [
    {
      question: 'Berapa jam kerja Masar90?',
      answer: 'Kami melayani Senin-Jumat pukul 09:00-17:00 WIB dan Sabtu pukul 10:00-14:00 WIB. Untuk pertanyaan di luar jam kerja, silakan tinggalkan pesan dan kami akan merespons sesegera mungkin.',
    },
    {
      question: 'Berapa waktu respons customer service?',
      answer: 'Kami berusaha merespons setiap pertanyaan dalam waktu maksimal 2 jam pada jam kerja. WhatsApp biasanya mendapat respons lebih cepat dibandingkan saluran lain.',
    },
    {
      question: 'Apakah ada biaya tambahan untuk konsultasi?',
      answer: 'Konsultasi awal bersifat gratis. Kami siap membantu Anda memahami layanan dan produk kami tanpa biaya apapun.',
    },
    {
      question: 'Bagaimana jika saya memiliki feedback atau komplain?',
      answer: 'Kami sangat menghargai feedback Anda. Silakan hubungi kami melalui channel apapun yang Anda pilih dan kami akan menangani dengan cepat dan profesional.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50">
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
        <div className="max-w-5xl mx-auto">
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
              <MessageCircle className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              Hubungi <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Masar90</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kami siap membantu Anda. Pilih channel komunikasi yang paling nyaman untuk Anda.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className={`p-8 rounded-2xl bg-white border-2 ${method.borderColor} shadow-lg hover:shadow-xl transition-all group`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>

                  <div className={`flex items-center gap-2 text-lg font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                    <span>{method.value}</span>
                    <motion.div whileHover={{ x: 4 }}>
                      →
                    </motion.div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Location Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-purple-100 via-pink-100 to-cyan-100 border-2 border-purple-300 mb-20 shadow-lg"
          >
            <div className="flex gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"
              >
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Lokasi Kami</h3>
                <p className="text-gray-600">Kunjungi kantor atau workshop kami</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xl text-gray-800 font-semibold">
                Masar90
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Indonesia
              </p>
              <p className="text-gray-600 italic">
                Lokasi detail dapat dikirimkan melalui WhatsApp atau email sesuai kebutuhan Anda.
              </p>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Pertanyaan yang Sering <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Diajukan</span>
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-300 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-bold text-lg text-gray-900 list-none">
                    {faq.question}
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                      className="group-open:rotate-180 transition-transform"
                    >
                      <span className="text-purple-600 text-2xl">▼</span>
                    </motion.div>
                  </summary>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                </motion.details>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-3xl bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 text-white text-center shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Siap untuk Memulai?</h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim Masar90 siap membantu Anda dengan senang hati.
            </p>
            <motion.a
              href="https://wa.me/6283119230055"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-xl font-semibold bg-white text-purple-600 hover:bg-gray-100 transition-colors"
            >
              Chat di WhatsApp Sekarang
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
