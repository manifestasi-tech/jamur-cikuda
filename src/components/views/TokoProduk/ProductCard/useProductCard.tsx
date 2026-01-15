import { useState } from 'react';
import { useCartStore } from '@/components/store/useCartStore';
import { Product } from '@/types/Product';
import { toast } from 'sonner';

const useProductCard = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [quantity, setQuantity] = useState<number>(0);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    else setQuantity(0);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = (product: Product) => {
    if (quantity === 0) {
      return toast.error(
        'Jumlah produk yang ingin ditambahkan tidak boleh kosong'
      );
    }

    addToCart({ ...product, quantity });
    setQuantity(quantity);
    toast.success('Produk berhasil ditambahkan ke keranjang');
    return setQuantity(0);
  };

  return {
    quantity,
    setQuantity,
    handleDecrease,
    handleIncrease,
    handleAddToCart,
  };
};

export default useProductCard;
