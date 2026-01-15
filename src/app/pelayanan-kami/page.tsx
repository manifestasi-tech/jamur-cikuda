import HomePageLayout from '@/components/layouts/HomePageLayout';
import PelayananKami from '@/components/views/PelayananKami';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jamur Cikuda',
  description:
    'Layanan lengkap JAMUR CIKUDA: budidaya jamur tiram, pelatihan budidaya profesional, pembuatan bibit unggul, baglog miselium bergaransi, jamur frozen, kering, serbuk, dan suplemen kapsul.',
  keywords:
    'layanan budidaya jamur, pelatihan budidaya jamur, jual bibit jamur, baglog bergaransi, konsultasi budidaya, jamur frozen, suplemen jamur, layanan jamur cikuda',
  openGraph: {
    title: 'Layanan Kami | JAMUR CIKUDA',
    description:
      'Budidaya, pelatihan, bibit unggul, baglog bergaransi, dan produk olahan jamur.',
    url: 'https://jamurcikuda.com/pelayanan-kami', // change
    siteName: 'JAMUR CIKUDA',
    images: [{ url: '/images/banner/Banner1.png', width: 1200, height: 630 }],
    locale: 'id_ID',
    type: 'website',
  },
  alternates: { canonical: 'https://jamurcikuda.com/pelayanan-kami' }, // change
  robots: { index: true, follow: true },
};

const PelayananKamiPage = () => {
  return (
    <HomePageLayout>
      <PelayananKami />
    </HomePageLayout>
  );
};

export default PelayananKamiPage;
