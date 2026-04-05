const BranchesSkeleton = () => (
  <div>
    <div className="bg-gradient-hero py-24 px-4">
      <div className="container-custom text-center space-y-4">
        <div className="h-12 w-48 bg-white/15 rounded-xl mx-auto animate-pulse" />
        <div className="h-4 w-64 bg-white/10 rounded-full mx-auto animate-pulse" />
      </div>
    </div>
    <div className="section-padding">
      <div className="container-custom space-y-20">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="grid lg:grid-cols-2 gap-10">
            <div className="h-[350px] bg-gray-200 rounded-xl animate-pulse" />
            <div className="space-y-4 flex flex-col justify-start pt-2">
              <div className="h-8 w-56 bg-gray-200 rounded-xl animate-pulse" />
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="flex gap-3">
                  <div className="w-5 h-5 bg-gray-200 rounded-full animate-pulse shrink-0 mt-0.5" />
                  <div className="h-4 bg-gray-200 rounded-full animate-pulse flex-1" style={{ width: `${60 + j * 10}%` }} />
                </div>
              ))}
              <div className="flex gap-2 mt-2">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="h-7 w-24 bg-gray-100 rounded-full animate-pulse" />
                ))}
              </div>
              <div className="h-48 bg-gray-100 rounded-xl animate-pulse mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default BranchesSkeleton
