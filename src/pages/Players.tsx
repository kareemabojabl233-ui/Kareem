import React, { useState } from 'react'
import { Header, Sidebar, Footer } from '../components/Layout'
import { PlayerCard } from '../components/Cards'
import { Input, Button, Select } from '../components/Form'
import { List } from '../components/List'
import classNames from '../utils/classNames'
import styles from './Players.module.css'
import type { Player } from '../models'

const SIDEBAR_ITEMS = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Players', href: '/players', icon: '⚽' },
  { label: 'Teams', href: '/teams', icon: '👥' },
  { label: 'Transfers', href: '/transfers', icon: '🔄' },
  { label: 'Legends', href: '/legends', icon: '⭐' },
  { label: 'Matches', href: '/matches', icon: '📊' },
]

const MOCK_PLAYERS: Player[] = [
  {
    id: 1,
    name: 'Lionel Messi',
    number: 10,
    position: 'RW',
    team: 'Inter Miami',
    age: 36,
    nationality: 'Argentina',
    marketValue: '$50M',
  },
  {
    id: 2,
    name: 'Cristiano Ronaldo',
    number: 7,
    position: 'ST',
    team: 'Al Nassr',
    age: 38,
    nationality: 'Portugal',
    marketValue: '$25M',
  },
  {
    id: 3,
    name: 'Erling Haaland',
    number: 9,
    position: 'ST',
    team: 'Manchester City',
    age: 23,
    nationality: 'Norway',
    marketValue: '$180M',
  },
]

export const Players: React.FC = () => {
  const [activeItem, setActiveItem] = useState('/players')
  const [searchTerm, setSearchTerm] = useState('')
  const [positionFilter, setPositionFilter] = useState('')

  const filteredPlayers = MOCK_PLAYERS.filter((player) => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPosition = !positionFilter || player.position === positionFilter
    return matchesSearch && matchesPosition
  })

  return (
    <div className={styles.container}>
      <Header title="Players" />
      <div className={styles.main}>
        <Sidebar items={SIDEBAR_ITEMS} activeItem={activeItem} onItemClick={setActiveItem} />
        <div className={styles.content}>
          <h1>Players Management</h1>

          <div className={styles.filters}>
            <Input
              placeholder="Search players..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              options={[
                { value: '', label: 'All Positions' },
                { value: 'GK', label: 'Goalkeeper' },
                { value: 'CB', label: 'Center Back' },
                { value: 'ST', label: 'Striker' },
              ]}
              value={positionFilter}
              onChange={(e) => setPositionFilter(e.target.value)}
            />
            <Button variant="primary">Add Player</Button>
          </div>

          <div className={styles.grid}>
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </div>
      <Footer companyName="Kareem" />
    </div>
  )
}

export default Players
