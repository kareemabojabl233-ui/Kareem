import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Players() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')

  const players = [
    {
      id: 1,
      name: 'Kylian Mbappé',
      team: 'Real Madrid',
      position: 'Forward',
      image: '⚽',
    },
    {
      id: 2,
      name: 'Erling Haaland',
      team: 'Manchester City',
      position: 'Forward',
      image: '⚽',
    },
    {
      id: 3,
      name: 'Jude Bellingham',
      team: 'Real Madrid',
      position: 'Midfielder',
      image: '⚽',
    },
    {
      id: 4,
      name: 'Vinicius Jr',
      team: 'Real Madrid',
      position: 'Winger',
      image: '⚽',
    },
  ]

  const filtered = players.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.team.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-highlight mb-8 text-center">
          {t('players.title')}
        </h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder={t('players.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((player) => (
            <div
              key={player.id}
              className="bg-secondary p-6 rounded-lg hover:bg-accent transition"
            >
              <div className="text-6xl text-center mb-4">{player.image}</div>
              <h3 className="text-lg font-bold mb-2">{player.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{player.team}</p>
              <p className="text-highlight text-sm">{player.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Players
