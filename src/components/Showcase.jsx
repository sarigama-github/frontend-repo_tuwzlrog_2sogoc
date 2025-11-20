import { CalendarDays, ThumbsUp, MessageSquare, FlameKindling } from 'lucide-react'

function SectionHeader({ id, title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 id={id} className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p>
    </div>
  )
}

function PostCard({ title, excerpt, date }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <CalendarDays className="w-4 h-4" />
        <span>{date}</span>
      </div>
      <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{excerpt}</p>
      <div className="mt-4 flex items-center gap-4 text-slate-500">
        <span className="inline-flex items-center gap-1 text-xs"><ThumbsUp className="w-4 h-4" /> 128</span>
        <span className="inline-flex items-center gap-1 text-xs"><MessageSquare className="w-4 h-4" /> 24</span>
      </div>
    </div>
  )
}

function QuizCard({ title, questions, difficulty }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <FlameKindling className="w-4 h-4" />
        <span>{difficulty}</span>
      </div>
      <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{questions} questions</p>
      <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-500">Start</button>
    </div>
  )
}

function NewsCard({ source, title }) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 p-5 hover:shadow-md transition-shadow">
      <p className="text-xs text-slate-500">{source}</p>
      <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{title}</h3>
      <button className="mt-3 text-sm font-medium text-blue-600 hover:text-blue-500">Read</button>
    </div>
  )
}

export default function Showcase() {
  const posts = [
    { title: '5 tips to boost your creativity', excerpt: 'Small habits that make a big difference in your daily routine.', date: 'Nov 16, 2025' },
    { title: 'Lessons from building a side‑project', excerpt: 'What I wish I knew before shipping v1.', date: 'Nov 12, 2025' },
    { title: 'How to read more books', excerpt: 'Simple systems to keep reading fun all year.', date: 'Nov 2, 2025' },
  ]

  const quizzes = [
    { title: 'Web Dev Essentials', questions: 12, difficulty: 'Beginner' },
    { title: 'World Capitals', questions: 15, difficulty: 'Intermediate' },
    { title: 'Pop Culture 2025', questions: 10, difficulty: 'Fun' },
  ]

  const news = [
    { source: 'Tech Daily', title: 'AI tools reshape daily workflows' },
    { source: 'World Desk', title: 'Global sports calendar packed for spring' },
    { source: 'Culture Weekly', title: 'Indie artists break through with viral hits' },
  ]

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader id="posts" title="Trending Posts" subtitle="A snapshot of what people are reading right now" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((p, i) => <PostCard key={i} {...p} />)}
        </div>

        <SectionHeader id="quizzes" title="Interactive Quizzes" subtitle="Quick challenges to test your knowledge" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {quizzes.map((q, i) => <QuizCard key={i} {...q} />)}
        </div>

        <SectionHeader id="news" title="Latest News" subtitle="Curated headlines at a glance" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((n, i) => <NewsCard key={i} {...n} />)}
        </div>
      </div>
    </section>
  )
}
