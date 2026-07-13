import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import heroImg from '../assets/hero_footwear.webp'

export default function Hero({ onOpenInquiry }) {
  return (
    <header className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-surface dark:bg-neutral-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 0.95 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          alt="Premium footwear manufacturing background"
          className="w-full h-full object-cover filter brightness-[0.95] dark:brightness-[0.6] scale-105"
          src={heroImg}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/75 to-transparent dark:from-neutral-950 dark:via-neutral-950/80 dark:to-transparent"></div>
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10 w-full pt-12 lg:pt-0">
        <div className="max-w-2xl text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3.5 bg-brand-orange/15 text-brand-orange font-bold text-xs tracking-wider uppercase mb-6 rounded-full">
            WHOLESALE • MANUFACTURING
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display-xl text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold mb-6 text-primary dark:text-white leading-[1.1] tracking-tight"
          >
            Quality Footwear for Everyday Comfort
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-body-lg text-base sm:text-lg md:text-xl text-on-surface-variant dark:text-neutral-300 mb-10 leading-relaxed max-w-lg"
          >
            We manufacture quality shoes, sandals, and crocs-style footwear designed for everyday comfort and dependable wholesale supply across India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#catalog"
              className="bg-primary dark:bg-brand-orange text-on-primary dark:text-white px-8 py-4.5 font-bold text-base hover:-translate-y-[3px] transition-all duration-300 shadow-xl flex items-center gap-2 group relative overflow-hidden rounded cta-shimmer"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenInquiry}
              className="bg-transparent hover:bg-neutral-800/10 dark:hover:bg-neutral-200/10 border border-primary/30 dark:border-white/30 text-primary dark:text-white px-8 py-4.5 font-bold text-base hover:-translate-y-[3px] transition-all duration-300 rounded flex items-center justify-center gap-2"
            >
              Request Quote
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
