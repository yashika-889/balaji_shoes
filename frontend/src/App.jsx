import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Lenis from 'lenis'

// Layout & Global Components
import Header from './components/Header'
import Footer from './components/Footer'
import InquiryModal from './components/InquiryModal'
import Loader from './components/Loader'
import BackToTop from './components/BackToTop'

// Pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

// Page Wrapper for SEO and Route Transition animations
function PageWrapper({ children, title, description }) {
  const location = useLocation()
  const canonicalUrl = `https://balajishoes.shop${location.pathname === '/' ? '' : location.pathname}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="flex-1 flex flex-col w-full"
    >
      <Helmet>
        <title>{title} | Shri Balaji Shoes</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${title} | Shri Balaji Shoes`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://balajishoes.shop/og-image.webp" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={`${title} | Shri Balaji Shoes`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://balajishoes.shop/og-image.webp" />
      </Helmet>
      {children}
    </motion.div>
  )
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState(false)
  const [prefilledProduct, setPrefilledProduct] = useState(null)
  const [isLoadingScreen, setIsLoadingScreen] = useState(true)
  const location = useLocation()

  // Tasteful loading screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingScreen(false)
    }, 1600)
    return () => clearTimeout(timer)
  }, [])

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  // Initialize Dark Mode theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Reset scroll to top on page navigation
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  const handleToggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  const handleOpenInquiry = (productName = null) => {
    setPrefilledProduct(productName)
    setIsInquiryOpen(true)
  }

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false)
    setPrefilledProduct(null)
  }

  return (
    <div className="bg-surface text-on-surface dark:bg-neutral-950 dark:text-neutral-100 min-h-screen relative flex flex-col font-sans transition-colors duration-300 overflow-x-hidden">
      {/* Texture Overlay Effect */}
      <div className="texture-overlay"></div>

      {/* Loading Intro Animation Overlay */}
      <AnimatePresence>
        {isLoadingScreen && <Loader isFinished={!isLoadingScreen} />}
      </AnimatePresence>

      {/* Navigation Header */}
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Pages content wrapper with transitions */}
      <main className="flex-1 flex flex-col w-full relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper
                  title="Shri Balaji Shoes Private Limited | B2B Footwear Manufacturer"
                  description="Shri Balaji Shoes Private Limited manufactures comfort-driven HYCROSS footwear. Premium B2B footwear supplier based in Bahadurgarh, Haryana."
                >
                  <Home onOpenInquiry={handleOpenInquiry} />
                </PageWrapper>
              }
            />
            <Route
              path="/products"
              element={
                <PageWrapper
                  title="HYCROSS B2B Footwear Catalog | Made for Every Step"
                  description="Explore the official 2026 HYCROSS catalog of sneakers, active sandals, kids cartoon clogs, and slides. Sourcing for distributors across India."
                >
                  <Products />
                </PageWrapper>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <PageWrapper
                  title="Product Specifications"
                  description="Detailed specifications, available sizes, materials, minimum order quantities (MOQ), and pricing for the HYCROSS collection."
                >
                  <ProductDetails onOpenInquiry={handleOpenInquiry} />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper
                  title="Contact Sales Office & Factory | Shri Balaji Shoes"
                  description="Get in touch with Shri Balaji Shoes factory in Bahadurgarh, Haryana. Request wholesale B2B distributor catalogs and commercial pricing."
                >
                  <Contact />
                </PageWrapper>
              }
            />
            <Route
              path="*"
              element={
                <PageWrapper
                  title="404 - Wrong Direction"
                  description="Oops! It looks like you've stepped in the wrong direction. Return to the Shri Balaji Shoes B2B catalog."
                >
                  <NotFound />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Global B2B Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Back to Top floating button */}
      <BackToTop />

      {/* Inquiry Dialog Modal overlay */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        prefilledProduct={prefilledProduct}
      />
    </div>
  )
}
