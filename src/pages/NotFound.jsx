import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-void px-6 text-center text-text-primary">
      {/* Ambient glow, consistent with the site's signature aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-primary/20 blur-[130px] animate-drift" />
      </div>

      <p className="font-display text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-glow to-purple-deep sm:text-9xl">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
        This page drifted off the map
      </h1>
      <p className="mt-3 max-w-sm text-text-muted">
        The page you are looking for does not exist, was moved, or never
        existed in the first place.
      </p>

      <Link to="/" className="btn-primary mt-9">
        <HomeIcon size={16} /> Go Home
      </Link>
    </div>
  );
}

export default NotFound;
