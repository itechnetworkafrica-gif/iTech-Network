import PublicNavbar from "@/components/public/PublicNavbar";
import Footer from "@/components/public/Footer";

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <PublicNavbar />
      <div className="flex-1 pt-40 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Frequently Asked Questions</h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-16">
          Find answers to common questions about our enterprise solutions, engineering process, and global services.
        </p>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          {[
            { q: "What industries does Gotecx serve?", a: "We provide enterprise technology solutions across a wide range of industries including Finance, Healthcare, Government, Retail, and Logistics." },
            { q: "How does the enterprise engagement process work?", a: "We begin with a strategic discovery phase, followed by system architecture design, agile engineering, and secure deployment." },
            { q: "Do you offer post-deployment support?", a: "Yes, all our enterprise packages include dedicated SLAs, 24/7 priority support, and continuous system optimization." },
            { q: "What is the relationship between iTech Network and Gotecx?", a: "iTech Network Africa is the founding parent company, while Gotecx is our flagship global technology ecosystem and enterprise platform division." }
          ].map((faq, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
              <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}