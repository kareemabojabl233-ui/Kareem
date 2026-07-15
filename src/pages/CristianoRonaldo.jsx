import { useTranslation } from 'react-i18next'

function CristianoRonaldo() {
  const { t } = useTranslation()

  const stats = [
    { label: t('cristiano.goals'), value: '890+' },
    { label: t('cristiano.achievements'), value: '50+' },
    { label: t('cristiano.titles'), value: '35+' },
    { label: t('cristiano.awards'), value: '20+' },
  ]

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="text-8xl mb-4">⭐</div>
          <h1 className="text-5xl font-bold text-highlight mb-4">
            {t('cristiano.title')}
          </h1>
          <p className="text-gray-400 text-lg">
            One of the greatest footballers of all time
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-lg text-center hover:bg-accent transition"
            >
              <div className="text-3xl font-bold text-highlight mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-secondary p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{t('cristiano.careerStats')}</h2>
          <div className="space-y-4 text-gray-300">
            <p>🏆 Ballon d'Or Awards: 5</p>
            <p>🥇 UEFA Champions League: 5 titles</p>
            <p>🌍 International Caps: 200+</p>
            <p>🎯 Career Span: 2003 - Present</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CristianoRonaldo
