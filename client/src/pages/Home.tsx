import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dumbbell, Users, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="Fitness equipment in gym"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-700 mix-blend-multiply opacity-60"></div>
        </div>
        
        {/* Ribbon removed as requested */}
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <div className="flex gap-4 justify-start flex-wrap">
              <div>
                <span className="impact-text">T</span>
                <span className="impact-text">R</span>
                <span className="impact-text">A</span>
                <span className="impact-text">N</span>
                <span className="impact-text">S</span>
                <span className="impact-text">F</span>
                <span className="impact-text">O</span>
                <span className="impact-text">R</span>
                <span className="impact-text">M</span>
              </div>
              <div>
                <span className="impact-text">Y</span>
                <span className="impact-text">O</span>
                <span className="impact-text">U</span>
                <span className="impact-text">R</span>
              </div>
              <div>
                <span className="impact-text">L</span>
                <span className="impact-text">I</span>
                <span className="impact-text">F</span>
                <span className="impact-text">E</span>
              </div>
              <div>
                <span className="impact-text">W</span>
                <span className="impact-text">I</span>
                <span className="impact-text">T</span>
                <span className="impact-text">H</span>
              </div>
              <div>
                <span className="impact-text">G</span>
                <span className="impact-text">&</span>
                <span className="impact-text">J</span>
              </div>
              <div>
                <span className="impact-text">F</span>
                <span className="impact-text">I</span>
                <span className="impact-text">T</span>
                <span className="impact-text">N</span>
                <span className="impact-text">E</span>
                <span className="impact-text">S</span>
                <span className="impact-text">S</span>
              </div>
            </div>
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-silver-100 sm:text-3xl">
            Your Premier Fitness Center in Mineola, TX
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-silver-100 text-left">Achieve your fitness goals with top-tier equipment, expert staff, and a community that keeps you pumped every step of the way!</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start">
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button size="lg" className="bg-accent-400 hover:bg-accent-500 text-white font-medium button-shimmer w-full">
                Join Now
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button size="lg" className="bg-primary-600 hover:bg-primary-700 text-white font-medium w-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              Everything You Need for Your Fitness Journey
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-500 lg:mx-auto">
              A facility designed to help you reach your full potential.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 - Medicare Programs */}
              <Link href="/medicare-programs">
                <div className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer h-full flex flex-col">
                  <div className="absolute -top-3 -left-3 bg-primary-600 rounded-lg p-3 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="mt-4 flex-grow">
                    <h3 className="text-lg font-medium text-silver-900 group-hover:text-primary-600 transition duration-300">Medicare Programs Supported</h3>
                    <p className="mt-2 text-base text-silver-500">We participate in several Medicare programs, making fitness accessible to everyone regardless of age.</p>
                  </div>
                </div>
              </Link>

              {/* Feature 2 - Clean Facility */}
              <Link href="/gallery">
                <div className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer h-full flex flex-col">
                  <div className="absolute -top-3 -left-3 bg-primary-600 rounded-lg p-3 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="mt-4 flex-grow">
                    <h3 className="text-lg font-medium text-silver-900 group-hover:text-primary-600 transition duration-300">Clean Facility</h3>
                    <p className="mt-2 text-base text-silver-500">Our gym is meticulously maintained with regular cleaning and sanitization to ensure a safe and hygienic workout environment.</p>
                  </div>
                </div>
              </Link>

              {/* Feature 3 - Great Community */}
              <a href="#testimonials">
                <div className="group relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 cursor-pointer h-full flex flex-col">
                  <div className="absolute -top-3 -left-3 bg-primary-600 rounded-lg p-3 shadow-md">
                    <Users className="text-white h-5 w-5" />
                  </div>
                  <div className="mt-4 flex-grow">
                    <h3 className="text-lg font-medium text-silver-900 group-hover:text-primary-600 transition duration-300">Great Community</h3>
                    <p className="mt-2 text-base text-silver-500">Join our friendly, supportive community of fitness enthusiasts who motivate each other to achieve their personal health goals.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              Success Stories from Our Members
            </p>
          </div>
          <div className="mt-12">
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
              {/* Testimonial 1 - Dustin */}
              <div className="bg-silver-50 rounded-xl shadow-md p-6 relative">
                <div className="text-primary-600 absolute -top-4 left-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-silver-600 italic">
                    "<span className="highlight">Great place</span> to work out, <span className="highlight">good price</span>, clean and never too crowded like a lot of the other gyms where you sit and wait for stations to open up. They have <span className="highlight">everything you need</span> and the staff is great"
                  </p>
                  <div className="mt-6 flex items-center">
                    <div>
                      <h3 className="text-sm font-medium text-silver-900">- Dustin</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 - Lance */}
              <div className="bg-silver-50 rounded-xl shadow-md p-6 relative">
                <div className="text-primary-600 absolute -top-4 left-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-silver-600 italic">
                    "Nice place, <span className="highlight">cheap and gets the job done</span>. The staff have <span className="highlight">always been great</span>"
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">L</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-silver-900">- Lance</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 - Johnny */}
              <div className="bg-silver-50 rounded-xl shadow-md p-6 relative">
                <div className="text-primary-600 absolute -top-4 left-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-silver-600 italic">
                    "Been member <span className="highlight">over 10 years</span>. <span className="highlight">Great price</span> and <span className="highlight">equipment</span>."
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">J</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-silver-900">- Johnny</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 - Bacon */}
              <div className="bg-silver-50 rounded-xl shadow-md p-6 relative">
                <div className="text-primary-600 absolute -top-4 left-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-silver-600 italic">
                    "Never judge me and continue to let me workout there, I can't argue they also <span className="highlight">keep things real clean</span> there. As there are also <span className="highlight">plenty of people there who know their stuff</span> and are more than great at giving out advice"
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">B</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-silver-900">- Bacon</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 - Talia */}
              <div className="bg-silver-50 rounded-xl shadow-md p-6 relative">
                <div className="text-primary-600 absolute -top-4 left-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-silver-600 italic">
                    "I've been <span className="highlight">coming to this gym for years</span> now and <span className="highlight">I won't go anywhere else</span>."
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">T</div>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-silver-900">- Talia</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
