'use client';

import DarkBlueDotIcon from '@/components/icons/DarkBlueDotIcon';
import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { MITRA_ITEMS } from '../Beranda/Beranda.constants';
import { TENTANG_KAMI_IMG_ITEMS } from './TentangKami.constants';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import {
  containerVariant,
  fadeUpVariant,
  fadeLeftVariant,
  fadeRightVariant,
  listItemVariant,
} from '@/lib/motion';
import { CountingNumber } from '@/components/ui/shadcn-io/counting-number';
import Link from 'next/link';

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const TentangKami = () => {
  return (
    <div className="overflow-x-hidden">
      <motion.div
        className="mt-8 md:mt-14 space-y-20 max-w-7xl mx-auto pb-10 px-4 xl:px-0 "
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        {/* Header */}
        <motion.div variants={containerVariant} className="space-y-6">
          <motion.div variants={fadeUpVariant} className="flex gap-2">
            <DarkBlueDotIcon />
            <Typography variant="h4" weight="semibold">
              Tentang Kami
            </Typography>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-0">
            <motion.div variants={fadeUpVariant}>
              <Typography variant="h1" color="black">
                Kenali Kami Lebih Dekat Lagi
              </Typography>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <Typography variant="h3" weight="regular">
                Kenali perjalanan kami dalam menghadirkan kebaikan dari alam
                melalui inovasi, riset, dan komitmen tinggi untuk menghasilkan
                produk jamur berkualitas.
              </Typography>
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Carousel */}
          <motion.div variants={fadeLeftVariant}>
            <div className="relative w-full max-w-[320px] sm:max-w-95 md:max-w-110 lg:max-w-122.5 mx-auto">
              <div className="absolute inset-0 bg-[#809CC1] rounded-[32px] sm:rounded-[48px] md:rounded-[70px] -translate-x-5 -translate-y-5 md:-translate-x-6 md:-translate-y-6" />
              <Carousel
                className="relative z-10 aspect-square"
                plugins={[Autoplay({ delay: 1800, stopOnInteraction: false })]}
                opts={{ align: 'center', loop: true }}>
                <CarouselContent>
                  {TENTANG_KAMI_IMG_ITEMS.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square rounded-[32px] sm:rounded-[48px] md:rounded-[70px] overflow-hidden">
                        <Image
                          src={item}
                          alt={item}
                          width={400}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={containerVariant} className="mt-6 space-y-6">
            <motion.div variants={fadeUpVariant}>
              <Typography variant="h2" weight="medium">
                Kami telah berpengalaman selama lebih dari
                <span className="text-main font-bold">
                  {' '}
                  5 tahun di industri jamur
                </span>
                , menghadirkan produk berkualitas dan layanan yang terpercaya.
              </Typography>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex gap-10">
              <div className="space-y-2">
                <Typography variant="h2" weight="semibold">
                  <CountingNumber
                    number={50}
                    inView={true}
                    transition={{ stiffness: 50, damping: 30 }}
                  />
                  +
                </Typography>
                <Typography variant="h3">Customer</Typography>
              </div>
              <div className="bg-unactive w-0.5" />
              <div className="space-y-2">
                <Typography variant="h2" weight="semibold">
                  <CountingNumber
                    number={100}
                    inView={true}
                    transition={{ stiffness: 70, damping: 30 }}
                  />
                  %
                </Typography>
                <Typography variant="h3">Feedback Positif</Typography>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <Button size="wide">
                <Link
                  href={`https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Hubungi Kami
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mitra */}
        <motion.div
          variants={containerVariant}
          className="flex flex-col items-center">
          <motion.div variants={fadeUpVariant}>
            <Typography weight="semibold">Mitra Kami</Typography>
          </motion.div>

          <div className="flex gap-4 md:gap-72 mt-8">
            {MITRA_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                variants={listItemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}>
                <Image src={item.img} alt={item.alt} width={100} height={100} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profesional */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            variants={fadeLeftVariant}
            className="flex flex-col gap-6 justify-center order-2 md:order-1">
            <Typography variant="h2" weight="bold">
              Dikelola oleh profesional
            </Typography>
            <Typography variant="h2" weight="regular">
              Setiap proses dijalankan oleh tim berpengalaman yang mengutamakan
              kualitas, efisiensi, dan kepercayaan pelanggan.
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            variants={fadeRightVariant}
            className="flex justify-center order-1 md:order-2">
            <Image
              src="/images/tentangkami/DikelolaProfesional.png"
              alt="Dikelola oleh profesional"
              width={500}
              height={500}
              unoptimized
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TentangKami;
