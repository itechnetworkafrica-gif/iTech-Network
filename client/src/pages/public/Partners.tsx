import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function Partners() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-950 text-white">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter">Global Partners</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Gotecx collaborates with industry leaders to deliver unparalleled technology ecosystems.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center">
              <span className="text-gray-600 font-bold uppercase tracking-widest">Partner {i}</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}