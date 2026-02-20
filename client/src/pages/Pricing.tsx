import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";

export default function Pricing() {
  return (
    <section className="bg-silver-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Membership Options</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
            Find the Perfect Plan for You
          </p>
          <p className="mt-4 max-w-2xl text-xl text-silver-500 lg:mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals.
          </p>
        </div>

        <div className="mt-16 space-y-12 lg:space-y-0 lg:flex lg:flex-row lg:gap-x-5 lg:justify-center">
          {/* Yearly Membership (Cheapest option) */}
          <div className="relative p-4 bg-white border border-primary-200 rounded-2xl shadow-sm flex flex-col flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="absolute -top-4 -right-4 bg-primary-600 rounded-full px-4 py-1 text-sm font-semibold text-white shadow-md gallery-shimmer">
              Best Value
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-silver-900">Yearly Membership</h3>
              <p className="mt-4 flex items-baseline text-silver-900">
                <span className="text-5xl font-extrabold tracking-tight">$15</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-2 text-xl text-primary-600 font-medium">$180 paid annually</p>
              <p className="mt-4 text-silver-500">1-year commitment required</p>

              <ul role="list" className="mt-6 space-y-4">
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500">Our best value annual membership</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500 font-medium">Must pay 1 year in advance ($180)</span>
                </li>
              </ul>
            </div>

            <Link href="/about#contact">
              <Button className="mt-8 w-full bg-accent-400 hover:bg-accent-500 text-white join-now-shimmer">
                Get Started
              </Button>
            </Link>
          </div>
          
          {/* Senior Discount */}
          <div className="relative p-4 bg-white border border-silver-200 rounded-2xl shadow-sm flex flex-col flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-silver-900">Seniors (55 and older)</h3>
              <p className="mt-4 flex items-baseline text-silver-900">
                <span className="text-5xl font-extrabold tracking-tight">$20</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-6 text-silver-500 font-medium text-primary-600">Ask about our free membership programs</p>

              <ul role="list" className="mt-6 space-y-4">
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500">Special rate for seniors 55 and older</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500 font-medium">Ask us about Medicare programs</span>
                </li>
              </ul>
            </div>

            <Link href="/about#contact">
              <Button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Combined Single Plan */}
          <div className="relative p-4 bg-white border border-silver-200 rounded-2xl shadow-sm flex flex-col flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-silver-900">Single Membership</h3>
              <p className="mt-4 flex items-baseline text-silver-900">
                <span className="text-5xl font-extrabold tracking-tight">$25</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-2 text-xl text-primary-600 font-medium">With automatic bank draft</p>
              <p className="mt-4 text-silver-500">$35/month without automatic draft</p>

              <ul role="list" className="mt-6 space-y-4">
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500">No contracts or commitments</span>
                </li>
              </ul>
            </div>

            <Link href="/about#contact">
              <Button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Couple/Family Plan */}
          <div className="relative p-4 bg-white border border-silver-200 rounded-2xl shadow-sm flex flex-col flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-silver-900">Couple</h3>
              <p className="mt-4 flex items-baseline text-silver-900">
                <span className="text-5xl font-extrabold tracking-tight">$40</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-2 text-xl text-primary-600">+$10 per additional family member</p>
              <p className="mt-4 text-silver-500">For couples or parent & child.</p>

              <ul role="list" className="mt-6 space-y-4">
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500">Must be married or parent & child</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500">Each additional family member: $10/month</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500 font-medium">Child ages 14 to 18 ONLY</span>
                </li>
              </ul>
            </div>

            <Link href="/about#contact">
              <Button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mineola ISD */}
          <div className="relative p-4 bg-white border border-silver-200 rounded-2xl shadow-sm flex flex-col flex-1 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-silver-900">Mineola ISD</h3>
              <p className="mt-4 flex items-baseline text-silver-900">
                <span className="text-5xl font-extrabold tracking-tight">$15</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p className="mt-2 text-xl text-primary-600">+$10 per additional family member</p>
              <p className="mt-4 text-silver-500">Must be payroll deducted.</p>

              <ul role="list" className="mt-6 space-y-4">
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500">Each additional family member: $10/month</span>
                </li>
                <li className="flex">
                  <Check className="flex-shrink-0 h-5 w-5 text-primary-500" />
                  <span className="ml-3 text-silver-500 font-medium">Spouse or Child (ages 14 to 18 only)</span>
                </li>
              </ul>
            </div>

            <Link href="/about#contact">
              <Button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>

        {/* Important Information */}
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md mx-auto max-w-4xl border-l-4 border-primary-500">
          <h3 className="text-xl font-semibold text-silver-900 mb-4">Important Membership Information</h3>
          <ul className="space-y-2">
            <li className="flex">
              <span className="font-medium">• Everyone must purchase a $10.00 membership key tag.</span>
            </li>
            <li className="flex">
              <span>• This will allow you access to the gym 24 hours.</span>
            </li>
            <li className="flex">
              <span>• If lost or stolen, you must report it and purchase another membership key tag.</span>
            </li>
            <li className="flex">
              <span>• Monthly draft clients must give a 10-day notice if membership is cancelled.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
