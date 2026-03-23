import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-signature text-white shadow-ambient hover:opacity-90 active:scale-95 transition-all duration-200 border-none',
      secondary: 'bg-surface-lowest text-primary shadow-ambient hover:bg-surface-low active:scale-95 transition-all duration-200 border-none',
      tertiary: 'bg-transparent text-primary font-label text-sm hover:underline decoration-tertiary-container decoration-2 underline-offset-4 transition-all',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-full',
      md: 'px-6 py-3 text-base rounded-full',
      lg: 'px-8 py-4 text-lg rounded-full font-serif',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          variant !== 'tertiary' && sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
