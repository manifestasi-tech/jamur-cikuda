"use client";

import DarkBlueDotIcon from "@/components/icons/DarkBlueDotIcon";
import Typography from "@/components/ui/typography";
import { MITRA_ITEMS } from "../Beranda.constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariant, fadeUpVariant, logoVariant } from "@/lib/motion";
import { useTranslations } from "next-intl";

const TentangKamiSection = () => {
  const t = useTranslations();

  return (
    <motion.div
      id='tentangkami'
      className='pt-28'
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title Section */}
      <motion.div variants={fadeUpVariant} className='flex flex-row gap-2'>
        <DarkBlueDotIcon />
        <Typography variant='h4' weight='semibold'>
          {t("home.aboutSection.title")}
        </Typography>
      </motion.div>

      {/* Main Content */}
      <div className='flex flex-col md:flex-row md:justify-between gap-10 mt-6 w-full'>
        <motion.div variants={fadeUpVariant} className='md:w-2/5'>
          <Typography variant='h1' weight='bold'>
            {t("home.aboutSection.headline")}
          </Typography>
        </motion.div>

        <motion.div variants={fadeUpVariant} className='md:w-3/5'>
          <Typography variant='h3' weight='regular' className='text-justify'>
            {t("home.aboutSection.description")}
          </Typography>
        </motion.div>
      </div>

      {/* Mitra */}
      <motion.div
        variants={fadeUpVariant}
        className='mt-9 flex flex-col items-center justify-center'
      >
        <Typography weight='semibold'>
          {t("home.aboutSection.partners")}
        </Typography>

        <motion.div className='flex flex-row gap-4 md:gap-72 mt-8'>
          {MITRA_ITEMS.map((item) => (
            <motion.div key={item.alt} variants={logoVariant}>
              <Image src={item.img} alt={item.alt} width={100} height={100} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TentangKamiSection;
