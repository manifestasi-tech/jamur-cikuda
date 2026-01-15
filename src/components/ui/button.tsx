import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'cursor-pointer inline-flex items-center justify-center gap-3 rounded-xl font-medium whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-60 select-none outline-none focus-visible:ring-2 focus-visible:ring-main/40',
  {
    variants: {
      variant: {
        //  PRIMARY — DARK BLUE
        primary: 'bg-main text-white hover:bg-main/90',
        'primary-outline':
          'border-2 border-main text-main bg-transparent hover:bg-main/10',

        // SECONDARY — WHITE
        secondary: 'bg-white text-main font-bold text-xl hover:bg-white/90',

        // GRAY
        gray: 'bg-disable text-disable-foreground cursor-not-allowed',
        'gray-outline':
          'border-2 border-disable text-disable bg-input hover:bg-disable/10',

        destructive: 'bg-destructive text-white ',

        // DISABLED (manual control)
        muted: 'bg-muted text-muted-foreground cursor-not-allowed',

        icon: 'bg-transparent',
      },

      size: {
        default: 'h-11 px-6 text-base',
        wide: 'h-11 px-14 text-base',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-12 px-8 text-lg',
        icon: 'h-11 w-11',
        sizeless: 'h-0 w-0',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
