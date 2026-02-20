import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-primary-700 overflow-hidden flex items-center justify-center" style={{ height: '180px' }}>
        <div className="relative px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">
              About G&J Fitness for Life Center
            </h1>
            <h2 className="mt-4 text-xl font-medium text-silver-100 sm:text-2xl">
              Providing Quality Fitness Services Since 2008
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Us Info */}
          <div>
            <h2 className="text-2xl font-bold text-silver-900 mb-6">About Us</h2>
            <div className="prose max-w-none text-silver-600">
              <p className="mb-4">
                G&J Fitness for Life Center has been providing quality fitness services to the community for over <span className="font-bold">17 years</span>.
                We're committed to helping our members achieve their health and fitness goals in a welcoming, supportive environment.
              </p>
              <p className="mb-4">
                Our facility offers state-of-the-art equipment, 24/7 access, and a clean, comfortable atmosphere for workouts 
                at any time that fits your schedule.
              </p>
              <h3 className="text-xl font-bold text-silver-900 mt-8 mb-4">Hours</h3>
              <p className="mb-2 font-medium">Open 24 hours a day, 7 days a week</p>
              <p className="mb-2 font-medium">Office Hours: 9AM - 4:30PM</p>
              
              <h3 className="text-xl font-bold text-silver-900 mt-8 mb-4">Follow Us on Social Media</h3>
              <div className="flex items-center gap-2 mb-6">
                <a 
                  href="https://www.facebook.com/pages/G%20&%20J%20Fitness/250368928343316/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="mr-2" size={20} />
                  Follow Us on Facebook
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-silver-900 mt-8 mb-4">Location</h3>
              <div className="mt-4 border border-silver-300 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.066118018195!2d-95.43742082356752!3d32.67209097534726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8634e5d34a2eacc3%3A0x89bb5b5fec07fbe9!2s5615%20TX-37%2C%20Mineola%2C%20TX%2075773!5e0!3m2!1sen!2sus!4v1682681651241!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="G&J Fitness for Life Center Location"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div id="contact">
            <h2 className="text-2xl font-bold text-silver-900 mb-6">Contact Us</h2>
            <Card className="p-6 sm:p-8 lg:p-10 shadow-md">
              <div className="space-y-6">
                <div className="flex flex-col space-y-4">
                  {/* Hours */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary-100 p-2 rounded-full">
                      <Clock className="h-6 w-6 text-primary-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-silver-900">Hours of Operation</h3>
                      <p className="mt-1 text-silver-600">Gym: 24/7 Access for Members</p>
                      <p className="mt-1 text-silver-600">Office: 9AM - 4:30PM, Monday to Friday</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary-100 p-2 rounded-full">
                      <Phone className="h-6 w-6 text-primary-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-silver-900">Phone</h3>
                      <p className="mt-1 text-silver-600">
                        <a href="tel:9035699400" className="hover:text-primary-600 transition-colors">
                          903.569.9400
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary-100 p-2 rounded-full">
                      <Mail className="h-6 w-6 text-primary-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-silver-900">Email</h3>
                      <p className="mt-1 text-silver-600">
                        <a href="mailto:gjfitnesscenter@gmail.com" className="hover:text-primary-600 transition-colors">
                          gjfitnesscenter@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-primary-100 p-2 rounded-full">
                      <MapPin className="h-6 w-6 text-primary-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-silver-900">Location</h3>
                      <p className="mt-1 text-silver-600">
                        5615 S. State Highway 37<br />
                        Mineola, TX 75773
                      </p>
                    </div>
                  </div>
                  
                  {/* Social Media */}
                  <div className="flex items-start">
                    <div className="mt-1 bg-blue-100 p-2 rounded-full">
                      <Facebook className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-silver-900">Connect With Us</h3>
                      <p className="mt-1 text-silver-600">
                        <a 
                          href="https://www.facebook.com/pages/G%20&%20J%20Fitness/250368928343316/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          Follow us on Facebook
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-silver-200">
                  <h3 className="text-lg font-medium text-silver-900 mb-3">Questions or Comments?</h3>
                  <p className="text-silver-600 mb-4">
                    Have questions about our gym, memberships, or special programs? Feel free to call us during office hours or send us an email!
                  </p>
                  <div className="flex gap-4 flex-col sm:flex-row">
                    <a href="tel:9035699400">
                      <Button className="w-full bg-primary-600 hover:bg-primary-700">
                        <Phone className="mr-2 h-4 w-4" /> Call Us
                      </Button>
                    </a>
                    <a href="mailto:gjfitnesscenter@gmail.com">
                      <Button className="w-full bg-primary-600 hover:bg-primary-700">
                        <Mail className="mr-2 h-4 w-4" /> Email Us
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}