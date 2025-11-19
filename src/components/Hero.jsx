import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.15),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
            >
              Sparkling clean spaces for homes and businesses
            </motion.h1>
            <p className="mt-6 text-lg text-blue-100/90">
              Professional eco‑friendly cleaning services tailored for apartments, houses, offices, and retail spaces. Easy online booking and transparent pricing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={onCTAClick} className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                Get a free quote
              </button>
              <a href="#services" className="px-6 py-3 rounded-lg bg-white/10 text-white backdrop-blur hover:bg-white/20 transition-colors">
                Explore services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-blue-100/80">
              <div className="text-sm"><span className="font-semibold text-white">4.9/5</span> average rating</div>
              <div className="text-sm">Fully insured & vetted staff</div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur shadow-xl"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Home Cleaning', desc: 'Recurring or one‑time' },
                { title: 'Deep Cleaning', desc: 'Kitchens, baths, more' },
                { title: 'Office Cleaning', desc: 'After-hours available' },
                { title: 'Move In/Out', desc: 'End of lease ready' },
              ].map((card, i) => (
                <div key={i} className="rounded-xl bg-slate-900/60 border border-white/10 p-4">
                  <div className="text-white font-semibold">{card.title}</div>
                  <div className="text-blue-100/80 text-sm mt-1">{card.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-blue-100/80 text-sm">Eco‑friendly products • Flexible scheduling • 100% satisfaction guarantee</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
