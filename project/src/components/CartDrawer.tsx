import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  const FREE_SHIPPING_THRESHOLD = 200000;
  const shippingProgress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const freeShippingMessage = total >= FREE_SHIPPING_THRESHOLD
    ? 'Gratis ongkir!'
    : `Rp ${(FREE_SHIPPING_THRESHOLD - total).toLocaleString('id-ID')} lagi untuk gratis ongkir`;

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Keranjang</h2>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-6">
                  <div className="text-5xl mb-4">🛒</div>
                  <p className="text-gray-600 font-medium mb-2">Keranjang Kosong</p>
                  <p className="text-gray-500 text-sm">
                    Tambahkan produk untuk memulai belanja
                  </p>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.productId}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200/50"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {item.productName}
                        </h3>
                        {item.variant && (
                          <p className="text-xs text-gray-600 mb-2">
                            {item.variant}
                          </p>
                        )}
                        <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.productId)}
                          className="p-1.5 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>

                        <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                            className="p-1 hover:bg-gray-100"
                          >
                            <Minus className="w-3 h-3 text-gray-600" />
                          </motion.button>
                          <span className="px-2 py-1 text-sm font-semibold text-gray-900">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                            className="p-1 hover:bg-gray-100"
                          >
                            <Plus className="w-3 h-3 text-gray-600" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-900 text-sm">Pengiriman Gratis</span>
                    </div>
                    <span className={`text-xs font-bold ${total >= FREE_SHIPPING_THRESHOLD ? 'text-green-600' : 'text-gray-600'}`}>
                      {Math.round(shippingProgress)}%
                    </span>
                  </div>

                  <div className="w-full bg-green-200 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${shippingProgress}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-full"
                    />
                  </div>

                  <p className={`text-xs font-medium ${total >= FREE_SHIPPING_THRESHOLD ? 'text-green-600' : 'text-gray-600'}`}>
                    {freeShippingMessage}
                  </p>
                </motion.div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Subtotal:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Rp {total.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Lanjut ke Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
