import { CheckCircle2, ShieldAlert, Award, Handshake, Landmark, Truck } from 'lucide-react'

export default function WhyChooseUs({ onOpenInquiry }) {
  const trustFactors = [
    { text: 'Footwear Manufacturing' },
    { text: 'Wholesale Trading' },
    { text: 'Private Limited Company' },
    { text: 'Established 2022' },
  ]

  const features = [
    {
      icon: Award,
      title: 'Uncompromising Quality',
      description: 'Our quality standards are benchmarked against global leaders. Every pair is designed with attention to comfort, durability, and consistent manufacturing standards.',
      cols: 'md:col-span-8',
      isWide: true,
    },
    {
      icon: Handshake,
      title: 'Trust & Transparancy',
      description: 'We value transparent communication and long-term partnerships with retailers and wholesale buyers globally.',
      cols: 'md:col-span-4',
    },
    {
      icon: Landmark,
      title: 'Wholesale Pricing',
      description: 'Cost-effective pricing structures designed specifically to support businesses purchasing in high volumes.',
      cols: 'md:col-span-4',
    },
    {
      icon: ShieldAlert,
      title: 'Manufacturing Expertise',
      description: 'Focused on producing footwear that meets everyday market demand with absolute consistency and scale.',
      cols: 'md:col-span-4',
    },
    {
      icon: Truck,
      title: 'On-Time Support',
      description: 'From product inquiries to global export logistics, we aim to provide prompt and reliable support.',
      cols: 'md:col-span-4',
    },
  ]

  return (
    <section id="why-choose-us" className="py-24 md:py-32 px-4 md:px-margin-desktop bg-white dark:bg-neutral-950">
      <div className="max-w-container-max mx-auto">
        {/* Title */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
            Our Business Principles
          </span>
          <h2 className="font-headline-lg text-3xl md:text-5xl font-extrabold text-primary dark:text-white mt-3 mb-6">
            Why Businesses Choose Us
          </h2>
          <p className="text-on-surface-variant dark:text-neutral-400 font-body-lg text-sm sm:text-base md:text-lg leading-relaxed">
            Every order is handled with attention to quality, consistency, and customer satisfaction—because every partnership matters.
          </p>
        </div>

        {/* Trust Strip */}
        <div className="flex flex-wrap justify-center items-center gap-y-5 gap-x-8 md:gap-x-12 mb-16 py-6 border-y border-outline-variant/30 dark:border-neutral-800">
          {trustFactors.map((factor, idx) => (
            <div key={idx} className="flex items-center gap-2 group cursor-default">
              <CheckCircle2 className="w-5 h-5 text-brand-orange fill-brand-orange/5 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-xs md:text-sm uppercase tracking-wider text-primary dark:text-neutral-200">
                {factor.text}
              </span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon
            return (
              <div
                key={idx}
                className={`${feat.cols} p-8 rounded-xl bg-surface-container-low dark:bg-neutral-900 border border-outline-variant/20 dark:border-neutral-800 trust-card flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-brand-orange" />
                    </div>
                    {feat.isWide && (
                      <div className="h-px bg-brand-orange/30 w-1/3 hidden md:block"></div>
                    )}
                  </div>
                  
                  <h3 className="font-headline-md text-xl md:text-2xl font-bold text-primary dark:text-white mb-3">
                    {feat.title}
                  </h3>
                  
                  {feat.isWide ? (
                    <div className="h-0.5 w-12 bg-brand-orange mb-4"></div>
                  ) : (
                    <div className="h-0.5 w-8 bg-brand-orange mb-4"></div>
                  )}

                  <p className="text-on-surface-variant dark:text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onOpenInquiry()}
                    className="inline-flex items-center text-brand-orange font-bold text-xs uppercase tracking-wider hover:gap-2 transition-all duration-300 cursor-pointer"
                  >
                    Learn More <span className="ml-1 text-sm font-normal">→</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
