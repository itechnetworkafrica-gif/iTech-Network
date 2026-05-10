import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send, Bot, User, Minimize2, Briefcase, Code, HeadphonesIcon, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
  options?: { label: string; action: string }[];
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: "1", 
      type: "bot", 
      text: "Hello! Welcome to iTech Network Africa. I'm your digital assistant. How can we help you scale your business today?",
      options: [
        { label: "Software Development", action: "software" },
        { label: "IT Consultancy", action: "consulting" },
        { label: "Pricing Inquiries", action: "pricing" },
        { label: "Speak to an Expert", action: "expert" }
      ]
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (text: string = input, action?: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), type: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate bot response based on action or default
    setTimeout(() => {
      let responseText = "Thanks for reaching out! One of our enterprise experts will be with you shortly.";
      
      if (action === "software") {
        responseText = "Great! We build scalable web and mobile apps. Could you provide a brief description of your project requirements?";
      } else if (action === "consulting") {
        responseText = "Our IT Consultancy team helps optimize digital infrastructure. Are you looking for a system audit, cybersecurity, or digital transformation?";
      } else if (action === "pricing") {
        responseText = "You can view all our pricing plans on our Pricing page. Need a custom enterprise quote?";
      } else if (action === "expert") {
        responseText = "I'll connect you with a senior tech consultant. Please provide your email address and we'll schedule a call.";
      }

      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        type: "bot", 
        text: responseText 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div 
        className={`mb-4 transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none absolute"
        }`}
      >
        <Card className="w-[calc(100vw-2rem)] sm:w-[400px] shadow-2xl border-0 overflow-hidden flex flex-col h-[600px] max-h-[calc(100vh-8rem)] rounded-2xl">
          <CardHeader className="bg-gray-950 text-white p-5 flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center border border-brand-green/30 relative">
                <div className="absolute top-0 right-0 w-3 h-3 bg-brand-green rounded-full border-2 border-gray-950"></div>
                <Bot className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">iTech Copilot</CardTitle>
                <p className="text-gray-400 text-xs font-medium">Enterprise Assistant • Online</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-5 bg-[#f8fafc] flex flex-col gap-5">
            <div className="text-center text-xs text-gray-400 font-medium my-2">Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 max-w-[85%] ${msg.type === "user" ? "self-end flex-row-reverse" : "self-start"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.type === "bot" ? "bg-brand-green text-white" : "bg-gray-900 text-white"}`}>
                  {msg.type === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className="flex flex-col gap-2">
                  <div className={`p-3.5 rounded-2xl text-[15px] shadow-sm leading-relaxed ${
                    msg.type === "user" 
                      ? "bg-gray-900 text-white rounded-tr-sm" 
                      : "bg-white text-gray-800 border border-gray-100 rounded-tl-sm"
                  }`}>
                    {msg.text}
                  </div>
                  
                  {/* Bot Options */}
                  {msg.options && (
                    <div className="flex flex-col gap-2 mt-1">
                      {msg.options.map((opt, i) => (
                        <button 
                          key={i}
                          onClick={() => handleSend(opt.label, opt.action)}
                          className="text-left bg-white border border-brand-green/30 text-brand-green text-sm px-4 py-2.5 rounded-xl hover:bg-brand-green hover:text-white transition-all shadow-sm flex items-center justify-between group"
                        >
                          <span className="font-medium">{opt.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="p-4 bg-white border-t border-gray-100">
            <form 
              className="flex w-full items-center gap-3"
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            >
              <Input 
                placeholder="Message iTech Copilot..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-gray-50 border-gray-200 focus-visible:ring-brand-green rounded-full px-5 h-12 text-[15px]"
              />
              <Button type="submit" size="icon" className="bg-brand-green hover:bg-green-700 text-white rounded-full shrink-0 h-12 w-12 shadow-lg shadow-brand-green/20 transition-transform hover:scale-105">
                <Send className="w-5 h-5 ml-0.5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 ${
          isOpen ? "bg-gray-900 text-white border border-gray-800 rotate-90" : "bg-brand-green text-white hover:bg-green-600 hover:shadow-brand-green/40"
        }`}
      >
        {isOpen ? <X className="w-6 h-6 -rotate-90 transition-transform duration-500" /> : <MessageSquare className="w-7 h-7" />}
      </button>
    </div>
  );
}