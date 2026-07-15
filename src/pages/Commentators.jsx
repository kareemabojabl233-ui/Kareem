import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Commentators() {
  const { t } = useTranslation()
  const [searchTerm, setSearchTerm] = useState('')

  const commentators = [
    {
      id: 1,
      name: 'محمد علي',
      international: 'Mohammed Ali',
      level: t('commentators.arabic'),
      image: '🎙️',
    },
    {
      id: 2,
      name: 'أحمد الشرقاوي',
      international: 'Ahmad Al-Sharkawy',
      level: t('commentators.arabic'),
      image: '🎙️',
    },
    {
      id: 3,
      name: 'Peter Drury',
      international: 'Peter Drury',
      level: t('commentators.international'),
      image: '🎙️',
    },
  ]

  const filtered = commentators.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.international.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-highlight mb-8 text-center">
          {t('commentators.title')}
        </h1>

        <div className="mb-8">
          <input
            type="text"
            placeholder={t('commentators.search')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((commentator) => (
            <div
              key={commentator.id}
              className="bg-secondary p-6 rounded-lg hover:bg-accent transition cursor-pointer"
            >
              <div className="text-5xl text-center mb-4">{commentator.image}</div>
              <h3 className="text-xl font-bold mb-2">{commentator.name}</h3>
              <p className="text-gray-400 mb-2">{commentator.international}</p>
              <p className="text-highlight text-sm">{commentator.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Commentators
