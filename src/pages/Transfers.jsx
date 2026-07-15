import { useTranslation } from 'react-i18next'

function Transfers() {
  const { t } = useTranslation()

  const transfers = [
    {
      id: 1,
      player: 'Kylian Mbappé',
      from: 'PSG',
      to: 'Real Madrid',
      fee: '180 Million',
      date: 'June 2024',
    },
    {
      id: 2,
      player: 'Erling Haaland',
      from: 'Borussia Dortmund',
      to: 'Manchester City',
      fee: '60 Million',
      date: 'June 2023',
    },
    {
      id: 3,
      player: 'Jude Bellingham',
      from: 'Borussia Dortmund',
      to: 'Real Madrid',
      fee: '103 Million',
      date: 'June 2023',
    },
  ]

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-highlight mb-8 text-center">
          {t('transfers.title')}
        </h1>

        <div className="bg-secondary rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-accent">
                <tr>
                  <th className="px-6 py-3 text-left font-bold">Player</th>
                  <th className="px-6 py-3 text-left font-bold">{t('transfers.from')}</th>
                  <th className="px-6 py-3 text-left font-bold">{t('transfers.to')}</th>
                  <th className="px-6 py-3 text-left font-bold">{t('transfers.fee')}</th>
                  <th className="px-6 py-3 text-left font-bold">Date</th>
                </tr>
              </thead>
              <tbody>
                {transfers.map((transfer) => (
                  <tr
                    key={transfer.id}
                    className="border-t border-accent hover:bg-accent transition"
                  >
                    <td className="px-6 py-3">{transfer.player}</td>
                    <td className="px-6 py-3">{transfer.from}</td>
                    <td className="px-6 py-3">{transfer.to}</td>
                    <td className="px-6 py-3 text-highlight font-bold">
                      {transfer.fee}
                    </td>
                    <td className="px-6 py-3 text-gray-400">{transfer.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transfers
