import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import LanguageSwitcher from '../Common/LanguageSwitcher'

function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-secondary shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-highlight">
            ⚽ {t('app.title')}
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-highlight transition">
              {t('nav.home')}
            </Link>
            <Link to="/commentators" className="hover:text-highlight transition">
              {t('nav.commentators')}
            </Link>
            <Link to="/cristiano" className="hover:text-highlight transition">
              {t('nav.cristiano')}
            </Link>
            <Link to="/legends" className="hover:text-highlight transition">
              {t('nav.legends')}
            </Link>
            <Link to="/players" className="hover:text-highlight transition">
              {t('nav.players')}
            </Link>
            <Link to="/transfers" className="hover:text-highlight transition">
              {t('nav.transfers')}
            </Link>
            <Link to="/matches" className="hover:text-highlight transition">
              {t('nav.matches')}
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              className="md:hidden text-highlight"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-highlight">
              {t('nav.home')}
            </Link>
            <Link to="/commentators" className="block py-2 hover:text-highlight">
              {t('nav.commentators')}
            </Link>
            <Link to="/cristiano" className="block py-2 hover:text-highlight">
              {t('nav.cristiano')}
            </Link>
            <Link to="/legends" className="block py-2 hover:text-highlight">
              {t('nav.legends')}
            </Link>
            <Link to="/players" className="block py-2 hover:text-highlight">
              {t('nav.players')}
            </Link>
            <Link to="/transfers" className="block py-2 hover:text-highlight">
              {t('nav.transfers')}
            </Link>
            <Link to="/matches" className="block py-2 hover:text-highlight">
              {t('nav.matches')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
