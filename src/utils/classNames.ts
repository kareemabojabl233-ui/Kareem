type ClassName = string | undefined | null | false | Record<string, boolean>

export const classNames = (...classes: ClassName[]): string => {
  return classes
    .flatMap((cls) => {
      if (typeof cls === 'string') return cls
      if (typeof cls === 'object' && cls !== null) {
        return Object.entries(cls)
          .filter(([, value]) => value)
          .map(([key]) => key)
      }
      return []
    })
    .filter(Boolean)
    .join(' ')
}

export default classNames
