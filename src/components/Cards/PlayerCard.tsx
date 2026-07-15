import React from 'react'
import Card from './Card'
import classNames from '../../utils/classNames'
import { useThemeStore } from '../../stores/themeStore'
import styles from './PlayerCard.module.css'
import type { Player } from '../../models'

interface PlayerCardProps {
  player: Player
  onClick?: () => void
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, onClick }) => {
  const { isDarkMode } = useThemeStore()

  return (
    <Card
      onClick={onClick}
      hoverable
      className={styles.playerCard}
    >
      <div className={styles.header}>
        <h3 className={styles.name}>{player.name}</h3>
        <span className={styles.number}>#{player.number}</span>
      </div>
      <div className={styles.info}>
        <p className={styles.detail}>
          <span className={styles.label}>Position:</span>
          <span>{player.position}</span>
        </p>
        <p className={styles.detail}>
          <span className={styles.label}>Team:</span>
          <span>{player.team}</span>
        </p>
        <p className={styles.detail}>
          <span className={styles.label}>Age:</span>
          <span>{player.age}</span>
        </p>
        <p className={styles.detail}>
          <span className={styles.label}>Nationality:</span>
          <span>{player.nationality}</span>
        </p>
        <p className={styles.detail}>
          <span className={styles.label}>Market Value:</span>
          <span className={styles.value}>{player.marketValue}</span>
        </p>
      </div>
    </Card>
  )
}

export default PlayerCard
