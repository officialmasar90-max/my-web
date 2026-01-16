import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Send } from 'lucide-react';
import { useState } from 'react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (review: { userName: string; rating: number; comment: string; date: string; isVerified: boolean }) => void;
  productName: string;
  theme?: 'product' | 'service';
}

export default function ReviewModal({ isOpen, onClose, onSubmit, productName, theme = 'product' }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const themeColors = {
    product: {
      gradient: 'from-purple-600 via-fuchsia-500 to-pink-500',
      buttonGradient: 'from-purple-600 to-pink-500',
      starColor: 'text-purple-500',
      focusColor: 'focus:border-purple-400',
    },
    service: {
      gradient: 'from-emerald-600 via-teal-500 to-cyan-500',
      buttonGradient: 'from-emerald-600 to-teal-500',
      starColor: 'text-emerald-500',
      focusColor: 'focus:border-emerald-400',
    },
  };

  const colors = themeColors[theme];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !comment.trim() || rating === 0) return;

    setIsSubmitting(true);

    setTimeout(() => {
      onSubmit({
        userName: userName.trim(),
        rating,
        comment: comment.trim(),
        date: new Date().toISOString().split('T')[0],
        isVerified: false,
      });

      setRating(0);
      setUserName('');
      setComment('');
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setTimeout(() => {
        setRating(0);
        setUserName('');
        setComment('');
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-50 md:inset-0 md:flex md:items-center md:justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-t-3xl md:rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                      Tulis Ulasan
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{productName}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
                  >
                    <X className="w-6 h-6 text-gray-600" />
                  </motion.button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Berikan Rating Anda
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.button
                        key={star}
                        type="button"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-12 h-12 transition-all ${
                            star <= (hoverRating || rating)
                              ? 'fill-yellow-400 text-yellow-400 drop-shadow-lg'
                              : 'text-gray-300'
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-gray-600 mt-2"
                    >
                      {rating === 1 && 'Sangat tidak puas'}
                      {rating === 2 && 'Tidak puas'}
                      {rating === 3 && 'Cukup puas'}
                      {rating === 4 && 'Puas'}
                      {rating === 5 && 'Sangat puas'}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="userName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    maxLength={50}
                    required
                    className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-colors ${colors.focusColor}`}
                  />
                  <p className="text-xs text-gray-500 mt-1">{userName.length}/50 karakter</p>
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-semibold text-gray-900 mb-2">
                    Ulasan Anda
                  </label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Ceritakan pengalaman Anda dengan produk/layanan ini..."
                    rows={5}
                    maxLength={500}
                    required
                    className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-colors resize-none ${colors.focusColor}`}
                  />
                  <p className="text-xs text-gray-500 mt-1">{comment.length}/500 karakter</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleClose}
                    disabled={isSubmitting}
                    className="flex-1 py-3 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors disabled:opacity-50"
                  >
                    Batal
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={!userName.trim() || !comment.trim() || rating === 0 || isSubmitting}
                    className={`flex-1 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${colors.buttonGradient} shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Kirim Ulasan
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-xs text-gray-500 text-center pt-2">
                  Dengan mengirim ulasan, Anda menyetujui bahwa ulasan dapat ditampilkan secara publik
                </p>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
