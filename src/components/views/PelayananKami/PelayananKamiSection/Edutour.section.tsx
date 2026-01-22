"use client";

import DarkBlueDotIcon from "@/components/icons/DarkBlueDotIcon";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import { DETAIL_EDITOUR_ITEMS } from "../PelayananKami.constants";
import DarkBlueDot2Icon from "@/components/icons/DarkBlueDot2Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  containerVariant,
  fadeUpVariant,
  fadeLeftVariant,
  cardVariant,
  listItemVariant,
} from "@/lib/motion";
import { useTranslations } from "next-intl";

const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const EdutourSection = () => {
  const t = useTranslations();

  return (
    <motion.div
      className='space-y-9'
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title */}
      <motion.div
        variants={fadeUpVariant}
        className='flex flex-row gap-2 justify-center'
      >
        <DarkBlueDotIcon />
        <Typography variant='h4' weight='semibold'>
          {t("servicesPage.edutour.title")}
        </Typography>
      </motion.div>

      {/* Card */}
      <motion.div
        variants={cardVariant}
        className='grid md:grid-cols-2 border border-[#737373] rounded-xl w-90 mx-auto md:w-full'
      >
        {/* Image */}
        <motion.div variants={fadeLeftVariant}>
          <Image
            src='/images/pelayanan/Edutour.png'
            alt='Edutour'
            height={500}
            width={500}
            className='rounded-t-xl md:rounded-l-xl md:rounded-tr-none md:rounded-br-none mx-auto md:mx-0'
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariant}
          className='flex flex-col gap-5 justify-center p-4 lg:p-0'
        >
          <motion.div variants={fadeUpVariant}>
            <Typography variant='h2' weight='semibold' color='black'>
              {t("servicesPage.edutour.cardTitle")}
            </Typography>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <Typography variant='h3' weight='regular'>
              {t("servicesPage.edutour.detailTitle")}
            </Typography>
          </motion.div>

          {/* List */}
          <motion.div className='space-y-3'>
            <motion.div
              variants={listItemVariant}
              className='flex flex-row gap-3 w-11/12'
            >
              <DarkBlueDot2Icon className='shrink-0' />
              <Typography variant='h4' weight='regular'>
                {t("servicesPage.edutour.details.item1")}
              </Typography>
            </motion.div>
            <motion.div
              variants={listItemVariant}
              className='flex flex-row gap-3 w-11/12'
            >
              <DarkBlueDot2Icon className='shrink-0' />
              <Typography variant='h4' weight='regular'>
                {t("servicesPage.edutour.details.item2")}
              </Typography>
            </motion.div>
            <motion.div
              variants={listItemVariant}
              className='flex flex-row gap-3 w-11/12'
            >
              <DarkBlueDot2Icon className='shrink-0' />
              <Typography variant='h4' weight='regular'>
                {t("servicesPage.edutour.details.item3")}
              </Typography>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Button */}
      <motion.div variants={fadeUpVariant} className='flex justify-center'>
        <Button size='wide'>
          <Link
            href={`https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {t("common.contactUs")}
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default EdutourSection;
