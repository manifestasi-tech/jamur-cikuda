import HomePageLayout from "@/components/layouts/HomePageLayout";
import TokoProduk from "@/components/views/TokoProduk";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toko Produk - Baglog, Bibit & Produk Jamur Tiram",
  description:
    "Belanja produk JAMUR CIKUDA NUSANTARA: baglog miselium bergaransi, bibit jamur unggul, jamur tiram segar, jamur frozen, jamur kering, serbuk jamur, dan suplemen jamur kapsul.",
  keywords:
    "beli baglog jamur, bibit jamur unggul, baglog miselium, jamur tiram segar, jamur frozen, jamur kering, serbuk jamur, suplemen jamur kapsul, harga baglog, toko jamur online",
  openGraph: {
    title: "Toko Produk | Jamur Cikuda Nusantara",
    description:
      "Baglog bergaransi, bibit unggul, jamur segar, frozen, kering, serbuk & suplemen kapsul.",
    url: "/toko-produk",
    images: [
      {
        url: "/images/banner/Banner1.png",
        width: 1200,
        height: 630,
        alt: "Toko Produk Jamur Cikuda Nusantara",
      },
    ],
    type: "website",
  },
  alternates: { canonical: "/toko-produk" },
};

const TokoProdukPage = () => {
  return (
    <HomePageLayout>
      <TokoProduk />
    </HomePageLayout>
  );
};

export default TokoProdukPage;
