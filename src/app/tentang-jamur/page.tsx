import HomePageLayout from '@/components/layouts/HomePageLayout';
import TentangJamur from '@/components/views/TentangJamur';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jamur Cikuda',
  description:
    'Pelajari segala hal tentang jamur : manfaat kesehatan, kandungan nutrisi, teknik budidaya profesional, cara pengolahan, dan tips penyimpanan jamur segar.',
  keywords:
    'jamur , manfaat jamur , nutrisi jamur, cara budidaya jamur, teknik budidaya jamur , kandungan jamur, pengolahan jamur',
  openGraph: {
    title: 'Tentang Jamur  | Manfaat & Cara Budidaya',
    description:
      'Panduan lengkap jamur : manfaat kesehatan, nutrisi, teknik budidaya, dan pengolahan.',
    url: 'https://jamurcikuda.com/tentang-jamur', // change
    siteName: 'JAMUR CIKUDA',
    images: [{ url: '/images/banner/Banner1.png', width: 1200, height: 630 }],
    locale: 'id_ID',
    type: 'article',
  },
  alternates: { canonical: 'https://jamurcikuda.com/tentang-jamur' }, //change
  robots: { index: true, follow: true },
};

const TentangJamurPage = () => {
  return (
    <HomePageLayout>
      <TentangJamur />
    </HomePageLayout>
  );
};

export default TentangJamurPage;
