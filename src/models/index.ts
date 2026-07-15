// Player Model
export interface Player {
  id: number
  name: string
  team: string
  position: string
  number: number
  nationality: string
  age: number
  marketValue: string
}

// Commentator Model
export interface Commentator {
  id: number
  name: string
  international: string
  level: 'international' | 'arabic'
  image: string
  bio?: string
}

// Legend Model
export interface Legend {
  id: number
  name: string
  goals: number
  titles: string
  image: string
  era: string
  nationality: string
  bio?: string
}

// Transfer Model
export interface Transfer {
  id: number
  player: string
  from: string
  to: string
  fee: string
  date: string
  type: 'loan' | 'permanent' | 'free'
}

// Match Model
export interface Match {
  id: number
  date: string
  team1: string
  team2: string
  score: string
  status: 'finished' | 'upcoming' | 'live'
  competition: string
}

// User Model
export interface User {
  id: number
  username: string
  email: string
  preferredLanguage: string
  favoriteTeam?: string
}
