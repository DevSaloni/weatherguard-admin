export function HeroSection() {
  return (
    <div className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite'
          }}
        ></div>
        
        {/* Animated Orange Orbs */}
        <div className="absolute top-20 left-1/3 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full px-5 text-center">     
           <nav className="mb-10 flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 px-6 py-4 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
          <div className="text-lg font-black uppercase tracking-[0.3em] text-white">WG.</div>
          <button className="group relative inline-flex items-center justify-center rounded-xl border-2 border-white/40 bg-white/20 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/30 hover:border-white/60">
            <div className="absolute inset-0 bg-linear-to-r from-slate-400/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <span className="relative">Login</span>
          </button>
        </nav>        {/* Main Heading */}
       <h1 className="whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
  WeatherGuard 
</h1>

       
        {/* Subheading */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-6 drop-shadow-lg">
          An invite-only weather alert platform
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-white/95 font-light mb-12 leading-relaxed drop-shadow-md max-w-3xl mx-auto">
          Sign in with your Google or GitHub account, request access, and our admin team will review your request. Once approved, you'll receive scheduled weather alerts directly on Telegram.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10 items-center">
          {/* Google Button */}
          <button className="group relative px-8 py-4 font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto bg-white/20 backdrop-blur-md border-2 border-white/40 hover:bg-white/30 hover:border-white/60">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3 text-lg">
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>Sign in with Google</span>
            </div>
          </button>

          {/* GitHub Button */}
          <button className="group relative px-8 py-4 font-semibold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto bg-white/20 backdrop-blur-md border-2 border-white/40 hover:bg-white/30 hover:border-white/60">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3 text-lg">
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Sign in with GitHub</span>
            </div>
          </button>
        </div>

        {/* Info Text */}
        <p className="text-sm md:text-base text-white/80 font-light">
          Request access to join our admin community today
        </p>
      </div>

      {/* Gradient Animation */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
