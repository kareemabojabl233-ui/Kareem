import axios from 'axios'
import type { Player, Commentator, Legend, Transfer, Match } from '../models'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.kareem.example.com'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Players API
export const playersAPI = {
  getAll: () => apiClient.get<Player[]>('/players'),
  getById: (id: number) => apiClient.get<Player>(`/players/${id}`),
  search: (term: string) => apiClient.get<Player[]>('/players/search', { params: { q: term } }),
}

// Commentators API
export const commentatorsAPI = {
  getAll: () => apiClient.get<Commentator[]>('/commentators'),
  getById: (id: number) => apiClient.get<Commentator>(`/commentators/${id}`),
  search: (term: string) => apiClient.get<Commentator[]>('/commentators/search', { params: { q: term } }),
}

// Legends API
export const legendsAPI = {
  getAll: () => apiClient.get<Legend[]>('/legends'),
  getById: (id: number) => apiClient.get<Legend>(`/legends/${id}`),
}

// Transfers API
export const transfersAPI = {
  getAll: () => apiClient.get<Transfer[]>('/transfers'),
  getLatest: (limit?: number) => apiClient.get<Transfer[]>('/transfers/latest', { params: { limit } }),
  search: (term: string) => apiClient.get<Transfer[]>('/transfers/search', { params: { q: term } }),
}

// Matches API
export const matchesAPI = {
  getAll: () => apiClient.get<Match[]>('/matches'),
  getUpcoming: () => apiClient.get<Match[]>('/matches/upcoming'),
  getResults: () => apiClient.get<Match[]>('/matches/results'),
  getByDate: (date: string) => apiClient.get<Match[]>(`/matches/${date}`),
}

export default apiClient
