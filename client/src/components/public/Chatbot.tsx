import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Send, Bot, User, Minimize2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Message = {
  id: string;
  type: "bot" | "user";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", type: "bot", text: "Hello! Welcome to iTech Network Africa. How can I help you today?" }
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

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), type: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        type: "bot", 
        text: "Thanks for reaching out! One of our experts will be with you shortly. You can also click 'Speak with Expert' to book a call directly." 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div 
        className={`mb-4 transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none absolute"
        }`}
      >
        <Card className="w-[350px] shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px] max-h-[80vh]">
          <CardHeader className="bg-brand-green text-white p-4 flex flex-row items-center justify-between space-y-0 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold">iTech Assistant</CardTitle>
                <p className="text-green-100 text-xs">We typically reply in minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-3 max-w-[85%] ${msg.type === "user" ? "self-end flex-row-reverse" : "self-start"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.type === "bot" ? "bg-brand-green text-white" : "bg-gray-200 text-gray-600"}`}>
                  {msg.type === "bot" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`p-3 rounded-2xl text-sm shadow-sm ${
                  msg.type === "user" 
                    ? "bg-brand-green text-white rounded-tr-sm" 
                    : "bg-white text-gray-800 border border-gray-100 rounded-tl-sm"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="p-3 bg-white border-t border-gray-100">
            <form 
              className="flex w-full items-center gap-2"
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            >
              <Input 
                placeholder="Type your message..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border-gray-200 focus-visible:ring-brand-green rounded-full px-4"
              />
              <Button type="submit" size="icon" className="bg-brand-green hover:bg-green-700 text-white rounded-full shrink-0 h-10 w-10 shadow-md">
                <Send className="w-4 h-4 ml-0.5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? "bg-white text-gray-800 border border-gray-200" : "bg-brand-green text-white hover:bg-green-700"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-7 h-7" />}
      </button>
    </div>
  );
}