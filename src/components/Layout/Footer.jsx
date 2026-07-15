import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary mt-12 py-8 border-t border-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-highlight mb-4">
              {t('app.title')}
            </h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-highlight">{t('nav.home')}</a></li>
              <li><a href="#" className="hover:text-highlight">{t('nav.commentators')}</a></li>
              <li><a href="#" className="hover:text-highlight">{t('nav.legends')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 {t('footer.email')}: info@kareem.com</p>
              <p>📱 {t('footer.social')}</p>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-accent pt-4 text-gray-500">
          <p>© {currentYear} {t('app.title')}. {t('footer.allRights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
