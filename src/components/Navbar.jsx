import { useState } from 'react'
import { Menu, X, PenSquare, HelpCircle, Newspaper } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Posts', href: '#posts', icon: PenSquare },
    { label: 'Quizzes', href: '#quizzes', icon: HelpCircle },
    { label: 'News', href: '#news', icon: Newspaper },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <img src="/flame-icon.svg" alt="Logo" className="w-7 h-7" />
            ShareSphere
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
            <a href="#subscribe" className="ml-2 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow">
              Get Updates
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map(({ label, href }) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-slate-700 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800">
                  {label}
                </a>
              ))}
              <a href="#subscribe" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-blue-600 text-white text-center">Get Updates</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
