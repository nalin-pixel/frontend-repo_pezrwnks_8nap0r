import { useRef } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import QuoteForm from './components/QuoteForm'

function App() {
  const quoteRef = useRef(null)

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-slate-900">
            <span className="inline-block h-8 w-8 rounded-md bg-blue-600" />
            CleanCo
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#quote" className="hover:text-slate-900">Get quote</a>
            <a href="/test" className="text-slate-500 hover:text-slate-900">System test</a>
          </nav>
          <button onClick={scrollToQuote} className="sm:hidden inline-flex items-center rounded-lg bg-blue-600 text-white px-3 py-2">Quote</button>
        </div>
      </header>

      <main className="pt-16">
        <Hero onQuoteClick={scrollToQuote} />
        <Services />
        <Pricing />
        <CTA />
        <QuoteForm ref={quoteRef} />
      </main>

      <footer className="py-10 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} CleanCo Cleaning Services</p>
          <div className="text-sm text-slate-600">Made with care • Fully insured • Satisfaction guaranteed</div>
        </div>
      </footer>
    </div>
  )
}

export default App
