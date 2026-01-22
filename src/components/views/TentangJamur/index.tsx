"use client";

import DarkBlueDotIcon from "@/components/icons/DarkBlueDotIcon";
import Typography from "@/components/ui/typography";
import JAMUR_ITEMS from "./TentangJamur.constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariant,
  fadeUpVariant,
  fadeLeftVariant,
  fadeRightVariant,
  listItemVariant,
} from "@/lib/motion";
import { useTranslations } from "next-intl";

const TentangJamur = () => {
  const t = useTranslations();

  return (
    <div className='mt-8 md:mt-14 space-y-10 md:space-y-20 max-w-7xl mx-auto pb-10 px-4 xl:px-0  overflow-x-hidden'>
      {/* Header */}
      <motion.div
        variants={containerVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='space-y-6'
      >
        <motion.div variants={fadeUpVariant} className='flex gap-2'>
          <DarkBlueDotIcon />
          <Typography variant='h4' weight='semibold'>
            {t("mushroomPage.title")}
          </Typography>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-6 md:gap-0'>
          <motion.div variants={fadeUpVariant}>
            <Typography variant='h1' color='black'>
              {t("mushroomPage.headline")}
            </Typography>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <Typography variant='h3' weight='regular'>
              {t("mushroomPage.description")}
            </Typography>
          </motion.div>
        </div>
      </motion.div>

      {/* Items */}
      <div className='space-y-14'>
        {JAMUR_ITEMS.map((item, index) => {
          const isReverse = index % 2 === 0;

          return (
            <motion.div
              key={index}
              className='grid grid-cols-12 gap-y-6'
              variants={containerVariant}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Image */}
              <motion.div
                variants={isReverse ? fadeRightVariant : fadeLeftVariant}
                className={cn(
                  "order-1 col-span-12 md:col-span-7",
                  isReverse && "md:order-2 flex justify-end",
                )}
              >
                <Image
                  src={item.img}
                  alt={t(item.latinKey)}
                  width={700}
                  height={700}
                  unoptimized
                />
              </motion.div>

              {/* Content */}
              <motion.div
                variants={fadeUpVariant}
                className={cn(
                  "order-2 flex flex-col justify-center col-span-12 md:col-span-5 pt-4 md:pt-0 md:p-4 xl:px-0",
                  isReverse && "md:order-1",
                )}
              >
                <Typography variant='h1' weight='semibold' color='main'>
                  {t(item.nameKey)}
                </Typography>

                <Typography
                  variant='h2'
                  weight='regular'
                  color='black'
                  className='italic'
                >
                  {t(item.latinKey)}
                </Typography>

                {/* Detail */}
                <div className='space-y-4 mt-5'>
                  {item.detail.map((detail, dIndex) => (
                    <motion.div
                      key={dIndex}
                      variants={containerVariant}
                      initial='hidden'
                      whileInView='visible'
                      viewport={{ once: true, amount: 0.4 }}
                      className='space-y-2'
                    >
                      <div className='flex gap-2 items-center'>
                        {detail.icon}
                        <Typography variant='h4' weight='medium'>
                          {t(detail.titleKey)}
                        </Typography>
                      </div>

                      {detail.itemKeys.map((itemKey, tIndex) => (
                        <motion.div
                          key={tIndex}
                          variants={listItemVariant}
                          initial='hidden'
                          whileInView='visible'
                          viewport={{ once: true, amount: 0.5 }}
                          className='flex gap-2 ps-8'
                        >
                          <span className='text-xl'>•</span>
                          <Typography
                            variant='h4'
                            weight='medium'
                            className='leading-snug'
                          >
                            {t(itemKey)}
                          </Typography>
                        </motion.div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TentangJamur;
