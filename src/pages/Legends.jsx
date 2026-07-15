import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Legends() {
  const { t } = useTranslation()
  const [selectedLegend, setSelectedLegend] = useState(null)

  const legends = [
    {
      id: 1,
      name: 'Pelé',
      goals: 1281,
      titles: 'World Cup (3x)',
      image: '⚽',
      era: '1956-1977',
    },
    {
      id: 2,
      name: 'Diego Maradona',
      goals: 345,
      titles: 'World Cup (1x)',
      image: '⚽',
      era: '1976-1997',
    },
    {
      id: 3,
      name: 'Johan Cruyff',
      goals: 405,
      titles: 'Champions League (3x)',
      image: '⚽',
      era: '1964-1984',
    },
    {
      id: 4,
      name: 'Franz Beckenbauer',
      goals: 103,
      titles: 'World Cup (2x)',
      image: '⚽',
      era: '1964-1983',
    },
  ]

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-highlight mb-8 text-center">
          {t('legends.title')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {legends.map((legend) => (
            <div
              key={legend.id}
              onClick={() => setSelectedLegend(legend)}
              className="bg-secondary p-6 rounded-lg hover:bg-accent transition cursor-pointer"
            >
              <div className="text-6xl text-center mb-4">{legend.image}</div>
              <h3 className="text-xl font-bold mb-2">{legend.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{legend.era}</p>
              <p className="text-highlight">{legend.goals} {t('legends.goals')}</p>
            </div>
          ))}
        </div>

        {selectedLegend && (
          <div className="mt-12 bg-secondary p-8 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-bold text-highlight">
                {selectedLegend.name}
              </h2>
              <button
                onClick={() => setSelectedLegend(null)}
                className="text-2xl text-gray-400 hover:text-highlight"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">{t('legends.goals')}</p>
                <p className="text-2xl font-bold text-highlight">
                  {selectedLegend.goals}
                </p>
              </div>
              <div>
                <p className="text-gray-400">{t('legends.titles')}</p>
                <p className="text-2xl font-bold text-highlight">
                  {selectedLegend.titles}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Legends
