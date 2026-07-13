import { motion } from 'framer-motion'

export default function Loader({ isFinished }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isFinished ? 0 : 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface text-primary"
    >
      <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
        {/* Stylized Logo Symbol */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.05, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg mb-6"
        >
          {/* Stylized orange lightning bolt inner symbol */}
          <div className="text-brand-orange w-10 h-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M13 10V2L4 14h7v8l9-12h-7z" />
            </svg>
          </div>
        </motion.div>

        {/* Brand Name Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-headline-lg text-2xl font-bold tracking-tight mb-2"
        >
          Shri Balaji Shoes
        </motion.h2>

        {/* Consumer Brand Subtitle */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 0.8 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xs uppercase font-extrabold tracking-widest text-brand-orange mb-8"
        >
          Proud Manufacturer of HYCROSS
        </motion.p>

        {/* Loading Progress Bar */}
        <div className="w-48 h-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-brand-orange rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  )
}
