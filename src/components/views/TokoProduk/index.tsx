"use client";

import { motion } from "framer-motion";
import DarkBlueDotIcon from "@/components/icons/DarkBlueDotIcon";
import Typography from "@/components/ui/typography";
import { PRODUK_TOKO_ITEMS } from "./TokoProduk.constants";
import ProductCard from "./ProductCard";
import { ShoppingCart } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import CartModal from "./CartModal";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/components/store/useCartStore";
import { itemVariant, revealVariant } from "@/lib/motion";
import { useTranslations } from "next-intl";

const TokoProduk = () => {
  const { cartItems } = useCartStore();
  const t = useTranslations();

  return (
    <div className='mt-8 md:mt-14 space-y-5 max-w-7xl mx-auto pb-10 xl:px-0 overflow-x-hidden'>
      {/* Header */}
      <motion.div
        variants={revealVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{
          once: false,
          amount: 0.3,
        }}
        className='px-4 xl:px-0'
      >
        <div className='flex gap-2'>
          <DarkBlueDotIcon />
          <Typography variant='h4' weight='semibold'>
            {t("products.shopTitle")}
          </Typography>
        </div>
        <div className='grid md:grid-cols-2 pt-6 gap-6'>
          <Typography variant='h1'>{t("products.headline")}</Typography>
          <Typography variant='h3' weight='regular'>
            {t("products.description")}
          </Typography>
        </div>
      </motion.div>

      {/* Cart */}
      <motion.div
        variants={revealVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{
          once: false,
          amount: 0.3,
        }}
        className='flex justify-end px-4 xl:px-0'
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant='icon'
              className='flex gap-2 border-2 border-main font-semibold relative text-main'
            >
              <ShoppingCart /> {t("products.cart")}
              {cartItems.length > 0 && (
                <span className='absolute top-1 left-9 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold'>
                  {cartItems.length}
                </span>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className='w-full max-w-sm md:max-w-3xl!  overflow-hidden'>
            <DialogTitle>{t("products.cartTitle")}</DialogTitle>
            <CartModal />
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Products */}
      <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-4 px-2 xl:px-0'>
        {PRODUK_TOKO_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{
              once: false,
              amount: 0.3,
            }}
          >
            <ProductCard product={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TokoProduk;
