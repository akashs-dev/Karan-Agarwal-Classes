import { lazy, Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Layout from "@/components/Layout"

// Skeleton fallbacks (static — no lazy loading needed)
import IndexSkeleton    from "@/components/skeletons/IndexSkeleton"
import AboutSkeleton    from "@/components/skeletons/AboutSkeleton"
import CoursesSkeleton  from "@/components/skeletons/CoursesSkeleton"
import ResultsSkeleton  from "@/components/skeletons/ResultsSkeleton"
import GallerySkeleton  from "@/components/skeletons/GallerySkeleton"
import BranchesSkeleton from "@/components/skeletons/BranchesSkeleton"
import ContactSkeleton  from "@/components/skeletons/ContactSkeleton"

// Lazy-loaded pages
const Index    = lazy(() => import("./pages/Index"))
const About    = lazy(() => import("./pages/About"))
const Courses  = lazy(() => import("./pages/Courses"))
const Results  = lazy(() => import("./pages/Results"))
const Gallery  = lazy(() => import("./pages/Gallery"))
const Branches = lazy(() => import("./pages/Branches"))
const Contact  = lazy(() => import("./pages/Contact"))
const NotFound = lazy(() => import("./pages/NotFound"))

const queryClient = new QueryClient()

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])
  return null
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={
              <Suspense fallback={<IndexSkeleton />}><Index /></Suspense>
            } />
            <Route path="/about" element={
              <Suspense fallback={<AboutSkeleton />}><About /></Suspense>
            } />
            <Route path="/courses" element={
              <Suspense fallback={<CoursesSkeleton />}><Courses /></Suspense>
            } />
            <Route path="/results" element={
              <Suspense fallback={<ResultsSkeleton />}><Results /></Suspense>
            } />
            <Route path="/gallery" element={
              <Suspense fallback={<GallerySkeleton />}><Gallery /></Suspense>
            } />
            <Route path="/branches" element={
              <Suspense fallback={<BranchesSkeleton />}><Branches /></Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<ContactSkeleton />}><Contact /></Suspense>
            } />
          </Route>
          <Route path="*" element={
            <Suspense fallback={null}><NotFound /></Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
