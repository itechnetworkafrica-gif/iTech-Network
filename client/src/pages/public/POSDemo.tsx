import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Search, BarChart3, CreditCard, ShoppingBag, Users, Zap, CheckCircle2 } from "lucide-react";

export default function POSDemo() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 overflow-x-hidden">
      <PublicNavbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-black text-white">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-brand-green/20 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block border border-brand-green/30 bg-brand-green/10 rounded-full px-4 py-1.5 text-sm font-semibold text-brand-green mb-6 backdrop-blur-sm">
                Next-Gen Point of Sale
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
                Run your business <br/>from <span className="text-brand-green">anywhere.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 font-light max-w-lg leading-relaxed">
                Cloud-based POS, inventory management, and analytics built specifically for modern African businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-brand-green hover:bg-green-700 text-white rounded-full px-8 h-14 font-bold text-lg shadow-[0_0_30px_rgba(55,182,38,0.3)]">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800 rounded-full px-8 h-14 font-bold text-lg">
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-[2rem] p-2 shadow-2xl relative z-10 transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-950 rounded-[1.5rem] overflow-hidden aspect-[4/3] relative flex flex-col">
                  {/* Mock POS UI */}
                  <div className="h-12 border-b border-gray-800 flex items-center px-4 justify-between bg-gray-900">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs font-bold text-gray-400">iTech POS Pro</div>
                  </div>
                  <div className="flex-1 flex p-4 gap-4 bg-[#0a0a0a]">
                    <div className="flex-1 grid grid-cols-3 gap-3 content-start">
                      {[1,2,3,4,5,6,7,8,9].map(i => (
                        <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-3 flex flex-col justify-between aspect-square hover:border-brand-green cursor-pointer transition-colors">
                          <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-gray-500"><ShoppingBag className="w-4 h-4"/></div>
                          <div>
                            <div className="text-xs text-gray-400">Product {i}</div>
                            <div className="text-sm font-bold text-white">${(Math.random() * 50 + 10).toFixed(2)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-1/3 bg-gray-900 border border-gray-800 rounded-xl flex flex-col overflow-hidden">
                      <div className="p-4 border-b border-gray-800 font-bold">Current Order</div>
                      <div className="flex-1 p-4 flex items-center justify-center text-gray-600 text-sm">
                        Cart empty
                      </div>
                      <div className="bg-brand-green text-white p-4 font-bold text-center cursor-pointer hover:bg-green-600">
                        Charge $0.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Everything you need to sell.</h2>
            <p className="text-gray-500 text-lg">A complete ecosystem that connects your physical store with digital operations.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MonitorSmartphone, title: "Multi-Device Sync", desc: "Use on iPad, Android tablets, or desktop. Data syncs instantly across all devices." },
              { icon: Database, title: "Inventory Management", desc: "Track stock levels, get low-stock alerts, and manage multiple locations easily." },
              { icon: BarChart3, title: "Real-time Analytics", desc: "View sales reports, best-selling items, and staff performance from your dashboard." },
              { icon: CreditCard, title: "Multiple Payments", desc: "Accept mobile money, cash, and cards. Integrated with local African payment gateways." },
              { icon: Users, title: "Staff Management", desc: "Create staff accounts, set permissions, and track individual sales performance." },
              { icon: Zap, title: "Offline Mode", desc: "Keep selling even when the internet goes down. Data syncs automatically when reconnected." }
            ].map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <f.icon className="w-6 h-6 text-gray-700 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}