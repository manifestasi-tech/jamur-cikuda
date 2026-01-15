import HomePageLayout from '@/components/layouts/HomePageLayout';
import TokoProduk from '@/components/views/TokoProduk';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jamur Cikuda',
  description:
    'Belanja produk JAMUR CIKUDA: baglog miselium bergaransi, bibit jamur unggul, jamur tiram segar, jamur frozen, jamur kering, serbuk jamur, dan suplemen jamur kapsul.',
  keywords:
    'beli baglog jamur, bibit jamur unggul, baglog miselium, jamur tiram segar, jamur frozen, jamur kering, serbuk jamur, suplemen jamur kapsul, harga baglog',
  openGraph: {
    title: 'Toko Produk JAMUR CIKUDA | Baglog, Bibit & Produk Jamur',
    description:
      'Baglog bergaransi, bibit unggul, jamur segar, frozen, kering, serbuk & suplemen kapsul.',
    url: 'https://jamurcikuda.com/toko-produk',
    siteName: 'JAMUR CIKUDA',
    images: [{ url: '/images/banner/Banner1.png', width: 1200, height: 630 }],
    locale: 'id_ID',
    type: 'website',
  },
  alternates: { canonical: 'https://jamurcikuda.com/toko-produk' },
  robots: { index: true, follow: true },
};

const TokoProdukPage = () => {
  return (
    <HomePageLayout>
      <TokoProduk />
    </HomePageLayout>
  );
};

export default TokoProdukPage;
