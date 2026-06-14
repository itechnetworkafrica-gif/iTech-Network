import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function Industries() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Industries We Serve</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">
          Deploying world-class technology infrastructure across diverse global sectors.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {["Finance & Banking", "Healthcare & Telemedicine", "Government & Public Sector", "Retail & E-Commerce", "Logistics & Supply Chain", "Education & EdTech"].map((ind, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-brand-green transition-colors">
              <h3 className="text-xl font-bold mb-2">{ind}</h3>
              <p className="text-gray-500 text-sm">Specialized technology deployment and security compliance for {ind.toLowerCase()}.</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}