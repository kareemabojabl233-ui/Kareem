import React from 'react'
import classNames from '../../utils/classNames'
import { useThemeStore } from '../../stores/themeStore'
import styles from './List.module.css'

interface ListItem {
  id: string | number
  label: string
  description?: string
  icon?: React.ReactNode
  onClick?: () => void
}

interface ListProps {
  items: ListItem[]
  title?: string
  emptyMessage?: string
}

export const List: React.FC<ListProps> = ({
  items,
  title,
  emptyMessage = 'No items found',
}) => {
  const { isDarkMode } = useThemeStore()

  if (items.length === 0) {
    return (
      <div className={classNames(styles.list, isDarkMode && styles.dark)}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <div className={styles.empty}>{emptyMessage}</div>
      </div>
    )
  }

  return (
    <div className={classNames(styles.list, isDarkMode && styles.dark)}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <ul className={styles.items}>
        {items.map((item) => (
          <li
            key={item.id}
            className={classNames(styles.item, item.onClick && styles.clickable)}
            onClick={item.onClick}
            role={item.onClick ? 'button' : undefined}
            tabIndex={item.onClick ? 0 : undefined}
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <div className={styles.content}>
              <p className={styles.label}>{item.label}</p>
              {item.description && <p className={styles.description}>{item.description}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
