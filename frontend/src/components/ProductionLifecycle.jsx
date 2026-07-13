import { motion } from 'framer-motion'
import { Layers, PencilRuler, Settings, CheckSquare, Package, Rocket } from 'lucide-react'

const LIFECYCLE_STEPS = [
  {
    icon: Layers,
    title: 'Raw Material',
    description: 'Sourcing high-grade leathers, textiles, and polymers for longevity.',
  },
  {
    icon: PencilRuler,
    title: 'Design',
    description: 'Technical blueprints and prototyping for bulk molds.',
  },
  {
    icon: Settings,
    title: 'Production',
    description: 'Assembly lines utilizing high-efficiency machinery and craftsmanship.',
  },
  {
    icon: CheckSquare,
    title: 'Quality Check',
    description: 'Multi-point stress tests and rigorous visual inspections.',
  },
  {
    icon: Package,
    title: 'Packaging',
    description: 'Custom branding and retail-ready packing and palletizing.',
  },
  {
    icon: Rocket,
    title: 'Delivery',
    description: 'Coordinated freight services and hassle-free logistics support.',
  },
]

export default function ProductionLifecycle() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-margin-desktop bg-primary text-on-primary dark:bg-neutral-950 dark:text-neutral-100 overflow-hidden">
      <div className="max-w-container-max mx-auto">
        {/* Title */}
        <div className="text-center mb-24">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange bg-brand-orange/15 px-3 py-1.5 rounded-full dark:text-brand-orange">
            End-To-End Integrity
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl font-extrabold mt-4 mb-6">
            Our Production Lifecycle
          </h2>
          <p className="text-white/60 dark:text-neutral-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            We follow structured quality gates at every phase of manufacturing to ensure retail-grade durability.
          </p>
        </div>

        {/* Progress Grid */}
        <div className="relative">
          {/* Progress Connecting Line - Hidden on Mobile */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 dark:bg-neutral-800 -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-16 gap-x-8 relative z-10">
            {LIFECYCLE_STEPS.map((step, idx) => {
              const IconComponent = step.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circular Step Badge */}
                  <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,87,34,0.4)] select-none">
                    <IconComponent className="w-6 h-6 text-white" />
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white dark:bg-neutral-900 border border-brand-orange text-brand-orange text-xs font-black flex items-center justify-center">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Title & Info */}
                  <h4 className="font-bold text-lg mb-2 text-white dark:text-neutral-200">
                    {step.title}
                  </h4>
                  <p className="text-white/70 dark:text-neutral-400 text-xs md:text-sm px-4 leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
