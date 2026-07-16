import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ChevronRight, Award, ShieldCheck, Zap, Heart, Truck, Sparkles, PencilRuler, Package, HelpCircle, Layers, Cpu } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import ScrollReveal from '../components/ScrollReveal'
import BlurImage from '../components/BlurImage'

// Asset imports
const heroImg = '/og-image.webp'
import brandImg from '../assets/brand_lifestyle.webp'
import menShoes from '../assets/skechon_121.webp'
import kidsShoes from '../assets/nexa_4.webp'
import sandals from '../assets/sandals_home.webp'
import bullRider from '../assets/bull_rider.webp'

export default function Home({ onOpenInquiry }) {
  const containerRef = useRef(null)

  // Setup scroll tracking for the manufacturing process line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const stats = [
    { value: '2022', label: 'Established', desc: 'Building trusted footwear since 2022.' },
    { value: 'Bahadurgarh', label: 'Manufacturing Hub', desc: 'High-capacity plant in Haryana, India.' },
    { value: '5+', label: 'Product Categories', desc: 'Shoes, Sandals, Crocs & Kidswear.' },
    { value: 'B2B + Retail', label: 'Business Model', desc: 'Supporting distributor networks nation-wide.' },
  ]

  const categories = [
    { title: 'Men\'s Collection', desc: 'Casual sneakers and everyday comfort footwear.', img: menShoes, path: '/products?cat=Men' },
    { title: 'Kids\' Collection', desc: 'Lightweight, colorful footwear designed for active children.', img: kidsShoes, path: '/products?cat=Kids' },
    { title: 'Sandal Collection', desc: 'Comfortable sandals built for daily wear and lasting durability.', img: sandals, path: '/products?cat=Sandals' },
    { title: 'Crocs', desc: 'Lightweight crocs for casual wear and everyday comfort..', img: bullRider, path: '/products?cat=Crocs' },
  ]


  const steps = [
    {
      num: '01',
      title: 'Material Selection',
      desc: 'Sourcing breathable double-knit mesh, high-grade phylon midsoles, and custom EVA contours.',
      icon: Layers,
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Translating footwear comfort concepts into CAD molds and engineered outsole grip designs.',
      icon: PencilRuler,
    },
    {
      num: '03',
      title: 'Production',
      desc: 'High-efficiency injection sole molding, computerized knitting, and double-stitched assembly.',
      icon: Cpu,
    },
    {
      num: '04',
      title: 'Quality Check',
      desc: 'Multi-point verification of sole adhesion binding strength and cosmetic finish standards.',
      icon: ShieldCheck,
    },
    {
      num: '05',
      title: 'Packaging',
      desc: 'Custom cartoon boxes, model specification branding tags, and barcode labeling.',
      icon: Package,
    },
    {
      num: '06',
      title: 'Distribution',
      desc: 'Prompt logistics dispatch from our Bahadurgarh warehouse hub directly to national dealers.',
      icon: Truck,
    },
  ]

  const faqs = [
    {
      q: 'Do you accept wholesale B2B orders?',
      a: 'Yes, we are a footwear manufacturing company catering primarily to wholesalers, distributors, and large retail chains across India.',
    },
    {
      q: 'Do you manufacture private labels (OEM/ODM)?',
      a: 'Yes. For bulk orders exceeding our custom capacity threshold, our Bahadurgarh facility supports OEM and private label partnerships.',
    },
    {
      q: 'What is your Minimum Order Quantity (MOQ)?',
      a: 'Our standard MOQ typically starts at 500 pairs per colorway, but we are open to discussing pilot runs for strategic partnerships.',
    },
    {
      q: 'How can we sign up as regional distributors?',
      a: 'Please complete the form on our Contact Page or open a Business Inquiry. A representative will contact you with wholesale pricing details.',
    },
    {
      q: 'What are your standard delivery timelines?',
      a: 'Our production cycle is generally 15 to 30 days depending on the volume, followed by shipping via reliable B2B transport networks.',
    },
  ]

  return (
    <div className="bg-surface text-on-surface select-none">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shri Balaji Shoes Private Limited",
            "url": "https://balajishoes.shop",
            "logo": "https://balajishoes.shop/logo.png",
            "brand": {
              "@type": "Brand",
              "name": "HYCROSS"
            },
            "foundingDate": "2022",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No. 647, MIE Part-A",
              "addressLocality": "Bahadurgarh",
              "addressRegion": "Haryana",
              "postalCode": "124507",
              "addressCountry": "India"
            },
            "sameAs": [
              "https://www.instagram.com/hycrossshoes/",
              "https://www.facebook.com/people/Hycross-Shoes/61551055092057/",
              "https://www.amazon.in/stores/page/DBE02ED0-DA01-43D4-B559-002662A0E73E?ingress=2&lp_context_asin=B0H2VF6YYB&visitId=457ebece-f9ad-4b44-ab49-02b11cbba1b7&ref_=ast_bln"
            ]
          })}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 flex items-center overflow-hidden bg-white dark:bg-neutral-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.02, opacity: 0.42 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            alt="Premium footwear lifestyle"
            className="absolute top-0 right-[-12%] lg:right-[-10%] w-[125%] lg:w-[120%] h-full max-w-none object-cover filter brightness-[1] dark:brightness-[0.5]"
            src={heroImg}
            loading="eager"
            fetchPriority="high"
          />
          {/* Warm tinted to transparent gradient for light mode, dark to transparent for dark mode */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,248,242,0.75)_0%,rgba(255,248,242,0.5)_40%,rgba(255,248,242,0.05)_70%,transparent_90%)] dark:bg-[linear-gradient(to_right,rgba(12,12,14,0.75)_0%,rgba(12,12,14,0.5)_40%,rgba(12,12,14,0.05)_70%,transparent_90%)]"></div>
        </div>

        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop relative z-10 w-full">
          <div className="max-w-[620px] text-left space-y-6 sm:space-y-8">
            {/* Manufacturer Brand Identity Badge */}
            <div className="flex items-center gap-2 border-l-2 border-brand-orange pl-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#FF6B00]">
                Official Manufacturer of HYCROSS
              </span>
            </div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display-xl text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-black leading-[1.05] tracking-tight text-primary dark:text-white"
            >
              Built for <br />
              Everyday <br />
              Comfort.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-body-lg text-base sm:text-lg md:text-xl text-on-surface-variant dark:text-neutral-300 leading-relaxed max-w-xl font-medium"
            >
              Manufacturing comfortable, reliable footwear for retailers, distributors and customers across India.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                to="/products"
                className="bg-brand-orange text-white hover:bg-neutral-950 dark:hover:bg-white dark:hover:text-neutral-950 px-8 py-4.5 font-bold text-base transition-colors duration-300 rounded-xl shadow-md flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => onOpenInquiry()}
                className="bg-white/80 dark:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-[#ECECEC] dark:border-neutral-800 text-primary dark:text-white px-8 py-4.5 font-bold text-base transition-colors duration-300 rounded-xl flex items-center justify-center cursor-pointer shadow-sm w-full sm:w-auto"
              >
                Business Inquiry
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-white/40 dark:bg-neutral-950/40 border-y border-outline-variant/15 dark:border-neutral-900 backdrop-blur-sm relative z-10 py-5 text-left">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-between md:items-center md:gap-y-4 md:gap-x-6">
          {[
            'Indian Footwear Manufacturer',
            'Wholesale & Retail Supply',
            'HYCROSS Brand',
            'Established 2022'
          ].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-primary dark:text-neutral-200">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="divider-stitch"></div>

      {/* ABOUT SECTION */}
      <section className="py-20 md:py-28 px-4 md:px-margin-desktop bg-white dark:bg-neutral-950">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          {/* Left Column: Heading & Concise Copy */}
          <div className="lg:col-span-6 space-y-6 max-w-[520px]">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
              ABOUT SHRI BALAJI SHOES
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold leading-[1.15] text-primary">
              Modern Footwear Manufacturing <br />
              for Everyday India.
            </h2>
            <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
              We manufacture comfortable, reliable footwear for retailers, distributors and businesses across India. Through our in-house brand <strong className="text-brand-orange font-bold">HYCROSS</strong>, we combine modern design with dependable manufacturing.
            </p>
            <div className="pt-2">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand-orange text-white hover:bg-neutral-950 dark:hover:bg-white dark:hover:text-neutral-950 px-6 py-3.5 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors duration-300 shadow-sm cursor-pointer"
              >
                Explore Products
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Statistics Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className="p-4 sm:p-6 bg-surface-container-low dark:bg-neutral-900 rounded-2xl border border-outline-variant/10 dark:border-neutral-800 transition-all duration-300 hover:shadow-md hover:border-brand-orange/30">
                <div className="font-headline-lg text-lg sm:text-3xl font-extrabold text-primary mb-1 truncate">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-wider mb-1.5 sm:mb-2">
                  {stat.label}
                </div>
                <p className="text-[10px] sm:text-xs text-on-surface-variant leading-relaxed">
                  {stat.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-stitch"></div>

      {/* PRODUCT PREVIEW SECTION */}
      <section className="py-20 md:py-28 px-4 md:px-margin-desktop bg-surface-container-low/20">
        <div className="max-w-container-max mx-auto text-left space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
                Featured Segments
              </span>
              <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold leading-tight mt-2 text-primary">
                Product Categories
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-bold text-brand-orange hover:text-primary dark:hover:text-white transition-colors duration-300 text-sm md:text-base"
            >
              Explore Complete Collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Link
                  to={cat.path}
                  className="block bg-white dark:bg-neutral-950 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/20 dark:border-neutral-800 hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                    <BlurImage
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-3 sm:p-6">
                    <h3 className="font-headline-md text-sm sm:text-lg font-bold text-primary group-hover:text-brand-orange transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-on-surface-variant mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                      {cat.desc}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-stitch"></div>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 md:py-32 px-4 md:px-margin-desktop bg-[#F7F7F5] dark:bg-[#0F0F11] overflow-hidden transition-colors">
        {/* Blueprint Texture Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] pointer-events-none select-none z-0"
          style={{
            backgroundImage: 'radial-gradient(#FF6B00 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        ></div>

        <div className="max-w-container-max mx-auto text-left space-y-16 relative z-10">
          {/* Header Layout */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-primary">
              Why Businesses Choose Shri Balaji Shoes
            </h2>
            <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-[620px] mx-auto">
              Trusted manufacturing, consistent quality, and reliable wholesale partnerships built for retailers and distributors.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
              {['Manufacturer', 'Wholesale Supply', 'HYCROSS Brand', 'Made in India'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  <span className="text-brand-orange text-sm font-black">✓</span>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Asymmetrical Premium B2B Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-8">
            {/* 1. Quality Manufacturing (Featured - spans 8 columns) */}
            <ScrollReveal className="col-span-2 lg:col-span-8 p-4 sm:p-8 md:p-10 bg-white dark:bg-neutral-900 rounded-[20px] border border-[#ECECEC] dark:border-neutral-800 transition-all duration-300 hover:shadow-md hover:border-[#FF6B00] group flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#FF6B00]/5 text-brand-orange flex items-center justify-center rounded-full shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Award className="w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <div className="space-y-2 sm:space-y-3">
                <span className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-widest text-brand-orange">
                  Core Competence
                </span>
                <h3 className="font-headline-lg text-base sm:text-xl md:text-2xl font-extrabold text-primary">
                  Quality Footwear Manufacturing
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  We operate advanced production lines utilizing double-knit breathable mesh, high-grade phylon midsoles, and custom EVA contours. Every batch undergoes strict quality assurance tests to ensure retail-ready durability and lasting comfort.
                </p>
              </div>
            </ScrollReveal>

            {/* 2. Reliable Supply Chain (spans 4 columns) */}
            <ScrollReveal delay={0.05} className="col-span-1 lg:col-span-4 p-4 sm:p-8 bg-white dark:bg-neutral-900 rounded-[20px] border border-[#ECECEC] dark:border-neutral-800 transition-all duration-300 hover:shadow-md hover:border-[#FF6B00] group flex flex-col justify-between gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#FF6B00]/5 text-brand-orange flex items-center justify-center rounded-full shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Truck className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="font-headline-md text-sm sm:text-lg font-bold text-primary">
                  Reliable Supply Chain
                </h3>
                <p className="text-[10px] sm:text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Centrally manufactured in the Bahadurgarh hub to ensure uninterrupted supply and predictable shipping schedules across India.
                </p>
              </div>
            </ScrollReveal>

            {/* 3. Comfort-Driven Design (spans 4 columns) */}
            <ScrollReveal delay={0.1} className="col-span-1 lg:col-span-4 p-4 sm:p-8 bg-white dark:bg-neutral-900 rounded-[20px] border border-[#ECECEC] dark:border-neutral-800 transition-all duration-300 hover:shadow-md hover:border-[#FF6B00] group flex flex-col justify-between gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#FF6B00]/5 text-brand-orange flex items-center justify-center rounded-full shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Heart className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="font-headline-md text-sm sm:text-lg font-bold text-primary">
                  Comfort-Driven Design
                </h3>
                <p className="text-[10px] sm:text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Engineered specifically for everyday movement, light travel, and daily commutes. Footwear that moves naturally with the feet.
                </p>
              </div>
            </ScrollReveal>

            {/* 4. Wholesale Expertise (spans 4 columns) */}
            <ScrollReveal delay={0.15} className="col-span-1 lg:col-span-4 p-4 sm:p-8 bg-white dark:bg-neutral-900 rounded-[20px] border border-[#ECECEC] dark:border-neutral-800 transition-all duration-300 hover:shadow-md hover:border-[#FF6B00] group flex flex-col justify-between gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#FF6B00]/5 text-brand-orange flex items-center justify-center rounded-full shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="font-headline-md text-sm sm:text-lg font-bold text-primary">
                  Wholesale Expertise
                </h3>
                <p className="text-[10px] sm:text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Customizable order runs, transparent B2B price points, and standardized packaging formats tailored for wholesale distribution.
                </p>
              </div>
            </ScrollReveal>

            {/* 5. Consistent Production (spans 4 columns) */}
            <ScrollReveal delay={0.2} className="col-span-1 lg:col-span-4 p-4 sm:p-8 bg-white dark:bg-neutral-900 rounded-[20px] border border-[#ECECEC] dark:border-neutral-800 transition-all duration-300 hover:shadow-md hover:border-[#FF6B00] group flex flex-col justify-between gap-4 sm:gap-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#FF6B00]/5 text-brand-orange flex items-center justify-center rounded-full shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="font-headline-md text-sm sm:text-lg font-bold text-primary">
                  Consistent Production
                </h3>
                <p className="text-[10px] sm:text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  Standardized sizing specifications, precise colorways, and exact replication of approved product line prototypes.
                </p>
              </div>
            </ScrollReveal>

            {/* 6. Trusted Business Partner (spans 12 columns full width) */}
            <ScrollReveal delay={0.25} className="col-span-2 lg:col-span-12 p-4 sm:p-8 md:p-10 bg-white dark:bg-neutral-900 rounded-[20px] border border-[#ECECEC] dark:border-neutral-800 transition-all duration-300 hover:shadow-md hover:border-[#FF6B00] group flex flex-col md:flex-row gap-4 sm:gap-6 items-start md:items-center justify-between">
              <div className="flex gap-4 sm:gap-6 items-start md:items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF6B00]/5 text-brand-orange flex items-center justify-center rounded-full shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="space-y-1 text-left">
                  <h3 className="font-headline-md text-sm sm:text-lg font-bold text-primary">
                    Transparent & Trusted Business Partnership
                  </h3>
                  <p className="text-[10px] sm:text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-3xl">
                    We prioritize corporate integrity, prompt communication, and long-term contract reliability. Over 300+ distributors and retailers trust our production capacity to supply high-demand retail items across India.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="divider-stitch"></div>

      {/* MANUFACTURING PROCESS */}
      <section ref={containerRef} className="relative py-24 md:py-32 px-4 md:px-margin-desktop bg-[#111113] text-white overflow-hidden transition-colors">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none select-none z-0"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        ></div>

        <div className="max-w-container-max mx-auto space-y-16 relative z-10 text-center">
          {/* Section Header */}
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Industrial Precision
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              From Design to Delivery
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-[620px] mx-auto">
              Every pair of footwear follows a carefully managed production process to ensure consistent quality and dependable supply.
            </p>
          </div>

          {/* Desktop Horizontal Connecting Line & Progress Bar */}
          <div className="hidden lg:flex justify-between items-center max-w-4xl mx-auto mb-12 relative py-4">
            {/* Connecting Line */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-neutral-800 -translate-y-1/2 z-0">
              <motion.div
                style={{ scaleX: scaleY }}
                className="w-full bg-brand-orange origin-left h-full"
              ></motion.div>
            </div>

            {/* Path Nodes */}
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-[#111113] border-2 border-neutral-800 text-white/60 font-black text-xs flex items-center justify-center group-hover:border-brand-orange group-hover:text-brand-orange transition-colors duration-300">
                  {step.num}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 mt-2">
                  {step.title.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>

          {/* Six Connected Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 text-left">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <ScrollReveal
                  key={idx}
                  delay={idx * 0.05}
                  className="p-4 sm:p-8 bg-neutral-900/40 rounded-[20px] border border-neutral-800 hover:border-brand-orange/40 hover:bg-neutral-900/70 transition-all duration-300 group shadow-lg hover:shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[160px] sm:min-h-[220px]"
                >
                  {/* Big Number Watermark */}
                  <div className="absolute -right-4 -bottom-6 text-6xl sm:text-8xl font-black text-white/[0.015] group-hover:text-brand-orange/[0.035] select-none transition-colors duration-300">
                    {step.num}
                  </div>

                  <div className="space-y-3 sm:space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-brand-orange/10 text-brand-orange flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-[9px] sm:text-xs uppercase font-extrabold tracking-widest text-brand-orange/60 group-hover:text-brand-orange transition-colors">
                        Stage {step.num}
                      </span>
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="font-headline-md text-sm sm:text-lg font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-[10px] sm:text-xs sm:text-sm text-white/70 leading-relaxed max-w-[280px] line-clamp-3">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <div className="divider-stitch"></div>

      {/* HYCROSS BRAND SECTION */}
      <section className="py-20 md:py-28 px-4 md:px-margin-desktop bg-white dark:bg-neutral-950">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden border border-outline-variant/10 dark:border-neutral-800 shadow-sm">
              <BlurImage
                src={brandImg}
                alt="HYCROSS Lifestyle Shoes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
              Our Brand
            </span>
            <h2 className="font-headline-lg text-3xl md:text-5xl font-black text-primary tracking-tight">
              HYCROSS — Cross the Limit
            </h2>
            <div className="space-y-4">
              <p className="font-body-lg text-base sm:text-lg text-on-surface font-semibold leading-relaxed">
                Designed for everyday comfort, walking, commuting and modern lifestyles.
              </p>
              <p className="font-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Explore the latest HYCROSS collection available on Amazon.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Everyday Comfort', 'Lightweight', 'Breathable', 'Flexible Fit',
                'Cushioned Support', 'All-Day Wear', 'Walking', 'Commute'
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="text-xs font-semibold px-3 py-1 bg-surface-container dark:bg-neutral-900 border border-outline-variant/20 dark:border-neutral-800 rounded-full text-on-surface-variant"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand-orange text-white hover:bg-neutral-950 dark:hover:bg-white dark:hover:text-neutral-950 px-6 py-3.5 font-bold text-sm transition-colors duration-300 rounded-xl group"
              >
                Explore Brand
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-stitch"></div>

      {/* B2B FAQ */}
      <section className="py-20 md:py-28 px-4 md:px-margin-desktop bg-surface-container-low/20">
        <div className="max-w-container-max mx-auto text-left space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
              B2B Information
            </span>
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-2 lg:gap-6 text-left">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05} className="p-4 sm:p-6 bg-white dark:bg-neutral-950 rounded-xl border border-outline-variant/20 dark:border-neutral-800 h-full">
                <div className="flex items-start gap-3 sm:gap-4">
                  <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-base md:text-lg text-primary mb-1.5 sm:mb-2">
                      {faq.q}
                    </h4>
                    <p className="text-[10px] sm:text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL B2B CTA */}
      <section className="py-20 md:py-24 px-4 bg-surface dark:bg-neutral-950 transition-colors">
        <div className="max-w-container-max mx-auto relative overflow-hidden bg-brand-orange text-white p-10 md:p-16 shadow-2xl rounded-3xl text-center">
          {/* Shimmer Grid Overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none cta-shimmer select-none"
            style={{
              backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          ></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs uppercase font-black tracking-widest text-white/80">
              Business Relations
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Move with HYCROSS?
            </h2>
            <p className="font-body-lg text-sm sm:text-base text-white/90 max-w-xl mx-auto leading-relaxed">
              Partner with Shri Balaji Shoes Private Limited and secure a reliable manufacturing partner for comfort-focused footwear. We support custom orders, size runs, and national logistics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-white text-brand-orange hover:bg-neutral-950 hover:text-white px-8 py-4 font-bold text-sm md:text-base transition-colors duration-300 rounded-xl shadow-md"
              >
                Contact Us
              </Link>
              <button
                onClick={() => onOpenInquiry()}
                className="bg-transparent hover:bg-white/10 border border-white/30 text-white px-8 py-4 font-bold text-sm md:text-base transition-colors duration-300 rounded-xl cursor-pointer"
              >
                Business Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
