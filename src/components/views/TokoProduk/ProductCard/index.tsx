'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import { Minus, Plus } from 'lucide-react';
import { Product } from '@/types/Product';
import { convertIDR } from '@/lib/utils';
import useProductCard from './useProductCard';

interface PropsTypes {
  product: Product;
}

const ProductCard = (props: PropsTypes) => {
  const { product } = props;

  const {
    setQuantity,
    quantity,
    handleDecrease,
    handleIncrease,
    handleAddToCart,
  } = useProductCard();

  return (
    <div className="border border-zinc-300 rounded-2xl ">
      <Image
        src={product.image}
        alt={product.name}
        width={480}
        height={320}
        className="object-cover w-full rounded-t-2xl"
      />

      <div className="p-4 space-y-4">
        <div>
          <Typography variant="h2" weight="semibold">
            {product.name}
          </Typography>
          <Typography variant="h2" weight="bold" className="mt-2">
            {convertIDR(product.price)}
          </Typography>
        </div>

        <div className="flex gap-2">
          {/* Quantity Control */}
          <div className="flex items-center gap-3 bg-zinc-100 rounded-lg p-1">
            <Button
              size="icon"
              variant="icon"
              className="bg-zinc-300 w-9 h-9"
              onClick={handleDecrease}
              disabled={quantity === 0}>
              <Minus size={16} />
            </Button>

            <input
              type="number"
              min={0}
              value={quantity}
              onChange={(e) => {
                const value = Number(e.target.value);
                if (Number.isNaN(value)) return;
                setQuantity(value < 0 ? 0 : value);
              }}
              className="w-6 text-center bg-transparent outline-none font-medium text-base appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />

            <Button
              size="icon"
              variant="icon"
              className="bg-zinc-300  w-9 h-9"
              onClick={handleIncrease}>
              <Plus size={16} />
            </Button>
          </div>

          <Button
            className="w-full font-normal "
            onClick={() => handleAddToCart(product)}>
            Masukkan Keranjang
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
