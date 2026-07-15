import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronRight, SlidersHorizontal, X, ArrowRight, ShoppingBag } from 'lucide-react'
import { PRODUCTS } from '../data/products'
import SkeletonLoader from '../components/SkeletonLoader'
import BlurImage from '../components/BlurImage'

const CATEGORIES = [
  { label: 'All', value: 'All' },
  { label: 'Men', value: 'Men' },
  { label: 'Kids', value: 'Kids' },
  { label: 'Sandals', value: 'Sandals' },
  { label: 'Clogs & Crocs', value: 'Crocs' }
]

const getProductDisplayNames = (product) => {
  switch (product.id) {
    case 'skechon-1': return { mainName: 'Flex Walk', modelName: 'Model S1', subtitle: 'Comfort Slip-On' }
    case 'skechon-2': return { mainName: 'Glide Comfort', modelName: 'Model S2', subtitle: 'Active Slip-On' }
    case 'skechon-111': return { mainName: 'Urban Walk', modelName: 'Model S111', subtitle: 'Premium Slip-On' }
    case 'skechon-121': return { mainName: 'Aero Cushion', modelName: 'Model S121', subtitle: 'Sports Lifestyle' }
    case 'tpr-shocker-2': return { mainName: 'Rugged Shocker', modelName: 'Model T2', subtitle: 'Outdoor Trainer' }
    case 'mr-india': return { mainName: 'Mr. India Classic', modelName: 'Special Edition', subtitle: 'Arch Support Slip-On' }
    case 'kids-astronaut': return { mainName: 'Space Astronaut', modelName: 'Kids Edition', subtitle: 'Cartoon Sandal' }
    case 'kids-ultraman': return { mainName: 'Ultraman Shield', modelName: 'Kids Edition', subtitle: 'Action Badge Sandal' }
    case 'nexa-4': return { mainName: 'Nexa Active', modelName: 'Model N4', subtitle: 'Sporty Kid Sandal' }
    case 'jump-1': return { mainName: 'Jump Sport', modelName: 'Model J1', subtitle: 'Dual-Strap Sandal' }
    case 'defender': return { mainName: 'Defender Slide', modelName: 'Waterproof Unit', subtitle: 'Minimalist Slide' }
    case 'bull-rider': return { mainName: 'Bull Rider Slide', modelName: 'Rugged Unit', subtitle: 'Graphic Strap Slide' }
    default: return { mainName: product.name, modelName: product.series, subtitle: product.description.split(',')[0] }
  }
}

const getProductRating = (id) => {
  const ratings = {
    'skechon-1': 4.5,
    'skechon-2': 4.5,
    'skechon-111': 5.0,
    'skechon-121': 4.8,
    'tpr-shocker-2': 4.6,
    'mr-india': 4.7,
    'kids-astronaut': 4.5,
    'kids-ultraman': 4.4,
    'nexa-4': 4.3,
    'jump-1': 4.5,
    'defender': 4.6,
    'bull-rider': 4.7,
  }
  return ratings[id] || 4.5
}

const renderStars = (rating) => {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 !== 0

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<span key={i} className="text-[#FF6B00]">★</span>)
    } else if (i === fullStars + 1 && hasHalf) {
      stars.push(
        <span key={i} className="relative inline-block text-neutral-300 dark:text-neutral-700">
          <span className="absolute top-0 left-0 w-[50%] overflow-hidden text-[#FF6B00]">★</span>
          ★
        </span>
      )
    } else {
      stars.push(<span key={i} className="text-neutral-300 dark:text-neutral-700">★</span>)
    }
  }
  return <div className="flex gap-0.5 text-sm">{stars}</div>
}

const getSpecEmojis = (feature) => {
  const lower = feature.toLowerCase()
  if (lower.includes('knit') || lower.includes('mesh') || lower.includes('breathable')) return `🧵 ${feature}`
  if (lower.includes('light')) return `🪶 ${feature}`
  if (lower.includes('sole') || lower.includes('eva') || lower.includes('phylon') || lower.includes('tpr') || lower.includes('cushion')) return `👟 ${feature}`
  if (lower.includes('velcro') || lower.includes('strap')) return `🎗 ${feature}`
  if (lower.includes('traction') || lower.includes('grip') || lower.includes('heavy')) return `🥾 ${feature}`
  if (lower.includes('waterproof') || lower.includes('water')) return `💧 ${feature}`
  if (lower.includes('flexible') || lower.includes('flex')) return `🔄 ${feature}`
  return `✔ ${feature}`
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryQuery = searchParams.get('cat') || 'All'
  
  const [selectedCategory, setSelectedCategory] = useState(categoryQuery)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  // Synchronize category state with query parameters
  useEffect(() => {
    setSelectedCategory(categoryQuery)
    setCurrentPage(1) // Reset to first page when category changes
  }, [categoryQuery])

  // Simulated skeleton loader for premium UX
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 700)
    return () => clearTimeout(timer)
  }, [selectedCategory, searchQuery])

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    if (cat === 'All') {
      searchParams.delete('cat')
    } else {
      searchParams.set('cat', cat)
    }
    setSearchParams(searchParams)
    setCurrentPage(1)
  }

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase())

    if (!matchesSearch) return false

    if (selectedCategory === 'All') return true
    if (selectedCategory === 'Men') return product.category === 'Men'
    if (selectedCategory === 'Kids') return product.category === 'Kids'
    if (selectedCategory === 'Sandals') return product.category === 'Sandals'
    if (selectedCategory === 'Crocs') return product.category === 'Crocs'
    return true
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="bg-[#FAFAFA] dark:bg-neutral-950 min-h-screen text-on-surface dark:text-neutral-100 pt-32 pb-24 transition-colors duration-300">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop text-left">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-500 mb-6">
          <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-brand-orange transition-colors">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary dark:text-white">HYCROSS Collection</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#ECECEC] dark:border-neutral-900 pb-10 mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
              HYCROSS Collection
            </span>
            <h1 className="font-headline-lg text-4xl sm:text-5xl font-black text-primary dark:text-white tracking-tight">
              Built for Every Step. Designed for Everyday Comfort.
            </h1>
            <p className="text-sm sm:text-base text-on-surface-variant dark:text-neutral-450 max-w-3xl leading-relaxed mt-4">
              Explore our complete HYCROSS footwear collection featuring slip-ons, casual shoes, sandals, clogs and everyday comfort footwear designed for retailers, distributors and modern consumers.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2.5 shrink-0">
            <span className="text-xs font-bold text-on-surface-variant dark:text-neutral-400 bg-white dark:bg-neutral-900 px-3.5 py-2 rounded-xl border border-[#ECECEC] dark:border-neutral-800 shadow-xs">
              Showing <strong className="text-brand-orange">{filteredProducts.length}</strong> Products Across <strong className="text-brand-orange">{new Set(PRODUCTS.map(p => p.category)).size}</strong> Categories
            </span>
          </div>
        </div>

        {/* Toolbar: Category Chips & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-6 mb-12">
          
          {/* Categories Tab list (horizontal rounded capsules) */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 lg:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryChange(cat.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap group ${
                  selectedCategory === cat.value
                    ? 'bg-brand-orange border-brand-orange text-white'
                    : 'bg-white dark:bg-neutral-900 border-[#ECECEC] dark:border-neutral-800 text-on-surface-variant dark:text-neutral-300 hover:bg-brand-orange hover:border-brand-orange hover:text-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full border border-current transition-all duration-300 ${
                  selectedCategory === cat.value ? 'bg-white' : 'bg-transparent'
                }`} />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[280px] sm:min-w-[360px]">
            <input
              type="text"
              placeholder="Search HYCROSS products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 pl-6 pr-12 py-3.5 rounded-full text-primary dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange text-sm shadow-sm hover:shadow-md focus:shadow-md transition-all duration-300"
            />
            <Search className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2 text-on-surface-variant dark:text-neutral-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-11 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Catalog Showcase Grid */}
        {isLoading ? (
          // Skeleton loading grid
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="h-[320px] sm:h-[480px]">
                <SkeletonLoader />
              </div>
            ))}
          </div>
        ) : paginatedProducts.length > 0 ? (
          <div className="space-y-8">
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {paginatedProducts.map((product) => {
                  const displayNames = getProductDisplayNames(product)
                  const rating = getProductRating(product.id)

                  return (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-brand-orange/12 dark:border-neutral-800 hover:border-brand-orange/40 transition-all duration-300 ease-out flex flex-col group h-full hover:-translate-y-2"
                    >
                      {/* Card Image Area (Aspect 4:5) */}
                      <div className="relative aspect-[4/5] bg-neutral-50 dark:bg-neutral-950 overflow-hidden select-none border-b border-[#ECECEC] dark:border-neutral-800/80">
                        <BlurImage
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex gap-1 sm:gap-2">
                          <span className="bg-brand-orange/15 text-brand-orange border border-brand-orange/20 text-[8px] sm:text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                            {product.brand}
                          </span>
                          <span className="bg-neutral-100 dark:bg-neutral-800 text-on-surface-variant dark:text-neutral-300 text-[8px] sm:text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md">
                            {product.series}
                          </span>
                        </div>
                      </div>

                      {/* Body Content */}
                      <div className="p-3 sm:p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Stars rating & Model Name row */}
                          <div className="flex flex-col min-[380px]:flex-row justify-between items-start min-[380px]:items-baseline gap-1 mb-1 sm:mb-2">
                            <h3 className="font-headline-md text-xs sm:text-base md:text-lg font-bold text-primary dark:text-white group-hover:text-brand-orange transition-colors">
                              {displayNames.mainName}
                            </h3>
                            <span className="text-[10px] sm:text-xs font-semibold text-on-surface-variant dark:text-neutral-455">
                              {displayNames.modelName}
                            </span>
                          </div>

                          {/* Ratings row */}
                          <div className="mb-2 sm:mb-3">
                            {renderStars(rating)}
                          </div>

                          {/* Subtitle / category description */}
                          <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-orange">
                            {displayNames.subtitle}
                          </span>

                          {/* Description - exact 2 lines */}
                          <p className="hidden sm:block text-on-surface-variant dark:text-neutral-455 text-xs sm:text-sm line-clamp-2 min-h-[40px] leading-relaxed mt-2.5 mb-4">
                            {product.description}
                          </p>
                        </div>

                        <div className="mt-3">
                          {/* Technical Specs Emoji List inside dashed borders */}
                          <div className="hidden sm:block border-t border-dashed border-[#ECECEC] dark:border-neutral-800/80 pt-4 pb-4 mb-4 text-xs space-y-2">
                            {product.features.slice(0, 3).map((feat, fidx) => (
                              <div key={fidx} className="flex items-center gap-2 text-on-surface dark:text-neutral-350 font-medium">
                                <span>{getSpecEmojis(feat)}</span>
                              </div>
                            ))}
                          </div>

                          {/* MOQ wholesale highlights at the bottom */}
                          <div className="flex flex-col min-[380px]:flex-row justify-between items-start min-[380px]:items-center py-1.5 px-2 sm:py-2.5 sm:px-3 bg-brand-orange/5 border border-brand-orange/10 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold text-brand-orange mb-3 sm:mb-4 gap-1">
                            <span>MOQ: {product.moq}</span>
                            <span className="flex items-center gap-1">✔ Wholesale</span>
                          </div>

                          {/* Action CTA */}
                          <Link
                            to={`/products/${product.slug}`}
                            className="w-full py-2.5 sm:py-3.5 bg-neutral-50 hover:bg-brand-orange dark:bg-neutral-800/60 dark:hover:bg-brand-orange border border-[#ECECEC] dark:border-neutral-850 hover:border-brand-orange dark:hover:border-brand-orange text-primary hover:text-white dark:text-neutral-300 dark:hover:text-white font-bold rounded-lg sm:rounded-xl text-[10px] sm:text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 group/btn"
                          >
                            View Product
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>

              {/* Inject Brand Story after the product card list on Page 1 if there are 8 or more items */}
              {currentPage === 1 && paginatedProducts.length >= 8 && (
                <div className="col-span-full py-12 px-8 sm:px-12 bg-neutral-900 border border-brand-orange/15 rounded-3xl my-8 text-white relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-md">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="space-y-2 text-left shrink-0">
                    <span className="text-[10px] uppercase font-black tracking-widest text-brand-orange bg-brand-orange/10 px-3.5 py-1.5 rounded-full">
                      Our Core Philosophy
                    </span>
                    <h2 className="font-headline-lg text-2xl sm:text-4xl font-extrabold tracking-tight mt-2">
                      Why HYCROSS?
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-2xl md:border-l md:border-white/10 md:pl-8">
                    <div className="text-xs text-neutral-350">
                      <strong className="text-white block mb-1 text-sm font-semibold">Comfort-First</strong>
                      Ergonomically engineered for prolonged daily standing and walking.
                    </div>
                    <div className="text-xs text-neutral-350">
                      <strong className="text-white block mb-1 text-sm font-semibold">Breathable Knit</strong>
                      Snug mesh uppers that ensure continuous airflow and cooling.
                    </div>
                    <div className="text-xs text-neutral-350">
                      <strong className="text-white block mb-1 text-sm font-semibold">Ultra-Light</strong>
                      Injection-molded soles that eliminate weight and support energy rebound.
                    </div>
                    <div className="text-xs text-neutral-350">
                      <strong className="text-white block mb-1 text-sm font-semibold">Reliable Quality</strong>
                      Strict quality checking at the Bahadurgarh factory unit.
                    </div>
                    <div className="text-xs text-neutral-350">
                      <strong className="text-white block mb-1 text-sm font-semibold">Designed in India</strong>
                      Specially calibrated sizing and widths for Indian consumer feet.
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Pagination controls block */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-16">
                <button 
                  onClick={() => {
                    setCurrentPage(prev => Math.max(prev - 1, 1))
                    window.scrollTo({ top: 400, behavior: 'smooth' })
                  }}
                  disabled={currentPage === 1}
                  className="px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-[#ECECEC] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-350 hover:border-brand-orange disabled:opacity-50 disabled:hover:border-[#ECECEC] disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentPage(i + 1)
                      window.scrollTo({ top: 400, behavior: 'smooth' })
                    }}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl text-[10px] sm:text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                      currentPage === i + 1
                        ? 'bg-brand-orange text-white shadow-sm'
                        : 'bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 text-on-surface-variant dark:text-neutral-350 hover:border-brand-orange hover:text-brand-orange'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button 
                  onClick={() => {
                    setCurrentPage(prev => Math.min(prev + 1, totalPages))
                    window.scrollTo({ top: 400, behavior: 'smooth' })
                  }}
                  disabled={currentPage === totalPages}
                  className="px-2.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-[#ECECEC] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-350 hover:border-brand-orange disabled:opacity-50 disabled:hover:border-[#ECECEC] disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl shadow-xs">
            <SlidersHorizontal className="w-10 h-10 mx-auto text-on-surface-variant mb-4 stroke-1" />
            <p className="font-bold text-lg text-primary dark:text-white mb-1">No products match search criteria</p>
            <p className="text-on-surface-variant dark:text-neutral-450 text-sm max-w-xs mx-auto leading-relaxed">
              Check your spelling or filter categories to find standard B2B footwear options.
            </p>
          </div>
        )}

        {/* Available Online Section */}
        <div className="border-t border-[#ECECEC] dark:border-neutral-900 pt-20 mt-20">
          <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 border border-brand-orange/12 rounded-3xl p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="space-y-4 text-left">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#FF9900] bg-[#FF9900]/10 px-3 py-1.5 rounded-full">
                Retail Channels
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-primary dark:text-white mt-2">
                Available Online
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant dark:text-neutral-450 leading-relaxed font-medium">
                Buy HYCROSS products online through Amazon India. Explore our verified brand store for verified launches, customer reviews, and single-pair retail orders.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto text-left">
              <a 
                href="https://www.amazon.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2.5 bg-[#FF9900] hover:bg-[#FF9900]/95 text-white font-extrabold uppercase tracking-widest text-xs py-4 px-8 rounded-xl shadow-md transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4" />
                Visit Official Amazon Store
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
