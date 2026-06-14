import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function Solutions() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Gotecx Solutions</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Comprehensive, scalable enterprise solutions tailored for global transformation.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-brand-green">Enterprise Architecture</h3>
            <p className="text-gray-400">Custom software ecosystems built on robust microservices and scalable cloud infrastructures.</p>
          </div>
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-brand-green">AI & Automation</h3>
            <p className="text-gray-400">Machine learning models and intelligent workflows designed to optimize enterprise operations.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}