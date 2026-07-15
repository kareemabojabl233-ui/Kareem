import React, { useState, useEffect } from 'react'
import classNames from '../../utils/classNames'
import { useThemeStore } from '../../stores/themeStore'
import Button from '../Form/Button'
import styles from './Modal.module.css'

interface ModalProps {
  isOpen: boolean
  title: string
  children: React.ReactNode
  onClose: () => void
  onConfirm?: () => void
  confirmText?: string
  cancelText?: string
  size?: 'sm' | 'md' | 'lg'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  size = 'md',
}) => {
  const { isDarkMode } = useThemeStore()
  const [isVisible, setIsVisible] = useState(isOpen)

  useEffect(() => {
    setIsVisible(isOpen)
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  if (!isVisible) return null

  return (
    <>
      <div
        className={classNames(styles.overlay, isOpen && styles.active)}
        onClick={handleClose}
      />
      <div
        className={classNames(
          styles.modal,
          styles[size],
          isDarkMode && styles.dark,
          isOpen && styles.active
        )}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className={styles.content}>{children}</div>
        {onConfirm && (
          <div className={styles.footer}>
            <Button variant="secondary" onClick={handleClose}>
              {cancelText}
            </Button>
            <Button variant="primary" onClick={onConfirm}>
              {confirmText}
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

export default Modal
