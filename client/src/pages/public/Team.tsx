import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Linkedin, Twitter, ExternalLink, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Team() {
  const teamMembers = [
    { name: "Wilmot Kerkulah", role: "Founder & CEO", desc: "Visionary leader driving Gotecx's global expansion strategy and product ecosystem.", img: "/images/assets/founder-photo.png", fallback: "WK", linkedin: "#" },
    { name: "Foday Kabah", role: "Chief Technology Officer", desc: "Former AWS engineer leading the development of scalable enterprise architectures.", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Foday&backgroundColor=111827", fallback: "FK", linkedin: "#" },
    { name: "Alvina Dahn", role: "Finance Officer", desc: "Directing the Gotecx | iTech Network Africa finances.", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Alvina&backgroundColor=111827", fallback: "AD", linkedin: "#" },
    { name: "David Kamara", role: "Head of Enterprise Sales", desc: "Connecting global organizations with transformative technology solutions.", img: "https://api.dicebear.com/7.x/notionists/svg?seed=David&backgroundColor=111827", fallback: "DK", linkedin: "#" },
    { name: "James Kerkula", role: "Chief Marketing Officer", desc: "Building the Gotecx brand presence across international markets.", img: "https://api.dicebear.com/7.x/notionists/svg?seed=James&backgroundColor=111827", fallback: "JK", linkedin: "#" },
    { name: "Emmanuel Mensah", role: "Director of Cybersecurity", desc: "Ensuring zero-trust protocols and enterprise-grade data protection.", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Emmanuel&backgroundColor=111827", fallback: "EM", linkedin: "#" },
    { name: "Fatima Diallo", role: "Head of AI Research", desc: "Leading the innovation lab focused on machine learning and predictive analytics.", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Fatima&backgroundColor=111827", fallback: "FD", linkedin: "#" },
    { name: "Samuel Doe", role: "Lead Systems Architect", desc: "Designing high-availability cloud deployments for our largest clients.", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Samuel&backgroundColor=111827", fallback: "SD", linkedin: "#" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-gray-950 text-white">
      <PublicNavbar />
      
      <section className="relative pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-bold text-gray-300 mb-8 backdrop-blur-md uppercase tracking-widest shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-brand-green mr-3"></span>
            Enterprise Leadership
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-none">
            The Minds Building <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">The Ecosystem</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Our executive team brings together decades of experience in software engineering, global scaling, and enterprise strategy to drive the Gotecx vision forward.
          </p>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="py-24 bg-white text-gray-900 border-t border-white/10 rounded-t-[3rem] -mt-10 relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-24">
            <div>
              <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase mb-4">// Executive Vision</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-8">Guided by <br/>Excellence.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                "We are not just building software; we are architecting the digital backbone for the next generation of global enterprises. Gotecx is built on a foundation of unyielding engineering standards and a commitment to technological superiority."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/300?img=11" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 uppercase">Wilmot Kerkulah</h4>
                  <p className="text-sm text-gray-500">Founder & CEO</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 "Global Tech Standards",
                 "Agile Methodologies",
                 "Zero-Trust Security",
                 "AI-First Approach"
               ].map((val, idx) => (
                 <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col justify-center items-center text-center gap-3">
                   <CheckCircle2 className="w-8 h-8 text-brand-green" />
                   <span className="font-bold text-gray-900">{val}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">The Leadership Team</h2>
            <div className="w-24 h-1 bg-brand-green mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-[2.5rem] bg-gray-50 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                  <img src={member.img} onError={(e) => { e.currentTarget.src = member.fallback || "https://i.pravatar.cc/300"; }} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-[-10px] group-hover:translate-y-0">
                    <a href={member.linkedin} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-brand-green flex items-center justify-center text-white transition-colors border border-white/20">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-tight">{member.name}</h3>
                    <p className="text-brand-green font-bold text-xs uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>
                <div className="p-6 bg-white h-full">
                  <p className="text-gray-500 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-brand-green rounded-[3rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            
            <h2 className="text-4xl md:text-5xl font-black text-gray-950 mb-6 uppercase tracking-tighter leading-tight relative z-10">
              Join the Gotecx Mission
            </h2>
            <p className="text-gray-900/80 text-lg mb-10 max-w-2xl mx-auto font-medium relative z-10">
              We are constantly looking for exceptional engineers, strategists, and visionaries to help us build the global technology ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link href="/careers">
                <Button size="lg" className="bg-gray-950 text-white hover:bg-gray-800 rounded-2xl px-10 h-16 text-sm font-black uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-transform w-full sm:w-auto">
                  View Open Positions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
