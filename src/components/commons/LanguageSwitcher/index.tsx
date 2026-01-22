"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = (params.locale as "id" | "en") || "id";

  const handleLanguageChange = () => {
    const newLocale = currentLocale === "id" ? "en" : "id";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      onClick={handleLanguageChange}
      variant='secondary'
      size='sm'
      className='gap-2'
    >
      <Languages size={18} />
      <span className='hidden md:inline'>
        {currentLocale === "id" ? "EN" : "ID"}
      </span>
    </Button>
  );
}
