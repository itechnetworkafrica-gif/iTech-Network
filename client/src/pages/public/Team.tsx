import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

export default function Team() {
  const teamMembers = [
    { name: "Kerkulah Wilmot", role: "Founder & CEO", img: "https://i.pravatar.cc/300?img=11", linkedin: "#" },
    { name: "Sarah Johnson", role: "Head of Engineering", img: "https://i.pravatar.cc/300?img=47", linkedin: "#" },
    { name: "Michael Osei", role: "Design Director", img: "https://i.pravatar.cc/300?img=12", linkedin: "#" },
    { name: "David Kamara", role: "Lead Consultant", img: "https://i.pravatar.cc/300?img=14", linkedin: "#" },
    { name: "Grace Oye", role: "Marketing Specialist", img: "https://i.pravatar.cc/300?img=20", linkedin: "#" },
    { name: "Emmanuel Mensah", role: "Security Analyst", img: "https://i.pravatar.cc/300?img=33", linkedin: "#" },
    { name: "Fatima Diallo", role: "Product Manager", img: "https://i.pravatar.cc/300?img=41", linkedin: "#" },
    { name: "Samuel Doe", role: "UX Researcher", img: "https://i.pravatar.cc/300?img=52", linkedin: "#" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-white">
      <PublicNavbar />
      
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gray-950 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green backdrop-blur-md mb-8">
            <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green mr-3"></span>
            Our People
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">The minds behind <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">the innovation</span></h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A dedicated team of experts pushing the boundaries of what's possible in the African tech ecosystem.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 relative border-t border-gray-100 flex-1">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-green-300 font-medium text-sm mb-4">{member.role}</p>
                    
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <a href={member.linkedin} className="w-8 h-8 rounded-full bg-white/20 hover:bg-brand-green flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/20 hover:bg-brand-green flex items-center justify-center text-white transition-colors backdrop-blur-sm">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
