import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Zap, Activity, Users, Award } from "lucide-react";

export default function Kickboxing() {
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
                    Kickboxing Classes
                  </h1>
                  <p className="mt-5 text-xl text-silver-600">
                    Build strength, increase agility, and burn calories with our high-energy kickboxing classes.
                  </p>
                </div>
              </div>
              <div className="pb-8 px-6 bg-silver-50 sm:p-10">
                <AspectRatio ratio={16 / 9}>
                  <div className="w-full h-full bg-silver-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-silver-600">Kickboxing Image Placeholder</p>
                    </div>
                  </div>
                </AspectRatio>
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
              Why Choose Kickboxing?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              Kickboxing is more than just a workout—it's a complete fitness experience that strengthens your body and mind.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Full-Body Workout
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Kickboxing engages every muscle group, providing a comprehensive workout that builds strength, improves flexibility, and enhances coordination.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  High Calorie Burn
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  A single kickboxing session can burn up to 800 calories, making it one of the most effective workouts for weight loss and body toning.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Stress Relief
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Channel your energy and release stress through punching and kicking combinations that leave you feeling empowered and refreshed.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Self-Defense Skills
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Learn practical self-defense techniques while getting in shape, boosting your confidence and personal safety.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Class Information */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Class Information
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              What to Expect in Our Kickboxing Classes
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-silver-900">Class Structure</h3>
                <p className="mt-2 text-silver-600">
                  Our kickboxing classes typically run for 60 minutes and include warm-up, technique training, combination drills, partner work, conditioning, and cool-down periods.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-silver-900">Skill Levels</h3>
                <p className="mt-2 text-silver-600">
                  We offer classes for all skill levels, from beginners to advanced practitioners. Our instructors modify techniques and intensity based on individual abilities.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-silver-900">Equipment</h3>
                <p className="mt-2 text-silver-600">
                  We provide all necessary equipment for your class, including gloves, pads, and bags. Just bring comfortable workout clothes, water, and a towel.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-silver-900">Schedule</h3>
                <p className="mt-2 text-silver-600">
                  We offer multiple classes throughout the week at various times to accommodate different schedules. Check our current class schedule at the front desk or contact us for the latest information.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to kick-start your fitness journey?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            Join our kickboxing classes and experience a workout like no other.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Join a Class <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}