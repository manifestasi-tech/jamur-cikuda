'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { convertIDR } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Controller } from 'react-hook-form';
import useCartModal from './useCartModal';
import Typography from '@/components/ui/typography';
import { useCartStore } from '@/components/store/useCartStore';
import { Minus, Plus, Trash } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const CartModal = () => {
  const { cartItems, updateQuantity, removeItem } = useCartStore();

  const {
    control,
    errors,
    handleSubmit,
    sendToWhatsApp,
    shipping,
    total,
    isValid,
  } = useCartModal();

  return (
    <div className="bg-[#F5F5F5]  max-h-[calc(90vh-56px)] overflow-y-auto">
      <form onSubmit={handleSubmit(sendToWhatsApp)}>
        {cartItems.length === 0 && (
          <div className="text-center text-muted-foreground py-10">
            Keranjang Kosong
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-white border border-border mx-3 my-2 rounded-xl p-2 items-center justify-between">
                <div className="flex gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded"
                  />
                  <div className="space-3">
                    <Typography variant={'lg'}>{item.name}</Typography>
                    <Typography variant={'lg'} color={'main'}>
                      {convertIDR(item.price)}
                    </Typography>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <div
                    className="hover:bg-red-200 hover:text-red-500 hover:cursor-pointer rounded-smg p-1"
                    onClick={() => {
                      removeItem(item.id);
                    }}>
                    <Trash className="w-5 h-5" />
                  </div>
                  {/* Quantity Control */}
                  <div className="flex items-center gap-3 bg-zinc-100 rounded-lg p-1">
                    <Button
                      type="button"
                      size="icon"
                      variant="icon"
                      className="bg-zinc-300 w-5 h-5 rounded-md"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 0}>
                      <Minus size={16} />
                    </Button>

                    <input
                      type="number"
                      min={0}
                      value={item.quantity}
                      onChange={(e) => {
                        const value = Number(e.target.value);
                        if (Number.isNaN(value)) return;
                        updateQuantity(item.id, value);
                      }}
                      className="w-6 text-center bg-transparent outline-none font-medium text-base appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />

                    <Button
                      type="button"
                      size="icon"
                      variant="icon"
                      className="bg-zinc-300 w-5 h-5 rounded-md"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }>
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Total Each Item */}
            {cartItems.length !== 0 && (
              <div className="bg-white border border-border mx-3 my-2 p-3 rounded-xl space-y-2">
                <Typography variant={'lg'} weight={'semibold'}>
                  Rincian Belanja
                </Typography>
                <div>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center mb-2">
                      <div>
                        <Typography variant={'base'} weight={'medium'}>
                          {item.name}
                        </Typography>
                        <Typography variant={'caption'} weight={'medium'}>
                          {item.quantity}x
                        </Typography>
                      </div>
                      <Typography variant={'lg'} weight={'medium'}>
                        {convertIDR(item.price * item.quantity)}
                      </Typography>
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <Typography variant={'base'}>Pengiriman</Typography>
                    <Typography variant={'lg'}>
                      {convertIDR(shipping)}
                    </Typography>
                  </div>
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <Typography variant={'base'}>Total Pembayaran</Typography>
                  <Typography variant={'lg'} color={'main'} weight={'bold'}>
                    {convertIDR(total)}
                  </Typography>
                </div>
              </div>
            )}
          </div>

          {/* User Info Form */}
          {cartItems.length !== 0 && (
            <div className="bg-white h-fit border border-border mx-3 my-2 p-3 rounded-xl space-y-2">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    label="Nama Lengkap"
                    placeholder="Masukkan nama Anda"
                    autoComplete="name"
                    isInvalid={errors.name !== undefined}
                    errorMessage={errors.name?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    label="Email"
                    placeholder="email@example.com"
                    autoComplete="email"
                    isInvalid={errors.email !== undefined}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    label="Alamat"
                    placeholder="Alamat lengkap Anda"
                    autoComplete="street-address"
                    isInvalid={errors.address !== undefined}
                    errorMessage={errors.address?.message}
                    rows={3}
                  />
                )}
              />
              <Controller
                name="note"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    label="Catatan (Opsional)"
                    placeholder="Catatan tambahan"
                    helperText="Opsional, maksimal 300 karakter"
                    isInvalid={!!errors.note}
                    errorMessage={errors.note?.message}
                    rows={3}
                  />
                )}
              />
            </div>
          )}
        </div>

        {/* Checkout Button */}
        {cartItems.length !== 0 && (
          <div className="grid grid-cols-2 bg-white p-4 gap-4 border-t border-border rounded-b-xl sticky bottom-0">
            <div>
              <Typography variant={'body'} weight={'regular'}>
                Total Pembayaran
              </Typography>
              <Typography variant={'h4'} weight={'semibold'}>
                {cartItems.length !== 0 ? convertIDR(total) : 'Rp0'}
              </Typography>
            </div>
            <Button
              className="w-fit justify-self-end"
              type="submit"
              size={'wide'}
              disabled={!isValid || cartItems.length === 0}>
              Checkout
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CartModal;
