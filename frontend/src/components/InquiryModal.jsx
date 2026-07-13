import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, MessageSquare, Send } from 'lucide-react'

export default function InquiryModal({ isOpen, onClose, prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    category: 'Men',
    quantity: 1000,
    message: '',
  })
  
  const [errors, setErrors] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  // Reset form when opened or prefilledProduct changes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        businessName: '',
        category: prefilledProduct ? 'Custom' : 'Men',
        quantity: 1000,
        message: prefilledProduct ? `Inquiry regarding: ${prefilledProduct}` : '',
      })
      setErrors({})
      setIsSuccess(false)
    }
  }, [isOpen, prefilledProduct])

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Contact person is required'
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business/Company name is required'
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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/40 dark:bg-black/75 backdrop-blur-sm"
          ></motion.div>

          {/* Modal Card Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-white dark:bg-neutral-950 rounded-2xl shadow-lg overflow-hidden border border-outline-variant/15 dark:border-neutral-900 z-10"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4.5 border-b border-outline-variant/10 dark:border-neutral-900 bg-surface-container-low dark:bg-neutral-950">
              <div className="flex items-center gap-2 text-left">
                <MessageSquare className="w-5 h-5 text-brand-orange" />
                <div>
                  <h3 className="font-headline-md text-base sm:text-lg font-bold text-primary">
                    {prefilledProduct ? 'Request Product Quote' : 'Bulk Order Inquiry'}
                  </h3>
                  {prefilledProduct && (
                    <span className="text-[10px] text-brand-orange mt-0.5 font-bold uppercase tracking-wider block">
                      Ref: {prefilledProduct}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-surface-container dark:hover:bg-neutral-900 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Success Overlay Screen */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8 text-center flex flex-col items-center justify-center min-h-[380px] bg-white dark:bg-neutral-950"
              >
                <CheckCircle2 className="w-16 h-16 text-brand-orange animate-float mb-6" />
                <h4 className="font-headline-md text-2xl font-bold text-primary mb-3">
                  Inquiry Submitted!
                </h4>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed max-w-sm mb-8">
                  Thank you for contacting Shri Balaji Shoes. Our B2B commercial coordinator will review your company details and reach out within 24 hours with custom quotes.
                </p>
                <button
                  onClick={onClose}
                  className="bg-primary dark:bg-white text-on-primary dark:text-neutral-950 px-8 py-3.5 font-bold text-xs uppercase tracking-wider rounded-xl hover:shadow-md transition-shadow cursor-pointer w-full"
                >
                  Close Window
                </button>
              </motion.div>
            ) : (
              /* B2B Form */
              <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[75vh] space-y-4 text-left bg-white dark:bg-neutral-950">
                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full bg-surface dark:bg-neutral-900 border text-sm rounded-xl p-3 text-primary focus:outline-none focus:ring-1 focus:ring-brand-orange ${
                        errors.name ? 'border-error' : 'border-outline-variant/30 dark:border-neutral-800'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-error text-xs mt-1 font-semibold">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full bg-surface dark:bg-neutral-900 border text-sm rounded-xl p-3 text-primary focus:outline-none focus:ring-1 focus:ring-brand-orange ${
                        errors.phone ? 'border-error' : 'border-outline-variant/30 dark:border-neutral-800'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-error text-xs mt-1 font-semibold">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="buyer@distributor.com"
                    className={`w-full bg-surface dark:bg-neutral-900 border text-sm rounded-xl p-3 text-primary focus:outline-none focus:ring-1 focus:ring-brand-orange ${
                      errors.email ? 'border-error' : 'border-outline-variant/30 dark:border-neutral-800'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-error text-xs mt-1 font-semibold">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="Retailer/Distributor Pvt Ltd"
                    className={`w-full bg-surface dark:bg-neutral-900 border text-sm rounded-xl p-3 text-primary focus:outline-none focus:ring-1 focus:ring-brand-orange ${
                      errors.businessName ? 'border-error' : 'border-outline-variant/30 dark:border-neutral-800'
                    }`}
                  />
                  {errors.businessName && (
                    <p className="text-error text-xs mt-1 font-semibold">{errors.businessName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                      Product Segment
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-surface dark:bg-neutral-900 border border-outline-variant/30 dark:border-neutral-800 text-sm rounded-xl p-3 text-primary focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    >
                      <option value="Men">Men's Sneakers</option>
                      <option value="Kids">Kids' Sandals</option>
                      <option value="Sandals">Men's Sandals</option>
                      <option value="Crocs">Clogs & Slides</option>
                      <option value="Custom">Custom Inquiry (OEM)</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        Order Quantity
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
                      className="w-full h-1.5 bg-outline-variant/40 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-brand-orange mt-3.5"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Supply Requirements / Customizations
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe customizations, packaging requirements, target pricing, or sizes needed..."
                    className="w-full bg-surface dark:bg-neutral-900 border border-outline-variant/30 dark:border-neutral-800 text-sm rounded-xl p-3 text-primary focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  ></textarea>
                </div>

                {/* Form CTA Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-orange text-white font-extrabold uppercase tracking-widest text-xs rounded-xl hover:shadow-md transition-shadow cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit B2B Inquiry
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
