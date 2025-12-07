import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Shield, Cloud, Zap, Star, Users, Globe, BookOpen, Award, Cpu, MonitorSmartphone } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-orange-500 to-orange-600 -z-20"></div>
        <div className="absolute inset-0 opacity-20 -z-10">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-50 backdrop-blur-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2 w-2 rounded-full bg-brand-teal mr-2"></span>
              Leading Tech Institution in Africa
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Innovating Africa's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-100">Digital Future</span>
            </h1>
            <p className="text-lg md:text-xl text-orange-50 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              We provide cutting-edge technology solutions, comprehensive digital training, and enterprise-grade tools to empower businesses and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link href="/services">
                <Button size="lg" className="bg-brand-teal text-white hover:bg-teal-700 h-14 px-8 text-lg rounded-full shadow-xl transition-transform hover:scale-105">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-brand-teal border-2 border-brand-teal hover:bg-gray-50 h-14 px-8 text-lg rounded-full shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Strip */}
      <div className="bg-white py-8 border-b">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Trusted Technologies We Use</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale">
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2"><Cpu className="w-6 h-6"/> React</span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2"><Cloud className="w-6 h-6"/> AWS</span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2"><MonitorSmartphone className="w-6 h-6"/> Flutter</span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2"><Shield className="w-6 h-6"/> CyberSec</span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2"><Code className="w-6 h-6"/> Python</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-brand-teal text-white py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Clients Served", value: "500+" },
              { label: "Projects Delivered", value: "1.2k" },
              { label: "Team Members", value: "50+" },
              { label: "Countries", value: "12" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-teal-100 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4">Why Partner With Us?</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We combine local expertise with global standards to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Pan-African Reach",
                desc: "With a presence in 12 countries, we understand the unique challenges and opportunities of the African market."
              },
              {
                icon: BookOpen,
                title: "Educational Excellence",
                desc: "Our training programs are designed by industry experts to bridge the skills gap and foster innovation."
              },
              {
                icon: Users,
                title: "Client-Centric Approach",
                desc: "We prioritize your success, offering 24/7 support and tailored solutions that grow with your business."
              },
              {
                icon: Award,
                title: "Certified Experts",
                desc: "Our team holds top industry certifications, ensuring you get world-class technical implementation."
              },
              {
                icon: Zap,
                title: "Rapid Delivery",
                desc: "Agile methodologies allow us to deliver high-quality software faster than traditional agencies."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Security is built-in, not bolted on. We adhere to international data protection standards."
              }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-teal group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4">Our Core Services</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to drive growth and efficiency for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: Code, 
                title: "Custom Software Dev", 
                desc: "Tailor-made software solutions designed to meet your specific business requirements." 
              },
              { 
                icon: Cloud, 
                title: "Cloud Infrastructure", 
                desc: "Scalable and secure cloud solutions to modernize your IT operations." 
              },
              { 
                icon: Shield, 
                title: "Cybersecurity", 
                desc: "Robust security measures to protect your digital assets and sensitive data." 
              },
              { 
                icon: Zap, 
                title: "Digital Transformation", 
                desc: "Strategic guidance to digitize your workflows and improve operational efficiency." 
              },
              {
                icon: BookOpen,
                title: "Corporate Training",
                desc: "Upskill your workforce with our customized corporate training programs in tech."
              },
              {
                icon: Users,
                title: "IT Consultancy",
                desc: "Expert advice to help you navigate complex technology decisions and strategies."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors">
                  <service.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services">
                  <a className="text-brand-teal font-semibold flex items-center hover:text-brand-orange transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-teal mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "iTech Network transformed our digital infrastructure. Their team is professional, knowledgeable, and truly cares about our success.",
                author: "John Doe",
                role: "CEO, FinTech Solutions",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              },
              {
                text: "The corporate training program was a game-changer for our engineering team. Productivity has increased by 40%.",
                author: "Jane Smith",
                role: "CTO, AgriTech Corp",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              },
              {
                text: "Their cybersecurity audit saved us from a potential breach. I highly recommend their services to any serious business.",
                author: "Robert Brown",
                role: "Director, HealthPlus",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="border-none shadow-lg bg-gray-50">
                <CardContent className="p-8">
                  <div className="flex gap-1 text-brand-orange mb-4">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights / Blog Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-brand-teal mb-4">Latest Insights</h2>
              <div className="w-24 h-1 bg-brand-orange rounded-full"></div>
            </div>
            <Link href="#">
              <Button variant="outline" className="hidden md:flex">View All Articles</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               {
                 title: "The Future of AI in African Business",
                 date: "Dec 5, 2025",
                 category: "Technology",
                 image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
               },
               {
                 title: "Securing Your Cloud Infrastructure",
                 date: "Nov 28, 2025",
                 category: "Cybersecurity",
                 image: "https://images.unsplash.com/photo-1558494949-ef2bb6db879c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
               },
               {
                 title: "Digital Transformation Strategies for 2026",
                 date: "Nov 15, 2025",
                 category: "Strategy",
                 image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
               }
             ].map((post, i) => (
               <div key={i} className="group cursor-pointer">
                 <div className="rounded-xl overflow-hidden mb-4 relative h-48">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-teal uppercase tracking-wide">
                     {post.category}
                   </div>
                 </div>
                 <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                 <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-orange transition-colors">{post.title}</h3>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-orange-50 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have elevated their operations with iTech Network Africa.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-brand-orange hover:bg-gray-100 font-bold px-10 h-14 rounded-full text-lg shadow-xl">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
