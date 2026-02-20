import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Heart, Activity, Shield, Clock, Users, Dumbbell, LifeBuoy, Stethoscope, Monitor, Award } from "lucide-react";

export default function MedicarePrograms() {
  return (
    <div className="bg-white">
      {/* Medicare Programs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Our Programs
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              Medicare Programs We Support
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto mb-6">
              We are proud to partner with top providers to offer these excellent programs to our senior community.
            </p>
            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Contact Us Now
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
            {/* SilverSneakers */}
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-md group-hover:shadow-xl transition duration-300">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                    <Dumbbell className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">SilverSneakers®</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    The nation's leading fitness program for older adults through private insurance, promoting vital physical and social activity with access to over 22,000 fitness locations nationwide.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Prime Fitness */}
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-md group-hover:shadow-xl transition duration-300">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                    <Activity className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prime® Fitness</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    Flexible memberships offering access to 11,000+ fitness facilities, helping members commit to regular exercise and healthier living.
                  </p>
                </div>
              </div>
            </div>
            
            {/* WholeHealth Living */}
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-md group-hover:shadow-xl transition duration-300">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                    <Stethoscope className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WholeHealth Living®</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    Specialty health services that manage chiropractic care, rehabilitation therapy, complementary alternative medicine, and other treatments — all with a focus on better outcomes and lower costs.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Burnalong */}
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-md group-hover:shadow-xl transition duration-300">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                    <Monitor className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Burnalong®</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    An end-to-end digital health platform offering live classes, on-demand workouts, social motivation, inspiring events, inclusive challenges, and personalized recommendations — helping every member stay active and engaged anywhere.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Silver & Fit Program */}
            <div className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-md group-hover:shadow-xl transition duration-300">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Silver & Fit®</h3>
                  <p className="text-sm text-gray-600 flex-grow">
                    An innovative health and fitness program designed specifically for Medicare beneficiaries, providing access to fitness centers, home fitness programs, and healthy aging resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Benefits
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              Why Choose Medicare Programs?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              Our Medicare programs offer numerous benefits designed specifically for older adults.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Improved Health
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Regular participation can help improve overall health, reduce the risk of chronic disease, and enhance mental wellbeing.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Increased Mobility
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Our exercises focus on maintaining and improving mobility, helping you stay independent and active.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Fall Prevention
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Exercises that strengthen your core and improve balance help reduce the risk of falls, a common concern for older adults.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Social Connections
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Join a community of like-minded individuals and form new friendships that enhance your quality of life.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* About the Program */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              About Medicare Programs
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              G&J Fitness for Life: Where Healthy Aging Begins
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              We support several Medicare fitness programs including SilverSneakers and Silver & Fit that are included with many Medicare Advantage plans.
            </p>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <p className="text-silver-600 text-lg leading-7">
              At G&J Fitness for Life, we use a member-centric, data-driven approach to support healthy aging for our senior community.
              We are committed to understanding the unique needs of the dynamic 65+ population, creating personalized programs that engage seniors in sustainable, healthy behaviors.
            </p>
            <p className="mt-6 text-silver-600 text-lg leading-7">
              Through our partnership with Tivity Health®, we make it easier than ever for seniors to access free gym memberships.
              If you have a Medicare Advantage Health Plan, our team can help you check your eligibility and get you started on your wellness journey.
            </p>
            <p className="mt-6 text-silver-600 text-lg leading-7">
              At G&J Fitness for Life, we believe health isn't just a state of being — it's a commitment to doing.
              Taking real steps toward a stronger, more vibrant future. Creating opportunities to feel better, move better, and live better.
              We work together with members, partners, and communities to improve health outcomes, reduce healthcare costs, and empower seniors to stay active and connected at every stage of life — all with creativity, energy, and a positive spirit.
            </p>
            <div className="mt-6">
              <a href="/gallery" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-500 gallery-link-shimmer">
                View our Facility Photo Gallery
                <ArrowRight className="ml-2 h-6 w-6 arrow-pointing" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started with Medicare Programs?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            Join our supportive community and take the first step toward improved health and wellness.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Check Eligibility <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}