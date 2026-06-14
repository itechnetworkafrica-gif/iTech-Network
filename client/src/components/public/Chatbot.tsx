import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send, Bot, User, Minimize2, Briefcase, Code, HeadphonesIcon, ArrowRight, UserPlus, HelpCircle, PhoneCall, Sparkles, MapPin, Mail, Clock, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

type Message = {
  id: string;
  type: "bot" | "user" | "system";
  text: string | React.ReactNode;
  options?: { label: string; action: string; icon?: React.ReactNode }[];
  agentName?: string;
};

export default function Chatbot() {
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isAgentJoined, setIsAgentJoined] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const initialMessage: Message = { 
    id: "1", 
    type: "bot", 
    text: "Hello! Welcome to the Gotecx Global Technology Ecosystem (powered by iTech Network Africa). I'm your enterprise AI assistant. How can we help you scale your business today?",
    options: [
      { label: "Enterprise Software", action: "software", icon: <Code className="w-3.5 h-3.5" /> },
      { label: "Gotecx AI Solutions", action: "ai", icon: <Sparkles className="w-3.5 h-3.5" /> },
      { label: "Enterprise Licensing", action: "pricing", icon: <Briefcase className="w-3.5 h-3.5" /> },
      { label: "Global Contact Info", action: "contact_info", icon: <MapPin className="w-3.5 h-3.5" /> },
      { label: "Talk to an Expert", action: "expert", icon: <PhoneCall className="w-3.5 h-3.5" /> }
    ]
  };

  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (text: string = input, action?: string) => {
    if (!text.trim()) return;

    // Handle quick navigation actions immediately without adding a user message
    if (action === "nav_pricing") {
      setMessages(prev => [...prev, { id: Date.now().toString(), type: "bot", text: "Taking you to our Enterprise Licensing page..." }]);
      setTimeout(() => setLocation("/pricing"), 800);
      return;
    }
    if (action === "nav_services") {
      setMessages(prev => [...prev, { id: Date.now().toString(), type: "bot", text: "Taking you to our Enterprise Services page..." }]);
      setTimeout(() => setLocation("/services"), 800);
      return;
    }
    if (action === "nav_contact") {
      setMessages(prev => [...prev, { id: Date.now().toString(), type: "bot", text: "Taking you to our Contact page..." }]);
      setTimeout(() => setLocation("/contact"), 800);
      return;
    }

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), type: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // If human agent has joined, simulate human typing and responding
    if (isAgentJoined) {
      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = { 
          id: (Date.now() + 1).toString(), 
          type: "bot", 
          text: "I understand. Please send an email to enterprise@gotecx.global with those details and our global engineering team will get started on it right away. Is there anything else you need help with?",
          agentName: "Gotecx Enterprise Support"
        };
        setMessages(prev => [...prev, botMsg]);
      }, 1500);
      return;
    }

    // Simulate AI bot response based on action or open text
    setTimeout(() => {
      setIsTyping(false);
      let responseText: string | React.ReactNode = "";
      let options: { label: string; action: string; icon?: React.ReactNode }[] | undefined = undefined;
      let triggerAgentJoin = false;
      
      const lowerText = text.toLowerCase();
      
      // Comprehensive intent matching
      if (action === "software" || lowerText.includes("software") || lowerText.includes("app") || lowerText.includes("web") || lowerText.includes("development") || lowerText.includes("build") || lowerText.includes("create")) {
        responseText = "We engineer high-performance, enterprise-grade software applications tailored to your operational needs using robust microservices architectures. What are you looking to build?";
        options = [
          { label: "Custom ERP & CRM", action: "general_inquiry" },
          { label: "Cloud Migration", action: "general_inquiry" },
          { label: "Legacy System Modernization", action: "general_inquiry" },
          { label: "Speak to an Expert", action: "expert" }
        ];
      } else if (action === "ai" || lowerText.includes("ai") || lowerText.includes("machine learning") || lowerText.includes("automation") || lowerText.includes("bot")) {
        responseText = "Gotecx AI builds predictive models, natural language processing tools, and intelligent automation systems that learn from your data to drive smarter business decisions.";
        options = [
          { label: "View AI Solutions", action: "nav_services" },
          { label: "Speak to an Expert", action: "expert" }
        ];
      } else if (action === "design" || lowerText.includes("design") || lowerText.includes("branding") || lowerText.includes("ui")) {
        responseText = "Our world-class design team creates enterprise-grade interfaces, complete corporate branding, and cohesive digital ecosystems.";
        options = [
          { label: "Start a Design Project", action: "expert" },
          { label: "View Our Services", action: "nav_services" }
        ];
      } else if (action === "consulting" || lowerText.includes("consulting") || lowerText.includes("advice") || lowerText.includes("it support") || lowerText.includes("cybersecurity") || lowerText.includes("audit")) {
        responseText = "Our enterprise consultants navigate the complex transition to digital. We provide zero-trust cybersecurity, system architecture, and strategic technology advisory.";
        options = [
          { label: "Cybersecurity Solutions", action: "general_inquiry" },
          { label: "Digital Transformation", action: "general_inquiry" },
          { label: "Speak to an Expert", action: "expert" }
        ];
      } else if (action === "pricing" || lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("package") || lowerText.includes("how much") || lowerText.includes("fee") || lowerText.includes("licensing")) {
        responseText = (
          <div className="space-y-3">
            <p className="font-medium text-gray-900">We offer transparent enterprise licensing:</p>
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex justify-between items-center"><span className="font-bold uppercase">Essential</span> <span>$2,500/mo</span></div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-brand-green flex justify-between items-center"><span className="font-bold uppercase">Enterprise</span> <span>$7,500/mo</span></div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 flex justify-between items-center"><span className="font-bold uppercase">Global Scale</span> <span>Custom</span></div>
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-1"><CheckCircle className="w-3 h-3 text-brand-green"/> All tiers include enterprise-grade SLAs.</p>
          </div>
        );
        options = [
          { label: "View Full Licensing Details", action: "nav_pricing" },
          { label: "Request Custom Proposal", action: "expert" }
        ];
      } else if (action === "contact_info" || lowerText.includes("location") || lowerText.includes("where") || lowerText.includes("address") || lowerText.includes("contact") || lowerText.includes("phone") || lowerText.includes("email") || lowerText.includes("number")) {
        responseText = (
          <div className="space-y-3">
            <p className="font-medium text-gray-900">Here's how to reach our global team:</p>
            <div className="space-y-2 text-[13px]">
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-green"/> <span>HQ: Monrovia, Liberia</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-green"/> <a href="mailto:enterprise@gotecx.global" className="text-brand-green hover:underline">enterprise@gotecx.global</a></div>
              <div className="flex items-center gap-2"><PhoneCall className="w-4 h-4 text-brand-green"/> <span>+231 555 770 641</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-brand-green"/> <span>Global Support: 24/7 SLAs Available</span></div>
            </div>
          </div>
        );
        options = [
          { label: "Go to Contact Page", action: "nav_contact" },
          { label: "Speak to an Expert", action: "expert" }
        ];
      } else if (lowerText.includes("about") || lowerText.includes("who are you") || lowerText.includes("what do you do") || lowerText.includes("company")) {
        responseText = "iTech Network Africa established the foundation. Gotecx expands the vision. Together, we are building a world-class technology ecosystem that drives enterprise growth, intelligent automation, and borderless innovation.";
        options = [
          { label: "Explore Solutions", action: "nav_services" },
          { label: "View Enterprise Licensing", action: "nav_pricing" }
        ];
      } else if (lowerText.includes("hello") || lowerText.includes("hi") || lowerText.includes("hey") || lowerText.includes("greetings") || lowerText.includes("morning") || lowerText.includes("afternoon")) {
        responseText = "Hello again! How can I assist you with your enterprise digital transformation today?";
        options = initialMessage.options;
      } else if (lowerText.includes("thank") || lowerText.includes("thanks") || lowerText.includes("appreciate")) {
        responseText = "You're very welcome! Is there anything else I can help you with today?";
        options = [
          { label: "No, I'm good", action: "bye" },
          { label: "Yes, I need more help", action: "help" }
        ];
      } else if (action === "bye" || lowerText.includes("bye") || lowerText.includes("goodbye")) {
        responseText = "Goodbye! Have a great day. Feel free to return if you need any more assistance, or email us at enterprise@gotecx.global.";
      } else if (action === "expert" || action === "help" || lowerText.includes("human") || lowerText.includes("person") || lowerText.includes("expert") || lowerText.includes("support") || lowerText.includes("talk to someone") || lowerText.includes("agent")) {
        responseText = "I'm transferring you to our Gotecx Enterprise Experts right now. You can also reach us directly anytime at enterprise@gotecx.global.";
        triggerAgentJoin = true;
      } else {
        responseText = "I can help with that! We specialize in Enterprise Software Engineering, Cloud Architecture, Gotecx AI Solutions, and Cybersecurity. Could you provide a bit more detail about your organization's requirements?";
        options = [
          { label: "View All Solutions", action: "nav_services" },
          { label: "See Enterprise Licensing", action: "nav_pricing" },
          { label: "Speak to an Expert", action: "expert" }
        ];
      }

      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        type: "bot", 
        text: responseText,
        options
      };
      setMessages(prev => [...prev, botMsg]);

      // Simulate human joining the chat
      if (triggerAgentJoin) {
        setTimeout(() => {
          setIsAgentJoined(true);
          setMessages(prev => [
            ...prev, 
            { id: Date.now().toString(), type: "system", text: "Gotecx Enterprise Expert has joined the chat." },
            { 
              id: (Date.now() + 1).toString(), 
              type: "bot", 
              text: "Hi there! I'm an Enterprise Solutions Expert. How can I assist you with your project today? (You can also email me at enterprise@gotecx.global)",
              agentName: "Gotecx Enterprise Support"
            }
          ]);
        }, 1500);
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      <div 
        className={`mb-4 transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 pointer-events-none absolute translate-y-4"
        }`}
      >
        <Card className="w-[calc(100vw-2rem)] sm:w-[400px] shadow-2xl border border-gray-200/60 overflow-hidden flex flex-col h-[650px] max-h-[calc(100vh-8rem)] rounded-3xl bg-white">
          {/* Header styled like premium AI chatbots (e.g., GoDaddy/Intercom) */}
          <CardHeader className="bg-gradient-to-b from-gray-50 to-white border-b border-gray-100 p-5 flex flex-row items-center justify-between space-y-0 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center relative shadow-md">
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white shadow-sm"></div>
                {isAgentJoined ? <HeadphonesIcon className="w-6 h-6 text-white" /> : <Bot className="w-6 h-6 text-white" />}
              </div>
              <div>
                <CardTitle className="text-[17px] font-bold text-gray-900 tracking-tight">
                  {isAgentJoined ? "iTech Support" : "iTech AI Assistant"}
                </CardTitle>
                <p className="text-gray-500 text-[13px] font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {isAgentJoined ? "Typically replies instantly" : "Online & ready to help"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 relative z-10">
              <button onClick={() => setIsOpen(false)} className="p-2.5 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900">
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-5 bg-[#fcfcfc] flex flex-col gap-5">
            <div className="text-center">
              <div className="inline-block bg-white border border-gray-100 shadow-sm text-[11px] text-gray-400 font-semibold uppercase tracking-wider py-1 px-3 rounded-full mb-2">
                Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            
            {messages.map((msg) => {
              if (msg.type === "system") {
                return (
                  <div key={msg.id} className="flex items-center justify-center my-3 gap-3 animate-in fade-in duration-500">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-200"></div>
                    <span className="text-[12px] text-gray-500 font-medium flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                      <UserPlus className="w-3.5 h-3.5 text-brand-green"/> {msg.text}
                    </span>
                    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-200"></div>
                  </div>
                );
              }

              return (
                <div 
                  key={msg.id} 
                  className={`flex gap-3 max-w-[88%] animate-in slide-in-from-bottom-2 fade-in duration-300 ${msg.type === "user" ? "self-end flex-row-reverse" : "self-start"}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-md ${msg.type === "bot" ? "bg-black text-white" : "bg-gray-100 text-gray-600 border border-gray-200"}`}>
                    {msg.type === "bot" ? (msg.agentName ? <HeadphonesIcon className="w-4 h-4" /> : <Bot className="w-4 h-4" />) : <User className="w-4 h-4" />}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {msg.type === "bot" && (
                      <span className="text-[12px] text-gray-500 font-semibold ml-1">
                        {msg.agentName || "AI Assistant"}
                      </span>
                    )}
                    <div className={`p-3.5 rounded-2xl text-[14.5px] shadow-sm leading-relaxed ${
                      msg.type === "user" 
                        ? "bg-black text-white rounded-tr-sm" 
                        : "bg-white text-gray-800 border border-gray-200/60 rounded-tl-sm"
                    }`}>
                      {msg.text}
                    </div>
                    
                    {/* Bot Quick Reply Options */}
                    {msg.options && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {msg.options.map((opt, i) => (
                          <button 
                            key={i}
                            onClick={() => handleSend(opt.label, opt.action)}
                            className="bg-white border border-gray-200 text-gray-700 text-[13px] px-3.5 py-2 rounded-xl hover:border-black hover:bg-black hover:text-white transition-all shadow-sm font-medium flex items-center gap-2"
                          >
                            {opt.icon && <span className="opacity-70">{opt.icon}</span>}
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            
            {isTyping && (
              <div className="flex gap-3 max-w-[85%] self-start animate-in fade-in">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1 shadow-md">
                  {isAgentJoined ? <HeadphonesIcon className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className="p-3.5 bg-white border border-gray-200/60 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5 h-[42px] mt-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="p-4 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
            <form 
              className="flex w-full items-center gap-2"
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            >
              <div className="relative flex-1 group">
                <Input 
                  placeholder={isAgentJoined ? "Reply to support..." : "Ask a question..."} 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-gray-50/50 border-gray-200 focus-visible:ring-black focus-visible:bg-white rounded-2xl pr-10 h-12 text-[14.5px] shadow-inner transition-colors"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                  title="Ask a question"
                >
                  <HelpCircle className="w-5 h-5" />
                </button>
              </div>
              <Button 
                type="submit" 
                size="icon" 
                disabled={!input.trim()} 
                className="bg-brand-green hover:bg-green-700 text-white rounded-2xl shrink-0 h-12 w-12 transition-transform active:scale-95 disabled:opacity-50 disabled:hover:bg-brand-green shadow-md shadow-brand-green/20"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>

      {/* Toggle Button - Premium floating style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 z-50 relative ${
          isOpen 
            ? "w-14 h-14 rounded-full bg-white text-gray-600 border border-gray-200" 
            : "w-16 h-16 rounded-full bg-brand-green text-white hover:bg-green-600 shadow-brand-green/30 shadow-lg"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : (
          <div className="relative">
            <MessageSquare className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-brand-green"></span>
          </div>
        )}
      </button>
    </div>
  );
}