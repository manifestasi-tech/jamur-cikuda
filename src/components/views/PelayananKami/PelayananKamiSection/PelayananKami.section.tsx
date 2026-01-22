"use client";

import DarkBlueDotIcon from "@/components/icons/DarkBlueDotIcon";
import Typography from "@/components/ui/typography";
import { motion } from "framer-motion";

import {
  containerVariant,
  fadeUpVariant,
  fadeRightVariant,
} from "@/lib/motion";
import { useTranslations } from "next-intl";

const PelayananKamiSection = () => {
  const t = useTranslations();

  return (
    <motion.div
      className='mt-8 md:mt-14'
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title */}
      <motion.div variants={fadeUpVariant} className='flex flex-row gap-2'>
        <DarkBlueDotIcon />
        <Typography variant='h4' weight='semibold'>
          {t("servicesPage.title")}
        </Typography>
      </motion.div>

      {/* Content */}
      <motion.div
        className='grid md:grid-cols-2 pt-6 gap-6 md:gap-0'
        variants={containerVariant}
      >
        {/* Headline */}
        <motion.div variants={fadeUpVariant}>
          <Typography variant='h1' color='black' className='md:w-3/5'>
            {t("servicesPage.headline")}
          </Typography>
        </motion.div>

        {/* Description */}
        <motion.div variants={fadeRightVariant}>
          <Typography variant='h3' weight='regular'>
            {t("home.services.description")}
          </Typography>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PelayananKamiSection;
