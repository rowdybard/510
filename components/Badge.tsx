import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'info'
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
