import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send, Bot, User, Minimize2, Briefcase, Code, HeadphonesIcon, ArrowRight, UserPlus, HelpCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Message = {
  id: string;
  type: "bot" | "user" | "system";
  text: string;
  options?: { label: string; action: string }[];
  agentName?: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAgentJoined, setIsAgentJoined] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: "1", 
      type: "bot", 
      text: "Hello! Welcome to iTech Network Africa. I'm your AI assistant. How can we help you scale your business today?",
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
  }, [messages, isOpen, isTyping]);

  const handleSend = (text: string = input, action?: string) => {
    if (!text.trim()) return;

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
          text: "I understand. Please send an email to itechnetworkafrica@gmail.com with those details and I'll personally make sure our team prioritizes it.",
          agentName: "Human Support"
        };
        setMessages(prev => [...prev, botMsg]);
      }, 1500);
      return;
    }

    // Simulate AI bot response based on action or open text
    setTimeout(() => {
      setIsTyping(false);
      let responseText = "";
      let options: { label: string; action: string }[] | undefined = undefined;
      let triggerAgentJoin = false;
      
      const lowerText = text.toLowerCase();
      
      if (action === "software" || lowerText.includes("software") || lowerText.includes("app") || lowerText.includes("web")) {
        responseText = "We build scalable web and mobile applications using modern tech stacks like React, Next.js, and Flutter. Are you looking to build a new product from scratch or upgrade an existing one?";
        options = [
          { label: "New Product", action: "general_inquiry" },
          { label: "Upgrade Existing", action: "general_inquiry" },
          { label: "Speak to an Expert", action: "expert" }
        ];
      } else if (action === "consulting" || lowerText.includes("consulting") || lowerText.includes("advice")) {
        responseText = "Our IT Consultancy team helps optimize digital infrastructure. We offer system audits, cybersecurity setups, and digital transformation strategies. Which area interests you most?";
        options = [
          { label: "System Audit", action: "general_inquiry" },
          { label: "Cybersecurity", action: "general_inquiry" },
          { label: "Speak to an Expert", action: "expert" }
        ];
      } else if (action === "pricing" || lowerText.includes("price") || lowerText.includes("cost") || lowerText.includes("package")) {
        responseText = "We have packages starting from $150 for Starter websites, up to $1,000 for Corporate solutions. You can view full details on our Pricing page. Need a custom quote?";
        options = [
          { label: "View Pricing Page", action: "nav_pricing" },
          { label: "Get Custom Quote", action: "expert" }
        ];
      } else if (action === "expert" || lowerText.includes("human") || lowerText.includes("person") || lowerText.includes("expert") || lowerText.includes("support")) {
        responseText = "I'm transferring you to our expert team. You can also reach us directly anytime at itechnetworkafrica@gmail.com.";
        triggerAgentJoin = true;
      } else {
        responseText = "I can help with that! At iTech Network Africa, we specialize in building digital solutions and providing tech training. Would you like to know more about our specific services or speak directly with a team member?";
        options = [
          { label: "Our Services", action: "software" },
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
            { id: Date.now().toString(), type: "system", text: "iTech Expert has joined the chat." },
            { 
              id: (Date.now() + 1).toString(), 
              type: "bot", 
              text: "Hi there! I'm an iTech Expert. How can I assist you with your project today? (You can also email me at itechnetworkafrica@gmail.com)",
              agentName: "Human Support"
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
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none absolute"
        }`}
      >
        <Card className="w-[calc(100vw-2rem)] sm:w-[380px] shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[600px] max-h-[calc(100vh-8rem)] rounded-2xl bg-white">
          {/* Header styled like modern AI chatbots (e.g., GoDaddy/Intercom) */}
          <CardHeader className="bg-white border-b border-gray-100 p-4 flex flex-row items-center justify-between space-y-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center relative shadow-sm">
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                {isAgentJoined ? <HeadphonesIcon className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
              </div>
              <div>
                <CardTitle className="text-base font-bold text-gray-900">
                  {isAgentJoined ? "iTech Support" : "iTech AI Assistant"}
                </CardTitle>
                <p className="text-gray-500 text-xs font-medium flex items-center gap-1">
                  {isAgentJoined ? "Typically replies instantly" : "Powered by AI"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 bg-gray-50/50 flex flex-col gap-4">
            <div className="text-center text-[11px] text-gray-400 font-medium uppercase tracking-wider my-2">
              Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            
            {messages.map((msg) => {
              if (msg.type === "system") {
                return (
                  <div key={msg.id} className="flex items-center justify-center my-2 gap-2">
                    <div className="h-[1px] w-12 bg-gray-200"></div>
                    <span className="text-xs text-gray-500 font-medium flex items-center gap-1"><UserPlus className="w-3 h-3"/> {msg.text}</span>
                    <div className="h-[1px] w-12 bg-gray-200"></div>
                  </div>
                );
              }

              return (
                <div 
                  key={msg.id} 
                  className={`flex gap-2 max-w-[85%] ${msg.type === "user" ? "self-end flex-row-reverse" : "self-start"}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-sm ${msg.type === "bot" ? "bg-black text-white" : "bg-gray-200 text-gray-600"}`}>
                    {msg.type === "bot" ? (msg.agentName ? <HeadphonesIcon className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />) : <User className="w-3.5 h-3.5" />}
                  </div>
                  <div className="flex flex-col gap-1">
                    {msg.type === "bot" && (
                      <span className="text-[11px] text-gray-500 font-medium ml-1">
                        {msg.agentName || "AI Assistant"}
                      </span>
                    )}
                    <div className={`p-3 rounded-2xl text-[14px] shadow-sm leading-relaxed ${
                      msg.type === "user" 
                        ? "bg-black text-white rounded-tr-sm" 
                        : "bg-white text-gray-800 border border-gray-100 rounded-tl-sm"
                    }`}>
                      {msg.text}
                    </div>
                    
                    {/* Bot Options */}
                    {msg.options && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {msg.options.map((opt, i) => (
                          <button 
                            key={i}
                            onClick={() => handleSend(opt.label, opt.action)}
                            className="bg-white border border-gray-200 text-gray-700 text-[13px] px-3 py-1.5 rounded-full hover:border-black hover:text-black transition-all shadow-sm font-medium"
                          >
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
              <div className="flex gap-2 max-w-[85%] self-start">
                <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  {isAgentJoined ? <HeadphonesIcon className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>
                <div className="p-3 bg-white border border-gray-100 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5 h-10 mt-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="p-3 bg-white border-t border-gray-100">
            <form 
              className="flex w-full items-center gap-2"
              onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            >
              <div className="relative flex-1">
                <Input 
                  placeholder={isAgentJoined ? "Reply to support..." : "Ask me anything..."} 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full bg-gray-50 border-gray-200 focus-visible:ring-black rounded-xl pr-10 h-11 text-[14px]"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
              <Button type="submit" size="icon" disabled={!input.trim()} className="bg-black hover:bg-gray-800 text-white rounded-xl shrink-0 h-11 w-11 transition-transform active:scale-95 disabled:opacity-50 disabled:hover:bg-black">
                <Send className="w-4 h-4 ml-0.5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>

      {/* Toggle Button - Modern floating style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen 
            ? "w-12 h-12 rounded-full bg-white text-gray-600 border border-gray-200" 
            : "w-14 h-14 rounded-full bg-black text-white hover:bg-gray-800"
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}