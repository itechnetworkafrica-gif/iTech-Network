import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

export default function Portfolio() {
  const projects = [
    {
      client: "Global FinTech Corp",
      category: "Cloud Migration & Security",
      title: "Zero-Downtime Financial Core Migration",
      desc: "Migrated a legacy banking core to a scalable AWS multi-region infrastructure, ensuring PCI-DSS compliance and zero data loss.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      size: "large"
    },
    {
      client: "AfriRetail Network",
      category: "Gotecx POS Implementation",
      title: "Omnichannel Enterprise Retail Platform",
      desc: "Deployed our POS across 40+ locations, unifying inventory, sales, and predictive AI reordering.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      size: "small"
    },
    {
      client: "Ministry of Health",
      category: "Big Data & Infrastructure",
      title: "National Health Database Architecture",
      desc: "Engineered a secure, highly-available patient record system serving 5M+ queries daily.",
      img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop",
      size: "small"
    },
    {
      client: "Pan-African Logistics",
      category: "AI & Automation",
      title: "Predictive Supply Chain Algorithms",
      desc: "Implemented machine learning models to optimize delivery routes, reducing fuel costs by 22%.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      size: "medium"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white">
      <PublicNavbar />
      
      {/* Header */}
      <section className="pt-48 pb-20 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-green text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md">
            Selected Work
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Excellence</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of enterprise systems, massive scale platforms, and digital experiences engineered by Gotecx for global leaders.
          </p>
        </div>
      </section>

      {/* Masonry-style Grid */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((p, i) => (
              <div 
                key={i} 
                className={`group relative rounded-[2.5rem] overflow-hidden bg-gray-900 border border-white/10 ${p.size === 'large' ? 'md:col-span-2 aspect-[2/1] md:aspect-[3/1]' : 'aspect-square md:aspect-[4/3]'}`}
              >
                <div className="absolute inset-0 bg-gray-900">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
                
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-brand-green font-bold text-sm tracking-widest uppercase">{p.category}</span>
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className={`font-black uppercase tracking-tight mb-4 ${p.size === 'large' ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                    {p.title}
                  </h3>
                  <p className="text-gray-300 max-w-2xl text-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {p.desc}
                  </p>
                </div>
                <Link href="/contact" className="absolute inset-0 z-20"><span className="sr-only">View Project</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-green text-gray-950 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Your project could be next.</h2>
          <Link href="/consultation">
            <Button size="lg" className="bg-gray-950 text-white hover:bg-gray-800 rounded-full px-12 h-16 text-lg font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
              Let's Build Together
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}