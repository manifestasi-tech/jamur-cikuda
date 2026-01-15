'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useCartStore } from '@/components/store/useCartStore';
import { convertIDR } from '@/lib/utils';

export const cartSchema = yup.object({
  name: yup.string().required('Nama wajib diisi'),

  email: yup.string().email('Email tidak valid').required('Email wajib diisi'),

  address: yup
    .string()
    .min(10, 'Alamat minimal 10 karakter')
    .required('Alamat wajib diisi'),

  note: yup.string().max(300, 'Catatan maksimal 300 karakter').optional(),
});

type CartSchema = {
  name: string;
  email: string;
  address: string;
  note?: string;
};

const useCartModal = () => {
  const { getTotal, cartItems } = useCartStore();

  const shipping = 50000;
  const total = getTotal();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CartSchema>({
    resolver: yupResolver(cartSchema),
    defaultValues: {
      name: '',
      email: '',
      address: '',
      note: '',
    },
    mode: 'onChange',
  });

  const sendToWhatsApp = (data: CartSchema) => {
    const total = getTotal();

    let message = `*PESANAN BARU - Jamur Cikuda Nusantara*\n\n`;
    message += `*Data Pelanggan:*\n`;
    message += `Nama: ${data.name}\n`;
    message += `Email: ${data.email}\n`;
    message += `Alamat: ${data.address}\n`;

    if (data.note) {
      message += `Catatan: ${data.note}\n`;
    }

    message += `\n*Detail Pesanan:*\n`;

    cartItems.forEach((item) => {
      message += `• ${item.name}\n`;
      message += `  Qty: ${item.quantity} x ${convertIDR(item.price)}\n`;
      message += `  Subtotal: ${convertIDR(item.price * item.quantity)}\n\n`;
    });

    message += `*Pengiriman:* Rp50.000\n`;
    message += `*Total Pembayaran:* ${convertIDR(total)}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  return {
    control,
    total,
    shipping,
    handleSubmit,
    errors,
    isValid,
    sendToWhatsApp,
  };
};

export default useCartModal;
