import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, ChevronRight, Package, Truck, CreditCard, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    shippingMethod: 'standard',
    paymentMethod: 'transfer',
  });

  const steps = [
    { id: 1, title: 'Detail Pemesan', icon: Package },
    { id: 2, title: 'Pengiriman', icon: Truck },
    { id: 3, title: 'Pembayaran', icon: CreditCard },
    { id: 4, title: 'Review', icon: Eye },
  ];

  const shippingCost = formData.shippingMethod === 'standard' ? 25000 : 50000;
  const finalTotal = total + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    clearCart();
    setCurrentStep(1);
    alert('Pesanan berhasil dibuat! Terima kasih telah berbelanja di Masar90.');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Keranjang Kosong</h1>
          <p className="text-gray-600 mb-8">Tidak ada item untuk di-checkout</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali Berbelanja
          </Link>
        </div>
      </div>
    );
  }

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
        <div className="max-w-6xl mx-auto">
          {/* Stepper */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex justify-between items-center mb-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = step.id < currentStep;
                const isActive = step.id === currentStep;

                return (
                  <div key={step.id} className="flex items-center flex-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative flex flex-col items-center cursor-pointer`}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all shadow-lg ${
                          isActive
                            ? 'bg-gradient-to-br from-purple-600 to-pink-500 text-white scale-110'
                            : isCompleted
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </motion.div>

                      <p className={`mt-2 text-sm font-semibold whitespace-nowrap ${isActive ? 'text-purple-600' : 'text-gray-600'}`}>
                        {step.title}
                      </p>
                    </motion.div>

                    {index < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-4 rounded-full ${
                          isCompleted ? 'bg-gradient-to-r from-purple-600 to-pink-500' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  {/* Step 1: Detail Pemesan */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Detail Pemesan</h2>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Nama Lengkap</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Masukkan nama lengkap"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="email@contoh.com"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Nomor Telepon</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+62 812..."
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Pengiriman */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Alamat Pengiriman</h2>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">Alamat</label>
                        <textarea
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Masukkan alamat lengkap"
                          rows={3}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Kota/Kabupaten</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Kota/Kabupaten"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Kode Pos</label>
                          <input
                            type="text"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            placeholder="12345"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">Metode Pengiriman</label>
                        <div className="space-y-3">
                          {[
                            { id: 'standard', label: 'Standar (3-5 hari)', cost: 25000 },
                            { id: 'express', label: 'Express (1-2 hari)', cost: 50000 },
                          ].map((method) => (
                            <motion.label
                              key={method.id}
                              whileHover={{ scale: 1.02 }}
                              className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                                formData.shippingMethod === method.id
                                  ? 'border-purple-600 bg-purple-50'
                                  : 'border-gray-200 hover:border-purple-300'
                              }`}
                            >
                              <input
                                type="radio"
                                name="shippingMethod"
                                value={method.id}
                                checked={formData.shippingMethod === method.id}
                                onChange={handleInputChange}
                                className="w-4 h-4"
                              />
                              <div className="flex-1">
                                <p className="font-semibold text-gray-900">{method.label}</p>
                                <p className="text-sm text-gray-600">Rp {method.cost.toLocaleString('id-ID')}</p>
                              </div>
                            </motion.label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Pembayaran */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Metode Pembayaran</h2>

                      <div className="space-y-3">
                        {[
                          { id: 'transfer', label: 'Transfer Bank' },
                          { id: 'ewallet', label: 'E-Wallet (OVO, DANA, LinkAja)' },
                          { id: 'cod', label: 'COD (Bayar di Tempat)' },
                        ].map((method) => (
                          <motion.label
                            key={method.id}
                            whileHover={{ scale: 1.02 }}
                            className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                              formData.paymentMethod === method.id
                                ? 'border-purple-600 bg-purple-50'
                                : 'border-gray-200 hover:border-purple-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="paymentMethod"
                              value={method.id}
                              checked={formData.paymentMethod === method.id}
                              onChange={handleInputChange}
                              className="w-4 h-4"
                            />
                            <p className="font-semibold text-gray-900">{method.label}</p>
                          </motion.label>
                        ))}
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                        <p className="text-sm text-blue-900">
                          <span className="font-semibold">Info:</span> Instruksi pembayaran akan dikirim ke email Anda setelah mengkonfirmasi pesanan.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Pesanan</h2>

                      <div className="space-y-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                          <p className="font-semibold text-gray-600">Informasi Pemesan:</p>
                          <p className="text-gray-900">{formData.fullName}</p>
                          <p className="text-gray-900">{formData.email}</p>
                          <p className="text-gray-900">{formData.phone}</p>
                        </motion.div>

                        <div className="border-t-2 border-gray-200 pt-4">
                          <p className="font-semibold text-gray-600 mb-2">Alamat Pengiriman:</p>
                          <p className="text-gray-900">{formData.address}</p>
                          <p className="text-gray-900">{formData.city}, {formData.postalCode}</p>
                        </div>

                        <div className="border-t-2 border-gray-200 pt-4">
                          <p className="font-semibold text-gray-600 mb-2">Metode Pengiriman:</p>
                          <p className="text-gray-900">{formData.shippingMethod === 'standard' ? 'Standar (3-5 hari)' : 'Express (1-2 hari)'}</p>
                        </div>

                        <div className="border-t-2 border-gray-200 pt-4">
                          <p className="font-semibold text-gray-600 mb-2">Metode Pembayaran:</p>
                          <p className="text-gray-900">
                            {formData.paymentMethod === 'transfer' ? 'Transfer Bank' : formData.paymentMethod === 'ewallet' ? 'E-Wallet' : 'COD'}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                        <p className="text-sm text-green-900">
                          <span className="font-semibold">Konfirmasi:</span> Harap pastikan semua data di atas sudah benar sebelum menyelesaikan pesanan.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handlePrev}
                      className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                        currentStep === 1
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                      }`}
                      disabled={currentStep === 1}
                    >
                      Sebelumnya
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={currentStep === 4 ? handleSubmit : handleNext}
                      className="flex-1 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {currentStep === 4 ? (
                        <>
                          <Check className="w-5 h-5" />
                          Selesaikan Pesanan
                        </>
                      ) : (
                        <>
                          Selanjutnya
                          <ChevronRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-32 bg-white rounded-2xl p-6 shadow-lg space-y-6"
              >
                <h3 className="text-xl font-bold text-gray-900">Ringkasan Pesanan</h3>

                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <motion.div
                      key={item.productId}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-between items-start text-sm"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">{item.productName}</p>
                        {item.variant && <p className="text-xs text-gray-600">{item.variant}</p>}
                        <p className="text-xs text-gray-600">x{item.quantity}</p>
                      </div>
                      <p className="font-semibold text-gray-900">
                        Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold text-gray-900">Rp {total.toLocaleString('id-ID')}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pengiriman:</span>
                    <span className="font-semibold text-gray-900">Rp {shippingCost.toLocaleString('id-ID')}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                    <span className="font-bold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Rp {finalTotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
