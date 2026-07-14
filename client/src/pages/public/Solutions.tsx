import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Cpu, Cloud, Shield, Zap, Globe, Database, Network } from "lucide-react";
import { Link } from "wouter";

export default function Solutions() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white overflow-hidden">
      <PublicNavbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/10 rounded-full blur-[150px] -mr-40 -mt-40 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-green text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              Gotecx Enterprise
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase tracking-tighter leading-[1.1]">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">The Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-12 max-w-3xl">
              Comprehensive, scalable enterprise solutions engineered to solve complex operational challenges and accelerate global digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation">
                <Button size="lg" className="bg-brand-green hover:bg-green-600 text-white rounded-full px-10 h-16 text-lg font-bold shadow-[0_0_30px_rgba(55,182,38,0.3)] transition-all hover:scale-105">
                  Discuss Your Architecture
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-gray-950 rounded-full px-10 h-16 text-lg font-bold backdrop-blur-md">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Solutions */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Main Feature */}
            <div className="md:col-span-2 bg-gray-900 border border-white/10 rounded-[3rem] p-10 md:p-14 relative overflow-hidden group hover:border-brand-green/40 transition-colors">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                <Cloud className="w-40 h-40 text-brand-green" />
              </div>
              <div className="relative z-10 w-full md:w-2/3">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
                  <Network className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Cloud Native Ecosystems</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  We design and deploy high-availability, auto-scaling cloud architectures that serve as the backbone for modern enterprise operations. From Kubernetes orchestration to serverless compute.
                </p>
                <ul className="space-y-3 mb-10">
                  {["AWS & Azure Migration", "Microservices Architecture", "Distributed Databases"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/solutions/cloud" className="inline-flex items-center gap-2 text-brand-green font-bold uppercase tracking-wider hover:gap-4 transition-all">
                  Explore Cloud Solutions <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Side Feature 1 */}
            <div className="bg-gradient-to-br from-brand-green to-emerald-800 rounded-[3rem] p-10 relative overflow-hidden text-gray-950 group">
              <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:scale-110 transition-transform duration-700">
                <Cpu className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Artificial Intelligence</h3>
                <p className="font-medium mb-8 text-gray-900/80 leading-relaxed">
                  Predictive models and LLM integrations that automate complex decisioning and unlock deep business insights.
                </p>
                <Link href="/solutions/ai" className="inline-flex items-center gap-2 text-gray-950 font-black uppercase tracking-wider hover:gap-4 transition-all bg-white/20 px-6 py-3 rounded-full backdrop-blur-md border border-gray-950/10">
                  Discover AI <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Bottom row 1 */}
            <div className="bg-gray-900 border border-white/10 rounded-[3rem] p-10 hover:bg-gray-800 transition-colors group">
              <Shield className="w-12 h-12 text-brand-green mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">Zero-trust architecture, advanced threat protection, and strict compliance for critical data.</p>
              <Link href="/solutions/security" className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-brand-green transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bottom row 2 */}
            <div className="bg-gray-900 border border-white/10 rounded-[3rem] p-10 hover:bg-gray-800 transition-colors group">
              <Database className="w-12 h-12 text-brand-green mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Big Data Infrastructure</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">High-throughput data pipelines and analytics warehouses for massive scale operations.</p>
              <Link href="/solutions/data" className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-brand-green transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bottom row 3 */}
            <div className="bg-gray-900 border border-white/10 rounded-[3rem] p-10 hover:bg-gray-800 transition-colors group">
              <Layers className="w-12 h-12 text-brand-green mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">System Integration</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">Flawless API connections bridging legacy systems with modern cloud applications.</p>
              <Link href="/solutions/integration" className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-brand-green transition-colors">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Ready to Build <br/><span className="text-brand-green">At Scale?</span></h2>
          <p className="text-xl text-gray-400 mb-10">Deploy world-class technology infrastructure tailored for your organization's unique global challenges.</p>
          <Link href="/consultation">
            <Button size="lg" className="bg-white text-gray-950 hover:bg-gray-200 rounded-full px-12 h-16 text-lg font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all">
              Initiate Project
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}