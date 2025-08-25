import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Loader2,
  RefreshCw,
  ChevronDown,
  TrendingUp,
  DollarSign,
  PiggyBank,
  CreditCard,
  BarChart3,
  Copy,
  Sparkles,
  MessageSquare,
  Minimize2,
  Maximize2
} from "lucide-react";

// Mock API for demo - replace with your actual Gemini API integration
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";

const suggestedQuestions = [
  { text: "How do I set financial goals?", icon: TrendingUp, category: "Planning" },
  { text: "Tips to save for an emergency fund", icon: PiggyBank, category: "Saving" },
  { text: "How do mutual funds work?", icon: BarChart3, category: "Investing" },
  { text: "Should I invest in stocks or bonds?", icon: DollarSign, category: "Investing" },
  { text: "What is a good credit score?", icon: CreditCard, category: "Credit" },
  { text: "Help me create a monthly budget", icon: BarChart3, category: "Budgeting" },
];

const quickTopics = [
  { text: "Budget Tips", icon: BarChart3 },
  { text: "Investment Guide", icon: TrendingUp },
  { text: "Debt Strategy", icon: CreditCard },
  { text: "Savings Plan", icon: PiggyBank },
];

const GeminiChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI financial assistant integrated into MoneyFlex. I can help you with budgeting, investment strategies, financial planning, and answer any money-related questions. What would you like to know about your finances today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 100) + 'px';
    }
  }, [inputMessage]);

  // Show suggestions after bot replies
  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 1]?.sender === "bot") {
      setShowSuggestions(true);
    }
  }, [messages]);

  // Enhanced prompt builder matching HomePage style
  const getFinancialPrompt = (userMessage) => {
    return `You are a professional financial advisor AI assistant integrated into the MoneyFlex banking app.

Your role and guidelines:
- Provide helpful, accurate, and personalized financial advice
- Help with budgeting, saving, investing, debt management, and financial planning
- Keep responses well-structured and easy to understand (2-3 paragraphs)
- Use bullet points when listing actionable advice
- Always prioritize user financial wellbeing and security
- If asked about specific account details, remind users to check their secure dashboard
- Be encouraging and supportive while remaining realistic
- Focus on practical, actionable guidance

Context: This is a financial advisory chat within a modern banking dashboard.

User Question: ${userMessage}

Please provide a comprehensive yet concise response.`;
  };

  // Mock API call with realistic responses
  const callGeminiAPI = async (message) => {
    await new Promise(resolve => setTimeout(resolve, 1200 + Math.random() * 800));
    
    const msg = message.toLowerCase();
    
    if (msg.includes('budget')) {
      return `Here's a practical approach to budgeting that works well:

**The 50/30/20 Framework:**
• 50% for essentials (rent, utilities, groceries)
• 30% for lifestyle (dining, entertainment)
• 20% for savings and debt payments

**Getting Started:**
Track your expenses for 2 weeks to understand your spending patterns. Use your MoneyFlex transaction history to categorize expenses automatically. Start with realistic limits and adjust monthly based on your actual spending.

Would you like help setting up specific budget categories or calculating your personal 50/30/20 breakdown?`;
    } else if (msg.includes('invest') || msg.includes('stock')) {
      return `Smart investing starts with understanding your goals and timeline:

**Investment Basics:**
• **Index Funds**: Great for beginners, low fees, automatic diversification
• **Dollar-Cost Averaging**: Invest fixed amounts regularly to reduce market timing risk
• **Risk vs Return**: Stocks offer higher potential returns but more volatility than bonds

**MoneyFlex Tip:** Check your investment dashboard to see your current portfolio allocation. Consider starting with broad market index funds if you're new to investing, and gradually add individual stocks as you learn more.

What's your investment timeline and risk comfort level? This will help determine the best strategy for you.`;
    } else if (msg.includes('credit') || msg.includes('score')) {
      return `Your credit score is crucial for financial opportunities. Here's how to optimize it:

**Key Factors:**
• **Payment History (35%)**: Never miss payments - set up auto-pay for minimums
• **Credit Utilization (30%)**: Keep total balances below 30% of limits, ideally under 10%
• **Account Age (15%)**: Keep old cards open to maintain credit history length

**Quick Wins:**
Pay down existing balances and avoid closing old credit cards. Check your MoneyFlex credit monitoring tool to track improvements. Most positive changes appear within 1-2 billing cycles.

What's your current credit utilization ratio? I can help you create a paydown strategy.`;
    } else if (msg.includes('save') || msg.includes('emergency')) {
      return `Building an emergency fund is one of the smartest financial moves:

**Emergency Fund Strategy:**
• **Target**: 3-6 months of essential expenses
• **Location**: High-yield savings account (separate from checking)
• **Building Method**: Automate $50-200/month transfers until you reach your goal

**MoneyFlex Integration:**
Use the automatic savings feature to transfer money right after payday. Start small - even $25/week adds up to $1,300 per year. Your savings tracker will show progress toward your emergency fund goal.

How much do you currently have saved, and what are your monthly essential expenses?`;
    } else {
      return `I'm here to help with all aspects of your financial journey! 

**Popular Topics:**
• **Budgeting**: Creating sustainable spending plans
• **Investing**: Building long-term wealth strategies  
• **Debt Management**: Paying off loans efficiently
• **Savings Goals**: Emergency funds, major purchases, retirement

**MoneyFlex Features:**
Don't forget to explore your dashboard's budgeting tools, investment tracking, and automated savings options. These features work together to support your financial goals.

What specific area of your finances would you like to focus on today? I can provide detailed guidance tailored to your situation.`;
    }
  };

  // Send message handler
  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMsg = inputMessage.trim();
    setShowSuggestions(false);

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        text: userMsg,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setInputMessage("");
    setIsLoading(true);
    setIsTyping(true);

    try {
      const aiResponse = await callGeminiAPI(userMsg);

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: aiResponse,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "I'm experiencing technical difficulties. Please try again in a moment. You can also explore the suggested questions below for common financial topics.",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isError: true,
        },
      ]);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearConversation = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm your AI financial assistant integrated into MoneyFlex. I can help you with budgeting, investment strategies, financial planning, and answer any money-related questions. What would you like to know about your finances today?",
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setInputMessage("");
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputMessage(suggestion);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const copyMessage = (text) => {
    navigator.clipboard.writeText(text);
  };

  const categories = ["All", "Planning", "Saving", "Investing", "Credit", "Budgeting"];
  const filteredSuggestions = selectedCategory === "All" 
    ? suggestedQuestions 
    : suggestedQuestions.filter(q => q.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Header with HomePage styling */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[#b4dbdc] to-[#a0c4ff] rounded-full flex items-center justify-center">
            <Bot size={20} className="text-[#1a202c]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#b4dbdc] flex items-center space-x-2">
              <span>AI Financial Assistant</span>
              <Sparkles size={16} className="text-[#a0c4ff]" />
            </h3>
            <p className="text-sm text-[#718096]">Powered by Gemini AI • Real-time advice</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 text-xs text-[#a0aec0]">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Online</span>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-[#4a5568]/50 rounded-lg transition-colors text-[#a0aec0]"
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <button
            onClick={clearConversation}
            className="p-2 hover:bg-[#4a5568]/50 rounded-lg transition-colors text-[#a0aec0]"
          >
            <RefreshCw size={16} />
          </button>
        </div>
      </div>

      {/* Quick Topics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {quickTopics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => handleSuggestionClick(topic.text)}
            className="group flex items-center space-x-2 p-3 bg-[#2d3748]/30 hover:bg-[#2d3748]/50 rounded-lg border border-[#4a5568]/30 hover:border-[#4a5568]/50 transition-all duration-200"
          >
            <topic.icon size={16} className="text-[#a0c4ff] group-hover:text-[#b4dbdc]" />
            <span className="text-sm text-[#a0aec0] group-hover:text-[#b4dbdc]">{topic.text}</span>
          </button>
        ))}
      </div>

      {/* Messages Container */}
      <div className={`bg-[#2d3748]/30 backdrop-blur-sm rounded-xl border border-[#4a5568]/30 mb-6 ${
        isExpanded ? 'h-96' : 'h-72'
      } overflow-hidden`}>
        <div className="h-full overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="space-y-2">
              <div
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-[#b4dbdc] to-[#a0c4ff] text-[#1a202c]"
                      : message.isError
                      ? "bg-red-900/50 text-red-200 border border-red-600/30"
                      : "bg-[#4a5568]/50 text-[#b4dbdc] border border-[#4a5568]/30"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    {message.sender === "bot" && (
                      <Bot size={16} className="mt-1 flex-shrink-0 text-[#a0c4ff]" />
                    )}
                    <div className="flex-1">
                      <div className="text-sm whitespace-pre-wrap leading-relaxed">
                        {message.text}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs opacity-70">
                          {message.timestamp}
                        </div>
                        {message.sender === "bot" && !message.isError && (
                          <button
                            onClick={() => copyMessage(message.text)}
                            className="p-1 hover:bg-[#4a5568]/50 rounded transition-colors"
                          >
                            <Copy size={12} className="text-[#a0aec0]" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Animation */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-[#4a5568]/50 rounded-xl px-4 py-3 border border-[#4a5568]/30">
                <div className="flex items-center space-x-3">
                  <Bot size={16} className="text-[#a0c4ff]" />
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-[#a0c4ff] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#a0c4ff] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-[#a0c4ff] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-xs text-[#a0aec0] ml-2">Analyzing your question...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Suggestions */}
      {showSuggestions && (
        <div className="bg-[#2d3748]/30 backdrop-blur-sm rounded-xl border border-[#4a5568]/30 p-4 mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <ChevronDown size={16} className="text-[#a0c4ff]" />
            <span className="text-sm font-medium text-[#b4dbdc]">Suggested questions:</span>
          </div>
          
          <div className="flex space-x-2 mb-4 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#a0c4ff]/20 text-[#a0c4ff] border border-[#a0c4ff]/30'
                    : 'bg-[#4a5568]/30 text-[#a0aec0] border border-[#4a5568]/30 hover:bg-[#4a5568]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {filteredSuggestions.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestionClick(suggestion.text)}
                className="text-left p-3 text-sm text-[#a0aec0] hover:text-[#b4dbdc] hover:bg-[#4a5568]/30 rounded-lg transition-all duration-200 flex items-center space-x-2 border border-transparent hover:border-[#4a5568]/30"
              >
                <suggestion.icon size={14} className="text-[#a0c4ff] flex-shrink-0" />
                <span>{suggestion.text}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="bg-[#2d3748]/30 backdrop-blur-sm rounded-xl border border-[#4a5568]/30 p-4">
        <div className="flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about budgeting, investing, or financial planning..."
              className="w-full p-3 text-sm bg-[#4a5568]/30 border border-[#4a5568]/50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#a0c4ff]/50 focus:border-[#a0c4ff]/50 transition-all text-[#b4dbdc] placeholder-[#718096]"
              rows={1}
              disabled={isLoading}
              style={{ minHeight: '44px', maxHeight: '100px' }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="p-3 bg-gradient-to-r from-[#b4dbdc] to-[#a0c4ff] text-[#1a202c] rounded-xl hover:from-[#a0c4ff] hover:to-[#b4dbdc] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0"
          >
            {isLoading ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Send size={18} />
            )}
          </button>
        </div>
        
        <div className="flex items-center justify-between mt-3 text-xs text-[#718096]">
          <div className="flex items-center space-x-1">
            <span>⚠️</span>
            <span>AI advice is for informational purposes. Consult financial professionals for major decisions.</span>
          </div>
          <div className="text-[#a0aec0]">
            Press Enter to send
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeminiChatBot;