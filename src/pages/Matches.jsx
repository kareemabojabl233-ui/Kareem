import { useTranslation } from 'react-i18next'

function Matches() {
  const { t } = useTranslation()

  const matches = [
    {
      id: 1,
      date: '2024-01-20',
      team1: 'Real Madrid',
      team2: 'Manchester City',
      score: '3-2',
      status: 'Finished',
    },
    {
      id: 2,
      date: '2024-01-21',
      team1: 'Barcelona',
      team2: 'Liverpool',
      score: '2-2',
      status: 'Finished',
    },
    {
      id: 3,
      date: '2024-01-22',
      team1: 'Bayern Munich',
      team2: 'PSG',
      score: '-',
      status: 'Upcoming',
    },
  ]

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-highlight mb-8 text-center">
          {t('matches.title')}
        </h1>

        <div className="space-y-4">
          {matches.map((match) => (
            <div
              key={match.id}
              className="bg-secondary p-6 rounded-lg hover:bg-accent transition"
            >
              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-400 text-sm">{match.date}</p>
                <span
                  className={`px-3 py-1 rounded text-sm font-bold ${
                    match.status === 'Finished'
                      ? 'bg-green-600'
                      : 'bg-yellow-600'
                  }`}
                >
                  {match.status}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="text-right">
                  <p className="font-bold text-lg">{match.team1}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-highlight">
                    {match.score}
                  </p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">{match.team2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Matches
