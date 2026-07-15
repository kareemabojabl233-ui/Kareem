// API Configuration
export const API_ENDPOINTS = {
  PLAYERS: '/players',
  COMMENTATORS: '/commentators',
  LEGENDS: '/legends',
  TRANSFERS: '/transfers',
  MATCHES: '/matches',
}

// Languages
export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', dir: 'ltr' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', dir: 'ltr' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', dir: 'ltr' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', dir: 'ltr' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', dir: 'ltr' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', dir: 'ltr' },
]

// League Information
export const LEAGUES = [
  { id: 1, name: 'Premier League', country: 'England' },
  { id: 2, name: 'La Liga', country: 'Spain' },
  { id: 3, name: 'Serie A', country: 'Italy' },
  { id: 4, name: 'Bundesliga', country: 'Germany' },
  { id: 5, name: 'Ligue 1', country: 'France' },
]

// Positions
export const POSITIONS = [
  'GK',  // Goalkeeper
  'CB',  // Center Back
  'LB',  // Left Back
  'RB',  // Right Back
  'LWB', // Left Wing Back
  'RWB', // Right Wing Back
  'CM',  // Central Midfielder
  'CDM', // Central Defensive Midfielder
  'CAM', // Central Attacking Midfielder
  'LM',  // Left Midfielder
  'RM',  // Right Midfielder
  'LW',  // Left Wing
  'RW',  // Right Wing
  'ST',  // Striker
  'CF',  // Center Forward
]

// UI Constants
export const SIDEBAR_WIDTH = 256
export const MOBILE_BREAKPOINT = 768
export const TABLET_BREAKPOINT = 1024

// Time Constants
export const CACHE_DURATION_MS = 5 * 60 * 1000 // 5 minutes
export const DEBOUNCE_DELAY_MS = 300
