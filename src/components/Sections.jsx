import { PenSquare, HelpCircle, Newspaper, ArrowRight } from 'lucide-react'

function Card({ icon: Icon, title, desc, cta, href, badge }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 p-6 transition-shadow hover:shadow-lg">
      {badge && (
        <span className="absolute -top-2 -right-2 rounded-full bg-blue-600 text-white text-xs px-2 py-1 shadow">
          {badge}
        </span>
      )}
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-600/10 text-blue-700 p-2">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">{desc}</p>
      <a href={href} className="mt-5 inline-flex items-center gap-2 text-blue-600 hover:text-blue-500">
        {cta}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  )
}

export default function Sections() {
  const cards = [
    {
      icon: PenSquare,
      title: 'Trending Posts',
      desc: 'Read fresh takes from the community and share your own stories with the world.',
      cta: 'Browse posts',
      href: '#posts',
      badge: 'Hot',
    },
    {
      icon: HelpCircle,
      title: 'Interactive Quizzes',
      desc: 'Test your knowledge across topics. Compete on leaderboards and challenge friends.',
      cta: 'Take a quiz',
      href: '#quizzes',
    },
    {
      icon: Newspaper,
      title: 'Latest News',
      desc: 'Catch up on curated headlines and summaries from trusted sources.',
      cta: 'See headlines',
      href: '#news',
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950/40" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Card key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  )
}
