import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <Showcase />
        <CTA />
        <footer className="py-10 text-center text-sm text-slate-500">© 2025 ShareSphere. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
