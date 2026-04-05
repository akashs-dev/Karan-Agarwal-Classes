const ResultsSkeleton = () => (
  <div>
    {/* Hero */}
    <div className="bg-gradient-hero py-24 px-4">
      <div className="container-custom text-center space-y-4">
        <div className="h-4 w-20 bg-white/10 rounded-full mx-auto animate-pulse" />
        <div className="h-12 w-52 bg-white/15 rounded-xl mx-auto animate-pulse" />
        <div className="h-4 w-96 bg-white/10 rounded-full mx-auto animate-pulse" />
      </div>
    </div>

    {/* Highlight cards */}
    <div className="relative -mt-10 z-20 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center border border-gray-100">
              <div className="w-10 h-10 bg-gray-100 rounded-full mx-auto mb-3 animate-pulse" />
              <div className="h-7 w-20 bg-gray-200 rounded-lg mx-auto mb-2 animate-pulse" />
              <div className="h-3 w-24 bg-gray-100 rounded-full mx-auto animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Scooty winners */}
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-8 space-y-3">
          <div className="h-4 w-28 bg-gray-200 rounded-full mx-auto animate-pulse" />
          <div className="h-8 w-72 bg-gray-200 rounded-xl mx-auto animate-pulse" />
        </div>
        {/* square skeleton */}
        <div className="max-w-lg mx-auto aspect-square bg-gray-200 rounded-2xl animate-pulse" />
      </div>
    </div>

    {/* Top performers */}
    <div className="section-padding pt-0">
      <div className="container-custom">
        <div className="text-center mb-10 space-y-3">
          <div className="h-4 w-28 bg-gray-200 rounded-full mx-auto animate-pulse" />
          <div className="h-10 w-56 bg-gray-200 rounded-xl mx-auto animate-pulse" />
        </div>
        {/* square skeleton */}
        <div className="max-w-2xl mx-auto aspect-square bg-gray-200 rounded-2xl animate-pulse mb-12" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <div className="w-16 h-16 rounded-xl bg-gray-200 animate-pulse shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-5 w-28 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-3 w-20 bg-gray-100 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ResultsSkeleton
