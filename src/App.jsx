import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Commentators from './pages/Commentators'
import CristianoRonaldo from './pages/CristianoRonaldo'
import Legends from './pages/Legends'
import Players from './pages/Players'
import Transfers from './pages/Transfers'
import Matches from './pages/Matches'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const htmlElement = document.documentElement
    htmlElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
    htmlElement.lang = i18n.language
  }, [i18n.language])

  return (
    <Router>
      <div className="min-h-screen bg-primary flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commentators" element={<Commentators />} />
            <Route path="/cristiano" element={<CristianoRonaldo />} />
            <Route path="/legends" element={<Legends />} />
            <Route path="/players" element={<Players />} />
            <Route path="/transfers" element={<Transfers />} />
            <Route path="/matches" element={<Matches />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
