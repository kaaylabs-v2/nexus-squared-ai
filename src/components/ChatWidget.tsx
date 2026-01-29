import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm here to help you navigate the site. What are you looking for?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getSimulatedResponse(input),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 600);
  };

  const getSimulatedResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("pricing") || lowerQuery.includes("price") || lowerQuery.includes("cost")) {
      return "I can help with pricing! Check out our Pricing page where you'll find our Starter (free), Growth ($299/mo), and Enterprise plans. Would you like me to explain the differences?";
    }
    
    if (lowerQuery.includes("feature") || lowerQuery.includes("what") || lowerQuery.includes("how")) {
      return "Nexus² helps visitors navigate websites through an intelligent chat interface. Key features include instant answers, custom branding, and 5-minute setup. Want to see the full feature list?";
    }
    
    if (lowerQuery.includes("demo") || lowerQuery.includes("try")) {
      return "Great! You can book a live demo using the button at the top of the page, or explore the Product Showcase section to see it in action. Would you like me to guide you there?";
    }

    if (lowerQuery.includes("setup") || lowerQuery.includes("install") || lowerQuery.includes("integrate")) {
      return "Setup is super simple! Just copy a single line of code and paste it into your website's HTML. It works with WordPress, Shopify, Webflow, or any custom site. Check our 'How It Works' section for details.";
    }
    
    return "I'm here to help you find what you need! You can ask about our features, pricing, how to get started, or anything else about Nexus². What would you like to know?";
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 z-50",
          "bg-accent text-accent-foreground hover:scale-110",
          isOpen && "scale-0"
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 w-96 h-[600px] bg-card rounded-2xl shadow-2xl border border-border flex flex-col transition-all duration-300 z-50",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-accent to-cyan-400 text-primary p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h3 className="font-bold text-sm">Nexus² Assistant</h3>
              <p className="text-xs opacity-90">Online • Instant replies</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-primary/10 rounded-lg p-1.5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                  message.role === "user"
                    ? "bg-accent text-primary"
                    : "bg-muted text-text-primary"
                )}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 border-border focus:ring-accent"
            />
            <Button
              onClick={handleSend}
              size="icon"
              className="bg-accent text-primary hover:bg-accent/90 flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-text-secondary mt-2 text-center">
            Powered by Nexus²
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
