import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Case Studies</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">
          Deep dives into how we solved complex technological challenges for global organizations.
        </p>
        <div className="space-y-8 max-w-4xl mx-auto text-left">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 h-40 bg-gray-100 rounded-xl"></div>
              <div className="flex-1">
                <span className="text-brand-green font-bold text-xs uppercase tracking-widest">Financial Sector</span>
                <h3 className="text-2xl font-bold mb-3 mt-2">Digital Transformation for Global Bank</h3>
                <p className="text-gray-500">How we modernized legacy infrastructure resulting in a 40% reduction in operational latency.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}