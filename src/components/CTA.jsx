export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready for a spotless space?</h3>
            <p className="text-white/90 mt-1">Book in 60 seconds. No hidden fees, cancel anytime.</p>
          </div>
          <a href="#quote" className="inline-flex items-center justify-center rounded-lg bg-white text-blue-700 font-semibold px-5 py-3 hover:bg-blue-50 transition">
            Get your free quote
          </a>
        </div>
      </div>
    </section>
  )
}
