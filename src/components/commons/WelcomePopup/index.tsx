"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const WelcomePopup = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  const source = searchParams.get("source");

  useEffect(() => {
    if (source === "kebun_visit") {
      const timer = setTimeout(() => setOpen(true), 0);
      return () => clearTimeout(timer);
    }
  }, [source]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className='sm:max-w-md p-6'>
        <DialogHeader>
          <DialogTitle className='text-center text-xl font-bold'>
            Welcome
          </DialogTitle>
          <DialogDescription className='text-center text-base pt-2'>
            Welcome To Jamur Cikuda Nusantara. Semoga memperoleh manfaat saat
            kunjungan 🙏
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
