import { motion } from 'framer-motion';
import { Palette, Languages, Heart, Database, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'design',
    icon: Palette,
    title: 'Design',
    description: 'Desain grafis profesional untuk branding dan kebutuhan visual Anda',
    gradient: 'from-emerald-400 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200',
  },
  {
    id: 'bahasa_arab',
    icon: Languages,
    title: 'Privat Bahasa Arab',
    description: 'Belajar bahasa Arab dengan mudah bersama tutor berpengalaman',
    gradient: 'from-teal-400 to-cyan-500',
    bgGradient: 'from-teal-50 to-cyan-50',
    borderColor: 'border-teal-200',
  },
  {
    id: 'konseling',
    icon: Heart,
    title: 'Konseling',
    description: 'Layanan konseling profesional untuk kesehatan mental Anda',
    gradient: 'from-amber-400 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
  },
  {
    id: 'olah_data',
    icon: Database,
    title: 'Olah Data',
    description: 'Pengolahan dan analisis data untuk riset dan bisnis Anda',
    gradient: 'from-cyan-400 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    borderColor: 'border-cyan-200',
  },
  {
    id: 'penulis_kreatif',
    icon: PenTool,
    title: 'Penulis Kreatif',
    description: 'Konten kreatif dan copywriting untuk berbagai kebutuhan',
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200',
  },
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Layanan Jasa
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solusi profesional untuk berbagai kebutuhan kreatif Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={service.id} to={`/layanan/${service.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative p-6 rounded-2xl bg-gradient-to-br ${service.bgGradient} border ${service.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-full`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    <motion.div
                      className="mt-4 inline-flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Selengkapnya
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
