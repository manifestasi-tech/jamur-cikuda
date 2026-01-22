"use client";

import DarkBlueDotIcon from "@/components/icons/DarkBlueDotIcon";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import { FAQ_ITEMS } from "../Beranda.constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  containerVariant,
  fadeUpVariant,
  fadeRightVariant,
} from "@/lib/motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const FAQSection = () => {
  const t = useTranslations();

  return (
    <motion.div
      className='grid lg:grid-cols-2 gap-11 pb-10 items-start'
      variants={containerVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* FAQ */}
      <motion.div
        variants={containerVariant}
        className='flex flex-col gap-6 justify-center order-2 lg:order-1'
      >
        {/* Title */}
        <motion.div variants={fadeUpVariant} className='flex flex-row gap-2'>
          <DarkBlueDotIcon />
          <Typography variant='h4' weight='semibold'>
            {t("home.faq.title")}
          </Typography>
        </motion.div>

        {/* Heading */}
        <motion.div variants={fadeUpVariant}>
          <Typography variant='h2' weight='bold'>
            {t("home.faq.heading")}
          </Typography>
        </motion.div>

        {/* Accordion */}
        <motion.div variants={fadeUpVariant}>
          <Accordion type='single' collapsible className='w-full space-y-3'>
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>
                  <Typography variant='h4' weight='medium'>
                    {t(item.questionKey)}
                  </Typography>
                </AccordionTrigger>
                <AccordionContent className='pt-2'>
                  <Typography variant='h4'>{t(item.answerKey)}</Typography>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Button */}
        <motion.div variants={fadeUpVariant}>
          <Button size='wide' className='w-fit flex self-center lg:self-start'>
            <Link
              href={`https://wa.me/${phoneNumber}?text=Halo%20saya%20ingin%20bertanya`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {t("home.faq.buttonText")}
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Image */}
      <motion.div
        variants={fadeRightVariant}
        className=' w-full flex justify-center order-1 lg:order-2'
      >
        <Image
          src='/images/general/FAQ.png'
          alt='FAQ'
          height={500}
          width={500}
          className='object-contain'
        />
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;
