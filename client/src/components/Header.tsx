import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isMobile = useIsMobile();

  // Close mobile menu when changing location
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  const navLinks = [
    { href: "/gym", label: "Gym" },
    { href: "/medicare-programs", label: "Medicare Programs" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/pricing", label: "Pricing & Deals" },
    { href: "/about#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <a 
              href={location === "/" ? "#top" : "/"} 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={(e) => {
                if (location === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <span className="text-blue-600 font-bold text-2xl">G&J</span>
              <span className="text-gray-800 font-medium text-xl ml-1">Fitness <span className="text-blue-500">for Life Center</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  location === link.href
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-silver-700 hover:border-silver-300 hover:text-silver-800"
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-silver-400 hover:text-silver-500 hover:bg-silver-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Join Now Button (Desktop) */}
          <div className="hidden md:flex md:items-center">
            <Link href="/pricing">
              <Button className="ml-6 bg-primary-600 hover:bg-primary-700 text-white button-shimmer">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  location === link.href
                    ? "bg-primary-50 border-primary-500 text-primary-700"
                    : "border-transparent text-silver-500 hover:bg-silver-50 hover:border-silver-300 hover:text-silver-700"
                } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pl-3 pr-4 py-2">
              <Link href="/pricing">
                <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white button-shimmer">
                  Join Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
