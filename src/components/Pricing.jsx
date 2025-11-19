export default function Pricing() {
  const tiers = [
    {
      name: 'Standard',
      price: '$99',
      note: 'Studio/1BR starting',
      features: ['Kitchen & bath', 'Floors & dusting', 'Trash removal', 'Supplies included']
    },
    {
      name: 'Deep Clean',
      price: '$189',
      note: '2–3BR starting',
      features: ['All Standard features', 'Baseboards & detail', 'Inside fridge/oven', 'High-touch sanitizing']
    },
    {
      name: 'Office',
      price: 'Custom',
      note: 'Billed monthly',
      features: ['Night/weekend slots', 'Restrooms & breakrooms', 'Common areas', 'Supply restocking']
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Transparent rates with no surprises. Contact us for exact quotes.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl bg-white border border-slate-200 p-6 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-2 text-4xl font-extrabold text-slate-900">{tier.price}</p>
              <p className="text-slate-500">{tier.note}</p>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-700">
                    <span className="text-emerald-500">✔</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#quote" className="mt-6 inline-block w-full text-center rounded-lg bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700 transition">
                Get quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
