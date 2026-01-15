import * as React from 'react';
import { cn } from '@/lib/utils';
import Typography from './typography';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  isInvalid?: boolean;
}

export function Textarea({
  label,
  helperText,
  errorMessage,
  isInvalid = false,
  className,
  ...props
}: TextareaProps) {
  const generatedId = React.useId();
  const textareaId = props.id || generatedId;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Typography variant="body" weight="medium">
          {label}
        </Typography>
      )}

      <textarea
        {...props}
        id={textareaId}
        className={cn(
          'w-full rounded-xl px-3 py-2 text-base outline-none transition-all placeholder:text-disable focus:ring-0 bg-white border border-border resize-none',
          isInvalid && 'border-red-500',
          className
        )}
        aria-invalid={isInvalid}
      />

      {isInvalid && errorMessage ? (
        <p className="text-sm text-red-500 flex items-center gap-1">
          {errorMessage}
        </p>
      ) : helperText ? (
        <p className="text-sm text-unactive">{helperText}</p>
      ) : null}
    </div>
  );
}
