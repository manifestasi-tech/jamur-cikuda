# Panduan Multilingual (Indonesia & English)

Website Jamur Cikuda Nusantara sekarang mendukung 2 bahasa: **Indonesia**
(default) dan **English**.

## Struktur Implementasi

### 1. Routing

- URL untuk Indonesia: `/` atau `/id/...`
- URL untuk English: `/en/...`
- Middleware otomatis mendeteksi bahasa berdasarkan URL

### 2. File Konfigurasi

- **`src/i18n/routing.ts`** - Konfigurasi routing locale
- **`src/i18n/request.ts`** - Request configuration
- **`src/middleware.ts`** - Middleware untuk locale detection
- **`messages/id.json`** - Terjemahan Bahasa Indonesia
- **`messages/en.json`** - Terjemahan Bahasa Inggris

### 3. Komponen

- **LanguageSwitcher** - Tombol untuk ganti bahasa (ada di navbar)
- Semua Link menggunakan `import { Link } from '@/i18n/routing'`
- Terjemahan menggunakan `useTranslations()` hook

## Cara Menggunakan

### Menambah Terjemahan Baru

1. Edit file `messages/id.json` dan `messages/en.json`
2. Tambahkan key baru, contoh:

```json
// messages/id.json
{
  "products": {
    "title": "Produk Kami",
    "newKey": "Teks baru di sini"
  }
}

// messages/en.json
{
  "products": {
    "title": "Our Products",
    "newKey": "New text here"
  }
}
```

3. Gunakan di komponen:

```tsx
import { useTranslations } from "next-intl";

function MyComponent() {
  const t = useTranslations("products");

  return <h1>{t("newKey")}</h1>;
}
```

### Menggunakan Link

Selalu gunakan Link dari i18n routing:

```tsx
import { Link } from "@/i18n/routing";

<Link href='/tentang-kami'>Tentang Kami</Link>;
```

Link akan otomatis disesuaikan dengan locale yang aktif.

## Testing

1. Akses website di `/` (Bahasa Indonesia)
2. Klik tombol **EN** di navbar untuk ganti ke English
3. Klik tombol **ID** untuk kembali ke Indonesia
4. Semua text di navbar, footer, dan CTA akan berubah sesuai bahasa

## URL Examples

- Homepage ID: `http://localhost:3000/`
- Homepage EN: `http://localhost:3000/en`
- Tentang Kami ID: `http://localhost:3000/tentang-kami`
- About Us EN: `http://localhost:3000/en/tentang-kami`

## SEO

Metadata sudah dikonfigurasi untuk mendukung multi-language:

- `hreflang` tags otomatis
- Alternate URLs untuk SEO
- Locale-aware sitemap

## Environment Variables

Tidak ada env variable tambahan yang diperlukan untuk i18n.
