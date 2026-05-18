import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { CheckCircle, Users, Target, Lightbulb, ArrowRight, Linkedin, Twitter, Github, Rocket, Shield, Cpu } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      {/* Header Banner */}
      <section className="pt-32 pb-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(55,182,38,0.2)]">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green mr-3"></span>
            Discover Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">iTech Network</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            We are a premier technology institution dedicated to bridging the digital divide through world-class engineering, innovation, and enterprise solutions.
          </p>
        </div>
      </section>

      {/* Modern Impact Grid - NEW BLOCK */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/5 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase">// Our Impact</p>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">Redefining <br />Tech Standards</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Since our inception, we've focused on creating measurable change in the African tech landscape. We don't just teach code; we build careers and scale businesses.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-brand-green tracking-tighter">95%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Employment Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-brand-green tracking-tighter">200+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Global Partners</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-brand-green/50 transition-all group">
                  <Rocket className="w-10 h-10 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-2">Fast Growth</h4>
                  <p className="text-gray-500 text-sm">Rapidly expanding into new markets across West Africa.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-brand-green/50 transition-all group">
                  <Shield className="w-10 h-10 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-2">Secure Tech</h4>
                  <p className="text-gray-500 text-sm">Industry-leading security protocols in every project.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-brand-green/50 transition-all group">
                  <Cpu className="w-10 h-10 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-2">Edge Computing</h4>
                  <p className="text-gray-500 text-sm">Optimizing for regional connectivity challenges.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-brand-green/50 transition-all group">
                  <Users className="w-10 h-10 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-2">Community</h4>
                  <p className="text-gray-500 text-sm">Building a vibrant network of African technologists.</p>
                </div>
              </div>
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
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-green/10 rounded-full z-0"></div>
                 <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-green/10 rounded-full z-0"></div>
                 <img 
                   src="/images/hero_about.jpg" 
                   alt="Team collaboration" 
                   className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                 />
               </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-green mb-6">Driving Innovation Since 2020</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded by a group of passionate technologists, iTech Network Africa began with a simple goal: to provide high-quality coding education. Today, we have evolved into a full-service technology institution offering enterprise software development, consultancy, and advanced training programs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that the future belongs to those who build it. That's why we partner with businesses to build robust digital infrastructure and with individuals to build career-defining skills.
              </p>
              <Button className="bg-brand-green text-white hover:bg-green-700 rounded-full px-8" asChild>
                <Link href="/team">
                  Meet Our Experts <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
