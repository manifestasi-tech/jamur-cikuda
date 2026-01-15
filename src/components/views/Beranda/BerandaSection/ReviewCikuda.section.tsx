"use client";

import DarkBlueDotIcon from "@/components/icons/DarkBlueDotIcon";
import Typography from "@/components/ui/typography";
import { REVIEW_CIKUDA_ITEMS } from "../Beranda.constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { containerVariant, fadeUpVariant } from "@/lib/motion";

const PelayananKamiSection = () => {
  return (
    <motion.section
      className='space-y-10'
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title Section */}
      <motion.div
        variants={fadeUpVariant}
        className='flex flex-col items-center gap-6 text-center'
      >
        <div className='flex items-center gap-2'>
          <DarkBlueDotIcon />
          <Typography variant='h4' weight='semibold'>
            Review Cikuda
          </Typography>
        </div>

        <Typography variant='h1' weight='bold'>
          Apa Kata Para Pelanggan Kami
        </Typography>
      </motion.div>

      {/* Carousel */}
      <motion.div variants={fadeUpVariant}>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
          className='w-full'
        >
          <CarouselContent className='ml-0'>
            {REVIEW_CIKUDA_ITEMS.map((item, index) => (
              <CarouselItem
                key={index}
                className='basis-full md:basis-1/3 py-4 pl-0 px-4'
              >
                <div className='h-full w-full flex flex-col items-center text-center p-8 gap-4 rounded-xl shadow-[0_6px_10px_rgba(0,0,0,0.15)] bg-white'>
                  <Typography>{item.desc}</Typography>
                  <Typography weight='semibold'>{item.name}</Typography>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </motion.section>
  );
};

export default PelayananKamiSection;
