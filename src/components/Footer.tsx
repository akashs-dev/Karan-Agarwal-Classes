import { Link } from "react-router-dom"
import { Phone, Mail, MapPin } from "lucide-react"
import logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Karan Agarwal Classes" className="h-12 w-12 object-contain drop-shadow-md" />
              <div>
                <div className="text-white font-bold text-base leading-none">Karan Agarwal</div>
                <div className="text-yellow-400 text-xs font-medium tracking-widest uppercase">Classes</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              No.1 Coaching Institute for Std 8th, 9th & 10th (SSC/CBSE). Education Brings Freedom.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/karanagarwalclasses" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://youtube.com/@karanagarwalclasses" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/courses", label: "Courses" },
                { to: "/results", label: "Results" },
                { to: "/gallery", label: "Gallery" },
                { to: "/branches", label: "Branches" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Branches */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Our Branches</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                Tingrenagar, Pune
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                Yerwada, Pune
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                Dhanori, Pune
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <a href="tel:7758077686" className="hover:text-yellow-400 transition-colors">7758077686 / 7758067686</a>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <a href="mailto:karanagarwalclasses@gmail.com" className="hover:text-yellow-400 transition-colors">karanagarwalclasses@gmail.com</a>
              </li>
              <li className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400 shrink-0 mt-0.5" />
                Tingrenagar | Yerwada | Dhanori — Pune
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-sm text-gray-500">
          © 2026 Karan Agarwal Classes. All rights reserved. | Est. 2018
        </p>
      </div>
    </footer>
  )
}

export default Footer
