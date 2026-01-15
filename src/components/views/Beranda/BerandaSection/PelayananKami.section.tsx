'use client';

import DarkBlueDotIcon from '@/components/icons/DarkBlueDotIcon';
import Typography from '@/components/ui/typography';
import { PELAYANAN_KAMI_ITEMS } from '../Beranda.constants';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { containerVariant, fadeUpVariant, cardVariant } from '@/lib/motion';

const PelayananKamiSection = () => {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>
      {/* Title */}
      <motion.div
        variants={fadeUpVariant}
        className="flex flex-col items-center gap-6">
        <div className="flex flex-row gap-2">
          <DarkBlueDotIcon />
          <Typography variant="h4" weight="semibold">
            Pelayanan Kami
          </Typography>
        </div>

        <Typography variant="h1" weight="bold" color="black">
          Semua Ada Disini
        </Typography>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-12">
        {PELAYANAN_KAMI_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
            className="relative flex justify-center">
            <Image
              src={item.img}
              alt={item.title}
              width={450}
              height={450}
              className="object-fill rounded-xl"
            />

            <div className="absolute z-10 m-8 bg-main/70 p-3 rounded-xl bottom-0 space-y-2">
              <Typography variant="h4" color="white">
                {item.title}
              </Typography>
              <Typography variant="caption" color="white">
                {item.desc}
              </Typography>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PelayananKamiSection;
