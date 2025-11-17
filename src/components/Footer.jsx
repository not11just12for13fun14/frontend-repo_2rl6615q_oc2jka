import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white/60 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Coffee Gear Picks. This site contains affiliate links. As an Amazon Associate, we earn from qualifying purchases.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-700">Privacy</a>
          <a href="#" className="hover:text-gray-700">Terms</a>
          <a href="#" className="hover:text-gray-700">Contact</a>
        </div>
      </div>
    </footer>
  )
}
