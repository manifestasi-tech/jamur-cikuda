import * as React from 'react';
import { cn } from '@/lib/utils';
import Typography from './typography';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
  variant?: 'bordered';
  icon?: React.ReactNode;
}

export function Input({
  label,
  helperText,
  errorMessage,
  isInvalid = false,
  icon,
  className,
  ...props
}: InputProps) {
  const isFileInput = props.type === 'file';
  const generatedId = React.useId();

  const inputId = props.id || generatedId;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Typography variant={'body'} weight={'medium'}>
          {label}
        </Typography>
      )}

      {isFileInput ? (
        <div
          className={cn(
            'flex items-center rounded-3xl border border-border overflow-hidden w-full bg-input'
          )}>
          <label
            htmlFor={inputId}
            className="px-4 py-2 bg-divider text-disable cursor-pointer whitespace-nowrap b">
            Pilih Foto
          </label>

          <span
            id={`${inputId}-filename`}
            className="px-4 py-2 text-disable truncate select-none">
            Tidak ada file yang dipilih
          </span>

          <input
            {...props}
            id={inputId}
            className="hidden"
            onChange={(e) => {
              const fileName =
                e.target.files?.[0]?.name || 'Tidak ada file yang dipilih';

              const fileLabelEl = document.getElementById(
                `${inputId}-filename`
              );

              if (fileLabelEl) fileLabelEl.textContent = fileName;

              props.onChange?.(e);
            }}
          />
        </div>
      ) : (
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              {icon}
            </div>
          )}

          <input
            {...props}
            id={inputId}
            className={cn(
              'w-full rounded-xl px-3 py-2 text-base outline-none transition-all placeholder:text-disable focus:ring-0 bg-white border border-border',
              icon && 'pl-12',
              className
            )}
            aria-invalid={isInvalid}
          />
        </div>
      )}

      {isInvalid && errorMessage ? (
        <p className="text-sm text-red-500 flex items-center gap-1">
          {errorMessage}
        </p>
      ) : helperText ? (
        <p className="text-sm text-muted">{helperText}</p>
      ) : null}
    </div>
  );
}
