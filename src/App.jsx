import { Routes, Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import TopPosters from './pages/TopPosters'
import ReportPage from './pages/ReportPage'
import CompanyProfile from './pages/CompanyProfile'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="">

      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/top-posters" element={<TopPosters />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/company/:name" element={<CompanyProfile />} />
      </Routes>
    </div>
  )
}

export default App
