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
      image: "/images/profile_1.jpg",
      bio: "Former Tech Lead at Google with 15 years of experience in scaling digital platforms.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "James Kerkulah",
      role: "CTO & Co-Founder",
      image: "/images/profile_2.jpg",
      bio: "Cloud infrastructure expert and open-source contributor passionate about African tech.",
      socials: { linkedin: "#", github: "#", twitter: "#" }
    },
    {
      
      name: "Amara Diallo",
      role: "Head of Design",
      image: "/images/profile_3.jpg",
      bio: "Award-winning product designer focused on creating accessible and intuitive user experiences.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/images/profile_4.jpg",
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-200 text-gray-600 text-sm font-semibold uppercase tracking-wider mb-4">
              Team Members
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-green mb-4">Meet Our Skilled and Passionate Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {team.map((member, i) => (
              <div key={i} className="group relative">
                <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl aspect-[4/5] relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 text-center z-10">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-gray-200 text-sm font-medium tracking-wider uppercase mb-4">{member.role}</p>
                    
                    {/* Socials - Hidden by default, shown on group hover or active */}
                    <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="w-10 h-10 rounded-full bg-white text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                          <Linkedin className="w-5 h-5" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="w-10 h-10 rounded-full bg-white text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} className="w-10 h-10 rounded-full bg-white text-brand-green flex items-center justify-center hover:bg-brand-green hover:text-white transition-colors">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Plus Button visual cue */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-green shadow-lg group-hover:scale-0 transition-transform duration-300">
                    <span className="text-2xl leading-none mb-1">+</span>
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
