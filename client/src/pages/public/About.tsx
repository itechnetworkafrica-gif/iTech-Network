import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { CheckCircle, Users, Target, Lightbulb, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      {/* Header Banner */}
      <section className="pt-32 pb-20 bg-brand-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-brand-teal opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About iTech Network</h1>
          <p className="text-xl text-teal-50 max-w-2xl mx-auto">
            We are a premier technology institution dedicated to bridging the digital divide through education, innovation, and enterprise solutions.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-brand-orange hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-brand-teal mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals and organizations across Africa with world-class technology skills and digital tools that drive sustainable economic growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-brand-teal hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-2xl font-bold text-brand-teal mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading catalyst for digital transformation in Africa, creating a future where technology is accessible, inclusive, and impactful.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-gray-800 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-gray-800" />
              </div>
              <h3 className="text-2xl font-bold text-brand-teal mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-orange" /> Innovation</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-orange" /> Integrity</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-orange" /> Excellence</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-orange" /> Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
               <div className="relative">
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/10 rounded-full z-0"></div>
                 <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-teal/10 rounded-full z-0"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Team collaboration" 
                   className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
                 />
               </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-teal mb-6">Driving Innovation Since 2020</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded by a group of passionate technologists, iTech Network Africa began with a simple goal: to provide high-quality coding education. Today, we have evolved into a full-service technology institution offering enterprise software development, consultancy, and advanced training programs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that the future belongs to those who build it. That's why we partner with businesses to build robust digital infrastructure and with individuals to build career-defining skills.
              </p>
              <Button className="bg-brand-orange text-white hover:bg-orange-600 rounded-full px-8">
                Join Our Team <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
