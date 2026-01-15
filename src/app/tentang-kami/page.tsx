import HomePageLayout from "@/components/layouts/HomePageLayout";
import TentangKami from "@/components/views/TentangKami";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Profil Perusahaan",
  description:
    "JAMUR CIKUDA NUSANTARA adalah pusat budidaya jamur tiram profesional yang melayani pelatihan, penjualan bibit unggul, baglog bergaransi, dan produk olahan jamur berkualitas tinggi.",
  keywords:
    "tentang jamur cikuda, profil perusahaan, budidaya jamur tiram, pelatihan jamur, bibit jamur cikuda, visi misi jamur cikuda nusantara",
  openGraph: {
    title: "Tentang Kami | Jamur Cikuda Nusantara",
    description:
      "Pusat budidaya jamur tiram profesional dengan pelatihan dan produk berkualitas.",
    url: "/tentang-kami",
    images: [
      {
        url: "/images/banner/Banner1.png",
        width: 1200,
        height: 630,
        alt: "Tentang Jamur Cikuda Nusantara",
      },
    ],
    type: "website",
  },
  alternates: { canonical: "/tentang-kami" },
};

const TentangKamiPage = () => {
  return (
    <HomePageLayout>
      <TentangKami />
    </HomePageLayout>
  );
};

export default TentangKamiPage;
