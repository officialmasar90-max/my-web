import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Zap, Flame } from 'lucide-react';
import { useState } from 'react';
import { productsData } from '../types/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData[id as string];
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Link
            to="/"
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity,
      variant: selectedVariant,
    });

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const discountedPrice = product.price;
  const savingsAmount = (product.originalPrice || product.price) - product.price;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-cyan-50">
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <motion.div
                layoutId="main-image"
                className="relative rounded-3xl overflow-hidden bg-white shadow-xl"
              >
                {product.isLaunching && (
                  <motion.div
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: -45, opacity: 1 }}
                    className="absolute top-6 -right-12 z-20"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-1.5 text-sm font-bold shadow-lg">
                      LAUNCHING
                    </div>
                  </motion.div>
                )}

                {product.discountPercent && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute top-6 left-6 z-20"
                  >
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg flex items-center gap-2">
                      <Flame className="w-5 h-5" />
                      {product.discountPercent}% OFF
                    </div>
                  </motion.div>
                )}

                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={product.gallery[selectedImage]}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
              </motion.div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {product.gallery.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-purple-600 shadow-lg'
                        : 'border-gray-200 hover:border-purple-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Product Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">
                  {product.rating} ({Math.floor(Math.random() * 200) + 50} ulasan)
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600">{product.description}</p>
              </div>

              {/* Price */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Rp {discountedPrice.toLocaleString('id-ID')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      Rp {product.originalPrice.toLocaleString('id-ID')}
                    </span>
                  )}
                </div>
                {savingsAmount > 0 && (
                  <p className="text-sm font-semibold text-green-600 flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Hemat Rp {savingsAmount.toLocaleString('id-ID')}
                  </p>
                )}
              </motion.div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Tentang Produk
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Variants */}
              {product.variants.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {product.variants[0].name}
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.variants.map((variant) => (
                      <motion.button
                        key={variant.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedVariant(variant.value)}
                        className={`p-3 rounded-xl font-semibold transition-all border-2 ${
                          selectedVariant === variant.value
                            ? 'border-purple-600 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700'
                            : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'
                        }`}
                      >
                        {variant.value}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Product Details */}
              <div className="grid grid-cols-2 gap-4">
                {product.packaging && (
                  <div className="p-4 rounded-xl bg-white border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-1">
                      Packaging
                    </p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {product.packaging}
                    </p>
                  </div>
                )}
                {product.weight && (
                  <div className="p-4 rounded-xl bg-white border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-1">
                      Berat
                    </p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {product.weight}
                    </p>
                  </div>
                )}
                {product.shelf_life && (
                  <div className="p-4 rounded-xl bg-white border border-gray-200">
                    <p className="text-sm text-gray-600 font-medium mb-1">
                      Umur Simpan
                    </p>
                    <p className="font-semibold text-gray-900 text-sm">
                      {product.shelf_life}
                    </p>
                  </div>
                )}
              </div>

              {/* Ingredients */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Komposisi & Bahan
                  </h3>
                  <div className="space-y-2">
                    {product.ingredients.map((ingredient) => (
                      <motion.div
                        key={ingredient}
                        whileHover={{ x: 4 }}
                        className="flex gap-2 items-center p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                        <span className="text-gray-700">{ingredient}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-xl p-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    −
                  </motion.button>
                  <span className="px-4 font-bold text-lg text-gray-900 min-w-12 text-center">
                    {quantity}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    +
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {addedToCart ? 'Ditambahkan!' : 'Tambah ke Keranjang'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
