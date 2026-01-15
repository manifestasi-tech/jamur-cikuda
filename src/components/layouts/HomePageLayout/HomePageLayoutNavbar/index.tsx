'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import { NAVIGATION_MENU_ITEMS } from '../HomePageLayout.constants';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const HomePageLayoutNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-background shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 pr-2">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Link href="/">
            <Image
              src={'/images/logo/JamurCikudaNusantara.png'}
              alt="Logo Jamur Cikuda Nusantara"
              width={80}
              height={80}
              className="w-18 md:w-20"
            />
          </Link>
          <Typography variant="h3" weight="bold" className="hidden md:block">
            Jamur Cikuda
          </Typography>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex flex-row gap-4">
          {NAVIGATION_MENU_ITEMS.map((item) => {
            const isActive = item.href === pathname;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn('hover:underline ', isActive && 'font-bold')}>
                <Typography
                  variant="body"
                  weight="regular"
                  className={cn(
                    'transition-colors',
                    isActive
                      ? 'font-bold! text-main underline'
                      : 'text-unactive hover:text-black'
                  )}>
                  {item.label}
                </Typography>
              </Link>
            );
          })}
        </div>

        {/* Contact Us */}
        <div className="hidden lg:block">
          <Button>
            {' '}
            <Link
              href={`https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`}
              target="_blank"
              rel="noopener noreferrer">
              Hubungi Kami
            </Link>
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          {mobileMenuOpen ? (
            <X className="w-8 h-8 text-primary" />
          ) : (
            <Menu className="w-8 h-8 text-primary" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white absolute w-40 border border-zinc-200 shadow-lg rounded-3xl right-1 top-18">
          <div className="flex flex-col gap-4 p-3">
            {NAVIGATION_MENU_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:underline">
                <Typography
                  variant="body"
                  weight="regular"
                  className="transition-colors hover:text-main">
                  {item.label}
                </Typography>
              </Link>
            ))}
            <Button>
              <Link
                href={`https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`}
                target="_blank"
                rel="noopener noreferrer">
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default HomePageLayoutNavbar;
