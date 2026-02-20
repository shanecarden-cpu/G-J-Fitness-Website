import { Link } from "wouter";

export default function Sitemap() {
  const mainPages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gym", path: "/gym" },
    { name: "Medicare Programs", path: "/medicare-programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Pricing & Deals", path: "/pricing" },
  ];

  const legalPages = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Sitemap", path: "/sitemap" },
    { name: "Membership Agreement", path: "/membership-agreement" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-700 overflow-hidden flex items-center justify-center" style={{ height: '180px' }}>
        <div className="relative px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">
              Sitemap
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-silver-900 mb-6">Main Pages</h2>
            <ul className="space-y-4">
              {mainPages.map(page => (
                <li key={page.path} className="text-lg">
                  <Link href={page.path} className="text-primary-600 hover:text-primary-800 hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-silver-900 mb-6">Legal Pages</h2>
            <ul className="space-y-4">
              {legalPages.map(page => (
                <li key={page.path} className="text-lg">
                  <Link href={page.path} className="text-primary-600 hover:text-primary-800 hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}