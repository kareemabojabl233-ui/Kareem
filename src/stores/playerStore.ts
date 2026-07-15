import { create } from 'zustand'
import type { Player } from '../models'

interface PlayerStore {
  players: Player[]
  loading: boolean
  error: string | null
  setPlayers: (players: Player[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  addPlayer: (player: Player) => void
  removePlayer: (id: number) => void
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  players: [],
  loading: false,
  error: null,
  setPlayers: (players) => set({ players }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  addPlayer: (player) => set((state) => ({ players: [...state.players, player] })),
  removePlayer: (id) =>
    set((state) => ({
      players: state.players.filter((p) => p.id !== id),
    })),
}))
