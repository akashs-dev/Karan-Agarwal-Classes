import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Phone, MapPin, Menu, X } from "lucide-react"
import logo from "@/assets/logo.png"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/results", label: "Results" },
  { to: "/gallery", label: "Gallery" },
  { to: "/branches", label: "Branches" },
  { to: "/contact", label: "Contact" },
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-[hsl(224,55%,10%)] text-gray-400 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-yellow-400 shrink-0" />
            Tingrenagar | Yerwada | Dhanori — Pune
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-yellow-400 shrink-0" />
            <a href="tel:7758077686" className="hover:text-yellow-400 transition-colors">7758077686</a>
            <span className="mx-1 text-gray-600">/</span>
            <a href="tel:7758067686" className="hover:text-yellow-400 transition-colors">7758067686</a>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`bg-navy border-b border-white/10 transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : ""}`}>
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src={logo} alt="Karan Agarwal Classes" className="h-12 w-12 object-contain drop-shadow-md" />
            <div className="leading-tight">
              <div className="text-white font-bold text-[15px] leading-none tracking-wide">Karan Agarwal</div>
              <div className="text-yellow-400 text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5">Classes</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors font-body ${
                  pathname === link.to
                    ? "text-yellow-400 bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/8"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Call Now button */}
          <a
            href="tel:7758077686"
            className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-navy font-bold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-[0_2px_12px_rgba(201,162,39,0.4)] hover:shadow-[0_4px_20px_rgba(201,162,39,0.5)] shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Now
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[hsl(224,52%,12%)] border-t border-white/10 px-4 pb-5">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2.5 rounded-lg text-sm font-body font-medium transition-colors ${
                    pathname === link.to
                      ? "text-yellow-400 bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:7758077686"
                className="mt-2 flex items-center justify-center gap-2 bg-yellow-500 text-navy font-bold text-sm px-4 py-3 rounded-lg"
              >
                <Phone className="w-4 h-4" /> Call Now: 7758077686
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
