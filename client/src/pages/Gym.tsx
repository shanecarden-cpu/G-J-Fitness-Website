import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, CheckCircle, Dumbbell, BarChart2, Clock, Users, Home } from "lucide-react";

export default function Gym() {
  return (
    <div className="bg-white">
      {/* Our Facility Section */}
      <div className="py-16 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Our Facility
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              Everything You Need To Reach Your Fitness Goals
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              Open 24 hours a day, 7 days a week, our gym is designed to help you achieve your full potential.
            </p>
            <div className="mt-6">
              <a href="/gallery" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-500 gallery-link-shimmer">
                View our Gym Photo Gallery
                <ArrowRight className="ml-2 h-6 w-6 arrow-pointing" />
              </a>
            </div>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Premium Equipment
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Our gym features top-of-the-line equipment for strength training, cardio, and functional fitness to meet all your workout needs.
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
                  With 24-hour access, you can train whenever fits your schedule, whether you're an early bird or a night owl.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Clean and Welcoming Environment
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  We maintain a clean, safe, and welcoming environment where everyone from beginners to advanced athletes can feel comfortable.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Supportive Community
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Join our community of fitness enthusiasts and develop connections that will help you stay motivated on your fitness journey.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Our Equipment
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              Complete Workout Facility
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              2,280 Square Feet of Workout Area with 578 Square Feet of Dressing Rooms & Lockers
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2">
            {/* Cardio Equipment */}
            <div>
              <h3 className="text-xl font-bold text-silver-900 border-b-2 border-primary-500 pb-2 mb-4">
                Cardio Equipment
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Six Treadmills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Three Ellipticals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Three Stationary Bicycles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">One Step Climber</span>
                </li>
              </ul>
            </div>
            
            {/* Weights */}
            <div>
              <h3 className="text-xl font-bold text-silver-900 border-b-2 border-primary-500 pb-2 mb-4">
                Weights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Free Weights</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">1lb. to 85 lbs.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Dumbbells (ranging from 5 to 100+ lbs)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Barbells (standard and Olympic)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Weight plates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Kettlebells</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Fixed-weight barbells</span>
                </li>
              </ul>
            </div>
            
            {/* Weight Machines */}
            <div>
              <h3 className="text-xl font-bold text-silver-900 border-b-2 border-primary-500 pb-2 mb-4">
                Weight Machines
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Shoulder Press</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Leg Press</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Calf Raise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Leg Curl</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Leg Extensions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Ab Cruncher</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Chest Fly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Back Row</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Lap Pull</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Mr. Smith Machine</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Chest press machines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Lat pulldown machines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Cable machines</span>
                </li>
              </ul>
            </div>
            
            {/* Amenities */}
            <div>
              <h3 className="text-xl font-bold text-silver-900 border-b-2 border-primary-500 pb-2 mb-4">
                Amenities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Cameras to Monitor Members</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Silent Emergency Alarm</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Towels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Televisions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-primary-500 mt-0.5" />
                  <span className="ml-3 text-silver-700">Water Fountain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Weight Room Section */}
      <div className="py-16 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Our Weight Room
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

      {/* Additional Equipment List */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Additional Equipment
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              Complete Strength Training Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              Our weight room is fully equipped to support all levels of strength training.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
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

              <Card className="p-6 mb-6 md:mb-0">
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
      <div className="bg-primary-700 animated-bg">
        {/* Animated particles */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        
        {/* Gym-themed animated shapes */}
        <div className="gym-shape dumbbell" style={{ top: '45%', left: '5%' }}></div>
        <div className="gym-shape weight-plate" style={{ top: '20%', right: '10%' }}></div>
        <div className="gym-shape kettlebell" style={{ bottom: '10%', left: '15%' }}></div>
        <div className="gym-shape barbell" style={{ top: '15%', left: '40%' }}></div>
        
        <div className="max-w-2xl mx-auto text-center py-10 px-4 sm:py-12 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to start your fitness journey?</span>
            <span className="block">Join G & J Fitness for Life Center today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            Experience the difference of training at a facility designed to help you reach your full potential.
          </p>
          <a
            href="/pricing"
            className="mt-6 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            View Membership Options <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}