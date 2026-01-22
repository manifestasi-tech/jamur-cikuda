"use client";

import DarkBlueDotIcon from "@/components/icons/DarkBlueDotIcon";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import { KENAPA_CIKUDA_ITEMS } from "../Beranda.constants";
import { motion } from "framer-motion";
import {
  containerVariant,
  fadeLeftVariant,
  fadeUpVariant,
  listItemVariant,
} from "@/lib/motion";
import { useTranslations } from "next-intl";

const KenapaCikudaSection = () => {
  const t = useTranslations();

  return (
    <motion.div
      className='grid lg:grid-cols-2 gap-10 '
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image */}
      <motion.div
        variants={fadeLeftVariant}
        className='h-full w-full flex items-center justify-center'
      >
        <Image
          src='/images/general/KenapaCikuda.png'
          alt='Kenapa Cikuda'
          height={500}
          width={500}
        />
      </motion.div>

      {/* Content */}
      <motion.div variants={containerVariant}>
        {/* Title */}
        <motion.div
          variants={fadeUpVariant}
          className='flex flex-row gap-2 mt-10 lg:mt-0'
        >
          <DarkBlueDotIcon />
          <Typography variant='h4' weight='semibold'>
            {t("home.whyCikuda.title")}
          </Typography>
        </motion.div>

        {/* Headline */}
        <motion.div variants={fadeUpVariant} className='mt-6'>
          <Typography variant='h1' weight='bold'>
            {t("home.whyCikuda.headline")}
          </Typography>
        </motion.div>

        {/* List */}
        <motion.div variants={containerVariant} className='mt-5 space-y-4'>
          {KENAPA_CIKUDA_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={listItemVariant}
              className='flex flex-row items-center gap-6'
            >
              <div>{item.icon}</div>
              <Typography variant='h3'>{t(item.descKey)}</Typography>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default KenapaCikudaSection;
