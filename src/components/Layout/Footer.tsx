import React from 'react'
import { useThemeStore } from '../../stores/themeStore'
import classNames from '../../utils/classNames'
import styles from './Footer.module.css'

interface FooterProps {
  companyName?: string
  year?: number
  links?: Array<{ label: string; href: string }>
}

export const Footer: React.FC<FooterProps> = ({
  companyName = 'Kareem',
  year = new Date().getFullYear(),
  links = [],
}) => {
  const { isDarkMode } = useThemeStore()

  return (
    <footer className={classNames(styles.footer, isDarkMode && styles.dark)}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {year} {companyName}. All rights reserved.
          </p>
          {links.length > 0 && (
            <nav className={styles.links}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.link}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
