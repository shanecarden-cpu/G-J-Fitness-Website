import React from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Target, TrendingUp, Heart, Shield } from "lucide-react";

export default function PersonalTraining() {
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
                    Personal Training Services
                  </h1>
                  <p className="mt-5 text-xl text-silver-600">
                    Work one-on-one with our experienced certified personal trainers to reach your fitness goals faster and more effectively.
                  </p>
                </div>
              </div>
              <div className="pb-8 px-6 bg-silver-50 sm:p-10">
                <AspectRatio ratio={16 / 9}>
                  <div className="w-full h-full bg-silver-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-silver-600">Personal Training Image Placeholder</p>
                    </div>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-silver-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Our Approach
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              Personalized Training For Your Unique Needs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              Our personal trainers customize every program to meet your specific goals, fitness level, and preferences.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Goal Setting & Assessment
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  We begin with a comprehensive assessment to understand your current fitness level and establish clear, achievable goals.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Progressive Training
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Our trainers develop programs that gradually increase in intensity, ensuring continuous improvement while preventing plateaus.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Nutrition Guidance
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Complement your training with personalized nutrition recommendations that support your specific fitness goals.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg leading-6 font-medium text-silver-900">
                  Form & Safety Focus
                </h3>
                <p className="mt-2 text-base text-silver-600">
                  Learn proper exercise techniques to maximize results and minimize injury risk under expert supervision.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Training Programs */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Training Programs
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
              Choose The Program That's Right For You
            </p>
            <p className="mt-4 max-w-2xl text-xl text-silver-600 lg:mx-auto">
              From weight loss to strength building, we offer specialized training programs to help you achieve your goals.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-silver-900">Weight Loss & Body Transformation</h3>
                <p className="mt-2 text-silver-600">
                  A comprehensive program combining high-intensity interval training, resistance training, and nutrition guidance to help you lose weight and transform your body.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-silver-900">Strength & Muscle Building</h3>
                <p className="mt-2 text-silver-600">
                  Focused on progressive overload and proper nutrition to help you build lean muscle mass and increase overall strength.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-silver-900">Sports Performance</h3>
                <p className="mt-2 text-silver-600">
                  Specialized training to enhance your athletic abilities, focusing on speed, agility, power, and sport-specific movements.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-silver-900">Senior Fitness</h3>
                <p className="mt-2 text-silver-600">
                  Age-appropriate programs designed to improve mobility, balance, and strength while addressing specific health concerns.
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
            <span className="block">Ready to take your fitness to the next level?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            Schedule a consultation with one of our certified personal trainers today.
          </p>
          <a
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}