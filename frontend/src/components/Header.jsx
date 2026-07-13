import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Header({ isDarkMode, onToggleTheme, onOpenInquiry }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    // Default scroll state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  // Close mobile menu on page transition
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ]

  const isTransparent = isHomePage && !isScrolled

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent border-b border-transparent py-4'
          : 'bg-surface/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-sm border-b border-outline-variant/15 dark:border-neutral-900 py-2.5'
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Brand Logo */}
        <Link
          to="/"
          className="font-headline-md text-lg md:text-xl font-black tracking-tight text-primary flex items-center gap-2 group"
        >
          {/* Stylized electric lightning symbol */}
          <div className="w-8 h-8 rounded-lg bg-primary dark:bg-white flex items-center justify-center text-brand-orange group-hover:scale-105 transition-transform duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M13 10V2L4 14h7v8l9-12h-7z" />
            </svg>
          </div>
          <span className="group-hover:text-brand-orange transition-colors">
            Shri Balaji Shoes
          </span>
        </Link>

        {/* Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-bold font-body-md text-sm uppercase tracking-wider transition-colors duration-300 relative py-1 ${
                  isActive
                    ? 'text-brand-orange font-black'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange rounded-full"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Utilities & CTA Button */}
        <div className="flex items-center gap-x-3 md:gap-x-5">
          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-surface-container-low dark:bg-neutral-900 border border-outline-variant/10 hover:border-brand-orange/30 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Business Inquiry CTA */}
          <button
            onClick={() => onOpenInquiry()}
            className="hidden sm:block bg-primary dark:bg-white text-on-primary dark:text-neutral-950 hover:bg-brand-orange dark:hover:bg-brand-orange dark:hover:text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors duration-300 shadow-sm cursor-pointer"
          >
            Business Inquiry
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-surface-container-low dark:bg-neutral-900 border border-outline-variant/10 text-on-surface-variant hover:text-primary cursor-pointer"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[67px] bottom-0 bg-surface/98 dark:bg-neutral-950/98 backdrop-blur-md z-45 flex flex-col justify-between p-6 border-t border-outline-variant/15 dark:border-neutral-900 animate-fade-up">
          <div className="flex flex-col gap-y-5 text-lg font-bold mt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `py-2.5 border-b border-outline-variant/10 font-headline-md tracking-wide ${
                    isActive ? 'text-brand-orange pl-2' : 'text-on-surface-variant'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-y-4 mb-16">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                onOpenInquiry()
              }}
              className="w-full bg-brand-orange text-white py-4 font-bold text-sm uppercase tracking-widest rounded-xl shadow-md cursor-pointer"
            >
              Business Inquiry
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
