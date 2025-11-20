export default function CTA() {
  return (
    <section id="subscribe" className="py-14 sm:py-20 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Be first to know</h2>
            <p className="mt-3 text-white/80">Get weekly highlights: top posts, fresh quizzes, and quick news recaps.</p>
          </div>
          <form className="bg-white/10 backdrop-blur rounded-xl p-3 sm:p-4 flex gap-3">
            <input type="email" required placeholder="Enter your email" className="flex-1 rounded-lg px-4 py-3 bg-white text-slate-900 placeholder:text-slate-500 outline-none" />
            <button type="submit" className="rounded-lg bg-slate-900 px-5 py-3 font-semibold hover:bg-slate-800">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
