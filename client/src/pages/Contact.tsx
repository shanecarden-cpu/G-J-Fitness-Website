import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { contactFormSchema } from "@/lib/validations";

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
      privacy: false,
    },
  });

  const mutation = useMutation({
    mutationFn: (values: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", values);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      form.reset();
      setFormSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "An error occurred. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    mutation.mutate(data);
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-silver-900 sm:text-4xl">
            Get In Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-silver-500 lg:mx-auto">
            Have questions or ready to start your fitness journey? We're here to help.
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Contact Form */}
          <div className="relative">
            <Card className="p-6 sm:p-10 lg:p-12">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                      <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-silver-900 mb-2">
                    Thank you for contacting us!
                  </h3>
                  <p className="text-silver-600">
                    We've received your message and will get back to you shortly.
                  </p>
                  <Button 
                    className="mt-6"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-silver-700">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="py-3 px-4" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-silver-700">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="your.email@example.com" 
                              type="email"
                              className="py-3 px-4" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-silver-700">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(123) 456-7890" 
                              type="tel"
                              className="py-3 px-4" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="interest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-silver-700">Interested In</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="py-3 px-4">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="basic">Basic Membership</SelectItem>
                              <SelectItem value="premium">Premium Membership</SelectItem>
                              <SelectItem value="elite">Elite Membership</SelectItem>
                              <SelectItem value="deal">Special Deal</SelectItem>
                              <SelectItem value="other">Other Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-silver-700">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[120px] py-3 px-4" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="privacy"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-silver-700">
                              I agree to the privacy policy and terms of service
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </Card>
          </div>

          {/* Contact Info */}
          <div className="mt-10 lg:mt-0">
            <Card className="bg-silver-50 p-6 sm:p-10 lg:p-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-silver-900">Visit Our Gym</h3>
                  <div className="mt-3 text-base text-silver-600">
                    <p>5615 TX-37</p>
                    <p>Mineola, TX 75773</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-silver-900">Opening Hours</h3>
                  <div className="mt-3 text-base text-silver-600">
                    <p>Open 24 hours</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-silver-900">Contact Information</h3>
                  <div className="mt-3 space-y-2 text-base text-silver-600">
                    <p className="flex items-center">
                      <Phone className="mr-3 text-primary-600 h-5 w-5" />
                      <a href="tel:9035699400" className="hover:text-primary-600">(903) 569-9400</a>
                    </p>
                    <p className="flex items-center">
                      <Mail className="mr-3 text-primary-600 h-5 w-5" />
                      info@gjfitnessforlife.com
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-silver-900">Follow Us</h3>
                  <div className="mt-3 flex space-x-6">
                    <a href="#" className="text-silver-500 hover:text-primary-600">
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="rounded-lg overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <div className="w-full h-full bg-silver-200 flex items-center justify-center">
                      <div className="text-center p-4">
                        <MapPin className="mx-auto h-10 w-10 text-primary-600 mb-2" />
                        <p className="text-silver-600">Interactive map would be displayed here</p>
                      </div>
                    </div>
                  </AspectRatio>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
