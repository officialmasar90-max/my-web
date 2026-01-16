export interface ProductVariant {
  name: string;
  value: string;
}

export interface ProductDetail {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  description: string;
  fullDescription: string;
  mainImage: string;
  gallery: string[];
  gradient: string;
  isLaunching?: boolean;
  discountPercent?: number;
  variants: ProductVariant[];
  ingredients?: string[];
  packaging?: string;
  weight?: string;
  shelf_life?: string;
}

export const productsData: Record<string, ProductDetail> = {
  tempe_kripik: {
    id: 'tempe_kripik',
    name: 'Tempe Kripik',
    price: 15000,
    originalPrice: 18000,
    rating: 4.8,
    description: 'Camilan renyah dari tempe pilihan dengan berbagai varian rasa',
    fullDescription:
      'Tempe Kripik kami adalah camilan yang dibuat dari tempe premium yang dipilih dengan teliti, kemudian digoreng hingga renyah sempurna. Setiap gigitan memberikan tekstur yang krispy dan rasa yang lezat. Produk kami tidak menggunakan pengawet buatan dan ramah lingkungan. Tersedia dalam berbagai pilihan rasa yang menggugah selera.',
    mainImage: 'https://images.pexels.com/photos/4518610/pexels-photo-4518610.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/4518610/pexels-photo-4518610.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5632656/pexels-photo-5632656.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    gradient: 'from-purple-500 to-fuchsia-500',
    isLaunching: true,
    discountPercent: 20,
    variants: [
      { name: 'Rasa', value: 'Original' },
      { name: 'Rasa', value: 'Pedas' },
      { name: 'Rasa', value: 'Garlic' },
      { name: 'Rasa', value: 'BBQ' },
    ],
    ingredients: [
      'Tempe premium',
      'Minyak sayur',
      'Garam',
      'Bumbu pilihan',
      'Tanpa pengawet buatan',
    ],
    packaging: 'Kemasan plastik premium dengan seal rapat',
    weight: '250g',
    shelf_life: '30 hari dari tanggal produksi',
  },
  sermier: {
    id: 'sermier',
    name: 'Sermier',
    price: 25000,
    originalPrice: 30000,
    rating: 4.9,
    description: 'Produk premium dengan kualitas terbaik untuk kebutuhan Anda',
    fullDescription:
      'Sermier adalah produk premium hasil penelitian dan pengembangan yang matang. Dibuat dengan bahan-bahan pilihan berkualitas tinggi, produk ini dirancang untuk memberikan manfaat maksimal. Setiap detail produksi diperhatikan dengan cermat untuk memastikan kualitas terbaik sampai ke tangan Anda.',
    mainImage: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5632679/pexels-photo-5632679.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    gradient: 'from-cyan-500 to-blue-500',
    isLaunching: true,
    discountPercent: 15,
    variants: [
      { name: 'Ukuran', value: 'Small (250ml)' },
      { name: 'Ukuran', value: 'Medium (500ml)' },
      { name: 'Ukuran', value: 'Large (1L)' },
    ],
    ingredients: [
      'Bahan alami pilihan',
      'Tanpa bahan kimia berbahaya',
      'Organik bersertifikat',
      'Proses tradisional',
    ],
    packaging: 'Botol kaca tebal dengan tutup premium',
    weight: '500ml (standard)',
    shelf_life: '12 bulan',
  },
  kopi_bubuk: {
    id: 'kopi_bubuk',
    name: 'Kopi Bubuk',
    price: 35000,
    originalPrice: 45000,
    rating: 5.0,
    description: 'Kopi pilihan berkualitas tinggi dengan aroma yang menggugah',
    fullDescription:
      'Kopi Bubuk premium kami dipilih dari biji kopi terbaik dari berbagai perkebunan di Indonesia. Setiap biji dikurasi dengan teliti dan disangrai dengan sempurna untuk menghasilkan aroma yang kaya dan rasa yang kompleks. Cocok untuk semua metode brewing dari espresso hingga pour over.',
    mainImage: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
    gallery: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919514/pexels-photo-919514.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    gradient: 'from-pink-500 to-rose-500',
    isLaunching: true,
    discountPercent: 25,
    variants: [
      { name: 'Tingkat Kekasaran', value: 'Extra Fine' },
      { name: 'Tingkat Kekasaran', value: 'Medium' },
      { name: 'Tingkat Kekasaran', value: 'Coarse' },
    ],
    ingredients: [
      'Biji kopi arabika premium',
      'Proses sangrai manual',
      'Tanpa tambahan rasa',
      '100% kopi murni',
    ],
    packaging: 'Kemasan vakum dengan valve aromatis',
    weight: '200g',
    shelf_life: '12 bulan (disimpan di tempat sejuk)',
  },
};
