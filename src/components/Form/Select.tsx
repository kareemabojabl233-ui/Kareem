import React from 'react'
import classNames from '../../utils/classNames'
import { useThemeStore } from '../../stores/themeStore'
import styles from './Select.module.css'

interface SelectOption {
  value: string | number
  label: string
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
  placeholder?: string
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  helperText,
  options,
  placeholder,
  className,
  id,
  ...props
}) => {
  const { isDarkMode } = useThemeStore()
  const selectId = id || `select-${Math.random()}`

  return (
    <div className={classNames(styles.selectGroup, className)}>
      {label && (
        <label htmlFor={selectId} className={classNames(styles.label, isDarkMode && styles.dark)}>
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={classNames(
          styles.select,
          isDarkMode && styles.dark,
          error && styles.error
        )}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.errorText}>{error}</span>}
      {helperText && !error && <span className={classNames(styles.helperText, isDarkMode && styles.dark)}>{helperText}</span>}
    </div>
  )
}

export default Select
