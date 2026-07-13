export default function SkeletonLoader() {
  return (
    <div className="bg-white dark:bg-neutral-950 rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 dark:border-neutral-900 animate-pulse flex flex-col h-full">
      {/* Aspect Ratio Box for Image */}
      <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-900 w-full"></div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Tag */}
          <div className="w-1/4 h-3.5 bg-neutral-200 dark:bg-neutral-800 rounded mb-4"></div>
          {/* Title */}
          <div className="w-3/4 h-5 bg-neutral-200 dark:bg-neutral-800 rounded mb-2"></div>
          {/* Description line 1 */}
          <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-800 rounded mb-1.5"></div>
          {/* Description line 2 */}
          <div className="w-5/6 h-3 bg-neutral-200 dark:bg-neutral-800 rounded mb-6"></div>
        </div>

        {/* Specifications strip */}
        <div className="space-y-3 pt-4 border-t border-outline-variant/10 dark:border-neutral-900">
          <div className="flex justify-between items-center">
            <div className="w-1/3 h-3 bg-neutral-100 dark:bg-neutral-900 rounded"></div>
            <div className="w-1/4 h-3 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-1/4 h-3 bg-neutral-100 dark:bg-neutral-900 rounded"></div>
            <div className="w-1/5 h-3 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-1/3 h-3 bg-neutral-100 dark:bg-neutral-900 rounded"></div>
            <div className="w-1/6 h-3 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="p-6 pt-0 mt-auto">
        <div className="w-full h-11 bg-neutral-200 dark:bg-neutral-900 rounded"></div>
      </div>
    </div>
  )
}
