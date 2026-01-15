import GroupPeopleIcon from '@/components/icons/GroupPeopleIcon';
import MushroomIcon from '@/components/icons/MushroomIcon';
import PersonIcon from '@/components/icons/PersonIcon';
import PersonIdeaIcon from '@/components/icons/PersonIdeaIcon';
import StarIcon from '@/components/icons/StarIcon';

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const BANNER_ITEMS = [
  {
    img: '/images/banner/Banner1.png',
    title: 'Republik Jamur Nusantara',
    desc: 'Rahasia Bisnis, Hoby dan Produk Jamur Nusantara',
    actionName: 'Jelajahi Dari Sini',
    action: '#tentangkami',
  },
  {
    img: '/images/banner/Banner2.png',
    title: 'Produk Jamur Nusantara Berkualitas',
    desc: 'Kami juga menyediakan jamur crispy renyah, baglog, bibit jamur, serta sate jamur lezat',
    actionName: 'Hubungi Kami',
    action: `https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`,
  },
];
const MITRA_ITEMS = [
  {
    img: '/images/logo/Mitra1.png',
    alt: 'Mitra 1',
  },
  {
    img: '/images/logo/Mitra2.png',
    alt: 'Mitra 2',
  },
  {
    img: '/images/logo/Mitra3.png',
    alt: 'Mitra 3',
  },
];

const PELAYANAN_KAMI_ITEMS = [
  {
    img: '/images/pelayanan/BudidayaJamur.png',
    title: 'Budidaya Jamur',
    desc: 'Kami bantu optimalkan budidaya jamur Anda dengan metode yang mudah ',
  },
  {
    img: '/images/pelayanan/PembuatanBibitUnggul.png',
    title: 'Pembuatan Bibit Unggul',
    desc: 'Kami sediakan layanan pembuatan bibit unggul, siap pakai dan teruji',
  },
  {
    img: '/images/pelayanan/PenjualanBaglogMiselium.png',
    title: 'Penjualan Baglog Miselium',
    desc: 'Kebun kami membuka program tour belajar untuk pelajar, komunitas, Asn dan lain lain',
  },
  {
    img: '/images/pelayanan/Edutour.png',
    title: 'Edutour',
    desc: 'Kebun kami membuka program tour belajar untuk pelajar, komunitas, Asn dan lain lain',
  },
  {
    img: '/images/pelayanan/JamurCrispyFrozenFood.png',
    title: 'Jamur Crispy Frozen Food',
    desc: 'Kami sediakan Jamur Crispy & Frozen Food renyah siap jual untuk usaha Anda.',
  },
  {
    img: '/images/pelayanan/RestoJamur.png',
    title: 'Resto Jamur',
    desc: 'Kami bantu wujudkan resto jamur dengan menu kreatif dan siap jual',
  },
  {
    img: '/images/pelayanan/PembuatanSewaKumbung.png',
    title: 'Pembuatan & Sewa Kumbung',
    desc: 'Kami bantu pembuatan dan sewa kumbung siap pakai untuk budidaya jamur.',
  },
  {
    img: '/images/pelayanan/KonsultasiBisnis.png',
    title: 'Konsultasi Bisnis',
    desc: 'Kami siap bantu konsultasi budidaya jamur sesuai kebutuhan Anda',
  },
  {
    img: '/images/pelayanan/PengelolaanMandiri.png',
    title: 'Pengelolaan Mandiri',
    desc: 'Kami sediakan skema kerjasama untuk pengelolaan jamur secara mandiri',
  },
  {
    img: '/images/pelayanan/PemasanganIOTKumbung.png',
    title: 'Pemasangan IoT Kumbung',
    desc: 'Kami bantu pemasangan IoT kumbung untuk kontrol budidaya lebih akurat',
  },
  {
    img: '/images/pelayanan/BudidayaBersama.png',
    title: 'Budidaya Bersama',
    desc: 'Kami bantu pemasangan IoT kumbung untuk kontrol budidaya lebih akurat',
  },
  {
    img: '/images/pelayanan/PelatihanBudidaya.png',
    title: 'Pelatihan Budidaya',
    desc: 'Memberikan pelatihan budidaya jamur dari tahap penanaman hingga panen siap jual',
  },
];

const KENAPA_CIKUDA_ITEMS = [
  {
    icon: <MushroomIcon />,
    desc: 'Kualitas Jamur Grade A dan Organik',
  },
  {
    icon: <StarIcon />,
    desc: 'Penghasil Produk Jamur Pilihan & Produk Turunan',
  },
  {
    icon: <PersonIcon />,
    desc: 'Pelatihan Langsung dari Ahli',
  },
  {
    icon: <GroupPeopleIcon />,
    desc: 'Konsultan Bisnis Untuk Peningkatan Usaha dan Keuntungan Berlipat',
  },
  {
    icon: <PersonIdeaIcon />,
    desc: 'Konsultan Budidaya Untuk Bisnis Jamur di Seluruh Jawa',
  },
];

const REVIEW_CIKUDA_ITEMS = [
  {
    name: 'Helmy Y',
    desc: 'Barangkali ini adalah kebun jamur terbagus, rapi, indah yang pernah ada di Indonesia.Para pekerja tampak happy dan tim sangat ramah. Terimakasih, semoga pelayanan ini diteruskan',
  },
  {
    name: 'Malik',
    desc: 'Sejak awal kami memperoleh jatah 5 Kg jamur segar, hingga ratusan Kg, jamur produksi Jamur Cikuda selalu segar dan baik. Para pekerja akrab dan membuat kami nyaman',
  },
  {
    name: 'Ivome Susan',
    desc: 'Pertama investasi perusahaan tampaknya selalu menjaga kualitas dan janji yang layak ditepati. Memindahkan uang dari bank ke tempat ini membuat investasi kami naik berlipat',
  },
];

const FAQ_ITEMS = [
  {
    question: 'Perusahaan Jamur Cikuda, milik pribadi atau PT?',
    answer:
      'PT Jamur Cikuda Nusantara milik perseroan terbatas yang sahamnya dimiliki beberapa orang secara pribadi',
  },
  {
    question: 'Pelayanan Apa Saja Yang Tersedia ?',
    answer:
      'Budidaya, Pelatihan, Produksi Bibit, Baglog, Jamur Kering, Bubuk Jamur, Kapsul Jamur, Jamur Kesehatan, Pembuatan Kumbung, Kerjasama Usaha Jamur, Budidaya Bersama dll',
  },
  {
    question:
      'Bagaimana cara menghubungi PIC tertentu misal untuk konsultasi, kerjasama usaha atau Kunjungan ?',
    answer: 'Hubungi : 08138888980',
  },
];

export {
  BANNER_ITEMS,
  MITRA_ITEMS,
  PELAYANAN_KAMI_ITEMS,
  KENAPA_CIKUDA_ITEMS,
  REVIEW_CIKUDA_ITEMS,
  FAQ_ITEMS,
};
