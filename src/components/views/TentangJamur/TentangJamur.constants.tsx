import MapPinIcon from '@/components/icons/MapPinIcon';
import Mushroom2Icon from '@/components/icons/Mushroom2Icon';
import HeartPlusIcon from '@/components/icons/HeartPlusIcon';

const JAMUR_ITEMS = [
  {
    name: 'Jamur Tiram',
    latin: 'Pleurotus ostreatus',
    img: '/images/tentangjamur/JamurTiram.png',
    detail: [
      {
        title: 'Asal',
        icon: <MapPinIcon />,
        items: ['Mudah dibudidayakan', 'Umum ditemukan di daerah tropis'],
      },
      {
        title: 'Kandungan Nutrisi',
        icon: <Mushroom2Icon />,
        items: [
          'Kaya serat',
          'Mengandung beta-glukan',
          'Mengandung antioksidan',
        ],
      },
      {
        title: 'Khasiat',
        icon: <HeartPlusIcon />,
        items: ['Meningkatkan sistem imun', 'Mendukung kesehatan jantung'],
      },
    ],
  },
  {
    name: 'Jamur Merang',
    latin: 'Volvariella volvacea',
    img: '/images/tentangjamur/JamurMerang.png',
    detail: [
      {
        title: 'Asal',
        icon: <MapPinIcon />,
        items: ['Tumbuh di tumpukan jerami'],
      },
      {
        title: 'Kandungan Nutrisi',
        icon: <Mushroom2Icon />,
        items: ['Kaya protein', 'Mengandung vitamin b kompleks dan mineral'],
      },
      {
        title: 'Khasiat',
        icon: <HeartPlusIcon />,
        items: ['Baik untuk metabolisme tubuh', 'Meningkatkan daya tahan'],
      },
    ],
  },
  {
    name: 'Jamur Lingzhi',
    latin: 'Ganoderma lucidum',
    img: '/images/tentangjamur/JamurLingzhi.png',
    detail: [
      {
        title: 'Asal',
        icon: <MapPinIcon />,
        items: ['Banyak ditemukan di hutan hutan asia'],
      },
      {
        title: 'Kandungan Nutrisi',
        icon: <Mushroom2Icon />,
        items: ['Mengandung polisakarida dan triterpenoid'],
      },
      {
        title: 'Khasiat',
        icon: <HeartPlusIcon />,
        items: [
          'Meningkatkan sistem imun',
          'Obat herbal diabetes',
          'Obat herbal jantung',
        ],
      },
    ],
  },
  {
    name: 'Jamur Kuping',
    latin: 'Auricularia auricula-judae',
    img: '/images/tentangjamur/JamurKuping.png',
    detail: [
      {
        title: 'Asal',
        icon: <MapPinIcon />,
        items: ['Tumbuh di tumpukan jerami'],
      },
      {
        title: 'Kandungan Nutrisi',
        icon: <Mushroom2Icon />,
        items: ['Kaya protein', 'Mengandung vitamin b kompleks dan mineral'],
      },
      {
        title: 'Khasiat',
        icon: <HeartPlusIcon />,
        items: ['Baik untuk metabolisme tubuh', 'Meningkatkan daya tahan'],
      },
    ],
  },
  {
    name: 'Jamur Enoki',
    latin: 'Flammulina velutipes',
    img: '/images/tentangjamur/JamurEnoki.png',
    detail: [
      {
        title: 'Asal',
        icon: <MapPinIcon />,
        items: ['Banyak ditemukan di hutan hutan asia timur'],
      },
      {
        title: 'Kandungan Nutrisi',
        icon: <Mushroom2Icon />,
        items: ['Rendah kalori dan tinggi serat'],
      },
      {
        title: 'Khasiat',
        icon: <HeartPlusIcon />,
        items: ['Baik untuk pencernaan', 'Membantu menjaga berat badan'],
      },
    ],
  },
  {
    name: 'Jamur Kancing',
    latin: 'Agaricus bisporus',
    img: '/images/tentangjamur/JamurKancing.png',
    detail: [
      {
        title: 'Asal',
        icon: <MapPinIcon />,
        items: ['Hutan Eropa dan Amerika Utara'],
      },
      {
        title: 'Kandungan Nutrisi',
        icon: <Mushroom2Icon />,
        items: ['Tinggi protein dan rendah kalori'],
      },
      {
        title: 'Khasiat',
        icon: <HeartPlusIcon />,
        items: ['Menjaga berat badan', 'Meningkatkan kesehatan pencernaan'],
      },
    ],
  },
];

export default JAMUR_ITEMS;
