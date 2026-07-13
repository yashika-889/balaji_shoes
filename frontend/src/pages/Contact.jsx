import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  ShoppingBag,
  ArrowRight,
  PhoneCall,
  MessageCircle,
  Building,
  ChevronRight
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    businessName: '',
    name: '',
    phone: '',
    email: '',
    category: "Men's Shoes",
    quantity: 1000,
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)
  const formRef = useRef(null)

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business/Company name is required'
    }
    if (!formData.name.trim()) {
      newErrors.name = 'Contact person name is required'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSuccess(true)
    setTimeout(() => {
      setFormData({
        businessName: '',
        name: '',
        phone: '',
        email: '',
        category: "Men's Shoes",
        quantity: 1000,
        message: '',
      })
      setIsSuccess(false)
    }, 6000) // Reset success message after 6s
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === 'quantity' ? parseInt(value, 10) : value,
    })
    if (errors[name]) {
      setErrors({ ...errors, [name]: null })
    }
  }

  return (
    <div className="bg-[#FAFAFA] dark:bg-neutral-950 min-h-screen text-on-surface dark:text-neutral-100 pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop text-left">
        
        {/* Hero Header */}
        <div className="border-b border-[#ECECEC] dark:border-neutral-900 pb-10 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
            Get In Touch
          </span>
          <h1 className="font-headline-lg text-4xl sm:text-5xl md:text-6xl font-black text-primary dark:text-white tracking-tight mt-3">
            Let's Work Together
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant dark:text-neutral-450 max-w-2xl leading-relaxed mt-4">
            Partner with one of India's leading footwear manufacturers. Whether you are a distributor, retailer, or wholesale buyer, our commercial sales team is here to support your growth.
          </p>
        </div>

        {/* Business Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-6.5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg transition-all duration-300 ease-out flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-primary dark:text-white mb-2 flex items-center gap-2">
                ☎ Business Inquiry
              </h3>
              <p className="text-xl font-black text-brand-orange mt-4 mb-3">
                <a href="tel:+919811254101" className="hover:underline">+91 98112 54101</a>
              </p>
            </div>
            <div className="border-t border-[#ECECEC] dark:border-neutral-800 pt-4 mt-4 text-xs font-semibold text-on-surface-variant dark:text-neutral-400">
              <div className="flex justify-between items-center">
                <span>Mon - Sat</span>
                <span className="text-primary dark:text-white bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-md text-[11px] font-bold">
                  9 AM – 6 PM
                </span>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-6.5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg transition-all duration-300 ease-out flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-primary dark:text-white mb-2 flex items-center gap-2">
                ✉ Email
              </h3>
              <div className="space-y-2 mt-4">
                <p className="text-sm font-bold text-primary dark:text-neutral-200">
                  <a href="mailto:sales@balajishoes.shop" className="hover:text-brand-orange transition-colors">sales@balajishoes.shop</a>
                </p>
                <p className="text-sm font-bold text-primary dark:text-neutral-200">
                  <a href="mailto:sumitgoel@balajishoes.shop" className="hover:text-brand-orange transition-colors">sumitgoel@balajishoes.shop</a>
                </p>
              </div>
            </div>
            <div className="border-t border-[#ECECEC] dark:border-neutral-800 pt-4 mt-4 text-[10px] font-extrabold text-brand-orange uppercase tracking-wider">
              Average response within 24 hours
            </div>
          </div>

          {/* Factory Card */}
          <div className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-6.5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg transition-all duration-300 ease-out flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-primary dark:text-white mb-2 flex items-center gap-2">
                📍 Factory
              </h3>
              <p className="text-sm text-on-surface-variant dark:text-neutral-455 leading-relaxed mt-4">
                Shri Balaji Shoes Private Limited<br />
                M.I.E. Industrial Area, Part-B,<br />
                Bahadurgarh, Haryana - 124507
              </p>
            </div>
            <div className="border-t border-[#ECECEC] dark:border-neutral-800 pt-4 mt-4">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=M.I.E.+Part-B,+Bahadurgarh,+Haryana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:text-brand-orange/80 transition-colors font-bold text-sm flex items-center gap-1 group"
              >
                View on Google Maps <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Official Online Presence Section */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
              Social Proof
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary dark:text-white mt-2">
              Official Online Presence
            </h2>
            <p className="text-sm text-on-surface-variant dark:text-neutral-450 mt-1">
              You can also connect with us through our official brand channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/hycrossshoes/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-6.5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-[#E1306C] hover:shadow-[0_12px_30px_rgba(225,48,108,0.1)] transition-all duration-300 ease-out group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 group-hover:bg-[#E1306C]/10 group-hover:text-[#E1306C] rounded-xl flex items-center justify-center text-on-surface-variant dark:text-neutral-450 mb-6 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-primary dark:text-white mb-2 transition-colors duration-300 group-hover:text-[#E1306C]">
                  Follow HYCROSS
                </h3>
                <p className="text-sm text-on-surface-variant dark:text-neutral-455 leading-relaxed font-normal">
                  See product launches, behind-the-scenes, and daily styling inspiration.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-brand-orange group-hover:text-[#E1306C] transition-colors duration-300">
                Open Instagram <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Facebook Card */}
            <a 
              href="https://www.facebook.com/people/Hycross-Shoes/61551055092057/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-6.5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-[#1877F2] hover:shadow-[0_12px_30px_rgba(24,119,242,0.1)] transition-all duration-300 ease-out group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 group-hover:bg-[#1877F2]/10 group-hover:text-[#1877F2] rounded-xl flex items-center justify-center text-on-surface-variant dark:text-neutral-450 mb-6 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-primary dark:text-white mb-2 transition-colors duration-300 group-hover:text-[#1877F2]">
                  Community Updates
                </h3>
                <p className="text-sm text-on-surface-variant dark:text-neutral-455 leading-relaxed font-normal">
                  Product announcements, offers, and company news.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-brand-orange group-hover:text-[#1877F2] transition-colors duration-300">
                Visit Facebook <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Amazon Store Card */}
            <a 
              href="https://www.amazon.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-6.5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-[#FF9900] hover:shadow-[0_12px_30px_rgba(255,153,0,0.1)] transition-all duration-300 ease-out group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 group-hover:bg-[#FF9900]/10 group-hover:text-[#FF9900] rounded-xl flex items-center justify-center text-on-surface-variant dark:text-neutral-450 mb-6 transition-colors duration-300">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-primary dark:text-white mb-2 transition-colors duration-300 group-hover:text-[#FF9900]">
                  Official Amazon Store
                </h3>
                <p className="text-sm text-on-surface-variant dark:text-neutral-455 leading-relaxed font-normal">
                  Explore verified HYCROSS products, customer reviews and latest launches.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-brand-orange group-hover:text-[#FF9900] transition-colors duration-300">
                Visit Amazon Store <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* Google Map Facility Card */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange">
              Location
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary dark:text-white mt-2">
              Manufacturing Facility
            </h2>
            <p className="text-sm text-on-surface-variant dark:text-neutral-450 mt-1">
              Bahadurgarh, Haryana
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg transition-all duration-300 ease-out grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-primary dark:text-white">
                State-of-the-Art Unit
              </h3>
              <p className="text-sm text-on-surface-variant dark:text-neutral-450 leading-relaxed">
                Our primary manufacturing facility is equipped with modern injection molding technology, ensuring high precision and output for comfort footwear.
              </p>
              <div className="pt-2">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=M.I.E.+Part-B,+Bahadurgarh,+Haryana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/95 text-white font-extrabold uppercase tracking-widest text-xs py-3.5 px-6 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  Get Directions <ArrowRight className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-8 h-80 rounded-xl overflow-hidden border border-[#ECECEC] dark:border-neutral-800">
              <iframe
                title="Shri Balaji Shoes Factory Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13993.411649987974!2d76.920516!3d28.6940342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daf848fffffb5%3A0x67396f9bf57dc5b4!2sM.I.E.%20Part-B%252C%20Bahadurgarh%252C%20Haryana!5e0!3m2!1sen!2sin!4v1689254245643!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale dark:invert"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Business Inquiry Form Section */}
        <div ref={formRef} className="mb-16 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 flex flex-col items-center justify-center min-h-[400px]"
                >
                  <CheckCircle2 className="w-16 h-16 text-brand-orange animate-float mb-6" />
                  <h3 className="font-headline-lg text-2xl font-bold text-primary dark:text-white mb-3">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-sm text-on-surface-variant dark:text-neutral-450 max-w-sm leading-relaxed mb-6">
                    Thank you for contacting Shri Balaji Shoes. Our B2B commercial coordinator will review your company details and reach out within one business day.
                  </p>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-orange">
                    Shri Balaji Shoes Private Limited
                  </span>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-headline-lg text-2xl sm:text-3xl font-black text-primary dark:text-white mb-2 flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-brand-orange" />
                      Business Inquiry
                    </h2>
                    <p className="text-sm text-on-surface-variant dark:text-neutral-450 leading-relaxed">
                      Tell us about your business requirements and our team will get back to you within one business day.
                    </p>
                  </div>

                  {/* Quick Trust Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-[#ECECEC] dark:border-neutral-800 my-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-on-surface-variant dark:text-neutral-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                      <span>B2B Supply</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-on-surface-variant dark:text-neutral-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                      <span>OEM/ODM Mfg.</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-on-surface-variant dark:text-neutral-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                      <span>PAN India Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-on-surface-variant dark:text-neutral-300">
                      <CheckCircle2 className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                      <span>Wholesale Pricing</span>
                    </div>
                  </div>

                  {/* Business Name Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Footwear Distributors"
                      className={`w-full bg-neutral-50 dark:bg-neutral-950 border text-sm rounded-xl p-3.5 text-primary dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange ${
                        errors.businessName ? 'border-error' : 'border-[#ECECEC] dark:border-neutral-800'
                      }`}
                    />
                    {errors.businessName && (
                      <p className="text-error text-xs mt-1 font-semibold">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Grid row: Contact Person & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                        Contact Person *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        className={`w-full bg-neutral-50 dark:bg-neutral-950 border text-sm rounded-xl p-3.5 text-primary dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange ${
                          errors.name ? 'border-error' : 'border-[#ECECEC] dark:border-neutral-800'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-error text-xs mt-1 font-semibold">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full bg-neutral-50 dark:bg-neutral-950 border text-sm rounded-xl p-3.5 text-primary dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange ${
                          errors.phone ? 'border-error' : 'border-[#ECECEC] dark:border-neutral-800'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-error text-xs mt-1 font-semibold">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@acmedistributor.com"
                      className={`w-full bg-neutral-50 dark:bg-neutral-950 border text-sm rounded-xl p-3.5 text-primary dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange ${
                        errors.email ? 'border-error' : 'border-[#ECECEC] dark:border-neutral-800'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-error text-xs mt-1 font-semibold">{errors.email}</p>
                    )}
                  </div>

                  {/* Grid row: Product category & Order quantity */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                        Interested Product Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 dark:bg-neutral-950 border border-[#ECECEC] dark:border-neutral-800 text-sm rounded-xl p-3.5 text-primary dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange"
                      >
                        <option value="Men's Shoes">Men's Shoes</option>
                        <option value="Women's Shoes">Women's Shoes</option>
                        <option value="Kids">Kids</option>
                        <option value="Sandals">Sandals</option>
                        <option value="Clogs & Crocs">Clogs & Crocs</option>
                        <option value="HYCROSS Sneakers">HYCROSS Sneakers</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-400">
                          Estimated Order Quantity
                        </label>
                        <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded">
                          {formData.quantity >= 10000 ? '10,000+ Pairs' : `${formData.quantity} Pairs`}
                        </span>
                      </div>
                      <input
                        type="range"
                        name="quantity"
                        min="500"
                        max="10000"
                        step="500"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full h-1.5 bg-[#ECECEC] dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand-orange mt-3.5"
                      />
                    </div>
                  </div>

                  {/* Message requirements */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant dark:text-neutral-400 mb-1.5">
                      Requirements Details
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, size runs, branding, packaging, or delivery location."
                      className="w-full bg-neutral-50 dark:bg-neutral-950 border border-[#ECECEC] dark:border-neutral-800 text-sm rounded-xl p-3.5 text-primary dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange"
                    ></textarea>
                  </div>

                  {/* Submit Button & Response Promise info */}
                  <div className="pt-2 space-y-4">
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-orange text-white font-extrabold uppercase tracking-widest text-xs rounded-xl hover:shadow-md hover:bg-brand-orange/95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Submit Business Inquiry
                    </button>
                    <p className="text-center text-xs font-semibold text-brand-orange bg-brand-orange/5 border border-brand-orange/10 py-3.5 px-4 rounded-xl">
                      💡 Need assistance? Our sales team usually responds within one business day.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Direct Contact CTA */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-lg text-2xl sm:text-3xl font-bold text-primary dark:text-white mb-2">
            Prefer Talking Directly?
          </h2>
          <p className="text-sm text-on-surface-variant dark:text-neutral-450 mb-8 max-w-lg mx-auto">
            Reach out directly to our commercial division for immediate support on catalog specifications or distribution networks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Call Sales */}
            <a 
              href="tel:+919811254101"
              className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-brand-orange hover:shadow-md transition-all duration-300 ease-out flex items-center justify-center gap-3 text-sm font-bold text-primary dark:text-white"
            >
              <PhoneCall className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Call Sales Team</span>
            </a>

            {/* WhatsApp */}
            <a 
              href="https://wa.me/919811254101"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-brand-orange hover:shadow-md transition-all duration-300 ease-out flex items-center justify-center gap-3 text-sm font-bold text-primary dark:text-white"
            >
              <MessageCircle className="w-5 h-5 text-brand-orange shrink-0" />
              <span>WhatsApp Sales</span>
            </a>

            {/* Email */}
            <a 
              href="mailto:sales@balajishoes.shop"
              className="bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:border-brand-orange hover:shadow-md transition-all duration-300 ease-out flex items-center justify-center gap-3 text-sm font-bold text-primary dark:text-white"
            >
              <Mail className="w-5 h-5 text-brand-orange shrink-0" />
              <span>Email Division</span>
            </a>
          </div>
        </div>

        {/* Partnership Outro */}
        <div className="max-w-4xl mx-auto bg-brand-orange/5 border border-brand-orange/15 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-[10px] uppercase font-black tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
            Commercial Manufacturing
          </span>
          
          <h2 className="font-headline-lg text-2xl sm:text-4xl font-extrabold text-primary dark:text-white mt-6 mb-4 max-w-xl mx-auto">
            Building Long-Term Partnerships
          </h2>
          
          <p className="text-sm sm:text-base text-on-surface-variant dark:text-neutral-455 leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
            Whether you're a retailer, distributor, or wholesale buyer, Shri Balaji Shoes Private Limited is ready to help you source reliable, high-quality footwear through our HYCROSS brand and manufacturing expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white font-extrabold uppercase tracking-widest text-xs rounded-xl hover:shadow-md hover:bg-brand-orange/95 transition-all duration-300 cursor-pointer"
            >
              Business Inquiry
            </button>
            <Link 
              to="/products"
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-neutral-900 border border-[#ECECEC] dark:border-neutral-800 text-primary dark:text-white font-extrabold uppercase tracking-widest text-xs rounded-xl hover:shadow-md hover:border-brand-orange transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              Explore Products <ChevronRight className="w-4.5 h-4.5 text-brand-orange" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
