import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Our Portfolio</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          A showcase of enterprise systems, platforms, and digital experiences engineered by Gotecx.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden group">
              <div className="h-64 bg-gray-900 relative">
                <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-brand-green/40 transition-colors"></div>
              </div>
              <div className="p-8 text-left">
                <h3 className="text-2xl font-bold mb-2">Enterprise Project {i}</h3>
                <p className="text-gray-400">Cloud migration and custom ERP development.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}