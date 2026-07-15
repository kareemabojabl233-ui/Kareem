import React from 'react'
import { useUIStore } from '../../stores/uiStore'
import { useThemeStore } from '../../stores/themeStore'
import classNames from '../../utils/classNames'
import styles from './Sidebar.module.css'

interface SidebarItem {
  label: string
  href: string
  icon?: string
}

interface SidebarProps {
  items: SidebarItem[]
  activeItem?: string
  onItemClick?: (href: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  activeItem,
  onItemClick,
}) => {
  const { sidebarOpen, setSidebarOpen } = useUIStore()
  const { isDarkMode } = useThemeStore()

  const handleItemClick = (href: string) => {
    onItemClick?.(href)
    setSidebarOpen(false)
  }

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={classNames(
          styles.sidebar,
          sidebarOpen && styles.open,
          isDarkMode && styles.dark
        )}
      >
        <nav className={styles.nav}>
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={classNames(
                styles.item,
                activeItem === item.href && styles.active
              )}
              onClick={(e) => {
                e.preventDefault()
                handleItemClick(item.href)
              }}
            >
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <span className={styles.label}>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
