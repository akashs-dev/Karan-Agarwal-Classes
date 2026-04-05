const GallerySkeleton = () => (
  <div>
    {/* Hero skeleton */}
    <div className="bg-gradient-hero py-24 px-4">
      <div className="container-custom text-center space-y-4">
        <div className="h-4 w-32 bg-white/10 rounded-full mx-auto animate-pulse" />
        <div className="h-12 w-72 bg-white/15 rounded-xl mx-auto animate-pulse" />
        <div className="h-4 w-56 bg-white/10 rounded-full mx-auto animate-pulse" />
      </div>
    </div>

    {/* Filter pills skeleton */}
    <div className="section-padding">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-9 w-20 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>

        {/* Grid skeleton */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-xl bg-gray-200 animate-pulse"
              style={{ animationDelay: `${i * 60}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default GallerySkeleton
