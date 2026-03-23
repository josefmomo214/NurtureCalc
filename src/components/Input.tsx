import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <label className="font-label text-xs font-semibold text-on-surface-variant block ml-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full bg-surface-lowest rounded-sm px-4 py-3 text-foreground placeholder:text-outline/50',
            'transition-all duration-200 outline-none',
            'focus:bg-surface-high focus:ring-2 focus:ring-primary-container/20 group',
            'tonal-border',
            error && 'border-error ring-error/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-error mt-1 ml-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
