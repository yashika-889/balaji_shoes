import { useState } from 'react'

export default function BlurImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchpriority,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative w-full h-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-inherit">
      {/* Pulse effect shown while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-850 animate-pulse" />
      )}
      
      <img
        src={src}
        alt={alt}
        loading={loading}
        fetchpriority={fetchpriority}
        onLoad={() => setIsLoaded(true)}
        className={`transition-all duration-700 ease-out ${
          isLoaded 
            ? 'opacity-100 blur-0 scale-100' 
            : 'opacity-0 blur-md scale-[1.02]'
        } ${className}`}
        {...props}
      />
    </div>
  )
}
