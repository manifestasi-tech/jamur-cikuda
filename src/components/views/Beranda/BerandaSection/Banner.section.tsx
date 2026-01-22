"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Typography from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { BANNER_ITEMS } from "../Beranda.constants";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CarouselBanner = () => {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Carousel
        plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
        opts={{ align: "center", loop: true }}
        className='group relative mt-5 overflow-hidden rounded-lg shadow-lg'
      >
        <CarouselContent>
          {BANNER_ITEMS.map((item, index) => (
            <CarouselItem key={index}>
              <div className='relative flex h-150 w-full items-center justify-center'>
                {/* Background Image */}
                <Image
                  src={item.img}
                  alt={t(item.titleKey)}
                  fill
                  className='object-cover'
                  priority
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-black/40' />

                {/* Text Content */}
                <div className='absolute z-10 text-center '>
                  <Typography
                    weight={"bold"}
                    variant={"h1"}
                    className='md:text-[48px] w-2/3 md:w-full mx-auto'
                    color={"white"}
                  >
                    {t(item.titleKey)}
                  </Typography>
                  <Typography
                    variant={"h4"}
                    weight={"regular"}
                    color={"white"}
                    className='mt-6 px-8 md:px-0 md:hidden'
                  >
                    {t(item.descKey)}
                  </Typography>
                  <Typography
                    variant={"h1"}
                    weight={"regular"}
                    color={"white"}
                    className='mt-6 px-4 md:px-0 hidden md:block'
                  >
                    {t(item.descKey)}
                  </Typography>
                  <Button size='wide' className='mt-14'>
                    <Link href={item.action}>{t(item.actionKey)}</Link>
                  </Button>
                </div>

                {/* Navigation */}
                <CarouselPrevious className='absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-white/30 p-3 opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-white/50' />
                <CarouselNext className='absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-white/30 p-3 opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto hover:bg-white/50' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};

export default CarouselBanner;
