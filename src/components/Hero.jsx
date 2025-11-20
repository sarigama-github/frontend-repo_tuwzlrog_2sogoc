import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/10 text-blue-700 border border-blue-600/20 text-xs font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Discover • Create • Share
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Your hub for posts, quizzes, and news
            </h1>
            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              Explore trending stories, challenge yourself with interactive quizzes, and stay up to date with bite‑sized news — all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#posts" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-500 shadow">
                Start Exploring
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#quizzes" className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700">
                Try a Quiz
              </a>
            </div>
          </div>

          <div>
            <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur rounded-2xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 shadow-xl">
              <div className="grid grid-cols-3 gap-4">
                {['Posts', 'Quizzes', 'News', 'Tech', 'Sports', 'Culture', 'Music', 'Science', 'World'].map((tag, i) => (
                  <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200/70 dark:border-slate-700/70 flex items-center justify-center text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
