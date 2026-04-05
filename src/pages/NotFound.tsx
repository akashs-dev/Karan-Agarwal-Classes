import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero px-4">
      <div className="text-center">
        <div className="text-8xl font-display font-bold text-gradient-gold mb-4">404</div>
        <h1 className="text-2xl font-display font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-white/60 font-body mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-navy font-body font-bold px-6 py-3 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
