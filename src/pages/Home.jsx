import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-secondary">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-highlight mb-4">
            {t('home.welcome')}
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            {t('home.subtitle')}
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('home.description')}
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/commentators"
              className="p-6 bg-accent rounded-lg hover:bg-highlight transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">🎙️</h3>
              <h3 className="text-xl font-bold mb-2">{t('nav.commentators')}</h3>
              <p className="text-gray-300">{t('commentators.search')}</p>
            </Link>

            <Link
              to="/cristiano"
              className="p-6 bg-accent rounded-lg hover:bg-highlight transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">⭐</h3>
              <h3 className="text-xl font-bold mb-2">{t('nav.cristiano')}</h3>
              <p className="text-gray-300">{t('cristiano.careerStats')}</p>
            </Link>

            <Link
              to="/legends"
              className="p-6 bg-accent rounded-lg hover:bg-highlight transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">👑</h3>
              <h3 className="text-xl font-bold mb-2">{t('nav.legends')}</h3>
              <p className="text-gray-300">{t('legends.legend')}</p>
            </Link>

            <Link
              to="/players"
              className="p-6 bg-accent rounded-lg hover:bg-highlight transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">⚽</h3>
              <h3 className="text-xl font-bold mb-2">{t('nav.players')}</h3>
              <p className="text-gray-300">{t('players.search')}</p>
            </Link>

            <Link
              to="/transfers"
              className="p-6 bg-accent rounded-lg hover:bg-highlight transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">🔄</h3>
              <h3 className="text-xl font-bold mb-2">{t('nav.transfers')}</h3>
              <p className="text-gray-300">{t('transfers.latestNews')}</p>
            </Link>

            <Link
              to="/matches"
              className="p-6 bg-accent rounded-lg hover:bg-highlight transition cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">🎯</h3>
              <h3 className="text-xl font-bold mb-2">{t('nav.matches')}</h3>
              <p className="text-gray-300">{t('matches.schedule')}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
