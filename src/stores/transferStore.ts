import { create } from 'zustand'
import type { Transfer } from '../models'

interface TransferStore {
  transfers: Transfer[]
  loading: boolean
  error: string | null
  setTransfers: (transfers: Transfer[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useTransferStore = create<TransferStore>((set) => ({
  transfers: [],
  loading: false,
  error: null,
  setTransfers: (transfers) => set({ transfers }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}))
