import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function News() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">News & Insights</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          The latest announcements, research, and perspectives from the Gotecx Technology Ecosystem.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden">
              <div className="h-48 bg-gray-900 relative"></div>
              <div className="p-8">
                <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">Technology</span>
                <h3 className="text-xl font-bold mb-4">The Future of Enterprise AI Integration</h3>
                <p className="text-gray-400 text-sm">Exploring how large organizations are preparing their data infrastructures for the next wave of AI capabilities.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}