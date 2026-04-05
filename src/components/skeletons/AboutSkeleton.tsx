const AboutSkeleton = () => (
  <div>
    {/* Hero */}
    <div className="bg-gradient-hero py-24 px-4">
      <div className="container-custom text-center space-y-4">
        <div className="h-4 w-28 bg-white/10 rounded-full mx-auto animate-pulse" />
        <div className="h-12 w-80 bg-white/15 rounded-xl mx-auto animate-pulse" />
        <div className="h-4 w-60 bg-white/10 rounded-full mx-auto animate-pulse" />
      </div>
    </div>

    {/* About 2-col */}
    <div className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-14">
        <div className="aspect-[4/3] bg-gray-200 rounded-2xl animate-pulse" />
        <div className="space-y-4 flex flex-col justify-center">
          <div className="h-4 w-24 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-10 w-3/4 bg-gray-200 rounded-xl animate-pulse" />
          {[80, 60, 90, 50].map((w, i) => (
            <div key={i} className={`h-4 bg-gray-200 rounded-full animate-pulse`} style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>

    {/* Faculty cards */}
    <div className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 space-y-3">
          <div className="h-4 w-24 bg-gray-200 rounded-full mx-auto animate-pulse" />
          <div className="h-10 w-40 bg-gray-200 rounded-xl mx-auto animate-pulse" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-6 w-40 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-4 w-28 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-4 w-full bg-gray-100 rounded-full animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-100 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default AboutSkeleton
