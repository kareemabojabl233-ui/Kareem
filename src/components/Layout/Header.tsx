import React from 'react'
import { useUIStore } from '../../stores/uiStore'
import { useThemeStore } from '../../stores/themeStore'
import classNames from '../../utils/classNames'
import styles from './Header.module.css'

interface HeaderProps {
  title?: string
  onMenuClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({ title = 'Kareem', onMenuClick }) => {
  const { toggleSidebar } = useUIStore()
  const { isDarkMode, toggleDarkMode } = useThemeStore()

  const handleMenuClick = () => {
    toggleSidebar()
    onMenuClick?.()
  }

  return (
    <header
      className={classNames(
        styles.header,
        isDarkMode && styles.dark
      )}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <button
            className={styles.menuButton}
            onClick={handleMenuClick}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.right}>
          <button
            className={styles.themeButton}
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
