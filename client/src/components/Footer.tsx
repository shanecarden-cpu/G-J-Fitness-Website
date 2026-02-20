import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react";
import foxLogo from "../assets/fox-logo-transparent.png";

export default function Footer() {
  return (
    <footer className="bg-silver-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <span className="text-white font-bold text-3xl">G&J</span>
                <span className="text-silver-300 font-medium text-xl ml-2">
                  Fitness <span className="text-primary-400">for Life Center</span>
                </span>
              </div>
              <p className="text-silver-400 text-lg leading-relaxed max-w-md">
                Transform your body, elevate your mind, and embrace a healthier lifestyle with G&J Fitness for Life Center.
              </p>
              
              {/* Contact Info in clean format */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-silver-500 font-medium">Address:</span>
                  <span className="text-silver-300">5615 TX-37, Mineola, TX 75773</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-silver-500 font-medium">Hours:</span>
                  <span className="text-silver-300">Open 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-silver-500 font-medium">Phone:</span>
                  <a href="tel:9035699400" className="text-primary-400 hover:text-primary-300 transition-colors">
                    (903) 569-9400
                  </a>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex items-center space-x-4">
                <span className="text-silver-500 font-medium">Follow us:</span>
                <a 
                  href="https://www.facebook.com/pages/G%20&%20J%20Fitness/250368928343316/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-silver-400 hover:text-primary-400 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg uppercase tracking-wider">
                Navigate
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-silver-400 hover:text-primary-400 transition-colors text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-silver-400 hover:text-primary-400 transition-colors text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-silver-400 hover:text-primary-400 transition-colors text-base">
                    Pricing & Deals
                  </Link>
                </li>
                <li>
                  <Link href="/about#contact" className="text-silver-400 hover:text-primary-400 transition-colors text-base">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Legal Links */}
            <div className="space-y-6">
              <h3 className="text-white font-semibold text-lg uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="text-silver-400 hover:text-primary-400 transition-colors text-base">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-silver-400 hover:text-primary-400 transition-colors text-base">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-silver-400 hover:text-primary-400 transition-colors text-base">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-silver-400 hover:text-primary-400 transition-colors text-base">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link href="/membership-agreement" className="text-silver-400 hover:text-primary-400 transition-colors text-base">
                    Membership Agreement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-silver-700 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-silver-400 text-sm">
              &copy; {new Date().getFullYear()} G&J Fitness for Life Center. All rights reserved.
            </p>
            <a 
              href="https://www.unitycareit.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
            >
              <span>Designed and Hosted by UnityCare Technologies</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
