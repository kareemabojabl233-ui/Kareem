import React, { useState } from 'react'
import { Header, Sidebar, Footer } from '../components/Layout'
import { Card } from '../components/Cards'
import { Input, Button, Select } from '../components/Form'
import classNames from '../utils/classNames'
import styles from './Home.module.css'

const SIDEBAR_ITEMS = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Players', href: '/players', icon: '⚽' },
  { label: 'Teams', href: '/teams', icon: '👥' },
  { label: 'Transfers', href: '/transfers', icon: '🔄' },
  { label: 'Legends', href: '/legends', icon: '⭐' },
  { label: 'Matches', href: '/matches', icon: '📊' },
]

export const Home: React.FC = () => {
  const [activeItem, setActiveItem] = useState('/')

  return (
    <div className={styles.container}>
      <Header title="Kareem" />
      <div className={styles.main}>
        <Sidebar items={SIDEBAR_ITEMS} activeItem={activeItem} onItemClick={setActiveItem} />
        <div className={styles.content}>
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>Welcome to Kareem</h1>
              <p>Your ultimate football management platform</p>
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </div>
          </section>

          <section className={styles.features}>
            <h2>Features</h2>
            <div className={styles.featureGrid}>
              <Card hoverable>
                <h3>📊 Analytics</h3>
                <p>Track player performance and statistics in real-time</p>
              </Card>
              <Card hoverable>
                <h3>🔄 Transfers</h3>
                <p>Manage player transfers and negotiations</p>
              </Card>
              <Card hoverable>
                <h3>⭐ Legends</h3>
                <p>Explore legendary players and their achievements</p>
              </Card>
              <Card hoverable>
                <h3>📈 Reports</h3>
                <p>Generate comprehensive performance reports</p>
              </Card>
            </div>
          </section>

          <section className={styles.stats}>
            <h2>Platform Statistics</h2>
            <div className={styles.statGrid}>
              <Card>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>2,500+</div>
                  <div className={styles.statLabel}>Players</div>
                </div>
              </Card>
              <Card>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>450+</div>
                  <div className={styles.statLabel}>Teams</div>
                </div>
              </Card>
              <Card>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>1,200+</div>
                  <div className={styles.statLabel}>Matches</div>
                </div>
              </Card>
              <Card>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>85+</div>
                  <div className={styles.statLabel}>Countries</div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
      <Footer companyName="Kareem" links={[{ label: 'About', href: '#' }, { label: 'Contact', href: '#' }]} />
    </div>
  )
}

export default Home
