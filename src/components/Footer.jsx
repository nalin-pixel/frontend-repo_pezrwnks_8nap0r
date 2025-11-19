export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-blue-100/80 text-sm">© {new Date().getFullYear()} CleanCo. All rights reserved.</div>
        <div className="text-blue-100/80 text-sm">Made with eco‑friendly products • Fully insured</div>
      </div>
    </footer>
  )
}
