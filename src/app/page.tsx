import HomePageLayout from '@/components/layouts/HomePageLayout';
import Beranda from '@/components/views/Beranda';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jamur Cikuda',
  description:
    'JAMUR CIKUDA - Pusat budidaya jamur tiram, pelatihan budidaya, bibit jamur unggul, baglog miselium bergaransi, jamur frozen, jamur kering, serbuk jamur, dan suplemen jamur kapsul.',
  keywords:
    'jamur cikuda, budidaya jamur tiram, pelatihan budidaya jamur, bibit jamur unggul, baglog miselium, jamur frozen, jamur kering, serbuk jamur, suplemen jamur',
  openGraph: {
    title: 'JAMUR CIKUDA | Budidaya, Pelatihan & Produk Jamur Berkualitas',
    description:
      'Pusat budidaya jamur tiram, pelatihan, bibit unggul, baglog bergaransi, dan produk olahan jamur.',
    url: 'https://jamurcikuda.com', // change
    siteName: 'JAMUR CIKUDA',
    images: [{ url: '/images/banner/Banner1.png', width: 1200, height: 630 }],
    locale: 'id_ID',
    type: 'website',
  },
  alternates: { canonical: 'https://jamurcikuda.com' }, // change
  robots: { index: true, follow: true },
};

const BerandaPage = () => {
  return (
    <HomePageLayout>
      <Beranda />
    </HomePageLayout>
  );
};

export default BerandaPage;
