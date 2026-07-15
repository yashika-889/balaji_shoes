import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, ShoppingBag, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Footer({ onOpenInquiry }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false)
  const [openSection, setOpenSection] = useState(null)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) {
        setOpenSection(null)
      }
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSection = (section) => {
    if (!isMobile) return
    setOpenSection(openSection === section ? null : section)
  }

  const corporateLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-[#171717] text-[#C7C7C7] border-t border-neutral-800 select-none transition-colors duration-300">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-12 text-left">
        
        {/* Column 1 — Company Info (4 cols) */}
        <div className="lg:col-span-4 space-y-4 border-b border-neutral-800/60 pb-6 md:border-b-0 md:pb-0">
          <Link to="/" className="font-headline-lg text-lg font-black text-white tracking-tight">
            Shri Balaji Shoes Private Limited
          </Link>
          <p className="text-xs sm:text-sm text-[#C7C7C7] leading-relaxed max-w-xs">
            Established in 2022, Shri Balaji Shoes manufactures quality footwear for retailers, distributors, and businesses across India from its manufacturing facility in Bahadurgarh, Haryana.
          </p>
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF6B00] block pt-1">
            Official Manufacturer of HYCROSS Footwear
          </span>
        </div>

        {/* Column 2 — Quick Links (2 cols) */}
        <div className="lg:col-span-2 border-b border-neutral-800/60 pb-4 md:border-b-0 md:pb-0">
          <button
            onClick={() => toggleSection('quick-links')}
            disabled={!isMobile}
            className="w-full flex justify-between items-center text-left md:block md:pointer-events-none mb-4 md:mb-6 cursor-pointer md:cursor-default group"
          >
            <h5 className="font-bold text-xs uppercase tracking-widest text-white">
              Quick Links
            </h5>
            {isMobile && (
              <ChevronDown
                className={`w-4 h-4 text-[#C7C7C7] transition-transform duration-300 ${
                  openSection === 'quick-links' ? 'rotate-180 text-[#FF6B00]' : ''
                }`}
              />
            )}
          </button>
          
          <AnimatePresence initial={false}>
            {(!isMobile || openSection === 'quick-links') && (
              <motion.div
                key="quick-links-content"
                initial={isMobile ? { height: 0, opacity: 0 } : false}
                animate={isMobile ? { height: 'auto', opacity: 1 } : false}
                exit={isMobile ? { height: 0, opacity: 0 } : false}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 font-medium pb-4 md:pb-0">
                  {corporateLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-xs sm:text-sm text-[#C7C7C7] hover:text-[#FF6B00] transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => onOpenInquiry()}
                      className="text-xs sm:text-sm text-[#C7C7C7] hover:text-[#FF6B00] transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 text-left font-sans font-medium"
                    >
                      Business Inquiry
                    </button>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Column 3 — Contact Info (3 cols) */}
        <div className="lg:col-span-3 border-b border-neutral-800/60 pb-4 md:border-b-0 md:pb-0">
          <button
            onClick={() => toggleSection('contact')}
            disabled={!isMobile}
            className="w-full flex justify-between items-center text-left md:block md:pointer-events-none mb-4 md:mb-6 cursor-pointer md:cursor-default group"
          >
            <h5 className="font-bold text-xs uppercase tracking-widest text-white">
              Business Contact
            </h5>
            {isMobile && (
              <ChevronDown
                className={`w-4 h-4 text-[#C7C7C7] transition-transform duration-300 ${
                  openSection === 'contact' ? 'rotate-180 text-[#FF6B00]' : ''
                }`}
              />
            )}
          </button>
          
          <AnimatePresence initial={false}>
            {(!isMobile || openSection === 'contact') && (
              <motion.div
                key="contact-content"
                initial={isMobile ? { height: 0, opacity: 0 } : false}
                animate={isMobile ? { height: 'auto', opacity: 1 } : false}
                exit={isMobile ? { height: 0, opacity: 0 } : false}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <ul className="space-y-4 text-xs sm:text-sm pb-4 md:pb-0">
                  {/* Email Address */}
                  <li className="flex items-start gap-4.5">
                    <Mail className="w-4.5 h-4.5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1.5">
                      <a href="mailto:shribalaji.indiaofficial@gmail.com" className="hover:text-[#FF6B00] transition-colors">
                        shribalaji.indiaofficial@gmail.com
                      </a>
                      <a href="mailto:sumitgoel@balajishoes.shop" className="hover:text-[#FF6B00] transition-colors">
                        sumitgoel@balajishoes.shop
                      </a>
                    </div>
                  </li>

                  {/* Direct Line */}
                  <li className="flex items-center gap-4.5">
                    <Phone className="w-4.5 h-4.5 text-[#FF6B00] shrink-0" />
                    <a href="tel:+919811254101" className="hover:text-[#FF6B00] transition-colors">
                      +91 98112 54101
                    </a>
                  </li>

                  {/* Factory Coordinate */}
                  <li className="flex items-start gap-4.5">
                    <MapPin className="w-4.5 h-4.5 text-[#FF6B00] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      Plot No. 647, MIE Part-A, Bahadurgarh, Haryana – 124507
                    </span>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Column 4 — Highlighted Brand Card (3 cols) */}
        <div className="lg:col-span-3 pt-2 md:pt-0">
          <button
            onClick={() => toggleSection('brand')}
            disabled={!isMobile}
            className="w-full flex justify-between items-center text-left md:block md:pointer-events-none mb-4 md:mb-6 cursor-pointer md:cursor-default group"
          >
            <h5 className="font-bold text-xs uppercase tracking-widest text-white">
              Our Brand
            </h5>
            {isMobile && (
              <ChevronDown
                className={`w-4 h-4 text-[#C7C7C7] transition-transform duration-300 ${
                  openSection === 'brand' ? 'rotate-180 text-[#FF6B00]' : ''
                }`}
              />
            )}
          </button>
          
          <AnimatePresence initial={false}>
            {(!isMobile || openSection === 'brand') && (
              <motion.div
                key="brand-content"
                initial={isMobile ? { height: 0, opacity: 0 } : false}
                animate={isMobile ? { height: 'auto', opacity: 1 } : false}
                exit={isMobile ? { height: 0, opacity: 0 } : false}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="bg-[#222225] border border-neutral-800 p-6 rounded-2xl space-y-4 shadow-md mb-4 md:mb-0">
                  <div className="flex items-center gap-3">
                    {/* Lightning Bolt Brand Logo */}
                    <div className="w-8.5 h-8.5 rounded-lg bg-neutral-900 flex items-center justify-center text-[#FF6B00] shrink-0 shadow-sm border border-neutral-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5.5 h-5.5"
                      >
                        <path d="M13 10V2L4 14h7v8l9-12h-7z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xl font-black text-white tracking-wide block">
                        HYCROSS
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#FF6B00] font-bold block">
                        Cross The Limit
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-xs font-bold text-white/80">
                    Men • Women • Kids
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] uppercase font-bold text-white/50 tracking-wider block">
                      Available On
                    </span>
                    <div className="flex flex-col gap-2.5 pt-1">
                      <a
                        href="https://www.amazon.in/stores/page/DBE02ED0-DA01-43D4-B559-002662A0E73E?ingress=2&lp_context_asin=B0H2VF6YYB&visitId=457ebece-f9ad-4b44-ab49-02b11cbba1b7&ref_=ast_bln"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-xs text-[#C7C7C7] hover:text-[#FF6B00] transition-colors duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-neutral-800 text-[#C7C7C7] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold">Amazon Store</span>
                      </a>
                      <a
                        href="https://www.instagram.com/hycrossshoes/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-xs text-[#C7C7C7] hover:text-[#FF6B00] transition-colors duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-neutral-800 text-[#C7C7C7] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3.5 h-3.5"
                          >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </div>
                        <span className="font-semibold">Instagram</span>
                      </a>
                      <a
                        href="https://www.facebook.com/people/Hycross-Shoes/61551055092057/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-xs text-[#C7C7C7] hover:text-[#FF6B00] transition-colors duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-neutral-800 text-[#C7C7C7] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3.5 h-3.5"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          </svg>
                        </div>
                        <span className="font-semibold">Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Bottom Block */}
      <div className="border-t border-neutral-800 py-8 px-4 md:px-margin-desktop text-center text-sm text-[#C7C7C7] max-w-container-max mx-auto">
        <span>© 2026 Shri Balaji Shoes Private Limited. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
