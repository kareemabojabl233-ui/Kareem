import React from 'react'
import classNames from '../../utils/classNames'
import { useThemeStore } from '../../stores/themeStore'
import styles from './Textarea.module.css'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  className,
  id,
  ...props
}) => {
  const { isDarkMode } = useThemeStore()
  const textareaId = id || `textarea-${Math.random()}`

  return (
    <div className={classNames(styles.textareaGroup, className)}>
      {label && (
        <label htmlFor={textareaId} className={classNames(styles.label, isDarkMode && styles.dark)}>
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={classNames(
          styles.textarea,
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

export default Textarea
