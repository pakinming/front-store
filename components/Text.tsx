import React from 'react'
import classNames from 'classnames'

interface TextProps {
  children: React.ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div1'
  color?: 'green' | 'red' | 'blue'
  className?: string
}

const variantClasses = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  p: 'text-base',
  div1: 'text-1xl',
  span: 'text-base',
}

const colorClasses = {
  green: 'text-green-700',
  red: 'text-red-500',
  blue: 'text-blue-500',
}

const Text = ({ children, variant = 'p', color, className }: TextProps) => {
  const Component = variant as keyof JSX.IntrinsicElements
  return (
    <Component className={classNames(variantClasses[variant], color && colorClasses[color], className)}>
      {children}
    </Component>
  )
}

export default Text
