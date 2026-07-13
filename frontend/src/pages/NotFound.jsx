import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 bg-white dark:bg-neutral-950 text-left select-none pt-24 pb-16">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Animated Compass Icon Container */}
        <motion.div
          initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-24 h-24 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mx-auto shadow-sm"
        >
          <Compass className="w-12 h-12 stroke-[1.5]" />
        </motion.div>

        {/* Text Copy */}
        <div className="space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs uppercase font-extrabold tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full"
          >
            404 Error
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-headline-lg text-3xl sm:text-4xl font-black text-primary dark:text-white"
          >
            Wrong Direction
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-on-surface-variant dark:text-neutral-400 text-sm sm:text-base leading-relaxed"
          >
            Looks like you've stepped in the wrong direction.
          </motion.p>
        </div>

        {/* Back Home Link Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="pt-2"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-orange text-white hover:bg-neutral-950 dark:hover:bg-white dark:hover:text-neutral-950 px-8 py-4 font-bold text-sm rounded-xl transition-colors duration-300 shadow-md group cursor-pointer"
          >
            Return to Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  )
}
