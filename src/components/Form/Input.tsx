import React from 'react'
import classNames from '../../utils/classNames'
import { useThemeStore } from '../../stores/themeStore'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}) => {
  const { isDarkMode } = useThemeStore()
  const inputId = id || `input-${Math.random()}`

  return (
    <div className={classNames(styles.inputGroup, className)}>
      {label && (
        <label htmlFor={inputId} className={classNames(styles.label, isDarkMode && styles.dark)}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={classNames(
          styles.input,
          isDarkMode && styles.dark,
          error && styles.error
        )}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={classNames(styles.helperText, isDarkMode && styles.dark)}>{helperText}</span>}
    </div>
  )
}

export default Input
