import Script from "next/script";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jamurcikuda.com";

interface JsonLdProps {
  type:
    | "Organization"
    | "LocalBusiness"
    | "Product"
    | "Article"
    | "BreadcrumbList"
    | "WebSite";
  data?: Record<string, unknown>;
}

export function JsonLd({ type, data }: JsonLdProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Jamur Cikuda Nusantara",
          alternateName: "Jamur Cikuda",
          url: siteUrl,
          logo: `${siteUrl}/images/logo/logo.png`,
          description:
            "Pusat budidaya jamur tiram profesional, pelatihan, bibit unggul, baglog bergaransi, dan produk olahan jamur berkualitas tinggi.",
          foundingDate: "2020",
          address: {
            "@type": "PostalAddress",
            addressCountry: "ID",
            addressLocality: "Cikuda",
            addressRegion: "Jawa Barat",
          },
          sameAs: [
            // Add your social media links here
            // 'https://www.facebook.com/jamurcikuda',
            // 'https://www.instagram.com/jamurcikuda',
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            availableLanguage: ["Indonesian"],
          },
          ...data,
        };

      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${siteUrl}/#localbusiness`,
          name: "Jamur Cikuda Nusantara",
          image: `${siteUrl}/images/banner/Banner1.png`,
          url: siteUrl,
          description:
            "Pusat budidaya jamur tiram, pelatihan budidaya, penjualan bibit jamur unggul, baglog miselium bergaransi, dan produk olahan jamur.",
          priceRange: "Rp",
          address: {
            "@type": "PostalAddress",
            addressCountry: "ID",
            addressLocality: "Cikuda",
            addressRegion: "Jawa Barat",
          },
          geo: {
            "@type": "GeoCoordinates",
            // Add your coordinates
            // latitude: -6.xxx,
            // longitude: 106.xxx,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "08:00",
              closes: "14:00",
            },
          ],
          ...data,
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Jamur Cikuda Nusantara",
          url: siteUrl,
          description:
            "Website resmi Jamur Cikuda Nusantara - Pusat budidaya jamur tiram dan produk olahan jamur berkualitas.",
          inLanguage: "id-ID",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteUrl}/toko-produk?search={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          ...data,
        };

      case "Product":
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          ...data,
        };

      case "Article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          publisher: {
            "@type": "Organization",
            name: "Jamur Cikuda Nusantara",
            logo: {
              "@type": "ImageObject",
              url: `${siteUrl}/images/logo/logo.png`,
            },
          },
          ...data,
        };

      case "BreadcrumbList":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          ...data,
        };

      default:
        return data;
    }
  };

  return (
    <Script
      id={`json-ld-${type.toLowerCase()}`}
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
      strategy='afterInteractive'
    />
  );
}

// Pre-built structured data components for common use cases
export function OrganizationJsonLd() {
  return <JsonLd type='Organization' />;
}

export function LocalBusinessJsonLd() {
  return <JsonLd type='LocalBusiness' />;
}

export function WebSiteJsonLd() {
  return <JsonLd type='WebSite' />;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const breadcrumbData = {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd type='BreadcrumbList' data={breadcrumbData} />;
}

interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
  sku?: string;
}

export function ProductJsonLd({
  name,
  description,
  image,
  price,
  currency = "IDR",
  availability = "InStock",
  sku,
}: ProductJsonLdProps) {
  const productData = {
    name,
    description,
    image: `${siteUrl}${image}`,
    brand: {
      "@type": "Brand",
      name: "Jamur Cikuda Nusantara",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: price,
      availability: `https://schema.org/${availability}`,
      seller: {
        "@type": "Organization",
        name: "Jamur Cikuda Nusantara",
      },
    },
    ...(sku && { sku }),
  };

  return <JsonLd type='Product' data={productData} />;
}
