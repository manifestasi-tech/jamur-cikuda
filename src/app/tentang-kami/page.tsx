import HomePageLayout from '@/components/layouts/HomePageLayout';
import TentangKami from '@/components/views/TentangKami';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jamur Cikuda',
  description:
    'JAMUR CIKUDA adalah pusat budidaya jamur tiram profesional yang melayani pelatihan, penjualan bibit unggul, baglog bergaransi, dan produk olahan jamur berkualitas tinggi.',
  keywords:
    'tentang jamur cikuda, profil perusahaan, budidaya jamur tiram, pelatihan jamur, bibit jamur cikuda, visi misi jamur cikuda',
  openGraph: {
    title: 'Tentang Kami | JAMUR CIKUDA',
    description:
      'Pusat budidaya jamur tiram profesional dengan pelatihan dan produk berkualitas.',
    url: 'https://jamurcikuda.com/tentang-kami', // change
    siteName: 'JAMUR CIKUDA',
    images: [{ url: '/images/banner/Banner1.png', width: 1200, height: 630 }],
    locale: 'id_ID',
    type: 'website',
  },
  alternates: { canonical: 'https://jamurcikuda.com/tentang-kami' }, // change
  robots: { index: true, follow: true },
};

const TentangKamiPage = () => {
  return (
    <HomePageLayout>
      <TentangKami />
    </HomePageLayout>
  );
};

export default TentangKamiPage;
