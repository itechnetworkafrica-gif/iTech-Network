import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Shield, Cloud, Zap, Star, Users, Globe, BookOpen, Award, Cpu, MonitorSmartphone, MousePointer2, Rocket, Briefcase, BarChart3, MessageSquare, Database, Layers, Search, Settings, PieChart, Linkedin, Twitter, Facebook, ExternalLink } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-white">
      <PublicNavbar />
      
      {/* Modern Minimal Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
        {/* Soft Modern Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-brand-green/10 rounded-full blur-[100px] -z-10 animate-pulse duration-[8s]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[80px] -z-10"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left pt-10">
              <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-800 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="flex h-2 w-2 rounded-full bg-brand-green mr-2 animate-ping"></span>
                Africa's Premier Tech Hub
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
                Design the future of <br className="hidden md:block"/>
                <span className="text-brand-green relative inline-block">
                  your business.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10 opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-light">
                We build scalable software, design beautiful brands, and train the next generation of tech leaders across Africa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 h-14 px-8 text-base rounded-full transition-all hover:scale-105 font-medium group" asChild>
                  <Link href="/services">
                    Our Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-gray-900 border-gray-200 hover:bg-gray-50 hover:border-gray-300 h-14 px-8 text-base rounded-full shadow-sm transition-all font-medium" asChild>
                  <Link href="/pricing">
                    View Pricing
                  </Link>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center justify-center md:justify-start gap-4 animate-in fade-in duration-1000 delay-500">
                <div className="flex -space-x-3">
                  <Avatar className="w-10 h-10 border-2 border-white shadow-sm"><AvatarImage src="https://i.pravatar.cc/100?img=1" /></Avatar>
                  <Avatar className="w-10 h-10 border-2 border-white shadow-sm"><AvatarImage src="https://i.pravatar.cc/100?img=2" /></Avatar>
                  <Avatar className="w-10 h-10 border-2 border-white shadow-sm"><AvatarImage src="https://i.pravatar.cc/100?img=3" /></Avatar>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-gray-900">500+</span> businesses trust us
                </div>
              </div>
            </div>
            
            {/* Modern Hero Image/Graphic */}
            <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-emerald-300/20 rounded-[3rem] -rotate-6 transform scale-105 -z-10"></div>
              <img 
                src="/images/hero_home.jpg" 
                alt="Tech Team" 
                className="rounded-[3rem] shadow-2xl object-cover h-[600px] w-full border-4 border-white"
              />
              
              {/* Floating modern UI elements */}
              <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce duration-[6s]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase">Security</p>
                    <p className="text-sm font-bold text-gray-900">Enterprise Grade</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-20 -right-8 bg-black text-white p-5 rounded-2xl shadow-2xl animate-bounce duration-[7s] delay-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-gray-400">Custom Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Technologies Strip */}
      <div className="bg-gray-50 py-12 border-y border-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted Technologies & Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-gray-800 flex items-center gap-2"><Cpu className="w-6 h-6"/> React</span>
            <span className="text-xl font-bold text-gray-800 flex items-center gap-2"><Cloud className="w-6 h-6"/> AWS</span>
            <span className="text-xl font-bold text-gray-800 flex items-center gap-2"><MonitorSmartphone className="w-6 h-6"/> Flutter</span>
            <span className="text-xl font-bold text-gray-800 flex items-center gap-2"><Database className="w-6 h-6"/> Firebase</span>
            <span className="text-xl font-bold text-gray-800 flex items-center gap-2"><Code className="w-6 h-6"/> Next.js</span>
            <span className="text-xl font-bold text-gray-800 flex items-center gap-2"><Layers className="w-6 h-6"/> Tailwind</span>
          </div>
        </div>
      </div>

      {/* Modern Feature Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Everything you need to <span className="text-brand-green">grow online.</span></h2>
            <p className="text-gray-500 text-lg">We provide end-to-end digital solutions designed to help your business operate efficiently and scale seamlessly.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Custom Software", desc: "Tailored web and mobile applications built for your specific business needs." },
              { icon: Briefcase, title: "IT Consultancy", desc: "Strategic technology planning and digital transformation roadmaps." },
              { icon: MonitorSmartphone, title: "Digital Marketing", desc: "Data-driven campaigns to increase your visibility and attract customers." },
              { icon: Shield, title: "Cybersecurity", desc: "Enterprise-grade protection to keep your business data safe and secure." },
              { icon: Layers, title: "Graphic Design", desc: "Professional branding, logos, and marketing materials that stand out." },
              { icon: BookOpen, title: "Tech Training", desc: "Comprehensive ICT training programs for staff, students, and individuals." }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-gray-100 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Professional Team Section */}
      <section className="py-24 bg-gray-50 relative border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-block border border-gray-200 bg-white rounded-full px-4 py-1.5 text-xs font-semibold text-brand-green uppercase tracking-widest mb-4 shadow-sm">
              Our Leadership
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">The minds behind the innovation.</h2>
            <p className="text-gray-500 text-lg">A dedicated team of experts pushing the boundaries of what's possible in the African tech ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Kerkulah Wilmot", role: "Founder & CEO", img: "https://i.pravatar.cc/300?img=11", linkedin: "#" },
              { name: "Sarah Johnson", role: "Head of Engineering", img: "https://i.pravatar.cc/300?img=47", linkedin: "#" },
              { name: "Michael Osei", role: "Design Director", img: "https://i.pravatar.cc/300?img=12", linkedin: "#" },
              { name: "David Kamara", role: "Lead Consultant", img: "https://i.pravatar.cc/300?img=14", linkedin: "#" }
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-green-300 font-medium text-sm mb-4">{member.role}</p>
                    
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <a href={member.linkedin} className="w-8 h-8 rounded-full bg-white/20 hover:bg-brand-green flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-brand-green flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Innovation Lab / Highlight Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-semibold text-green-400 uppercase tracking-widest">
                Research & Development
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                iTech Innovation <br />
                <span className="text-brand-green">Laboratory</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                We invest heavily in R&D to bring the latest technological advancements to Africa. From AI prototypes to Blockchain frameworks, our innovation lab is constantly exploring the frontier of what's possible.
              </p>
              
              <div className="space-y-4 pt-4">
                {[
                  "Artificial Intelligence & Machine Learning",
                  "Internet of Things (IoT) Prototyping",
                  "Advanced Data Analytics",
                  "Cloud Infrastructure Optimization"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-brand-green" />
                    </div>
                    <span className="font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/service_ai.jpg" 
                alt="Innovation Lab" 
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stats & Trust Section */}
      <section className="py-24 bg-brand-green text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "Clients Served", value: "500+" },
              { label: "Projects Delivered", value: "1.2k" },
              { label: "Tech Experts", value: "50+" },
              { label: "Global Reach", value: "12+" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-4xl md:text-6xl font-black tracking-tight">{stat.value}</div>
                <div className="text-green-100 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Logos Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners & Clients</h2>
            <p className="text-gray-500">Organizations that trust us to deliver exceptional digital experiences.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 bg-white py-10 px-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/Starz%20Logo.webp" alt="Starz" className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/dmg%20Logo.jpeg" alt="DMC" className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/proaffordable-cleaning-logo.png" alt="Pro-Clean" className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/new%20liberia%20logo.jpeg" alt="New Liberia" className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/ai%20tech%20logo.webp" alt="A1 Tech" className="h-12 w-auto opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}