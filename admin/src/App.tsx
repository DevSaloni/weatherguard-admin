import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminDashboard } from './components/AdminDashboard'
import { AdminLogin } from './components/AdminLogin'
import { UserDashboard } from './components/UserDashboard'
import { HeroSection } from './components/Herosection'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-slate-950 text-slate-100">
              <div className="relative mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4 py-16 text-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Page not found</p>
                  <h1 className="mt-4 text-3xl font-bold text-white">Route unavailable</h1>
                  <p className="mt-2 text-slate-400">Use /user or /admin to view the dashboard.</p>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
