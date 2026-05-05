import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Award, CheckCircle, XCircle } from "lucide-react";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function VerifyCertificate() {
  const [certId, setCertId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "valid" | "invalid">("idle");
  const [result, setResult] = useState<any>(null);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setStatus("loading");
    
    // Simulate API call for verification
    setTimeout(() => {
      if (certId.toUpperCase() === "ITN-2025-X89B") {
        setResult({
          name: "Amara Diallo",
          course: "Advanced Cloud Architecture",
          issueDate: "December 15, 2025",
          instructor: "James Kerkulah",
          status: "Verified"
        });
        setStatus("valid");
      } else {
        setStatus("invalid");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      {/* Header Banner */}
      <section className="pt-32 pb-20 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-brand-green opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20 shadow-xl">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Certificate Verification</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            Verify the authenticity of credentials issued by iTech Network Africa.
          </p>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-20 flex-1 relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleVerify} className="mb-12">
              <label htmlFor="certId" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                Enter Certificate ID
              </label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input 
                    id="certId"
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    placeholder="e.g. ITN-2025-X89B"
                    className="pl-12 h-14 text-lg border-gray-200 focus-visible:ring-brand-green rounded-xl"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={status === "loading"}
                  className="bg-brand-green hover:bg-green-700 text-white h-14 px-8 rounded-xl font-bold shadow-lg shadow-brand-green/20"
                >
                  {status === "loading" ? "Verifying..." : "Verify Credential"}
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Tip: Try using <span className="font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">ITN-2025-X89B</span> to see a valid result.
              </p>
            </form>

            {/* Results Area */}
            {status === "valid" && result && (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 animate-in slide-in-from-bottom-4 fade-in duration-500">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-green-200/50">
                  <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-white shadow-md">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-brand-green">Verified Credential</h3>
                    <p className="text-green-800">This certificate is valid and active.</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-bold text-green-800/60 uppercase tracking-wider mb-1">Recipient</p>
                    <p className="text-lg font-bold text-gray-900">{result.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800/60 uppercase tracking-wider mb-1">Program/Course</p>
                    <p className="text-lg font-bold text-gray-900">{result.course}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800/60 uppercase tracking-wider mb-1">Issue Date</p>
                    <p className="text-lg font-bold text-gray-900">{result.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800/60 uppercase tracking-wider mb-1">Lead Instructor</p>
                    <p className="text-lg font-bold text-gray-900">{result.instructor}</p>
                  </div>
                </div>
              </div>
            )}

            {status === "invalid" && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center animate-in slide-in-from-bottom-4 fade-in duration-500">
                <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-red-700 mb-2">Certificate Not Found</h3>
                <p className="text-red-900/80">
                  We couldn't find a certificate matching the ID "{certId}". Please check the ID and try again, or contact support if you believe this is an error.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}