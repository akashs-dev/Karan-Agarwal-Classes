const IndexSkeleton = () => (
  <div>
    {/* Hero skeleton — matches bg-gradient-hero */}
    <div className="min-h-[88vh] bg-gradient-hero flex items-center px-4 relative overflow-hidden">
      {/* Circle skeleton on right */}
      <div className="absolute right-[60px] top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-white/5 animate-pulse hidden lg:block" />
      <div className="container-custom py-24 lg:py-32">
        <div className="max-w-xl lg:max-w-2xl space-y-5">
          <div className="h-7 w-64 bg-white/10 rounded-full animate-pulse" />
          <div className="space-y-3">
            <div className="h-14 w-full bg-white/15 rounded-xl animate-pulse" />
            <div className="h-14 w-5/6 bg-white/15 rounded-xl animate-pulse" />
            <div className="h-14 w-4/6 bg-white/10 rounded-xl animate-pulse" />
          </div>
          <div className="h-5 w-64 bg-white/10 rounded-full animate-pulse" />
          <div className="h-4 w-80 bg-white/8 rounded-full animate-pulse" />
          <div className="flex gap-3 pt-2">
            <div className="h-14 w-44 bg-yellow-500/30 rounded-xl animate-pulse" />
            <div className="h-14 w-36 bg-white/10 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>

    {/* Stats */}
    <div className="relative -mt-14 z-20 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="w-10 h-10 bg-gray-100 rounded-full mx-auto mb-2 animate-pulse" />
              <div className="h-8 w-20 bg-gray-200 rounded-lg mx-auto mb-1 animate-pulse" />
              <div className="h-4 w-24 bg-gray-100 rounded-full mx-auto animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* About */}
    <div className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
        <div className="aspect-square bg-gray-200 rounded-2xl animate-pulse max-w-md mx-auto w-full" />
        <div className="space-y-4">
          <div className="h-4 w-24 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-10 w-3/4 bg-gray-200 rounded-xl animate-pulse" />
          {[90, 70, 80].map((w, i) => (
            <div key={i} className="h-4 bg-gray-100 rounded-full animate-pulse" style={{ width: `${w}%` }} />
          ))}
          <div className="grid grid-cols-2 gap-3 pt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-5 bg-gray-100 rounded-full animate-pulse" />
            ))}
          </div>
          <div className="h-12 w-48 bg-gray-200 rounded-xl animate-pulse mt-2" />
        </div>
      </div>
    </div>
  </div>
)

export default IndexSkeleton
