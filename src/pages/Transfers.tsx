import React, { useState } from 'react'
import { Header, Sidebar, Footer } from '../components/Layout'
import { Card } from '../components/Cards'
import { List } from '../components/List'
import { Button } from '../components/Form'
import styles from './Transfers.module.css'

const SIDEBAR_ITEMS = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Players', href: '/players', icon: '⚽' },
  { label: 'Teams', href: '/teams', icon: '👥' },
  { label: 'Transfers', href: '/transfers', icon: '🔄' },
  { label: 'Legends', href: '/legends', icon: '⭐' },
  { label: 'Matches', href: '/matches', icon: '📊' },
]

const MOCK_TRANSFERS = [
  {
    id: 1,
    label: 'Haaland to Manchester City',
    description: 'Transfer fee: €60M | Date: June 2023',
    icon: '⚽',
  },
  {
    id: 2,
    label: 'Mbappé to Real Madrid',
    description: 'Transfer fee: €180M | Date: June 2023',
    icon: '🔄',
  },
  {
    id: 3,
    label: 'Benzema to Al-Ittihad',
    description: 'Transfer fee: €100M | Date: August 2023',
    icon: '✈️',
  },
]

export const Transfers: React.FC = () => {
  const [activeItem, setActiveItem] = useState('/transfers')

  return (
    <div className={styles.container}>
      <Header title="Transfers" />
      <div className={styles.main}>
        <Sidebar items={SIDEBAR_ITEMS} activeItem={activeItem} onItemClick={setActiveItem} />
        <div className={styles.content}>
          <h1>Transfer Management</h1>

          <div className={styles.section}>
            <h2>Recent Transfers</h2>
            <List items={MOCK_TRANSFERS} />
          </div>

          <div className={styles.section}>
            <h2>Statistics</h2>
            <div className={styles.statsGrid}>
              <Card>
                <h3>€2.5B</h3>
                <p>Total Transfer Value</p>
              </Card>
              <Card>
                <h3>342</h3>
                <p>Active Transfers</p>
              </Card>
              <Card>
                <h3>1,250</h3>
                <p>Completed Transfers</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer companyName="Kareem" />
    </div>
  )
}

export default Transfers
