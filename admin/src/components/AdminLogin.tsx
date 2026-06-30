import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/admin')
  }

  return (
    <div className="min-h-screen w-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 opacity-80" />
      <div className="pointer-events-none absolute top-10 left-1/4 h-72 w-72 rounded-full bg-orange-400/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center px-4 py-16">
        <div className="w-full rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl sm:p-12">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200/80">Admin login</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">WeatherGuard Access</h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Enter your email and password to continue to the admin dashboard. Built to match the WeatherGuard hero experience with glassmorphism and bold gradients.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block text-left text-sm font-medium text-slate-300">
              Email address
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="admin@weatherguard.com"
                required
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              />
            </label>

            <label className="block text-left text-sm font-medium text-slate-300">
              Password
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Enter your password"
                required
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-3xl bg-gradient-to-r from-purple-500 to-sky-500 px-6 py-4 text-base font-semibold text-white shadow-2xl shadow-purple-500/20 transition hover:opacity-95"
            >
              Continue to Admin Dashboard
            </button>
          </form>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-left text-sm text-slate-300 sm:flex-row sm:justify-between">
            <p>Secure access only. Approved admins receive alerts and manage requests from one dashboard.</p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Back to Landing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
