import HomePageLayout from "@/components/layouts/HomePageLayout";
import Beranda from "@/components/views/Beranda";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "Jamur Cikuda Nusantara - Pusat Budidaya & Produk Jamur Tiram Berkualitas",
  },
  description:
    "JAMUR CIKUDA NUSANTARA - Pusat budidaya jamur tiram, pelatihan budidaya, bibit jamur unggul, baglog miselium bergaransi, jamur frozen, jamur kering, serbuk jamur, dan suplemen jamur kapsul.",
  keywords:
    "jamur cikuda, jamur cikuda nusantara, budidaya jamur tiram, pelatihan budidaya jamur, bibit jamur unggul, baglog miselium, jamur frozen, jamur kering, serbuk jamur, suplemen jamur",
  openGraph: {
    title:
      "Jamur Cikuda Nusantara | Budidaya, Pelatihan & Produk Jamur Berkualitas",
    description:
      "Pusat budidaya jamur tiram, pelatihan, bibit unggul, baglog bergaransi, dan produk olahan jamur.",
    url: "/",
    images: [
      {
        url: "/images/banner/Banner1.png",
        width: 1200,
        height: 630,
        alt: "Jamur Cikuda Nusantara Banner",
      },
    ],
    type: "website",
  },
  alternates: { canonical: "/" },
};

const BerandaPage = () => {
  return (
    <HomePageLayout>
      <Beranda />
    </HomePageLayout>
  );
};

export default BerandaPage;
