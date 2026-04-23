import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Shield, Cloud, Zap, Star, Users, Globe, BookOpen, Award, Cpu, MonitorSmartphone, MousePointer2, Rocket, Briefcase, BarChart3, MessageSquare, Database, Layers, Search, Settings, PieChart } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-green-500 to-green-600 -z-20"></div>
        <div className="absolute inset-0 opacity-20 -z-10">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4 animate-pulse duration-[10s]"></div>
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/4 animate-pulse duration-[8s]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-50 backdrop-blur-sm mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex h-2 w-2 rounded-full bg-brand-green mr-2"></span>
              Leading Tech Institution in Africa
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-1000">
              Innovating Africa's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-100">Digital Future</span>
            </h1>
            <p className="text-lg md:text-xl text-green-50 mb-8 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              We provide cutting-edge technology solutions, comprehensive digital training, and enterprise-grade tools to empower businesses and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Button size="lg" className="bg-brand-green text-white hover:bg-green-700 h-14 px-8 text-lg rounded-full shadow-xl transition-all hover:scale-105 hover:shadow-brand-green/20" asChild>
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-brand-green border-2 border-brand-green hover:bg-gray-50 h-14 px-8 text-lg rounded-full shadow-lg transition-all hover:scale-105" asChild>
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements Animation */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-96 h-96 z-10 pointer-events-none">
          <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl animate-bounce duration-[4s]">
            <Code className="w-12 h-12 text-white" />
          </div>
          <div className="absolute bottom-0 left-0 bg-brand-green/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl animate-bounce duration-[5s] delay-700">
            <Rocket className="w-12 h-12 text-white" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl animate-pulse duration-[3s]">
            <Cpu className="w-16 h-16 text-white" />
          </div>
        </div>
      </section>

      {/* Technologies Strip */}
      <div className="bg-white py-12 border-b relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Trusted Technologies We Use</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2 transition-transform hover:scale-110"><Cpu className="w-6 h-6"/> React</span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2 transition-transform hover:scale-110"><Cloud className="w-6 h-6"/> AWS</span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2 transition-transform hover:scale-110"><MonitorSmartphone className="w-6 h-6"/> Flutter</span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2 transition-transform hover:scale-110"><Shield className="w-6 h-6"/> CyberSec</span>
            <span className="text-xl font-bold text-gray-500 flex items-center gap-2 transition-transform hover:scale-110"><Code className="w-6 h-6"/> Python</span>
          </div>
        </div>
      </div>

      {/* Interactive Feature Blocks */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-1000">
              <h2 className="text-4xl md:text-5xl font-extrabold text-brand-green leading-tight">
                Empowering Businesses with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-green-400">Next-Gen</span> Tech
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don't just build software; we build the future. Our approach combines rapid development with enterprise-grade security to ensure your business stays ahead of the curve.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: MousePointer2, title: "Intuitive Design", desc: "User-first experiences" },
                  { icon: Rocket, title: "Fast Scaling", desc: "Growth-ready systems" },
                  { icon: Shield, title: "Top Security", desc: "Hardened infrastructure" },
                  { icon: BarChart3, title: "Data Insights", desc: "Business intelligence" }
                ].map((item, i) => (
                  <div key={i} className="group flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-brand-green/30 transition-all duration-300">
                    <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-green transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-gray-900 group-hover:text-brand-green transition-colors">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-in slide-in-from-right duration-1000">
              <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <img 
                src="/images/hero_home.jpg" 
                alt="Technology team" 
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover object-top"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce duration-[6s]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">99.9%</p>
                    <p className="text-sm text-gray-500">Uptime Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Clients Served", value: "500+", icon: Users },
              { label: "Projects Delivered", value: "1.2k", icon: Briefcase },
              { label: "Team Members", value: "50+", icon: Award },
              { label: "Countries", value: "12", icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="space-y-4 group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:scale-110 group-hover:bg-white/20">
                  <stat.icon className="w-8 h-8 text-brand-green" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-white">{stat.value}</div>
                <div className="text-green-100 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-green mb-6">Trusted by Local Leaders</h2>
          <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-12"></div>
          
          <div className="max-w-4xl mx-auto mb-20 relative">
            <div className="absolute -top-10 -left-10 text-[10rem] font-serif text-brand-green/10 leading-none select-none">"</div>
            <div className="bg-gray-950 text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative z-10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-10 relative">
                "iTech Network Africa didn't just build our app; they engineered a new student engagement platform. The Starz Mobile App is flawless, and the support is world-class."
              </p>
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-xl font-bold uppercase tracking-widest text-brand-green">Mr. Nehbor C. Poquee</h4>
                <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Dean of Technology, Starz University</p>
              </div>
            </div>
          </div>

          <p className="text-gray-400 font-mono text-sm tracking-[0.3em] uppercase mb-12">Building the Tech Ecosystem in Africa</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/Starz%20Logo.webp" alt="Starz" className="h-16 w-auto" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/dmg%20Logo.jpeg" alt="DMC" className="h-16 w-auto" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/proaffordable-cleaning-logo.png" alt="Pro-Clean" className="h-16 w-auto" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/new%20liberia%20logo.jpeg" alt="New Liberia" className="h-16 w-auto" />
            <img src="https://cddsrxtfashivrcuirgf.supabase.co/storage/v1/object/public/images/ai%20tech%20logo.webp" alt="A1 Tech" className="h-16 w-auto" />
          </div>
        </div>
      </section>

      {/* Engineering Core (From Innova) */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4">// Expert Stack</p>
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter">Our Engineering Core</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">The tech stack driving innovation in Africa's digital ecosystem.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                icon: Layers,
                items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Flutter"]
              },
              {
                title: "Backend",
                icon: Database,
                items: ["Node.js", "Python", "Go", "Laravel", "PostgreSQL", "MongoDB"]
              },
              {
                title: "DevOps & Cloud",
                icon: Cloud,
                items: ["AWS", "Docker", "Kubernetes", "Firebase", "Supabase", "CI/CD"]
              }
            ].map((col, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] hover:border-brand-green/50 transition-all duration-500 group">
                <div className="w-16 h-16 bg-brand-green/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <col.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-brand-green"></span> {col.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {col.items.map((item, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Roadmap (From Innova) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4">// Development Lifecycle</p>
            <h2 className="text-4xl md:text-6xl font-black text-brand-green uppercase italic tracking-tighter">Our Proven Roadmap</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { id: "01", title: "Strategic Discovery", desc: "Detailed interviews and market research." },
              { id: "02", title: "Visual Blueprint", desc: "Wireframing and high-fidelity mockups." },
              { id: "03", title: "Agile Build", desc: "Iterative development and CI/CD." },
              { id: "04", title: "Optimization", desc: "Performance tuning and SEO audits." },
              { id: "05", title: "Market Launch", desc: "Go-live strategy and final QA." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="p-8 bg-gray-50 rounded-[2rem] h-full border border-transparent hover:border-brand-green transition-all duration-500 hover:shadow-2xl hover:shadow-brand-green/10">
                  <div className="text-5xl font-black text-brand-green/10 group-hover:text-brand-green/20 transition-colors mb-6">{step.id}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Digital Assets (From Innova) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group overflow-hidden rounded-[3rem]">
              <img 
                src="/images/feature_1.jpg" 
                alt="Engineering" 
                className="w-full h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-brand-green/20 mix-blend-overlay"></div>
            </div>
            <div className="space-y-10">
              <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase">// Scale</p>
              <h2 className="text-4xl md:text-6xl font-black text-brand-green leading-[0.9] uppercase italic tracking-tighter">Enterprise <br />Digital Assets</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">African Web Scale</h4>
                    <p className="text-gray-600 leading-relaxed">Developing high-availability systems specifically optimized for regional connectivity fluctuations.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center shrink-0">
                    <PieChart className="w-6 h-6 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">UX Engineering</h4>
                    <p className="text-gray-600 leading-relaxed">Designing intuitive interfaces that reduce friction and drive user retention for businesses.</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-brand-green text-white rounded-full px-10 h-16 font-black uppercase italic tracking-widest text-sm hover:scale-105 transition-transform" asChild>
                <Link href="/contact">
                  Initialize Transformation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-green text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Services</h2>
            <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-green-50 max-w-2xl mx-auto leading-relaxed">
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
              <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group cursor-pointer animate-in fade-in slide-in-from-bottom-10" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">{service.title}</h3>
                <p className="text-green-100 mb-8 leading-relaxed line-clamp-2">{service.desc}</p>
                <Link href="/services" className="inline-flex items-center text-brand-green font-bold hover:gap-4 transition-all group-hover:text-white">
                  Learn more <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-green mb-6">Success Stories</h2>
            <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                text: "iTech Network transformed our digital infrastructure. Their team is professional, knowledgeable, and truly cares about our success.",
                author: "John Doe",
                role: "CEO, FinTech Solutions",
                image: "/images/avatar_man_1.jpg"
              },
              {
                text: "The corporate training program was a game-changer for our engineering team. Productivity has increased by 40% in just six months.",
                author: "Jane Smith",
                role: "CTO, AgriTech Corp",
                image: "/images/avatar_woman_1.jpg"
              },
              {
                text: "Their cybersecurity audit saved us from a potential breach. I highly recommend their services to any serious business enterprise.",
                author: "Robert Brown",
                role: "Director, HealthPlus",
                image: "/images/avatar_man_2.jpg"
              }
            ].map((testimonial, i) => (
              <Card key={i} className="border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 bg-white rounded-[2.5rem] p-4 transition-all duration-500 group animate-in fade-in slide-in-from-bottom-12" style={{ animationDelay: `${i * 150}ms` }}>
                <CardContent className="p-8 relative">
                  <div className="absolute top-8 right-8 text-brand-green/10 text-6xl font-serif group-hover:text-brand-green/20 transition-colors">"</div>
                  <div className="flex gap-1 text-brand-green mb-6">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" style={{ transitionDelay: `${s * 50}ms` }} />)}
                  </div>
                  <p className="text-gray-600 mb-8 italic text-lg leading-relaxed relative z-10">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-14 h-14 border-2 border-brand-green/20 group-hover:border-brand-green transition-colors">
                      <AvatarImage src={testimonial.image} className="object-cover" />
                      <AvatarFallback className="bg-brand-green text-white font-bold">{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-brand-green transition-colors">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Info Blocks */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-brand-green mb-6">Direct Answers</h2>
              <div className="w-24 h-1.5 bg-brand-green mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { q: "How fast can you start?", a: "Most projects can kick off within 1-2 weeks after the initial consultation." },
                { q: "Do you offer remote work?", a: "Yes, our team is distributed across Africa and highly experienced in remote collaboration." },
                { q: "Is training certified?", a: "Absolutely. All our training programs come with industry-recognized certifications." },
                { q: "What's your support model?", a: "We offer 24/7 dedicated support for all our enterprise-tier clients." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-brand-green" />
                    {faq.q}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights / Blog Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-green mb-6">Latest Insights</h2>
              <div className="w-24 h-1.5 bg-brand-green rounded-full"></div>
            </div>
            <Link href="#">
              <Button variant="outline" className="rounded-full px-8 py-6 text-brand-green border-brand-green hover:bg-brand-green hover:text-white transition-all font-bold">
                View All Articles
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
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
                 <div className="rounded-[2.5rem] overflow-hidden mb-6 relative h-64 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black text-brand-green uppercase tracking-widest shadow-xl">
                     {post.category}
                   </div>
                 </div>
                 <p className="text-sm font-bold text-gray-400 mb-3">{post.date}</p>
                 <h3 className="text-2xl font-black text-gray-900 group-hover:text-brand-green transition-colors leading-tight">{post.title}</h3>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to Transform?</h2>
          <p className="text-green-50 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of satisfied clients who have elevated their operations with iTech Network Africa. Let's build your future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-brand-green hover:bg-gray-100 font-black px-12 h-16 rounded-full text-xl shadow-2xl transition-transform hover:scale-110">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-black px-12 h-16 rounded-full text-xl shadow-xl transition-transform hover:scale-110">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
