import React from 'react'
import { Coffee, Search } from 'lucide-react'

export default function Hero({ onSearch }) {
  const [q, setQ] = React.useState('')
  const submit = (e) => { e.preventDefault(); onSearch?.(q) }
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-amber-700 font-semibold mb-4">
            <Coffee className="w-5 h-5" />
            Brew Better at Home
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Best Coffee Gear Picks
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Curated filters, grinders, and espresso essentials with affiliate links. Simple, honest recommendations.
          </p>
          <form onSubmit={submit} className="mt-6 flex items-stretch gap-2">
            <div className="flex-1 flex items-center bg-white rounded-xl shadow-sm ring-1 ring-black/5 px-4">
              <Search className="w-5 h-5 text-gray-400" />
              <input value={q} onChange={e=>setQ(e.target.value)}
                className="w-full py-3 px-2 focus:outline-none"
                placeholder="Search gear (e.g., grinder, espresso, pour-over)" />
            </div>
            <button className="px-5 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition">Search</button>
          </form>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-amber-200 to-orange-200 blur-2xl opacity-60 rounded-full" />
          <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop" alt="Coffee Gear" className="relative rounded-3xl shadow-2xl ring-1 ring-black/10" />
        </div>
      </div>
    </section>
  )
}
