import { useMemo, useState } from 'react'

type UserStatus = 'none' | 'pending' | 'approved' | 'rejected'

const userProfile = {
  fullName: 'Sofia Patel',
  email: 'sofia.patel@example.com',
  provider: 'Google' as const,
  avatarLabel: 'SP',
}

export function UserDashboard() {
  const [status, setStatus] = useState<UserStatus>('none')
  const telegramConnected = false
  const chatId = ''

  const statusInfo = useMemo(() => {
    switch (status) {
      case 'approved':
        return { label: 'Approved', tone: 'emerald', helper: 'You have full access.' }
      case 'pending':
        return { label: 'Pending', tone: 'sky', helper: 'Your request is under review.' }
      case 'rejected':
        return { label: 'Rejected', tone: 'rose', helper: 'Contact admin for more info.' }
      default:
        return { label: 'Not requested', tone: 'slate', helper: 'Request access to get started.' }
    }
  }, [status])

  const handleRequestAccess = () => {
    setStatus('pending')
  }

  const handleOpenTelegram = () => {
    window.open('https://t.me/WeatherGuardBot', '_blank')
  }

  const telegramStatus = telegramConnected
    ? {
        label: 'Telegram Connected',
        color: 'emerald',
      }
    : {
        label: 'Connect Telegram',
        color: 'slate',
      }

  const providerBadgeClass =
    userProfile.provider === 'Google'
      ? 'text-sky-200 bg-sky-500/10'
      : 'text-slate-200 bg-slate-400/10'

  const statusBadgeClass =
    statusInfo.tone === 'emerald'
      ? 'text-emerald-200 bg-emerald-500/10'
      : statusInfo.tone === 'sky'
      ? 'text-sky-200 bg-sky-500/10'
      : statusInfo.tone === 'rose'
      ? 'text-rose-200 bg-rose-500/10'
      : 'text-slate-200 bg-slate-400/10'

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-violet-950" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300/80">WeatherGuard</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-white">User Dashboard</h1>
          </div>
          <div className="flex items-center gap-3 rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-300 shadow-sm shadow-slate-950/20">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-800 text-sm font-bold text-sky-200">
              {userProfile.avatarLabel}
            </div>
            <div>
              <p className="font-semibold text-white">{userProfile.email}</p>
              <p className="text-xs text-slate-500">Signed in with {userProfile.provider}</p>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-1">
          <section className="rounded-4xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-500/10 text-3xl font-black text-sky-200">
                  {userProfile.avatarLabel}
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">{userProfile.fullName}</p>
                  <p className="mt-1 text-sm text-slate-400">{userProfile.email}</p>
                </div>
              </div>
              <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${providerBadgeClass}`}>
                {userProfile.provider}
              </span>
            </div>
          </section>

          <section className="rounded-4xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Access Status</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className={`rounded-full px-4 py-2 text-sm font-semibold ${statusBadgeClass}`}>{statusInfo.label}</span>
                </div>
              </div>
              {status === 'none' && (
                <button
                  onClick={handleRequestAccess}
                  className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Request Access
                </button>
              )}
            </div>
            <p className="mt-4 max-w-2xl text-sm text-slate-400">{statusInfo.helper}</p>
          </section>

          <section className="rounded-4xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Telegram Connection</p>
                <p className="mt-3 text-lg font-semibold text-white">{telegramStatus.label}</p>
              </div>
              {telegramConnected ? (
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Connected
                </div>
              ) : null}
            </div>

            {telegramConnected ? (
              <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-300">
                <p>Your chat ID:</p>
                <p className="mt-1 font-semibold text-white">{chatId || '1234567890'}</p>
              </div>
            ) : (
              <div className="mt-5 space-y-4 text-sm text-slate-300">
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="font-semibold text-white">1. Open <span className="text-sky-300">@WeatherGuardBot</span></p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="font-semibold text-white">2. Send <span className="text-sky-300">/start</span></p>
                </div>
                <button
                  onClick={handleOpenTelegram}
                  className="mt-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Open Telegram Bot
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}
