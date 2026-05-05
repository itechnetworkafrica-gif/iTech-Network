import { Button } from "@/components/ui/button";
import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { CheckCircle, Users, Target, Lightbulb, ArrowRight, Linkedin, Twitter, Github, Rocket, Shield, Cpu } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const team = [
    {
      name: "Wilmot Kerkulah",
      role: "Chief Executive Officer",
      image: "/images/team_ceo.jpg",
      bio: "Former Tech Lead at Google with 15 years of experience in scaling digital platforms.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "James Kerkulah",
      role: "CTO & Co-Founder",
      image: "/images/team_cto.jpg",
      bio: "Cloud infrastructure expert and open-source contributor passionate about African tech.",
      socials: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      
      name: "Amara Diallo",
      role: "Head of Design",
      image: "/images/team_lead.jpg",
      bio: "Award-winning product designer focused on creating accessible and intuitive user experiences.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/images/team_dev.jpg",
      bio: "Full-stack wizard specializing in React and Node.js enterprise applications.",
      socials: { linkedin: "#", github: "#" }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      {/* Header Banner */}
      <section className="pt-32 pb-20 bg-brand-green relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-brand-green opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About iTech Network</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto">
            We are a premier technology institution dedicated to bridging the digital divide through education, innovation, and enterprise solutions.
          </p>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 -mt-10 relative z-20">
        {/* ... existing code ... */}
      </section>

      {/* Modern Impact Grid - NEW BLOCK */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-green/5 via-transparent to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-brand-green font-mono text-sm tracking-[0.3em] uppercase">// Our Impact</p>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">Redefining <br />Tech Standards</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Since our inception, we've focused on creating measurable change in the African tech landscape. We don't just teach code; we build careers and scale businesses.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-brand-green tracking-tighter">95%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Employment Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-brand-green tracking-tighter">200+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-gray-500">Global Partners</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-brand-green/50 transition-all group">
                  <Rocket className="w-10 h-10 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-2">Fast Growth</h4>
                  <p className="text-gray-500 text-sm">Rapidly expanding into new markets across West Africa.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-brand-green/50 transition-all group">
                  <Shield className="w-10 h-10 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-2">Secure Tech</h4>
                  <p className="text-gray-500 text-sm">Industry-leading security protocols in every project.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-brand-green/50 transition-all group">
                  <Cpu className="w-10 h-10 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-2">Edge Computing</h4>
                  <p className="text-gray-500 text-sm">Optimizing for regional connectivity challenges.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 hover:border-brand-green/50 transition-all group">
                  <Users className="w-10 h-10 text-brand-green mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-xl mb-2">Community</h4>
                  <p className="text-gray-500 text-sm">Building a vibrant network of African technologists.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
               <div className="relative">
                 <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-green/10 rounded-full z-0"></div>
                 <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-green/10 rounded-full z-0"></div>
                 <img 
                   src="/images/hero_about.jpg" 
                   alt="Team collaboration" 
                   className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                 />
               </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-green mb-6">Driving Innovation Since 2020</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded by a group of passionate technologists, iTech Network Africa began with a simple goal: to provide high-quality coding education. Today, we have evolved into a full-service technology institution offering enterprise software development, consultancy, and advanced training programs.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that the future belongs to those who build it. That's why we partner with businesses to build robust digital infrastructure and with individuals to build career-defining skills.
              </p>
              <Button className="bg-brand-green text-white hover:bg-green-700 rounded-full px-8">
                Join Our Team <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-400/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white border border-gray-200 text-brand-green text-sm font-bold uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                Leadership & Experts
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
                The Minds Behind <br />Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-green-500 italic pr-2">Innovations</span>
              </h2>
            </div>
            <div className="max-w-md text-gray-600 text-lg leading-relaxed">
              Our team consists of industry veterans and brilliant minds dedicated to pushing the boundaries of what's possible in African tech.
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {team.map((member, i) => (
              <div key={i} className="group relative animate-in fade-in slide-in-from-bottom-10" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-gray-200/50 aspect-[3/4] relative border border-white/50 group-hover:shadow-2xl group-hover:shadow-brand-green/20 transition-all duration-700">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-left z-10">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <p className="text-brand-green font-mono text-xs font-bold tracking-[0.2em] uppercase mb-2 drop-shadow-md">{member.role}</p>
                      <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg leading-tight">{member.name}</h3>
                      
                      {/* Bio - Appears on hover */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                        {member.bio}
                      </p>
                      
                      {/* Socials & Interactive Line */}
                      <div className="flex items-center justify-between opacity-100 pt-4 border-t border-white/20">
                        <div className="flex gap-3">
                          {member.socials.linkedin && (
                            <a href={member.socials.linkedin} className="text-white hover:text-brand-green transition-colors">
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                          {member.socials.twitter && (
                            <a href={member.socials.twitter} className="text-white hover:text-brand-green transition-colors">
                              <Twitter className="w-5 h-5" />
                            </a>
                          )}
                          {member.socials.github && (
                            <a href={member.socials.github} className="text-white hover:text-brand-green transition-colors">
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                        <ArrowRight className="w-5 h-5 text-brand-green transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-300 opacity-0 group-hover:opacity-100" />
                      </div>
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
