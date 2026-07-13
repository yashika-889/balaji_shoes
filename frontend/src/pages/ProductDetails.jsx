import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronLeft, ArrowRight, ShieldCheck, MailOpen, ShoppingBag } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import BlurImage from '../components/BlurImage'
import { getProductBySlug, getRelatedProducts } from '../data/products'

export default function ProductDetails({ onOpenInquiry }) {
  const { productId } = useParams()
  const product = getProductBySlug(productId)

  const [selectedColor, setSelectedColor] = useState('')

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0])
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center pt-24 px-4 text-center select-none">
        <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-primary mb-3">
          Product Not Found
        </h2>
        <p className="text-on-surface-variant text-sm sm:text-base max-w-sm mb-8">
          The product model you are looking for does not exist in our commercial B2B catalog.
        </p>
        <Link
          to="/products"
          className="bg-primary dark:bg-white text-on-primary dark:text-neutral-950 px-6 py-3 font-bold text-sm rounded-xl transition-colors hover:bg-brand-orange hover:text-white"
        >
          Return to Catalog
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.category, product.id, 3)

  return (
    <div className="bg-surface text-on-surface pt-24 pb-20 select-none">
      <Helmet>
        <title>{`${product.name} | HYCROSS Footwear | Shri Balaji Shoes`}</title>
        <meta name="description" content={`Check specifications, sizes, materials, MOQ, and B2B pricing details for the HYCROSS ${product.name} (${product.series}). Manufactured by Shri Balaji Shoes Private Limited.`} />
        <link rel="canonical" href={`https://balajishoes.shop/products/${product.slug}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://balajishoes.shop/products/${product.slug}`} />
        <meta property="og:title" content={`${product.name} | HYCROSS Footwear | Shri Balaji Shoes`} />
        <meta property="og:description" content={`Check specifications, sizes, materials, MOQ, and B2B pricing details for the HYCROSS ${product.name} (${product.series}).`} />
        <meta property="og:image" content={`https://balajishoes.shop${product.image}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://balajishoes.shop/products/${product.slug}`} />
        <meta name="twitter:title" content={`${product.name} | HYCROSS Footwear | Shri Balaji Shoes`} />
        <meta name="twitter:description" content={`Check specifications, sizes, materials, MOQ, and B2B pricing details for the HYCROSS ${product.name} (${product.series}).`} />
        <meta name="twitter:image" content={`https://balajishoes.shop${product.image}`} />

        {/* Product Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": `https://balajishoes.shop${product.image}`,
            "description": product.description || "Premium casual footwear manufactured in India",
            "brand": {
              "@type": "Brand",
              "name": product.brand
            },
            "category": `${product.category} Footwear`,
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": product.mrp,
              "highPrice": product.mrp,
              "offerCount": "1",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Shri Balaji Shoes Private Limited"
              }
            }
          })}
        </script>

        {/* Breadcrumb Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://balajishoes.shop"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://balajishoes.shop/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": product.category,
                "item": `https://balajishoes.shop/products?cat=${product.category}`
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": product.name,
                "item": `https://balajishoes.shop/products/${product.slug}`
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop text-left">
        
        {/* Back navigation link */}
        <div className="mb-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-on-surface-variant hover:text-brand-orange transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
        </div>

        {/* Product Grid Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Image Box & Interactive Colors */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[4/3] bg-white dark:bg-neutral-900 border border-outline-variant/15 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center">
              <BlurImage
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover select-none"
                loading="eager"
              />
              <div className="absolute top-4 left-4 bg-primary/95 text-white text-[10px] uppercase tracking-widest font-extrabold px-3 py-1.5 rounded-lg shadow-sm">
                {product.brand} Collection
              </div>
            </div>

            {/* Interactive Colorways selection */}
            <div className="p-5 bg-white dark:bg-neutral-950 border border-outline-variant/15 dark:border-neutral-900 rounded-2xl">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-on-surface-variant mb-4">
                Available Colorways
              </h4>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4.5 py-2.5 rounded-xl border text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                      selectedColor === color
                        ? 'border-brand-orange bg-brand-orange/5 text-brand-orange font-black'
                        : 'border-outline-variant/30 hover:border-primary/50 text-on-surface-variant bg-transparent'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Product metadata */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-orange bg-brand-orange/10 px-3.5 py-1 rounded-full">
                {product.series}
              </span>
              <h1 className="font-headline-lg text-3xl sm:text-4xl font-black text-primary tracking-tight pt-1">
                {product.name}
              </h1>
              <p className="text-xs font-bold text-on-surface-variant">
                Manufacturer: Shri Balaji Shoes Private Limited
              </p>
            </div>

            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {product.description}
            </p>
            
            <p className="text-xs sm:text-sm text-brand-orange font-semibold leading-relaxed border-l-2 border-brand-orange pl-3.5 mt-4">
              {product.brand} {product.name} is a lightweight {product.category.toLowerCase()}'s casual footwear model manufactured by Shri Balaji Shoes Private Limited, suitable for retailers, distributors and bulk footwear orders.
            </p>

            {/* Special product tags from catalog */}
            {product.features && (
              <div className="flex flex-wrap gap-2 py-2 border-y border-outline-variant/15 dark:border-neutral-900">
                {product.features.map((feat) => (
                  <span
                    key={feat}
                    className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-surface-container dark:bg-neutral-900 border border-outline-variant/10 dark:border-neutral-850 text-on-surface-variant rounded-full"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            )}

            {/* B2B Specifications table */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-on-surface-variant">
                Wholesale Specifications
              </h4>
              <div className="divide-y divide-outline-variant/15 dark:divide-neutral-900 border border-outline-variant/20 dark:border-neutral-850 rounded-2xl overflow-hidden bg-white dark:bg-neutral-950">
                <div className="grid grid-cols-3 p-4 text-xs sm:text-sm">
                  <div className="text-on-surface-variant font-bold">Category</div>
                  <div className="col-span-2 text-primary font-medium">{product.category} Footwear</div>
                </div>
                <div className="grid grid-cols-3 p-4 text-xs sm:text-sm">
                  <div className="text-on-surface-variant font-bold">Standard Sizing</div>
                  <div className="col-span-2 text-primary font-medium">{product.sizes}</div>
                </div>
                <div className="grid grid-cols-3 p-4 text-xs sm:text-sm">
                  <div className="text-on-surface-variant font-bold">Composition</div>
                  <div className="col-span-2 text-primary font-medium">{product.material}</div>
                </div>
                <div className="grid grid-cols-3 p-4 text-xs sm:text-sm">
                  <div className="text-on-surface-variant font-bold">Minimum Order (MOQ)</div>
                  <div className="col-span-2 text-brand-orange font-bold">{product.moq}</div>
                </div>
              </div>
            </div>

            {/* B2B Supply Info Box */}
            <div className="p-4 bg-surface-container-low dark:bg-neutral-900 border border-outline-variant/15 dark:border-neutral-850 rounded-2xl flex gap-3.5 items-start">
              <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div className="text-xs text-on-surface-variant leading-relaxed">
                <strong>Carton Packaging:</strong> Standard supply in 24 or 36 pairs per carton. 
                <br />
                <strong>OEM Customization:</strong> Logo embossments and private branding packaging support available on wholesale orders exceeding 1,000 units.
              </div>
            </div>

            {/* Actions Trigger Pane */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onOpenInquiry(product.name)}
                className="flex-1 bg-primary dark:bg-white text-on-primary dark:text-neutral-950 hover:bg-brand-orange dark:hover:bg-brand-orange dark:hover:text-white py-4 font-bold text-sm md:text-base rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MailOpen className="w-5 h-5" />
                Request B2B Quote
              </button>

              <a
                href="https://www.amazon.in/stores/page/DBE02ED0-DA01-43D4-B559-002662A0E73E?ingress=2&lp_context_asin=B0H2VF6YYB&visitId=457ebece-f9ad-4b44-ab49-02b11cbba1b7&ref_=ast_bln"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-neutral-800/5 border border-primary/20 dark:border-white/20 py-4 px-6 font-bold text-sm rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-primary"
              >
                <ShoppingBag className="w-4 h-4" />
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>

        {/* Related Products Grid */}
        {related.length > 0 && (
          <div className="border-t border-outline-variant/20 dark:border-neutral-900 pt-16">
            <h3 className="font-headline-lg text-2xl font-bold text-primary mb-10 text-left">
              Suggested B2B Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-neutral-950 border border-outline-variant/15 dark:border-neutral-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
                    <BlurImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-left flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-brand-orange tracking-widest block mb-1">
                        {item.brand} · {item.series}
                      </span>
                      <h4 className="font-headline-md text-lg font-bold text-primary group-hover:text-brand-orange transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-on-surface-variant text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      <Link
                        to={`/products/${item.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange group-hover:text-primary transition-colors"
                      >
                        View Specifications <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
