import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Button } from "@/components/ui/button";

export default function Careers() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Join Gotecx</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">
          We are looking for visionary engineers, designers, and strategists to help us build the global technology ecosystem.
        </p>
        <div className="space-y-6 max-w-4xl mx-auto text-left">
          {[
            { title: "Senior Cloud Architect", location: "Remote / Global", type: "Full-Time" },
            { title: "Lead Frontend Engineer", location: "Monrovia, Liberia", type: "Full-Time" },
            { title: "AI/ML Researcher", location: "Remote", type: "Full-Time" }
          ].map((job, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <div className="flex gap-4 text-sm text-gray-500 font-medium">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <Button className="bg-gray-950 text-white hover:bg-brand-green rounded-full px-8">Apply Now</Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}