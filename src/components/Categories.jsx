import React from 'react'

export default function Categories({ items, active, onSelect }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap gap-3">
      {items.map(cat => (
        <button key={cat.slug}
          onClick={() => onSelect?.(cat.slug)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${active===cat.slug? 'bg-amber-600 text-white border-amber-600':'bg-white hover:bg-amber-50 border-gray-200 text-gray-700'}`}>
          {cat.name}
        </button>
      ))}
    </div>
  )
}
