import { motion } from 'framer-motion';
import { ShoppingBag, Star, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'tempe_kripik',
    title: 'Tempe Kripik',
    description: 'Camilan renyah dari tempe pilihan dengan berbagai varian rasa',
    price: 15000,
    originalPrice: 18000,
    image: 'https://images.pexels.com/photos/4518610/pexels-photo-4518610.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-purple-500 to-fuchsia-500',
    rating: 4.8,
    discount: 20,
    isLaunching: true,
  },
  {
    id: 'sermier',
    title: 'Sermier',
    description: 'Produk premium dengan kualitas terbaik untuk kebutuhan Anda',
    price: 25000,
    originalPrice: 30000,
    image: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-cyan-500 to-blue-500',
    rating: 4.9,
    discount: 15,
    isLaunching: true,
  },
  {
    id: 'kopi_bubuk',
    title: 'Kopi Bubuk',
    description: 'Kopi pilihan berkualitas tinggi dengan aroma yang menggugah',
    price: 35000,
    originalPrice: 45000,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-pink-500 to-rose-500',
    rating: 5.0,
    discount: 25,
    isLaunching: true,
  },
];

export default function ProductsSection() {
  return (
    <section id="produk" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Jual Produk
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Produk berkualitas pilihan terbaik dengan harga terjangkau
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link key={product.id} to={`/produk/${product.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative overflow-hidden rounded-t-3xl h-56">
                  {product.isLaunching && (
                    <motion.div
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: -45, opacity: 1 }}
                      className="absolute top-6 -right-12 z-20"
                    >
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-1 text-xs font-bold shadow-lg">
                        LAUNCHING
                      </div>
                    </motion.div>
                  )}

                  {product.discount && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="absolute top-4 left-4 z-20"
                    >
                      <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        {product.discount}% OFF
                      </div>
                    </motion.div>
                  )}

                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg"
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">
                      {product.rating}
                    </span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Harga</p>
                      <div className="flex items-baseline gap-2">
                        <p className={`text-2xl font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                          Rp {product.price.toLocaleString('id-ID')}
                        </p>
                        {product.originalPrice && (
                          <p className="text-sm text-gray-400 line-through">
                            Rp {product.originalPrice.toLocaleString('id-ID')}
                          </p>
                        )}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className={`px-6 py-3 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Lihat
                    </motion.button>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
