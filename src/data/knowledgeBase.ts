export interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  category: string;
  keywords: string[];
  priority: 'high' | 'medium' | 'low';
  lastUpdated: string;
  author: string;
  steps?: string[];
  requirements?: string[];
  notes?: string[];
  viewers: number;
  likes: number;
  dislikes: number;
  lastViewed?: string;
}

export const knowledgeBase: KnowledgeItem[] = [
  {
    id: '1',
    title: 'Pembukaan Rekening Tabungan BRI',
    content: 'Prosedur lengkap pembukaan rekening tabungan untuk nasabah baru dengan berbagai jenis tabungan yang tersedia di BRI.',
    category: 'Produk & Layanan',
    keywords: ['rekening', 'tabungan', 'pembukaan', 'syarat', 'setoran', 'nasabah baru'],
    priority: 'high',
    lastUpdated: '15 Januari 2025',
    author: 'Tim Operasional BRI',
    viewers: 1247,
    likes: 89,
    dislikes: 3,
    lastViewed: '2 jam yang lalu',
    requirements: [
      'KTP asli dan fotocopy yang masih berlaku',
      'Setoran awal minimal Rp 100.000',
      'Mengisi formulir aplikasi pembukaan rekening',
      'Pas foto 3x4 sebanyak 2 lembar'
    ],
    steps: [
      'Nasabah datang ke kantor cabang dengan membawa persyaratan',
      'Petugas melakukan verifikasi dokumen identitas',
      'Nasabah mengisi formulir aplikasi pembukaan rekening',
      'Input data nasabah ke sistem core banking',
      'Cetak buku tabungan dan kartu ATM',
      'Aktivasi rekening dan penyerahan kepada nasabah'
    ],
    notes: [
      'Untuk nasabah di bawah 17 tahun harus didampingi orang tua/wali',
      'Setoran awal dapat disesuaikan dengan jenis tabungan yang dipilih',
      'Kartu ATM akan aktif dalam 24 jam setelah pembukaan rekening'
    ]
  },
  {
    id: '2',
    title: 'Prosedur Kredit UMKM BRI',
    content: 'Panduan lengkap pengajuan kredit untuk Usaha Mikro, Kecil, dan Menengah dengan berbagai skema pembiayaan yang tersedia.',
    category: 'Kredit',
    keywords: ['kredit', 'umkm', 'usaha', 'plafon', 'bunga', 'tenor', 'jaminan'],
    priority: 'high',
    lastUpdated: '12 Januari 2025',
    author: 'Divisi Kredit BRI',
    viewers: 892,
    likes: 76,
    dislikes: 8,
    lastViewed: '1 hari yang lalu',
    requirements: [
      'Usaha telah berjalan minimal 2 tahun',
      'Omzet minimal Rp 2 juta per bulan',
      'Memiliki izin usaha yang masih berlaku',
      'Jaminan sesuai dengan plafon kredit yang diajukan',
      'Laporan keuangan usaha 6 bulan terakhir'
    ],
    steps: [
      'Nasabah mengajukan permohonan kredit',
      'Survey lokasi usaha dan verifikasi data',
      'Analisis kelayakan usaha dan kemampuan bayar',
      'Penilaian jaminan oleh penilai independen',
      'Proses persetujuan kredit',
      'Penandatanganan akad kredit',
      'Pencairan dana kredit'
    ],
    notes: [
      'Plafon kredit: Rp 25 juta - Rp 500 juta',
      'Suku bunga mulai dari 6% per tahun',
      'Tenor maksimal 5 tahun',
      'Proses persetujuan 7-14 hari kerja'
    ]
  },
  {
    id: '3',
    title: 'Aktivasi dan Penggunaan BRImo',
    content: 'Panduan lengkap aktivasi aplikasi mobile banking BRImo dan fitur-fitur yang tersedia untuk kemudahan transaksi nasabah.',
    category: 'Digital Banking',
    keywords: ['brimo', 'mobile', 'banking', 'aktivasi', 'digital', 'aplikasi'],
    priority: 'medium',
    lastUpdated: '10 Januari 2025',
    author: 'Tim Digital Banking BRI',
    viewers: 1156,
    likes: 94,
    dislikes: 2,
    lastViewed: '30 menit yang lalu',
    requirements: [
      'Memiliki rekening tabungan BRI yang aktif',
      'KTP asli dan buku tabungan',
      'Smartphone dengan OS Android/iOS terbaru',
      'Nomor HP yang terdaftar di rekening'
    ],
    steps: [
      'Nasabah datang ke kantor cabang',
      'Isi formulir registrasi mobile banking',
      'Verifikasi biometrik (sidik jari/foto)',
      'Download aplikasi BRImo dari Play Store/App Store',
      'Aktivasi menggunakan User ID dan PIN yang diberikan',
      'Setting PIN transaksi dan verifikasi nomor HP'
    ],
    notes: [
      'Aktivasi hanya dapat dilakukan di kantor cabang',
      'Fitur tersedia: transfer, pembayaran, pembelian, cek saldo',
      'Limit transaksi dapat disesuaikan dengan kebutuhan',
      'Aplikasi dapat digunakan 24/7'
    ]
  },
  {
    id: '4',
    title: 'Prosedur Pelaporan Transaksi Mencurigakan',
    content: 'Panduan identifikasi dan pelaporan transaksi yang mencurigakan sesuai dengan regulasi anti pencucian uang dan pencegahan pendanaan terorisme.',
    category: 'Compliance',
    keywords: ['compliance', 'mencurigakan', 'laporan', 'transaksi', 'aml', 'cft'],
    priority: 'high',
    lastUpdated: '8 Januari 2025',
    author: 'Divisi Compliance BRI',
    viewers: 634,
    likes: 45,
    dislikes: 12,
    lastViewed: '3 hari yang lalu',
    steps: [
      'Identifikasi transaksi yang mencurigakan',
      'Dokumentasi detail transaksi dan nasabah',
      'Lapor segera ke supervisor cabang',
      'Buat laporan tertulis ke divisi compliance',
      'Eskalasi ke kantor wilayah dalam 24 jam',
      'Follow up hasil investigasi'
    ],
    notes: [
      'Transaksi tunai di atas Rp 100 juta harus dilaporkan',
      'Transaksi yang tidak sesuai dengan profil nasabah',
      'Transaksi berulang dengan pola yang mencurigakan',
      'Kerahasiaan laporan harus dijaga'
    ]
  },
  {
    id: '5',
    title: 'Maintenance ATM Harian',
    content: 'Checklist dan prosedur maintenance harian untuk memastikan ATM beroperasi dengan optimal dan memberikan layanan terbaik kepada nasabah.',
    category: 'Operasional',
    keywords: ['atm', 'maintenance', 'harian', 'cash', 'koneksi', 'operasional'],
    priority: 'medium',
    lastUpdated: '5 Januari 2025',
    author: 'Tim Operasional ATM',
    viewers: 423,
    likes: 38,
    dislikes: 5,
    lastViewed: '5 jam yang lalu',
    steps: [
      'Cek kondisi fisik mesin ATM',
      'Pastikan cash tersedia dan mencukupi',
      'Test transaksi (tarik tunai, transfer, cek saldo)',
      'Bersihkan layar dan keypad',
      'Cek koneksi internet dan jaringan',
      'Lapor ke IT support jika ada masalah',
      'Update log maintenance harian'
    ],
    notes: [
      'Maintenance dilakukan setiap pagi sebelum jam operasional',
      'Cash loading minimal 80% dari kapasitas',
      'Segera lapor jika ada error atau gangguan',
      'Backup power harus selalu dalam kondisi baik'
    ]
  },
  {
    id: '6',
    title: 'Layanan Transfer Antar Bank',
    content: 'Prosedur dan ketentuan transfer dana antar bank melalui berbagai channel yang tersedia di BRI.',
    category: 'Produk & Layanan',
    keywords: ['transfer', 'antar bank', 'rtgs', 'sknbi', 'bifast', 'kliring'],
    priority: 'medium',
    lastUpdated: '3 Januari 2025',
    author: 'Tim Operasional BRI',
    viewers: 789,
    likes: 67,
    dislikes: 4,
    lastViewed: '1 jam yang lalu',
    requirements: [
      'Rekening sumber dana aktif dan memiliki saldo mencukupi',
      'Data lengkap rekening tujuan (nama, nomor rekening, bank)',
      'Identitas pengirim yang valid'
    ],
    steps: [
      'Nasabah mengisi slip transfer atau input di channel digital',
      'Verifikasi data rekening tujuan',
      'Konfirmasi nominal dan biaya transfer',
      'Proses transfer sesuai jenis layanan',
      'Berikan bukti transfer kepada nasabah'
    ],
    notes: [
      'RTGS: minimal Rp 100 juta, real time',
      'SKNBI: maksimal Rp 500 juta, batch processing',
      'BI-Fast: maksimal Rp 250 juta, real time 24/7',
      'Biaya transfer bervariasi sesuai channel dan nominal'
    ]
  },
  {
    id: '7',
    title: 'Penanganan Keluhan Nasabah',
    content: 'Prosedur standar penanganan keluhan nasabah untuk memastikan kepuasan dan loyalitas nasabah tetap terjaga.',
    category: 'Customer Service',
    keywords: ['keluhan', 'nasabah', 'customer service', 'penanganan', 'eskalasi'],
    priority: 'high',
    lastUpdated: '1 Januari 2025',
    author: 'Tim Customer Service BRI',
    viewers: 567,
    likes: 52,
    dislikes: 7,
    lastViewed: '4 jam yang lalu',
    steps: [
      'Dengarkan keluhan nasabah dengan sabar',
      'Catat detail keluhan secara lengkap',
      'Berikan solusi sesuai kewenangan',
      'Jika tidak dapat diselesaikan, eskalasi ke supervisor',
      'Follow up penyelesaian keluhan',
      'Konfirmasi kepuasan nasabah'
    ],
    notes: [
      'Keluhan harus ditangani maksimal 14 hari kerja',
      'Berikan nomor tiket keluhan kepada nasabah',
      'Dokumentasi keluhan untuk evaluasi layanan',
      'Prioritaskan keluhan yang berdampak finansial'
    ]
  },
  {
    id: '8',
    title: 'Prosedur Pembayaran Pajak Online',
    content: 'Panduan pembayaran berbagai jenis pajak melalui channel digital BRI untuk kemudahan nasabah.',
    category: 'Digital Banking',
    keywords: ['pajak', 'online', 'pembayaran', 'digital', 'e-billing', 'pph', 'ppn'],
    priority: 'medium',
    lastUpdated: '28 Desember 2024',
    author: 'Tim Digital Banking BRI',
    viewers: 345,
    likes: 29,
    dislikes: 3,
    lastViewed: '6 jam yang lalu',
    requirements: [
      'Kode billing dari Direktorat Jenderal Pajak',
      'Rekening BRI dengan saldo mencukupi',
      'Akses ke BRImo atau Internet Banking'
    ],
    steps: [
      'Login ke aplikasi BRImo atau Internet Banking',
      'Pilih menu Pembayaran > Pajak',
      'Input kode billing pajak',
      'Verifikasi data pembayaran',
      'Konfirmasi pembayaran dengan PIN',
      'Simpan bukti pembayaran'
    ],
    notes: [
      'Pembayaran pajak dapat dilakukan 24/7',
      'Bukti pembayaran langsung tersedia',
      'Tidak ada biaya admin untuk pembayaran pajak',
      'Pastikan kode billing masih berlaku'
    ]
  },
  {
    id: '9',
    title: 'Kredit Kendaraan Bermotor',
    content: 'Prosedur pengajuan kredit untuk pembelian kendaraan bermotor baru dan bekas dengan berbagai pilihan tenor.',
    category: 'Kredit',
    keywords: ['kredit', 'kendaraan', 'motor', 'mobil', 'kur', 'dp', 'tenor'],
    priority: 'medium',
    lastUpdated: '25 Desember 2024',
    author: 'Divisi Kredit BRI',
    viewers: 678,
    likes: 58,
    dislikes: 9,
    lastViewed: '2 hari yang lalu',
    requirements: [
      'Penghasilan minimal Rp 3 juta per bulan',
      'Usia minimal 21 tahun, maksimal 55 tahun',
      'Masa kerja minimal 2 tahun',
      'DP minimal 20% dari harga kendaraan',
      'Dokumen kendaraan lengkap'
    ],
    steps: [
      'Pengajuan aplikasi kredit kendaraan',
      'Survey tempat kerja dan tempat tinggal',
      'Verifikasi dokumen dan penghasilan',
      'Persetujuan kredit dari komite',
      'Penandatanganan akad kredit',
      'Proses asuransi kendaraan',
      'Pencairan dana ke dealer'
    ],
    notes: [
      'Tenor kredit: 1-5 tahun',
      'Suku bunga kompetitif mulai 8% per tahun',
      'Asuransi comprehensive wajib',
      'Proses persetujuan 3-7 hari kerja'
    ]
  },
  {
    id: '10',
    title: 'Layanan Deposito BRI',
    content: 'Informasi lengkap produk deposito BRI dengan berbagai pilihan tenor dan suku bunga yang menarik.',
    category: 'Produk & Layanan',
    keywords: ['deposito', 'investasi', 'bunga', 'tenor', 'perpanjangan', 'pencairan'],
    priority: 'medium',
    lastUpdated: '22 Desember 2024',
    author: 'Tim Funding BRI',
    viewers: 512,
    likes: 41,
    dislikes: 6,
    lastViewed: '8 jam yang lalu',
    requirements: [
      'Minimal penempatan Rp 10 juta',
      'Memiliki rekening tabungan BRI',
      'KTP yang masih berlaku',
      'NPWP untuk deposito di atas Rp 7,5 juta'
    ],
    steps: [
      'Nasabah mengajukan pembukaan deposito',
      'Pilih nominal dan tenor deposito',
      'Isi formulir pembukaan deposito',
      'Transfer dana dari rekening tabungan',
      'Cetak bilyet deposito',
      'Penyerahan bilyet kepada nasabah'
    ],
    notes: [
      'Tenor: 1, 3, 6, 12, 24 bulan',
      'Suku bunga mengikuti ketentuan bank',
      'Dapat diperpanjang otomatis (ARO)',
      'Pencairan sebelum jatuh tempo dikenakan penalti'
    ]
  },
  {
    id: '11',
    title: 'Prosedur Ganti Kartu ATM',
    content: 'Langkah-langkah penggantian kartu ATM yang rusak, hilang, atau expired untuk memastikan nasabah tetap dapat bertransaksi.',
    category: 'Operasional',
    keywords: ['kartu atm', 'ganti', 'rusak', 'hilang', 'expired', 'blokir'],
    priority: 'high',
    lastUpdated: '20 Desember 2024',
    author: 'Tim Operasional BRI',
    viewers: 934,
    likes: 78,
    dislikes: 4,
    lastViewed: '45 menit yang lalu',
    requirements: [
      'KTP asli dan fotocopy',
      'Buku tabungan',
      'Surat keterangan kehilangan (jika kartu hilang)',
      'Biaya penggantian kartu'
    ],
    steps: [
      'Nasabah datang ke kantor cabang',
      'Blokir kartu lama di sistem',
      'Isi formulir permohonan kartu baru',
      'Verifikasi identitas nasabah',
      'Cetak kartu ATM baru',
      'Aktivasi kartu dan penyerahan kepada nasabah'
    ],
    notes: [
      'Kartu baru aktif dalam 24 jam',
      'PIN tetap sama dengan kartu sebelumnya',
      'Biaya penggantian Rp 5.000',
      'Segera ganti PIN setelah menerima kartu baru'
    ]
  },
  {
    id: '12',
    title: 'Layanan Remitansi Internasional',
    content: 'Prosedur pengiriman dan penerimaan uang dari luar negeri melalui jaringan kemitraan BRI.',
    category: 'Produk & Layanan',
    keywords: ['remitansi', 'internasional', 'tki', 'pengiriman uang', 'valuta asing'],
    priority: 'medium',
    lastUpdated: '18 Desember 2024',
    author: 'Tim Treasury BRI',
    viewers: 298,
    likes: 23,
    dislikes: 8,
    lastViewed: '1 hari yang lalu',
    requirements: [
      'KTP yang masih berlaku',
      'Rekening BRI untuk penerima',
      'Data lengkap pengirim dari luar negeri',
      'Kode MTCN atau referensi transfer'
    ],
    steps: [
      'Nasabah datang dengan dokumen lengkap',
      'Input data transaksi remitansi',
      'Verifikasi identitas penerima',
      'Konfirmasi kurs dan nominal',
      'Proses pencairan ke rekening',
      'Berikan bukti transaksi'
    ],
    notes: [
      'Layanan tersedia dari berbagai negara',
      'Kurs mengikuti ketentuan Bank Indonesia',
      'Pencairan dapat langsung tunai atau ke rekening',
      'Batas maksimal sesuai regulasi BI'
    ]
  },
  {
    id: '13',
    title: 'Pembayaran Tagihan Listrik PLN',
    content: 'Panduan pembayaran tagihan listrik PLN melalui berbagai channel BRI untuk kemudahan nasabah.',
    category: 'Digital Banking',
    keywords: ['listrik', 'pln', 'tagihan', 'pembayaran', 'token', 'pascabayar'],
    priority: 'medium',
    lastUpdated: '15 Desember 2024',
    author: 'Tim Digital Banking BRI',
    viewers: 756,
    likes: 64,
    dislikes: 2,
    lastViewed: '3 jam yang lalu',
    requirements: [
      'Nomor ID pelanggan PLN',
      'Rekening BRI dengan saldo mencukupi'
    ],
    steps: [
      'Akses channel pembayaran (ATM/BRImo/Teller)',
      'Pilih menu Pembayaran > PLN',
      'Input nomor ID pelanggan',
      'Verifikasi data pelanggan dan tagihan',
      'Konfirmasi pembayaran',
      'Simpan bukti pembayaran/struk token'
    ],
    notes: [
      'Pembayaran real time 24/7',
      'Token listrik langsung diterima',
      'Biaya admin sesuai ketentuan',
      'Dapat dilakukan di seluruh ATM BRI'
    ]
  },
  {
    id: '14',
    title: 'Prosedur Kredit Kepemilikan Rumah (KPR)',
    content: 'Panduan lengkap pengajuan KPR BRI untuk pembelian rumah baru maupun bekas dengan berbagai pilihan program.',
    category: 'Kredit',
    keywords: ['kpr', 'rumah', 'properti', 'kredit', 'dp', 'subsidi', 'komersial'],
    priority: 'high',
    lastUpdated: '12 Desember 2024',
    author: 'Divisi Kredit BRI',
    viewers: 1089,
    likes: 92,
    dislikes: 11,
    lastViewed: '2 jam yang lalu',
    requirements: [
      'Penghasilan minimal Rp 5 juta per bulan',
      'Usia minimal 21 tahun, maksimal 55 tahun',
      'Masa kerja minimal 2 tahun',
      'DP minimal 10% dari harga rumah',
      'Dokumen properti lengkap dan legal'
    ],
    steps: [
      'Konsultasi dan pemilihan program KPR',
      'Pengajuan aplikasi kredit',
      'Survey lokasi properti dan pemohon',
      'Penilaian properti oleh appraiser',
      'Analisis kelayakan kredit',
      'Persetujuan komite kredit',
      'Penandatanganan akad kredit',
      'Proses legal dan asuransi',
      'Pencairan bertahap sesuai progress'
    ],
    notes: [
      'Tenor maksimal 20 tahun',
      'Suku bunga fixed dan floating tersedia',
      'Program subsidi untuk rumah tapak dan rusun',
      'Asuransi jiwa dan kebakaran wajib'
    ]
  },
  {
    id: '15',
    title: 'Layanan Safe Deposit Box',
    content: 'Informasi dan prosedur penyewaan safe deposit box untuk penyimpanan barang berharga nasabah.',
    category: 'Produk & Layanan',
    keywords: ['safe deposit box', 'sdb', 'penyimpanan', 'barang berharga', 'sewa'],
    priority: 'low',
    lastUpdated: '10 Desember 2024',
    author: 'Tim Operasional BRI',
    viewers: 187,
    likes: 15,
    dislikes: 3,
    lastViewed: '2 hari yang lalu',
    requirements: [
      'Memiliki rekening BRI minimal 6 bulan',
      'KTP dan NPWP yang masih berlaku',
      'Saldo minimal sesuai ketentuan',
      'Mengisi formulir aplikasi SDB'
    ],
    steps: [
      'Pengajuan aplikasi penyewaan SDB',
      'Verifikasi kelengkapan dokumen',
      'Pemilihan ukuran dan lokasi box',
      'Pembayaran biaya sewa tahunan',
      'Penandatanganan kontrak sewa',
      'Penyerahan kunci dan orientasi penggunaan'
    ],
    notes: [
      'Tersedia berbagai ukuran box',
      'Biaya sewa dibayar di muka per tahun',
      'Akses hanya pada jam operasional bank',
      'Maksimal 2 orang yang dapat mengakses'
    ]
  },
  {
    id: '16',
    title: 'Prosedur Pembukaan Rekening Giro',
    content: 'Panduan pembukaan rekening giro untuk nasabah korporat dan individual dengan kebutuhan transaksi tinggi.',
    category: 'Produk & Layanan',
    keywords: ['giro', 'rekening', 'korporat', 'cek', 'bilyet giro', 'setoran awal'],
    priority: 'medium',
    lastUpdated: '8 Desember 2024',
    author: 'Tim Funding BRI',
    viewers: 432,
    likes: 34,
    dislikes: 7,
    lastViewed: '12 jam yang lalu',
    requirements: [
      'Setoran awal minimal Rp 500.000',
      'KTP dan NPWP yang masih berlaku',
      'Surat keterangan usaha (untuk korporat)',
      'Specimen tanda tangan',
      'Referensi bank (jika ada)'
    ],
    steps: [
      'Konsultasi produk giro dengan relationship manager',
      'Pengisian formulir aplikasi',
      'Verifikasi dokumen dan identitas',
      'Input data nasabah ke sistem',
      'Cetak buku cek dan bilyet giro',
      'Aktivasi rekening dan penyerahan kepada nasabah'
    ],
    notes: [
      'Biaya administrasi bulanan berlaku',
      'Tersedia layanan cash management',
      'Dapat dihubungkan dengan layanan digital',
      'Minimum saldo mengendap sesuai ketentuan'
    ]
  },
  {
    id: '17',
    title: 'Layanan Kartu Kredit BRI',
    content: 'Informasi produk kartu kredit BRI dengan berbagai jenis dan benefit yang ditawarkan.',
    category: 'Produk & Layanan',
    keywords: ['kartu kredit', 'credit card', 'limit', 'cicilan', 'reward', 'cashback'],
    priority: 'medium',
    lastUpdated: '5 Desember 2024',
    author: 'Tim Kartu Kredit BRI',
    viewers: 823,
    likes: 71,
    dislikes: 5,
    lastViewed: '4 jam yang lalu',
    requirements: [
      'Penghasilan minimal Rp 3 juta per bulan',
      'Usia 21-65 tahun',
      'Memiliki rekening BRI minimal 6 bulan',
      'Dokumen penghasilan yang valid',
      'Tidak masuk daftar hitam BI Checking'
    ],
    steps: [
      'Pengajuan aplikasi kartu kredit',
      'Verifikasi dokumen dan data',
      'Survey tempat kerja (jika diperlukan)',
      'Analisis kelayakan dan scoring',
      'Persetujuan dan penentuan limit',
      'Produksi dan pengiriman kartu',
      'Aktivasi kartu oleh nasabah'
    ],
    notes: [
      'Berbagai jenis kartu: Classic, Gold, Platinum',
      'Benefit: reward point, cashback, diskon merchant',
      'Cicilan 0% di merchant tertentu',
      'Dapat digunakan di seluruh dunia'
    ]
  },
  {
    id: '18',
    title: 'Prosedur Penutupan Rekening',
    content: 'Langkah-langkah penutupan rekening tabungan, giro, atau deposito sesuai permintaan nasabah.',
    category: 'Operasional',
    keywords: ['penutupan', 'rekening', 'tutup', 'saldo', 'administrasi'],
    priority: 'medium',
    lastUpdated: '3 Desember 2024',
    author: 'Tim Operasional BRI',
    viewers: 267,
    likes: 19,
    dislikes: 4,
    lastViewed: '6 jam yang lalu',
    requirements: [
      'KTP asli dan fotocopy',
      'Buku tabungan/bilyet deposito/buku cek',
      'Kartu ATM (jika ada)',
      'Surat permohonan penutupan rekening'
    ],
    steps: [
      'Nasabah mengajukan permohonan penutupan',
      'Verifikasi identitas dan kepemilikan rekening',
      'Cek kewajiban yang masih outstanding',
      'Hitung saldo akhir dan biaya administrasi',
      'Proses penutupan di sistem',
      'Pencairan saldo kepada nasabah',
      'Pemusnahan buku tabungan dan kartu ATM'
    ],
    notes: [
      'Pastikan tidak ada kewajiban yang tertunggak',
      'Biaya penutupan sesuai ketentuan',
      'Deposito hanya dapat ditutup saat jatuh tempo',
      'Simpan dokumen penutupan untuk arsip'
    ]
  },
  {
    id: '19',
    title: 'Layanan Asuransi Bancassurance',
    content: 'Produk asuransi yang ditawarkan melalui kerjasama BRI dengan perusahaan asuransi terpercaya.',
    category: 'Produk & Layanan',
    keywords: ['asuransi', 'bancassurance', 'jiwa', 'kesehatan', 'kendaraan', 'premi'],
    priority: 'low',
    lastUpdated: '1 Desember 2024',
    author: 'Tim Bancassurance BRI',
    viewers: 156,
    likes: 12,
    dislikes: 2,
    lastViewed: '1 hari yang lalu',
    requirements: [
      'Memiliki rekening BRI yang aktif',
      'Usia sesuai ketentuan produk asuransi',
      'Mengisi formulir aplikasi asuransi',
      'Medical check up (untuk nominal tertentu)'
    ],
    steps: [
      'Konsultasi produk asuransi dengan petugas',
      'Pemilihan jenis dan manfaat asuransi',
      'Pengisian formulir aplikasi',
      'Medical check up (jika diperlukan)',
      'Underwriting oleh perusahaan asuransi',
      'Persetujuan dan penerbitan polis',
      'Pembayaran premi melalui autodebet'
    ],
    notes: [
      'Tersedia asuransi jiwa, kesehatan, kendaraan',
      'Premi dapat dibayar bulanan atau tahunan',
      'Klaim dapat diproses di kantor cabang BRI',
      'Benefit sesuai dengan jenis produk yang dipilih'
    ]
  },
  {
    id: '20',
    title: 'Sistem Keamanan dan Fraud Prevention',
    content: 'Panduan pencegahan fraud dan menjaga keamanan transaksi nasabah di era digital banking.',
    category: 'Compliance',
    keywords: ['keamanan', 'fraud', 'pencegahan', 'phishing', 'skimming', 'otp'],
    priority: 'high',
    lastUpdated: '28 November 2024',
    author: 'Tim Security BRI',
    viewers: 712,
    likes: 63,
    dislikes: 9,
    lastViewed: '1 jam yang lalu',
    steps: [
      'Edukasi nasabah tentang modus fraud terbaru',
      'Verifikasi identitas sebelum transaksi besar',
      'Monitoring transaksi yang mencurigakan',
      'Implementasi sistem OTP untuk transaksi digital',
      'Pelaporan insiden keamanan',
      'Koordinasi dengan pihak berwajib jika diperlukan'
    ],
    notes: [
      'Jangan pernah memberikan PIN/password kepada siapapun',
      'Selalu verifikasi nomor telepon bank sebelum memberikan data',
      'Gunakan jaringan internet yang aman untuk transaksi',
      'Segera lapor jika ada transaksi yang tidak dikenal',
      'Update aplikasi mobile banking secara berkala'
    ]
  }
];