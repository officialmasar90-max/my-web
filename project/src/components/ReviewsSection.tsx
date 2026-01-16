import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, CheckCircle2, Filter } from 'lucide-react';
import { useState } from 'react';
import ReviewModal from './ReviewModal';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  isVerified?: boolean;
  helpful?: number;
}

interface ReviewsSectionProps {
  productId: string;
  productName: string;
  averageRating: number;
  totalReviews: number;
  theme?: 'product' | 'service';
}

const mockReviews: Review[] = [
  {
    id: '1',
    userName: 'Ahmad Rifai',
    rating: 5,
    comment: 'Kualitas produknya luar biasa! Sangat memuaskan dan sesuai ekspektasi. Pengiriman juga cepat. Recommended banget!',
    date: '2026-01-15',
    isVerified: true,
    helpful: 24,
  },
  {
    id: '2',
    userName: 'Siti Nurhaliza',
    rating: 5,
    comment: 'Pelayanan sangat profesional dan ramah. Hasilnya melebihi harapan saya. Pasti akan order lagi!',
    date: '2026-01-14',
    isVerified: true,
    helpful: 18,
  },
  {
    id: '3',
    userName: 'Budi Santoso',
    rating: 4,
    comment: 'Bagus dan berkualitas. Hanya sedikit lebih lama dari estimasi pengiriman, tapi overall sangat puas!',
    date: '2026-01-12',
    isVerified: true,
    helpful: 12,
  },
  {
    id: '4',
    userName: 'Dewi Lestari',
    rating: 5,
    comment: 'Packaging rapi, produk sesuai deskripsi. Harga worth it dengan kualitas yang didapat. Terima kasih Masar90!',
    date: '2026-01-10',
    isVerified: false,
    helpful: 9,
  },
  {
    id: '5',
    userName: 'Rudi Hermawan',
    rating: 4,
    comment: 'Cukup bagus untuk harga segini. Akan lebih baik kalau ada pilihan warna lebih banyak.',
    date: '2026-01-08',
    isVerified: true,
    helpful: 7,
  },
];

export default function ReviewsSection({
  productId,
  productName,
  averageRating,
  totalReviews,
  theme = 'product',
}: ReviewsSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [sortBy, setSortBy] = useState<'recent' | 'highest'>('recent');
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());

  const themeColors = {
    product: {
      gradient: 'from-purple-600 via-fuchsia-500 to-pink-500',
      buttonGradient: 'from-purple-600 to-pink-500',
      starColor: 'text-purple-500',
      accentBg: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      glowColor: 'purple',
    },
    service: {
      gradient: 'from-emerald-600 via-teal-500 to-cyan-500',
      buttonGradient: 'from-emerald-600 to-teal-500',
      starColor: 'text-emerald-500',
      accentBg: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200',
      glowColor: 'emerald',
    },
  };

  const colors = themeColors[theme];

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === 'highest') {
      return b.rating - a.rating || new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const handleAddReview = (newReview: Omit<Review, 'id' | 'helpful'>) => {
    const review: Review = {
      ...newReview,
      id: Date.now().toString(),
      helpful: 0,
    };
    setReviews([review, ...reviews]);
  };

  const toggleExpanded = (reviewId: string) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId);
    } else {
      newExpanded.add(reviewId);
    }
    setExpandedReviews(newExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Hari ini';
    if (diffDays === 1) return 'Kemarin';
    if (diffDays < 7) return `${diffDays} hari lalu`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} minggu lalu`;

    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const renderStars = (rating: number, interactive: boolean = false, size: string = 'w-5 h-5') => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            whileHover={interactive ? { scale: 1.2 } : {}}
            whileTap={interactive ? { scale: 0.9 } : {}}
          >
            <Star
              className={`${size} ${
                star <= rating
                  ? `fill-yellow-400 text-yellow-400`
                  : 'text-gray-300'
              }`}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  const highlightedReview = sortedReviews.find(r => r.rating === 5 && r.helpful && r.helpful > 15);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-3xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
              Ulasan & Rating
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className={`px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${colors.buttonGradient} shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
            >
              <Star className="w-5 h-5" />
              Tulis Ulasan
            </motion.button>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-2xl bg-gradient-to-br ${colors.accentBg} border-2 ${colors.borderColor} backdrop-blur-sm`}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className={`text-5xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                    {averageRating.toFixed(1)}
                  </p>
                  <div className="flex mt-2">
                    {renderStars(Math.round(averageRating))}
                  </div>
                </div>
                <div className="h-16 w-px bg-gray-300" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{totalReviews}</p>
                  <p className="text-sm text-gray-600">Total Ulasan</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-600" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'recent' | 'highest')}
                  className="px-4 py-2 rounded-lg border-2 border-gray-200 bg-white text-gray-900 font-medium focus:border-purple-400 focus:outline-none cursor-pointer"
                >
                  <option value="recent">Terbaru</option>
                  <option value="highest">Rating Tertinggi</option>
                </select>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {highlightedReview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUp className={`w-5 h-5 ${colors.starColor}`} />
              <p className={`font-bold ${colors.starColor}`}>Ulasan Terbaik</p>
            </div>
            <motion.div
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${colors.accentBg} border-2 ${colors.borderColor} backdrop-blur-sm shadow-lg relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.gradient} opacity-10 blur-3xl`} />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white font-bold text-lg`}>
                      {highlightedReview.userName.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-gray-900">{highlightedReview.userName}</p>
                        {highlightedReview.isVerified && (
                          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                            <CheckCircle2 className="w-3 h-3" />
                            <span className="text-xs font-semibold">Terverifikasi</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{formatDate(highlightedReview.date)}</p>
                    </div>
                  </div>
                  {renderStars(highlightedReview.rating)}
                </div>

                <p className="text-gray-700 leading-relaxed mb-3">{highlightedReview.comment}</p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{highlightedReview.helpful} orang merasa ulasan ini membantu</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {sortedReviews.map((review, index) => {
              if (highlightedReview && review.id === highlightedReview.id) return null;

              const isExpanded = expandedReviews.has(review.id);
              const isLongComment = review.comment.length > 150;
              const displayComment = isExpanded || !isLongComment
                ? review.comment
                : review.comment.substring(0, 150) + '...';

              return (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white font-bold`}>
                        {review.userName.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-semibold text-gray-900">{review.userName}</p>
                          {review.isVerified && (
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                              <CheckCircle2 className="w-3 h-3" />
                              <span className="text-xs font-semibold">Terverifikasi</span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-3">{displayComment}</p>

                  {isLongComment && (
                    <motion.button
                      whileHover={{ x: 4 }}
                      onClick={() => toggleExpanded(review.id)}
                      className={`text-sm font-semibold ${colors.starColor} hover:underline mb-3`}
                    >
                      {isExpanded ? 'Tampilkan lebih sedikit' : 'Baca selengkapnya'}
                    </motion.button>
                  )}

                  {review.helpful && review.helpful > 0 && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 pt-3 border-t border-gray-200">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.helpful} orang merasa ulasan ini membantu</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {sortedReviews.length > 5 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-300 hover:border-gray-400 transition-all"
            >
              Muat Lebih Banyak Ulasan
            </motion.button>
          </motion.div>
        )}
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddReview}
        productName={productName}
        theme={theme}
      />
    </section>
  );
}
