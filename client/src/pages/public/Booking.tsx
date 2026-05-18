import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    { id: "consultation", name: "IT Consultation", duration: "1 Hour", price: "$50" },
    { id: "assessment", name: "Business Assessment", duration: "2 Hours", price: "$100" },
    { id: "support", name: "Technical Support", duration: "1-3 Hours", price: "Varies" },
    { id: "training", name: "Team Training", duration: "Half Day", price: "$300" }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <PublicNavbar />
      
      <div className="bg-gray-950 pt-32 pb-16 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Smart <span className="text-brand-green">Booking</span></h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Schedule your sessions, support, and consultations seamlessly.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex-1 max-w-4xl">
        <Card className="rounded-3xl shadow-xl border-0 overflow-hidden">
          <div className="flex border-b border-gray-100">
            {[1, 2, 3].map(i => (
              <div key={i} className={`flex-1 text-center py-4 text-sm font-bold ${step >= i ? 'bg-brand-green/10 text-brand-green border-b-2 border-brand-green' : 'text-gray-400'}`}>
                Step {i}
              </div>
            ))}
          </div>

          <CardContent className="p-8 md:p-12">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map(service => (
                    <div 
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedService === service.id ? 'border-brand-green bg-brand-green/5' : 'border-gray-100 hover:border-brand-green/50'}`}
                    >
                      <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {service.duration}</span>
                        <span className="font-semibold text-brand-green">{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-8 bg-black hover:bg-gray-800 text-white rounded-xl h-14 text-lg font-bold"
                  disabled={!selectedService}
                  onClick={() => setStep(2)}
                >
                  Continue
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
                <h2 className="text-2xl font-bold mb-6">Choose Date & Time</h2>
                {/* Mock Calendar */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center text-gray-400 flex flex-col items-center justify-center min-h-[300px]">
                    <Calendar className="w-12 h-12 mb-4 opacity-50" />
                    Interactive Calendar<br/>(Mockup Mode)
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-gray-700">Available Times</h3>
                    {["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"].map(time => (
                      <div key={time} className="p-4 rounded-xl border border-gray-100 text-center font-medium hover:bg-brand-green hover:text-white hover:border-brand-green cursor-pointer transition-colors">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <Button variant="outline" className="flex-1 rounded-xl h-14 font-bold" onClick={() => setStep(1)}>Back</Button>
                  <Button className="flex-1 bg-black hover:bg-gray-800 text-white rounded-xl h-14 text-lg font-bold" onClick={() => setStep(3)}>Continue</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-300">
                <h2 className="text-2xl font-bold mb-6">Your Details</h2>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Full Name</label>
                      <Input className="bg-gray-50 h-12 rounded-xl" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Email</label>
                      <Input className="bg-gray-50 h-12 rounded-xl" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Phone / WhatsApp</label>
                    <Input className="bg-gray-50 h-12 rounded-xl" placeholder="+231..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Additional Notes</label>
                    <Textarea className="bg-gray-50 rounded-xl" placeholder="Tell us what you want to discuss..." rows={4} />
                  </div>
                </div>
                
                <div className="flex gap-4 mt-8">
                  <Button variant="outline" className="flex-1 rounded-xl h-14 font-bold" onClick={() => setStep(2)}>Back</Button>
                  <Button className="flex-1 bg-brand-green hover:bg-green-700 text-white rounded-xl h-14 text-lg font-bold" onClick={() => alert("Booking confirmed! (Mockup)")}>
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}

          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}