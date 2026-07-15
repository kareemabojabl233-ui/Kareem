// LocalStorage utility functions

const PREFIX = 'kareem_'

interface StorageItem<T> {
  value: T
  timestamp: number
  ttl?: number
}

export const storage = {
  set: <T>(key: string, value: T, ttl?: number): void => {
    const item: StorageItem<T> = {
      value,
      timestamp: Date.now(),
      ttl,
    }
    try {
      localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(item))
    } catch (error) {
      console.error(`Failed to set localStorage item: ${key}`, error)
    }
  },

  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(`${PREFIX}${key}`)
      if (!item) return null

      const parsed: StorageItem<T> = JSON.parse(item)

      // Check if item has expired
      if (parsed.ttl) {
        const age = Date.now() - parsed.timestamp
        if (age > parsed.ttl) {
          storage.remove(key)
          return null
        }
      }

      return parsed.value
    } catch (error) {
      console.error(`Failed to get localStorage item: ${key}`, error)
      return null
    }
  },

  remove: (key: string): void => {
    try {
      localStorage.removeItem(`${PREFIX}${key}`)
    } catch (error) {
      console.error(`Failed to remove localStorage item: ${key}`, error)
    }
  },

  clear: (): void => {
    try {
      const keys = Object.keys(localStorage)
      keys.forEach((key) => {
        if (key.startsWith(PREFIX)) {
          localStorage.removeItem(key)
        }
      })
    } catch (error) {
      console.error('Failed to clear localStorage', error)
    }
  },
}
