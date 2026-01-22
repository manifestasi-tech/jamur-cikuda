"use client";

import Image from "next/image";
import {
  CONTACT_ITEMS,
  NAVIGATION_MENU_ITEMS,
} from "../HomePageLayout.constants";
import Link from "next/link";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import MapPinIcon from "@/components/icons/MapPinIcon";

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const HomePageLayoutFooter = () => {
  return (
    <footer>
      <div className='max-w-7xl mx-auto mb-10 px-4'>
        <div className='relative h-175 md:h-105 w-full overflow-hidden'>
          {/* Google Maps */}
          <iframe
            src='https://www.google.com/maps?q=Jamur+Cikuda+Bogor&output=embed'
            className='h-full w-full border-0'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />

          {/* Info Card */}
          <div className='absolute md:left-2 -bottom-14 md:-bottom-20 z-10 w-full md:w-[320px] bg-white -translate-y-1/2'>
            <div className='space-y-3 p-2 md:p-5'>
              <div className='flex items-center gap-2'>
                <CalendarIcon />
                <Typography variant='body'>Senin – Jumat</Typography>
              </div>

              <div className='flex items-center gap-2'>
                <ClockIcon />
                <Typography variant='body'>09.00 – 20.00</Typography>
              </div>

              <div className='flex items-start gap-2'>
                <MapPinIcon className='shrink-0' />
                <Typography variant='body'>
                  JHPR+8P9, Cikuda Wanaherang, Parung Panjang, Bogor Regency,
                  West Java 16360
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className='bg-main py-8 md:pt-10 md:pb-5'>
        {" "}
        <div className='max-w-7xl mx-auto space-y-14 px-8 xl:px-0'>
          <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-0'>
            <Typography variant='h2' weight='regular' color='white'>
              Wujudkan Bisnis Jamur Impian Anda Sekarang
            </Typography>
            <Button asChild variant={"secondary"} size={"wide"}>
              <Link
                href={`https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`}
                target='_blank'
                rel='noopener noreferrer'
              >
                Hubungi Kami
              </Link>
            </Button>
          </div>
          <div className='bg-[#D9D9D9] h-2'></div>
          <div className='grid md:grid-cols-4 gap-8'>
            {/* Logo */}
            <div>
              <Image
                src={"/images/logo/JamurCikudaNusantara.png"}
                alt='Logo Jamur Cikuda Nusantara'
                width={80}
                height={80}
              />
              <Typography variant={"base"} weight={"regular"} color={"white"}>
                Jamur Cikuda
              </Typography>
            </div>
            {/*Navigation */}
            <div className='flex flex-col gap-3 md:pl-16'>
              {NAVIGATION_MENU_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className='hover:underline decoration-white'
                >
                  <Typography variant={"base"} weight={"regular"} color='white'>
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </div>
            {/* Address */}
            <div>
              <Typography variant={"base"} weight={"regular"} color={"white"}>
                JHPR+8P9, Cikuda Wanaherang, Parung Panjang, Bogor Regency, West
                Java 16360
              </Typography>
            </div>

            {/* Contacts */}
            <div className='flex flex-col gap-2'>
              {CONTACT_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline decoration-white'
                >
                  <Typography
                    variant={"base"}
                    weight={"regular"}
                    color={"white"}
                  >
                    {item.label}: {item.phone}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>
          <div className='flex md:justify-center'>
            <Typography color={"white"} weight={"regular"}>
              {" "}
              Copyright © 2026 Jamur Cikuda
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomePageLayoutFooter;
