import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'lowest' | 'low' | 'high' | 'highest';
}

export const Card = ({ 
  className, 
  variant = 'lowest', 
  children, 
  ...props 
}: CardProps) => {
  const variants = {
    lowest: 'bg-surface-lowest',
    low: 'bg-surface-low',
    high: 'bg-surface-high',
    highest: 'bg-surface-highest',
  };

  return (
    <div
      className={cn(
        'rounded-xl p-8 shadow-ambient transition-all duration-300',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
