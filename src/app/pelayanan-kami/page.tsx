import HomePageLayout from "@/components/layouts/HomePageLayout";
import PelayananKami from "@/components/views/PelayananKami";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pelayanan Kami - Layanan Budidaya & Pelatihan Jamur",
  description:
    "Layanan lengkap JAMUR CIKUDA NUSANTARA: budidaya jamur tiram, pelatihan budidaya profesional, pembuatan bibit unggul, baglog miselium bergaransi, jamur frozen, kering, serbuk, dan suplemen kapsul.",
  keywords:
    "layanan budidaya jamur, pelatihan budidaya jamur, jual bibit jamur, baglog bergaransi, konsultasi budidaya, jamur frozen, suplemen jamur, layanan jamur cikuda nusantara",
  openGraph: {
    title: "Pelayanan Kami | Jamur Cikuda Nusantara",
    description:
      "Budidaya, pelatihan, bibit unggul, baglog bergaransi, dan produk olahan jamur.",
    url: "/pelayanan-kami",
    images: [
      {
        url: "/images/banner/Banner1.png",
        width: 1200,
        height: 630,
        alt: "Pelayanan Jamur Cikuda Nusantara",
      },
    ],
    type: "website",
  },
  alternates: { canonical: "/pelayanan-kami" },
};

const PelayananKamiPage = () => {
  return (
    <HomePageLayout>
      <PelayananKami />
    </HomePageLayout>
  );
};

export default PelayananKamiPage;
