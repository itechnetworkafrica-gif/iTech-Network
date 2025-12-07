import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      <section className="pt-32 pb-20 bg-brand-teal text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our training programs? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Contact Info Card */}
            <Card className="lg:col-span-1 bg-white border-none shadow-xl h-full">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-brand-teal mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Visit Us</p>
                        <p className="text-gray-600 text-sm mt-1">123 Tech Boulevard,<br />Innovation District, Nairobi</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email Us</p>
                        <p className="text-gray-600 text-sm mt-1">hello@itech.africa<br />support@itech.africa</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Call Us</p>
                        <p className="text-gray-600 text-sm mt-1">+254 700 123 456<br />Mon-Fri, 9am-5pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    {/* Social Icons Placeholder */}
                    <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-brand-teal hover:text-white transition-colors cursor-pointer flex items-center justify-center text-xs">FB</div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-brand-teal hover:text-white transition-colors cursor-pointer flex items-center justify-center text-xs">TW</div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-brand-teal hover:text-white transition-colors cursor-pointer flex items-center justify-center text-xs">IG</div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full hover:bg-brand-teal hover:text-white transition-colors cursor-pointer flex items-center justify-center text-xs">LI</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Form Card */}
            <Card className="lg:col-span-2 bg-white border-none shadow-xl">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <Input id="name" placeholder="John Doe" className="bg-gray-50 border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                      <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input id="phone" placeholder="+254..." className="bg-gray-50 border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                      <Input id="subject" placeholder="Project Inquiry" className="bg-gray-50 border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry..." className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-brand-teal focus:ring-brand-teal/20" />
                  </div>

                  <Button className="w-full md:w-auto bg-brand-orange hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-lg">
                    Send Message <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
