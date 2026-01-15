import { cn } from '@/lib/utils';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ReactNode } from 'react';

const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

interface PropTypes {
  children: ReactNode;
}

const AppShell = (props: PropTypes) => {
  const { children } = props;

  return <main className={cn(pjs.className)}>{children}</main>;
};

export default AppShell;
