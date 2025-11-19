export default function Services() {
  const services = [
    {
      id: 'standard',
      title: 'Standard Cleaning',
      desc: 'Dusting, vacuuming, mopping, kitchen & bathrooms.',
      price: 'From $99',
    },
    {
      id: 'deep',
      title: 'Deep Cleaning',
      desc: 'Detailed scrubbing and sanitizing of high‑touch areas.',
      price: 'From $189',
    },
    {
      id: 'move',
      title: 'Move In/Out',
      desc: 'End‑of‑lease readiness for new tenants or buyers.',
      price: 'From $249',
    },
    {
      id: 'office',
      title: 'Office Cleaning',
      desc: 'Workplaces, retail, and common areas. After‑hours available.',
      price: 'Custom',
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Services</h2>
        <p className="mt-2 text-blue-100/90">Choose what fits your space. All supplies included.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.id} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white">
              <div className="text-xl font-semibold">{s.title}</div>
              <div className="mt-2 text-blue-100/80 text-sm">{s.desc}</div>
              <div className="mt-4 font-semibold">{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
