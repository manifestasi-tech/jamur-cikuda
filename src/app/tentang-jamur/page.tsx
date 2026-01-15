import HomePageLayout from "@/components/layouts/HomePageLayout";
import TentangJamur from "@/components/views/TentangJamur";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Jamur Tiram - Manfaat, Nutrisi & Cara Budidaya",
  description:
    "Pelajari segala hal tentang jamur tiram: manfaat kesehatan, kandungan nutrisi, teknik budidaya profesional, cara pengolahan, dan tips penyimpanan jamur segar.",
  keywords:
    "jamur tiram, manfaat jamur tiram, nutrisi jamur, cara budidaya jamur, teknik budidaya jamur tiram, kandungan jamur, pengolahan jamur tiram",
  openGraph: {
    title: "Tentang Jamur Tiram | Manfaat & Cara Budidaya",
    description:
      "Panduan lengkap jamur tiram: manfaat kesehatan, nutrisi, teknik budidaya, dan pengolahan.",
    url: "/tentang-jamur",
    images: [
      {
        url: "/images/banner/Banner1.png",
        width: 1200,
        height: 630,
        alt: "Panduan Jamur Tiram",
      },
    ],
    type: "article",
  },
  alternates: { canonical: "/tentang-jamur" },
};

const TentangJamurPage = () => {
  return (
    <HomePageLayout>
      <TentangJamur />
    </HomePageLayout>
  );
};

export default TentangJamurPage;
