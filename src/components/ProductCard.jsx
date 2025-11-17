import React from 'react'
import { Star, Link as LinkIcon, ExternalLink } from 'lucide-react'

export default function ProductCard({ product, onClick }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden hover:shadow-md transition">
      {product.image_url && (
        <img src={product.image_url} alt={product.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{product.title}</h3>
          {product.rating != null && (
            <div className="flex items-center gap-1 text-amber-600">
              <Star className="w-4 h-4 fill-amber-500" />
              <span className="text-sm">{product.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        {product.description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
        )}
        <div className="mt-4 flex items-center justify-between">
          {product.price != null ? (
            <span className="text-base font-semibold text-gray-900">${product.price.toFixed(2)}</span>
          ) : <span />}
          <a
            href={`${import.meta.env.VITE_BACKEND_URL || ''}/r/${product.id}?source=grid`}
            onClick={() => onClick?.(product)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition"
          >
            View Deal <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
