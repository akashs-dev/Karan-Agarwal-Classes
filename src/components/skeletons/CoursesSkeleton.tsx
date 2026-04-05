const CoursesSkeleton = () => (
  <div>
    <div className="bg-gradient-hero py-24 px-4">
      <div className="container-custom text-center space-y-4">
        <div className="h-12 w-48 bg-white/15 rounded-xl mx-auto animate-pulse" />
        <div className="h-4 w-80 bg-white/10 rounded-full mx-auto animate-pulse" />
      </div>
    </div>
    <div className="section-padding">
      <div className="container-custom">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-9 w-40 bg-gray-200 rounded-full animate-pulse" />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="bg-gray-200 p-6 h-24 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-5 w-32 bg-gray-200 rounded-lg animate-pulse" />
                <div className="flex gap-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-6 w-16 bg-gray-100 rounded-full animate-pulse" />
                  ))}
                </div>
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-4 bg-gray-100 rounded-full animate-pulse" style={{ width: `${70 + j * 5}%` }} />
                  ))}
                </div>
                <div className="h-10 w-full bg-gray-200 rounded-xl animate-pulse mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default CoursesSkeleton
