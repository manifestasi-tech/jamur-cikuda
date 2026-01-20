import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/JsonLd";
import { GoogleAnalytics } from "@/components/analytics";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jamurcikuda.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Jamur Cikuda Nusantara - Pusat Budidaya & Produk Jamur Tiram Berkualitas",
    template: "%s | Jamur Cikuda Nusantara",
  },
  description:
    "JAMUR CIKUDA NUSANTARA - Pusat budidaya jamur tiram profesional, pelatihan budidaya, bibit jamur unggul, baglog miselium bergaransi, jamur frozen, jamur kering, serbuk jamur, dan suplemen jamur kapsul.",
  keywords: [
    "jamur cikuda",
    "jamur cikuda nusantara",
    "budidaya jamur tiram",
    "pelatihan budidaya jamur",
    "bibit jamur unggul",
    "baglog miselium",
    "jamur frozen",
    "jamur kering",
    "serbuk jamur",
    "suplemen jamur",
    "jamur tiram segar",
    "jual baglog jamur",
  ],
  authors: [{ name: "Jamur Cikuda Nusantara" }],
  creator: "Jamur Cikuda Nusantara",
  publisher: "Jamur Cikuda Nusantara",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Jamur Cikuda Nusantara",
    title:
      "Jamur Cikuda Nusantara - Pusat Budidaya & Produk Jamur Tiram Berkualitas",
    description:
      "Pusat budidaya jamur tiram profesional, pelatihan, bibit unggul, baglog bergaransi, dan produk olahan jamur berkualitas tinggi.",
    images: [
      {
        url: "/images/banner/Banner1.png",
        width: 1200,
        height: 630,
        alt: "Jamur Cikuda Nusantara - Budidaya Jamur Tiram",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamur Cikuda Nusantara - Pusat Budidaya & Produk Jamur Tiram",
    description:
      "Pusat budidaya jamur tiram profesional, pelatihan, bibit unggul, baglog bergaransi, dan produk olahan jamur.",
    images: ["/images/banner/Banner1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Uncomment and add your verification codes when ready
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: "Agriculture",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='id'>
      <head>
        <link rel='icon' href='/icon.png' sizes='any' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
      </head>
      <body>
        <GoogleAnalytics />
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        {children}
        <Toaster
          position='top-right'
          richColors
          toastOptions={{
            classNames: {
              toast: "rounded-xl border shadow-md",
              title: "text-base font-semibold",
            },
          }}
        />
      </body>
    </html>
  );
}
