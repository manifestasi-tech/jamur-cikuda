'use client';

import DarkBlueDotIcon from '@/components/icons/DarkBlueDotIcon';
import Typography from '@/components/ui/typography';
import { KERJASAMA_INVESTOR_ITEMS } from '../PelayananKami.constants';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import DarkBlueDot2Icon from '@/components/icons/DarkBlueDot2Icon';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import {
  containerVariant,
  fadeUpVariant,
  fadeLeftVariant,
  fadeRightVariant,
  listItemVariant,
} from '@/lib/motion';
import Link from 'next/link';

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const PeluangKerjasamaUmum = () => {
  return (
    <motion.div
      className="space-y-9"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}>
      {/* Section Header */}
      <motion.div
        variants={fadeUpVariant}
        className="flex items-center justify-center gap-2">
        <DarkBlueDotIcon />
        <Typography variant="h4" weight="semibold">
          Potensi Kerjasama untuk Umum
        </Typography>
      </motion.div>

      {/* Content */}
      <motion.div className="space-y-8" variants={containerVariant}>
        {KERJASAMA_INVESTOR_ITEMS.map((item, index) => {
          const isReverse = index % 2 === 1;

          return (
            <motion.div
              key={index}
              variants={listItemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.4,
              }}
              className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-[#737373] w-90 md:w-full mx-auto">
              {/* Image */}
              <motion.div
                variants={isReverse ? fadeRightVariant : fadeLeftVariant}
                className={cn(
                  'order-1',
                  isReverse && 'md:order-2 flex justify-end'
                )}>
                <Image
                  src={item.img}
                  alt={item.header}
                  width={500}
                  height={500}
                  className={cn(
                    'md:rounded-l-xl rounded-t-xl md:rounded-t-none',
                    isReverse && 'md:rounded-l-none md:rounded-r-xl'
                  )}
                />
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeUpVariant}
                className={cn(
                  'order-2 space-y-4 flex flex-col justify-center p-4 lg:p-0',
                  isReverse && 'md:order-1 lg:px-20 xl:px-32'
                )}>
                <Typography variant="h2" weight="semibold">
                  {item.header}
                </Typography>

                <Typography variant="h3" weight="semibold" className="lg:mt-8">
                  Detail Bisnis
                </Typography>

                <motion.div className="space-y-3" variants={containerVariant}>
                  {item.detail.map((detail, index) => (
                    <motion.div
                      key={index}
                      variants={listItemVariant}
                      className="flex items-start gap-2">
                      <DarkBlueDot2Icon className="shrink-0" />
                      <Typography
                        variant="h4"
                        weight="regular"
                        className="leading-snug">
                        {detail.label}
                        {detail.value && (
                          <span className="font-bold">: {detail.value}</span>
                        )}
                      </Typography>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA */}
      <motion.div variants={fadeUpVariant} className="flex justify-center">
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
  );
};

export default PeluangKerjasamaUmum;
