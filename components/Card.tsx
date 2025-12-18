import React from 'react'
import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-lg p-6 text-gray-900',
        {
          'transition-transform duration-200 hover:scale-105 hover:shadow-xl': hover
        },
        className
      )}
    >
      {children}
    </div>
  )
}

