import type React from 'react'
import styles from './button.module.css'

interface AsLink {
  asLink: boolean
  href: string
  children: React.ReactNode
  className?: string
  type?: never
  onClick?: () => void
  unstyled?: boolean
  disabled?: never
}

interface BaseProps {
  children: React.ReactNode
  asLink?: never
  unstyled?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'reset' | 'submit'
  href?: never
  disabled?: boolean
}
type Props = BaseProps | AsLink

export default function Button({
  children,
  onClick,
  asLink,
  unstyled = false,
  className,
  type = 'button',
  disabled,
  href,
}: Props) {
  if (asLink) {
    return (
      <a
        href={href}
        className={`${unstyled ? styles.unstyled : ''} ${className ? className : ''}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${unstyled ? styles.unstyled : ''} ${className ? className : ''}`}
    >
      {children}
    </button>
  )
}
