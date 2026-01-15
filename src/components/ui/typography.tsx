import React, { ElementType } from 'react';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'base'
  | 'lg'
  | 'body'
  | 'caption'
  | 'label';

type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';

type ColorVariant = 'black' | 'white' | 'unactive' | 'main';

interface TypographyProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: ColorVariant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  weight = 'medium',
  color = 'black',
  children,
  className = '',
  as,
}) => {
  const variantStyles: Record<
    TypographyVariant,
    { tag: ElementType; style: string }
  > = {
    h1: {
      tag: 'h1',
      style: 'text-3xl md:text-4xl leading-tight text-black-font',
    },
    h2: {
      tag: 'h2',
      style: 'text-2xl md:text-[32px] leading-tight text-black-font',
    },
    h3: {
      tag: 'h3',
      style: 'text-xl md:text-2xl leading-tight text-black-font',
    },
    h4: {
      tag: 'h4',
      style: 'text-base md:text-xl leading-tight text-black-font',
    },
    lg: {
      tag: 'p',
      style: 'text-lg md:text-xl leading-tight text-black-font',
    },
    body: {
      tag: 'p',
      style: 'text-sm leading-normal text-black-font',
    },
    base: {
      tag: 'p',
      style: 'text-base leading-normal text-black-font',
    },
    caption: {
      tag: 'p',
      style: 'text-xs  text-black-font',
    },
    label: {
      tag: 'span',
      style: 'text-[10px] leading-normal text-black-font',
    },
  };

  const weightStyles: Record<TypographyWeight, string> = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorStyles: Record<ColorVariant, string> = {
    black: 'text-black-font',
    white: 'text-white-font',
    main: 'text-main',
    unactive: 'text-unactive',
  };

  const { tag: defaultTag, style } = variantStyles[variant];
  const Component = as ?? defaultTag;

  return (
    <Component
      className={`${style} ${weightStyles[weight]} ${colorStyles[color]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;
