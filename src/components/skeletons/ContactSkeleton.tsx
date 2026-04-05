const ContactSkeleton = () => (
  <div>
    <div className="bg-gradient-hero py-24 px-4">
      <div className="container-custom text-center space-y-4">
        <div className="h-12 w-48 bg-white/15 rounded-xl mx-auto animate-pulse" />
        <div className="h-4 w-72 bg-white/10 rounded-full mx-auto animate-pulse" />
      </div>
    </div>
    <div className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="h-8 w-48 bg-gray-200 rounded-xl animate-pulse" />
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="h-11 bg-gray-100 rounded-lg animate-pulse" />
              <div className="h-11 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-11 bg-gray-100 rounded-lg animate-pulse" />
              <div className="h-11 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="h-24 bg-gray-100 rounded-lg animate-pulse" />
            <div className="h-12 bg-gray-200 rounded-xl animate-pulse" />
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-8 w-36 bg-gray-200 rounded-xl animate-pulse" />
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg animate-pulse shrink-0" />
              <div className="space-y-2 flex-1">
                <div className="h-5 w-20 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-4 w-40 bg-gray-100 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default ContactSkeleton
