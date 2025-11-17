import React from 'react'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || ''

function App() {
  const [categories, setCategories] = React.useState([])
  const [products, setProducts] = React.useState([])
  const [activeCat, setActiveCat] = React.useState('')
  const [query, setQuery] = React.useState('')
  const [loading, setLoading] = React.useState(true)

  const fetchCategories = async () => {
    const res = await fetch(`${API}/api/categories`)
    const data = await res.json()
    setCategories(data)
    if (data[0]) setActiveCat(data[0].slug)
  }

  const fetchProducts = async (opts={}) => {
    const params = new URLSearchParams()
    if (opts.category) params.set('category', opts.category)
    if (opts.search) params.set('search', opts.search)
    const url = `${API}/api/products${params.toString()?`?${params.toString()}`:''}`
    const res = await fetch(url)
    const data = await res.json()
    setProducts(data)
  }

  React.useEffect(() => { (async () => {
    await fetchCategories();
    setLoading(false)
  })() }, [])

  React.useEffect(() => { if (activeCat) fetchProducts({ category: activeCat, search: query }) }, [activeCat, query])

  const onSearch = (q) => { setQuery(q) }
  const onSelectCat = (slug) => { setActiveCat(slug) }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Hero onSearch={onSearch} />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mt-10 text-2xl font-bold text-gray-900">Shop by Category</h2>
      </div>
      <Categories items={categories} active={activeCat} onSelect={onSelectCat} />

      <div className="max-w-6xl mx-auto px-6 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onClick={() => {}} />
        ))}
        {!products.length && !loading && (
          <div className="col-span-full text-center text-gray-500 py-10">No products found.</div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default App
