import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  className,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-gradient-primary text-white hover:shadow-lg': variant === 'primary',
          'bg-gradient-secondary text-white hover:shadow-lg': variant === 'secondary',
          'border-2 border-primary-500 text-primary-500 hover:bg-primary-50': variant === 'outline',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
          'w-full': fullWidth
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

