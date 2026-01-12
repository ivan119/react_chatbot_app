import { memo, type ButtonHTMLAttributes, type ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
  icon?: ReactNode
}

const Button = memo(
  ({
    children,
    variant = 'primary',
    isLoading = false,
    icon,
    className = '',
    disabled,
    ...props
  }: ButtonProps): React.JSX.Element => {
    // Composition: Base class + Variant class + User provided class
    const buttonClasses = `
      ${styles.button} 
      ${styles[variant]} 
      ${className}
    `.trim()

    return (
      <button
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className={styles.loader}>...</span>
        ) : (
          <>
            <span>{children}</span>
            {icon && <span className="btn-icon">{icon}</span>}
          </>
        )}
      </button>
    )
  },
)

export default Button
