export interface ServiceDetail {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  description: string;
  gradient: string;
  softAccent: string;
  scope: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  targetAudience: string[];
  pricing: string;
  notes: string;
  whatsappNumber: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  design: {
    id: 'design',
    name: 'Design',
    tagline: 'Desain Grafis Profesional untuk Branding Anda',
    icon: '🎨',
    description:
      'Kami menyediakan layanan desain grafis profesional untuk membantu brand Anda tampil lebih menarik dan berkesan. Tim desainer berpengalaman kami siap mewujudkan visi kreatif Anda menjadi kenyataan visual yang memukau.',
    gradient: 'from-emerald-500 to-teal-500',
    softAccent: 'from-amber-100 to-amber-50',
    scope: [
      'Logo design dan identitas visual brand',
      'Poster dan flyer desain menarik',
      'Social media content design',
      'Packaging dan label design',
      'Infografis dan data visualization',
      'Banner dan marketing materials',
    ],
    benefits: [
      'Brand identity yang kuat dan konsisten',
      'Meningkatkan daya tarik visual bisnis Anda',
      'Desain yang disesuaikan dengan target audience',
      'Revisi unlimited hingga puas',
      'Pengiriman file dalam berbagai format',
      'Konsultasi desain gratis',
    ],
    process: [
      {
        step: 1,
        title: 'Konsultasi & Brief',
        description:
          'Kami mendengarkan visi Anda, memahami brand, dan mengumpulkan semua informasi penting untuk desain.',
      },
      {
        step: 2,
        title: 'Riset & Konsep',
        description:
          'Tim kami melakukan riset mendalam tentang trend desain dan kompetitor Anda.',
      },
      {
        step: 3,
        title: 'Sketsa & Konsep Awal',
        description:
          'Kami membuat beberapa pilihan konsep desain untuk Anda pilih dan feedback.',
      },
      {
        step: 4,
        title: 'Refinement',
        description:
          'Berdasarkan feedback Anda, kami melakukan perbaikan dan penyempurnaan desain.',
      },
      {
        step: 5,
        title: 'Finalisasi',
        description:
          'Desain final dioptimalkan dan disiapkan dalam berbagai format file yang Anda butuhkan.',
      },
    ],
    targetAudience: [
      'Startup & bisnis baru',
      'Perusahaan yang ingin rebranding',
      'Entrepreneur dan UMKM',
      'Organisasi sosial',
      'Event organizer',
    ],
    pricing: 'Mulai dari Rp 100.000 (custom pricing tersedia)',
    notes: 'Semua desain yang kami buat adalah karya original dan eksklusif untuk klien. File desain menjadi milik Anda sepenuhnya setelah pembayaran selesai. Kami menjaga kerahasiaan semua informasi bisnis yang Anda bagikan.',
    whatsappNumber: '6283119230055',
  },
  bahasa_arab: {
    id: 'bahasa_arab',
    name: 'Privat Bahasa Arab',
    tagline: 'Belajar Bahasa Arab dari Guru Berpengalaman',
    icon: '📚',
    description:
      'Kami menawarkan program privat bahasa Arab yang fleksibel dan disesuaikan dengan level Anda, dari pemula hingga advanced. Dengan metode pembelajaran interaktif dan tutor berpengalaman, Anda akan cepat mahir berbahasa Arab.',
    gradient: 'from-teal-500 to-cyan-500',
    softAccent: 'from-cyan-100 to-cyan-50',
    scope: [
      'Kelas privat one-on-one (offline/online)',
      'Pembelajaran dari nol hingga lancar',
      'Conversational Arabic (percakapan sehari-hari)',
      'Fus-ha (Bahasa Arab formal)',
      'Persiapan ujian TOEFL Arabic',
      'Business Arabic untuk kebutuhan profesional',
    ],
    benefits: [
      'Metode pembelajaran yang terbukti efektif',
      'Jadwal fleksibel sesuai keinginan Anda',
      'Materi pembelajaran yang terstruktur',
      'Feedback dan monitoring progress rutin',
      'Native speaker dan tutor berpengalaman',
      'Suasana belajar yang nyaman dan menyenangkan',
    ],
    process: [
      {
        step: 1,
        title: 'Assessment Level',
        description:
          'Kami melakukan test placement untuk mengetahui level bahasa Arab Anda saat ini.',
      },
      {
        step: 2,
        title: 'Menyusun Program',
        description:
          'Membuat rencana pembelajaran yang disesuaikan dengan level dan tujuan Anda.',
      },
      {
        step: 3,
        title: 'Pembelajaran Interaktif',
        description:
          'Sesi belajar privat dengan fokus pada grammar, vocabulary, dan conversation.',
      },
      {
        step: 4,
        title: 'Homework & Practice',
        description:
          'Pemberian tugas untuk memperkuat materi yang sudah diajarkan.',
      },
      {
        step: 5,
        title: 'Evaluasi & Progress',
        description:
          'Monitoring rutin dan evaluasi kemajuan untuk memastikan target tercapai.',
      },
    ],
    targetAudience: [
      'Pelajar dan mahasiswa',
      'Profesional yang ingin belajar bahasa Arab',
      'Calon pengguna visa Arab',
      'Pengusaha bisnis internasional',
      'Peminat budaya Arab',
    ],
    pricing: 'Rp 100.000 - Rp 200.000 per sesi (paket hemat tersedia)',
    notes: 'Materi pembelajaran kami fokus pada komunikasi praktis dan penggunaan sehari-hari. Privasi data siswa dijaga ketat. Setiap siswa mendapat sertifikat setelah menyelesaikan level tertentu.',
    whatsappNumber: '6283119230055',
  },
  konseling: {
    id: 'konseling',
    name: 'Konseling',
    tagline: 'Dukungan Profesional untuk Kesehatan Mental Anda',
    icon: '❤️',
    description:
      'Layanan konseling profesional kami menyediakan dukungan emosional dan psikologis dalam lingkungan yang aman, confidential, dan bebas judgement. Kami siap membantu Anda menghadapi berbagai tantangan hidup dengan pendekatan yang empati dan terpercaya.',
    gradient: 'from-amber-500 to-orange-500',
    softAccent: 'from-amber-100 to-orange-50',
    scope: [
      'Konseling individual untuk berbagai masalah',
      'Konseling relationship dan keluarga',
      'Career counseling dan vocational guidance',
      'Stress management dan anxiety',
      'Grief counseling dan emotional support',
      'Online dan offline konseling',
    ],
    benefits: [
      'Ruang aman untuk berbagi dan mengeksplorasi perasaan',
      'Konselor profesional dengan kredensial',
      'Pendekatan yang personal dan tidak menghakimi',
      'Rahasia terjaga sesuai etika profesional',
      'Tools dan strategi coping yang praktis',
      'Dukungan berkelanjutan untuk pemulihan',
    ],
    process: [
      {
        step: 1,
        title: 'Pendaftaran & Intake',
        description:
          'Anda mendaftar dan memberikan informasi dasar tentang kebutuhan Anda.',
      },
      {
        step: 2,
        title: 'Penugasan Konselor',
        description:
          'Kami menugaskan konselor yang sesuai dengan kebutuhan dan preferensi Anda.',
      },
      {
        step: 3,
        title: 'Sesi Pertama Assessment',
        description:
          'Sesi pertama untuk mengenal Anda lebih dalam dan memahami masalah Anda.',
      },
      {
        step: 4,
        title: 'Perencanaan Treatment',
        description:
          'Konselor membuat rencana treatment dan goals yang jelas bersama Anda.',
      },
      {
        step: 5,
        title: 'Sesi Regular & Monitoring',
        description:
          'Sesi konseling rutin dengan monitoring progress menuju goals Anda.',
      },
    ],
    targetAudience: [
      'Individu yang sedang menghadapi tantangan emosional',
      'Pasangan yang ingin meningkatkan hubungan',
      'Keluarga yang mencari solusi harmoni',
      'Profesional dengan work stress tinggi',
      'Siswa dan mahasiswa',
    ],
    pricing: 'Rp 150.000 - Rp 300.000 per sesi (paket bulanan lebih hemat)',
    notes: 'Semua sesi dijamin confidential dan aman. Konselor kami mematuhi etika profesional psikologi. Data klien tidak akan dibagikan kepada pihak ketiga tanpa persetujuan. Kami tidak menggantikan treatment medis untuk kondisi psikiatri yang memerlukan intervensi dokter.',
    whatsappNumber: '6283119230055',
  },
  olah_data: {
    id: 'olah_data',
    name: 'Olah Data',
    tagline: 'Pengolahan Data Profesional untuk Riset & Bisnis',
    icon: '📊',
    description:
      'Layanan olah data kami membantu Anda mengolah, menganalisis, dan memvisualisasikan data kompleks menjadi insights yang actionable. Dari data cleaning hingga statistical analysis, kami siap menghadirkan solusi data yang komprehensif.',
    gradient: 'from-cyan-500 to-blue-500',
    softAccent: 'from-cyan-100 to-blue-50',
    scope: [
      'Data cleaning dan preparation',
      'Descriptive statistics dan data summarization',
      'Statistical analysis dan hypothesis testing',
      'Data visualization dan dashboard creation',
      'Predictive modeling dan forecasting',
      'Qualitative data analysis (thematic analysis)',
    ],
    benefits: [
      'Data processing yang akurat dan reliable',
      'Insights yang mendalam dari data Anda',
      'Visualisasi data yang mudah dipahami',
      'Rekomendasi berbasis evidence',
      'Dokumentasi lengkap untuk reproducibility',
      'Konsultasi statistik gratis untuk interpretasi hasil',
    ],
    process: [
      {
        step: 1,
        title: 'Data Assessment',
        description:
          'Kami menganalisis data Anda untuk memahami struktur, quality, dan kebutuhan.',
      },
      {
        step: 2,
        title: 'Planning & Methodology',
        description:
          'Menentukan teknik analisis terbaik sesuai dengan research questions Anda.',
      },
      {
        step: 3,
        title: 'Data Processing',
        description:
          'Melakukan data cleaning, transformation, dan preparation untuk analisis.',
      },
      {
        step: 4,
        title: 'Analysis & Visualization',
        description:
          'Menjalankan analisis dan membuat visualisasi data yang komprehensif.',
      },
      {
        step: 5,
        title: 'Reporting & Interpretation',
        description:
          'Menyiapkan laporan lengkap dengan interpretasi dan rekomendasi dari hasil analisis.',
      },
    ],
    targetAudience: [
      'Researcher dan akademisi',
      'Perusahaan yang membutuhkan business intelligence',
      'Startup dengan data analytics needs',
      'Marketing team untuk customer insights',
      'Quality control dan operational analysis',
    ],
    pricing: 'Mulai dari Rp 500.000 (tergantung kompleksitas data)',
    notes: 'Semua data klien dijaga ketat dengan standar confidentiality tinggi. Kami menggunakan software profesional (R, Python, SPSS, Excel). Hasil analisis dapat digunakan untuk publikasi akademik dengan proper citation. Kami menyediakan training penggunaan tools jika diperlukan.',
    whatsappNumber: '6283119230055',
  },
  penulis_kreatif: {
    id: 'penulis_kreatif',
    name: 'Penulis Kreatif',
    tagline: 'Konten Kreatif & Copywriting Profesional',
    icon: '✍️',
    description:
      'Layanan penulis kreatif kami menghadirkan konten berkualitas tinggi yang engaging dan sesuai dengan brand voice Anda. Dari blog articles hingga copywriting marketing, kami siap menghasilkan konten yang convert dan resonates dengan audience Anda.',
    gradient: 'from-emerald-500 to-teal-600',
    softAccent: 'from-amber-100 to-amber-50',
    scope: [
      'Blog articles dan long-form content',
      'Social media copywriting dan captions',
      'Product descriptions dan landing page copy',
      'Email marketing campaigns',
      'Video scripts dan narration',
      'Press releases dan media relations',
    ],
    benefits: [
      'Konten yang SEO-optimized dan searchable',
      'Writing yang sesuai brand voice Anda',
      'Copywriting yang persuasif dan effective',
      'Revisi unlimited hingga puas',
      'Research mendalam untuk topik yang Anda butuhkan',
      'Konsultasi content strategy gratis',
    ],
    process: [
      {
        step: 1,
        title: 'Brief & Discovery',
        description:
          'Kami menggali informasi tentang brand, audience, dan objectives Anda.',
      },
      {
        step: 2,
        title: 'Research & Planning',
        description:
          'Melakukan riset mendalam dan menyusun outline konten yang strategic.',
      },
      {
        step: 3,
        title: 'Content Creation',
        description:
          'Menulis konten original yang engaging dan sesuai dengan guidelines Anda.',
      },
      {
        step: 4,
        title: 'Review & Revisi',
        description:
          'Proses review dengan Anda untuk memastikan konten sesuai ekspektasi.',
      },
      {
        step: 5,
        title: 'Finalisasi & Delivery',
        description:
          'Konten final dioptimalkan dan siap untuk dipublikasikan atau didistribusikan.',
      },
    ],
    targetAudience: [
      'Bisnis dan e-commerce platforms',
      'Startup dengan content marketing needs',
      'Personal branding dan influencer',
      'NGO dan corporate communications',
      'Media dan publishing companies',
    ],
    pricing: 'Rp 50.000 - Rp 300.000 per artikel (paket bulanan lebih hemat)',
    notes: 'Semua konten yang kami tulis adalah original dan unique untuk klien. Kami tidak melakukan plagiarism dan semua sumber di-cite dengan proper. Klien mendapat full copyright dan ownership atas konten yang diproduksi. Kami menjaga deadline dan kualitas dengan profesional.',
    whatsappNumber: '6283119230055',
  },
};
