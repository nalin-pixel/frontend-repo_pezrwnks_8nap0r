import { useState } from 'react'

export default function QuoteForm() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    // Transform numeric fields
    if (payload.bedrooms) payload.bedrooms = Number(payload.bedrooms)
    if (payload.bathrooms) payload.bathrooms = Number(payload.bathrooms)
    if (payload.square_feet) payload.square_feet = Number(payload.square_feet)

    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setStatus({ ok: true, message: data.message })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get your free quote</h2>
            <p className="mt-3 text-slate-600">Tell us about your space and we’ll follow up with a custom estimate.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• 100% satisfaction guarantee</li>
              <li>• Eco-friendly products available</li>
              <li>• Fully insured and vetted pros</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Property Type</label>
                <select name="property_type" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <option value="home">Home</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Service</label>
                <select name="service" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <option>standard clean</option>
                  <option>deep clean</option>
                  <option>move-in/out</option>
                  <option>office clean</option>
                  <option>post-construction</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Bedrooms</label>
                <input type="number" name="bedrooms" min="0" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Bathrooms</label>
                <input type="number" name="bathrooms" min="0" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Square Feet (commercial)</label>
                <input type="number" name="square_feet" min="0" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Preferred Date</label>
                <input type="date" name="preferred_date" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Details</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-lg border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
            </div>

            {status && (
              <div className={`mt-4 rounded-lg p-3 ${status.ok ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                {status.message}
              </div>
            )}

            <button disabled={loading} className="mt-6 w-full rounded-lg bg-blue-600 text-white font-semibold py-3 hover:bg-blue-700 transition disabled:opacity-60">
              {loading ? 'Sending...' : 'Request quote'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
