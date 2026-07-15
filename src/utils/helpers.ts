// Date formatting helpers
export const formatDate = (date: string | Date): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formatTime = (date: string | Date): string => {
  const d = new Date(date)
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

// Number formatting
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('en-US').format(num)
}

export const formatCurrency = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

// String utilities
export const truncate = (str: string, length: number): string => {
  return str.length > length ? `${str.substring(0, length)}...` : str
}

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Validation helpers
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidURL = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Array utilities
export const removeDuplicates = <T>(arr: T[]): T[] => {
  return [...new Set(arr)]
}

export const groupBy = <T, K extends string | number | symbol>(
  arr: T[],
  key: (item: T) => K
): Record<K, T[]> => {
  return arr.reduce((groups, item) => {
    const k = key(item)
    if (!groups[k]) groups[k] = []
    groups[k].push(item)
    return groups
  }, {} as Record<K, T[]>)
}
