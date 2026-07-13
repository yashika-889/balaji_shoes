import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'Do you accept bulk orders?',
    answer: 'Yes, we specialize in high-volume wholesale orders. Our facility is optimized for bulk production, ensuring consistent quality and timelines across thousands of units.',
  },
  {
    question: 'What is your Minimum Order Quantity (MOQ)?',
    answer: 'Our standard MOQ varies by footwear category, typically starting at 500 pairs per colorway. However, we are open to discussing pilot orders for new brand partnerships.',
  },
  {
    question: 'Do you provide custom design services?',
    answer: 'Yes, our design team works closely with retailers to develop custom footwear lines. We offer OEM (Original Equipment Manufacturer) and ODM (Original Design Manufacturer) services.',
  },
  {
    question: 'What is the standard production and shipping lead time?',
    answer: 'Our typical production cycle takes 15 to 30 days depending on the volume and design complexity. Shipping and freight duration will vary based on your business location.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 md:py-32 px-4 md:px-margin-desktop bg-surface dark:bg-neutral-900">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
            Support Center
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl font-extrabold text-primary dark:text-white mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = activeIndex === idx
            return (
              <div
                key={idx}
                className="border border-outline-variant/30 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden rounded-lg hover:border-brand-orange/50 dark:hover:border-brand-orange/40 transition-colors group"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-surface-container-low dark:hover:bg-neutral-900 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-base md:text-lg text-primary dark:text-neutral-200">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-on-surface-variant dark:text-neutral-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-brand-orange' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-sm md:text-base text-on-surface-variant dark:text-neutral-300 border-t border-outline-variant/10 dark:border-neutral-800/50 pt-4 leading-relaxed bg-surface-container-lowest dark:bg-neutral-950/80">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
