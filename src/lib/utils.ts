import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

const convertIDR = (value: number): string => {
  // ✅ Prevent NaN or undefined values from breaking formatting
  const safeValue = typeof value === "number" && !isNaN(value) ? value : 0;

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(safeValue);
};




export { cn, convertIDR };