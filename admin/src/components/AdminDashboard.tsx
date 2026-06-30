import { useMemo, useState } from 'react'

type RequestUser = {
  id: number
  fullName: string
  email: string
  provider: 'Google' | 'GitHub'
  requestedAt: string
  telegramConnected: boolean
  avatarLabel: string
}

const initialPendingRequests: RequestUser[] = [
  {
    id: 1,
    fullName: 'Amaya Collins',
    email: 'amaya.collins@example.com',
    provider: 'Google',
    requestedAt: 'Jun 24, 2026',
    telegramConnected: true,
    avatarLabel: 'AC',
  },
  {
    id: 2,
    fullName: 'Jordan Kim',
    email: 'jordan.kim@example.com',
    provider: 'GitHub',
    requestedAt: 'Jun 25, 2026',
    telegramConnected: false,
    avatarLabel: 'JK',
  },
  {
    id: 3,
    fullName: 'Priya Nair',
    email: 'priya.nair@example.com',
    provider: 'Google',
    requestedAt: 'Jun 26, 2026',
    telegramConnected: true,
    avatarLabel: 'PN',
  },
  {
    id: 4,
    fullName: 'Leo Bennett',
    email: 'leo.bennett@example.com',
    provider: 'GitHub',
    requestedAt: 'Jun 27, 2026',
    telegramConnected: false,
    avatarLabel: 'LB',
  },
]

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'pending' | 'approved'>('pending')
  const [pendingRequests, setPendingRequests] = useState<RequestUser[]>(initialPendingRequests)
  const [approvedRequests, setApprovedRequests] = useState<RequestUser[]>([])
  const [rejectedCount, setRejectedCount] = useState(0)

  const totalUsers = useMemo(
    () => pendingRequests.length + approvedRequests.length + rejectedCount,
    [pendingRequests.length, approvedRequests.length, rejectedCount],
  )

  const handleApprove = (user: RequestUser) => {
    setPendingRequests((previous) => previous.filter((item) => item.id !== user.id))
    setApprovedRequests((previous) => [user, ...previous])
  }

  const handleReject = (userId: number) => {
    setPendingRequests((previous) => previous.filter((item) => item.id !== userId))
    setRejectedCount((current) => current + 1)
  }

  const activeRequests = activeTab === 'pending' ? pendingRequests : approvedRequests

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-violet-950" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300/80">Admin panel</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">WeatherGuard Access Requests</h1>
          </div>
          <button className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10">
            Logout
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Total Users</p>
            <p className="mt-4 text-4xl font-extrabold text-white">{totalUsers}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Pending</p>
            <p className="mt-4 text-4xl font-extrabold text-sky-300">{pendingRequests.length}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Approved</p>
            <p className="mt-4 text-4xl font-extrabold text-emerald-300">{approvedRequests.length}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Rejected</p>
            <p className="mt-4 text-4xl font-extrabold text-rose-300">{rejectedCount}</p>
          </div>
        </section>

        <section className="mt-10 rounded-4xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300/80">Request queue</p>
              <h2 className="mt-2 text-2xl font-bold text-white">Manage access requests</h2>
            </div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setActiveTab('pending')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${activeTab === 'pending' ? 'bg-slate-100 text-slate-950' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>
                Pending Requests
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('approved')}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${activeTab === 'approved' ? 'bg-slate-100 text-slate-950' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}>
                Approved Users
              </button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
            {activeTab === 'pending' && pendingRequests.length === 0 ? (
              <div className="flex min-h-60 items-center justify-center px-8 py-16 text-center">
                <div>
                  <p className="text-lg font-semibold text-white">No pending requests</p>
                  <p className="mt-2 text-sm text-slate-400">All users have been reviewed. Come back later for new requests.</p>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-0 text-left text-sm text-slate-300">
                  <thead className="bg-slate-900 text-slate-400">
                    <tr>
                      <th className="px-6 py-4">User</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Provider</th>
                      <th className="px-6 py-4">Requested</th>
                      <th className="px-6 py-4">Telegram</th>
                      <th className="px-6 py-4 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeRequests.map((user) => (
                      <tr key={user.id} className="border-t border-white/10 hover:bg-slate-900/80">
                        <td className="px-6 py-5 align-middle">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/20 text-sm font-bold text-sky-200">
                              {user.avatarLabel}
                            </div>
                            <div>
                              <p className="font-semibold text-white">{user.fullName}</p>
                              <p className="text-xs text-slate-500">ID #{user.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 align-middle">
                          <div className="max-w-55 truncate text-slate-300">{user.email}</div>
                        </td>
                        <td className="px-6 py-5 align-middle">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${user.provider === 'Google' ? 'bg-emerald-500/10 text-emerald-200' : 'bg-slate-400/10 text-slate-200'}`}>
                            {user.provider}
                          </span>
                        </td>
                        <td className="px-6 py-5 align-middle text-slate-300">{user.requestedAt}</td>
                        <td className="px-6 py-5 align-middle">
                          <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${user.telegramConnected ? 'bg-emerald-500/10 text-emerald-200' : 'bg-rose-500/10 text-rose-200'}`}>
                            {user.telegramConnected ? 'Connected' : 'Not connected'}
                          </span>
                        </td>
                        <td className="px-6 py-5 align-middle text-right">
                          {activeTab === 'pending' ? (
                            <div className="inline-flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => handleApprove(user)}
                                className="rounded-full bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-400/20"
                              >
                                Approve
                              </button>
                              <button
                                type="button"
                                onClick={() => handleReject(user.id)}
                                className="rounded-full bg-rose-400/10 px-4 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-400/20"
                              >
                                Reject
                              </button>
                            </div>
                          ) : (
                            <span className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-200">
                              Approved
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
