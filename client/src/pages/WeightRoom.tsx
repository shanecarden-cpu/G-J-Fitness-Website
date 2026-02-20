import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Dumbbell, BarChart2, Clock, Users } from "lucide-react";

export default function WeightRoom() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-700">
        <div className="absolute inset-0">
          <div className="bg-primary-800 h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg shadow-xl overflow-hidden bg-silver-50">
              <div className="px-6 py-8 sm:p-10">
                <div className="max-w-xl mx-auto text-center">
                  <h1 className="text-3xl font-extrabold text-silver-900 sm:text-4xl sm:tracking-tight">
                    Our Weight Room
                  </h1>
                  <p className="mt-5 text-xl text-silver-600">
                    Experience our comprehensive weight training area with top-quality equipment for all your strength training needs.
                  </p>
                </div>
              </div>
              <div className="pb-8 px-6 bg-silver-50 sm:p-10">
                <AspectRatio ratio={16 / 9}>
                  <div className="w-full h-full bg-silver-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-silver-600">Weight Room Image Placeholder</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Our Facility
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              State-of-the-Art Weight Training Area
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              Our weight room is equipped with everything you need for an effective strength training session.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Comprehensive Equipment
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  From free weights to specialized machines, our weight room features a wide range of equipment to target every muscle group.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <BarChart2 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Quality Equipment
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  We invest in high-quality, well-maintained equipment to ensure your safety and maximize your workout effectiveness.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  24/7 Access
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  With 24-hour access, you can train whenever fits your schedule, whether early morning or late night.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Expert Staff
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Our knowledgeable staff can provide guidance on proper equipment use and exercise form to ensure safe and effective workouts.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment List */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Equipment
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              What We Offer
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              Our weight room is fully equipped to support all levels of strength training.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-0">
              <Card className="p-6 mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-silver-900 mb-4">Free Weights</h3>
                <ul className="space-y-2 text-silver-600">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Dumbbells (ranging from 5 to 100+ lbs)
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Barbells (standard and Olympic)
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Weight plates
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Kettlebells
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Fixed-weight barbells
                  </li>
                </ul>
              </Card>

              <Card className="p-6 mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-silver-900 mb-4">Strength Machines</h3>
                <ul className="space-y-2 text-silver-600">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Chest press machines
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Shoulder press machines
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Lat pulldown machines
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Leg press and extension machines
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Cable machines
                  </li>
                </ul>
              </Card>

              <Card className="p-6 mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-silver-900 mb-4">Racks and Benches</h3>
                <ul className="space-y-2 text-silver-600">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Power racks and squat racks
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Flat, incline, and decline benches
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Preacher curl benches
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Smith machines
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-silver-900 mb-4">Functional Training</h3>
                <ul className="space-y-2 text-silver-600">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Resistance bands
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Medicine balls
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Stability balls
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Foam rollers
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary-500" />
                    Battle ropes
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to build strength and transform your body?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            Join our gym today and get access to our comprehensive weight room and more.
          </p>
          <a
            href="/pricing"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            View Membership Options <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}