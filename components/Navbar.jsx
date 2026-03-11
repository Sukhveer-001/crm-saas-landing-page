import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-lg font-semibold tracking-tight">
          ContactFlow
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <NavLink to="/features" className="hover:text-black transition">
            Features
          </NavLink>

          <NavLink to="/pricing" className="hover:text-black transition">
            Pricing
          </NavLink>

          <NavLink to="/about" className="hover:text-black transition">
            About
          </NavLink>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-black transition"
          >
            Sign in
          </Link>

          <Link
            to="/signup"
            className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 px-6 py-4 flex flex-col gap-4 bg-white">
          <NavLink to="/features" onClick={() => setOpen(false)}>
            Features
          </NavLink>

          <NavLink to="/pricing" onClick={() => setOpen(false)}>
            Pricing
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>

          <Link to="/login" onClick={() => setOpen(false)}>
            Sign in
          </Link>

          <Link
            to="/signup"
            onClick={() => setOpen(false)}
            className="bg-black text-white rounded-md px-4 py-2 w-fit"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}