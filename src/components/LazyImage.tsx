import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  aspectClass?: string   // e.g. "aspect-[4/3]", "aspect-square"
  skeletonClass?: string // extra classes on the skeleton
  eager?: boolean        // skip IntersectionObserver, load immediately
}

/**
 * Drops in place of <img>. Shows a shimmer skeleton until the image
 * is fully decoded, then fades the image in. Supports lazy/eager loading.
 */
const LazyImage = ({
  src,
  alt,
  aspectClass = "",
  skeletonClass = "",
  eager = false,
  className,
  ...rest
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [inView, setInView] = useState(eager)
  const ref = useRef<HTMLDivElement>(null)

  // Intersection Observer — start loading when near viewport
  useEffect(() => {
    if (eager) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { rootMargin: "200px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [eager])

  return (
    <div ref={ref} className={cn("relative overflow-hidden", aspectClass)}>
      {/* Skeleton shown until image loads */}
      {!loaded && !error && (
        <div
          className={cn(
            "absolute inset-0 bg-gray-200 animate-pulse",
            skeletonClass
          )}
        />
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-gray-400 gap-1">
          <span className="text-2xl">🖼️</span>
          <span className="text-xs font-body">Image not available</span>
        </div>
      )}

      {/* Actual image — only mounted once in view */}
      {inView && !error && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
            className
          )}
          {...rest}
        />
      )}
    </div>
  )
}

export default LazyImage
