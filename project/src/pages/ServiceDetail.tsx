import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Check, Users, Clock } from 'lucide-react';
import { servicesData } from '../types/services';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id as string];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Layanan tidak ditemukan</h1>
          <Link
            to="/"
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </Link>
        </div>
      </div>

      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="text-7xl mb-6"
            >
              {service.icon}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className={`text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
            >
              {service.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-700 mb-8"
            >
              {service.tagline}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              {service.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Deskripsi Detail
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {service.description}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Lingkup Layanan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.scope.map((item, index) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className={`flex gap-3 p-4 rounded-xl bg-gradient-to-br ${service.softAccent} border border-emerald-200/50`}
                  >
                    <Check className={`w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h2 className={`text-3xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Manfaat & Keunggulan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex gap-3 p-4 rounded-xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0 mt-2`} />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <h2 className={`text-3xl font-bold mb-8 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                Proses Kerja
              </h2>
              <div className="space-y-6">
                {service.process.map((proc, index) => (
                  <motion.div
                    key={proc.step}
                    whileHover={{ scale: 1.02 }}
                    className="flex gap-6 p-6 rounded-2xl bg-white border-2 border-emerald-200/50 hover:border-emerald-400 transition-all"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} text-white font-bold flex items-center justify-center text-lg`}
                    >
                      {proc.step}
                    </motion.div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {proc.title}
                      </h3>
                      <p className="text-gray-600">{proc.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Target Audience</h3>
                </div>
                <ul className="space-y-2">
                  {service.targetAudience.map((audience) => (
                    <li key={audience} className="flex gap-2 text-gray-700">
                      <span className="text-emerald-600 font-bold">•</span>
                      {audience}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200/50">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-cyan-600" />
                  <h3 className="text-xl font-bold text-gray-900">Harga & Durasi</h3>
                </div>
                <p className="text-gray-700 font-semibold text-lg mb-2">
                  {service.pricing}
                </p>
                <p className="text-gray-600 text-sm">
                  Hubungi kami untuk custom pricing dan paket khusus
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200/50 mb-12"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Catatan Penting
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.notes}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`https://wa.me/${service.whatsappNumber}?text=Halo! Saya tertarik dengan layanan ${service.name}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex-1 relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`} />
                <span className="relative flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Hubungi via WhatsApp
                </span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-8 py-4 rounded-xl font-semibold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-all"
              >
                Konsultasi Gratis
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
