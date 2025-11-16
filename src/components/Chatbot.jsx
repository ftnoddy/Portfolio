import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'react-feather';

const Chatbot = ({ apiUrl = 'http://localhost:3001/api' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: "Hi! I'm Atin Assistant. I can help you learn more about Atindra's skills, experience, and projects. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [currentService, setCurrentService] = useState('Checking...');
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  /**
   * Check Backend Health
   * Determines which AI services are available
   */
  const checkBackendHealth = async () => {
    try {
      const response = await fetch(`${apiUrl}/health`);
      if (!response.ok) throw new Error('Health check failed');
      
      const health = await response.json();
      console.log('🏥 Backend health:', health);
      
      // Determine which service is primary
      if (health.ai_services?.ollama?.current_primary) {
        setCurrentService('Ollama (Free)');
      } else if (health.ai_services?.openai?.current_primary) {
        setCurrentService('OpenAI GPT');
      } else {
        setCurrentService('Built-in responses');
      }
      
      return health;
    } catch (error) {
      console.error('❌ Health check failed:', error);
      setCurrentService('Offline mode');
      return null;
    }
  };

  /**
   * Initialize Chat Session
   * Creates a new session when the chatbot is first opened
   */
  const initializeSession = async () => {
    try {
      console.log('🔄 Initializing chat session...');
      
      // Check backend health first
      const health = await checkBackendHealth();
      
      const response = await fetch(`${apiUrl}/chat/session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSessionId(data.sessionId);
      setIsConnected(true);
      setError(null);
      
      console.log('✅ Session created:', data.sessionId);
    } catch (error) {
      console.error('❌ Failed to initialize session:', error);
      setError('Backend unavailable. Using offline responses.');
      setIsConnected(false);
      setCurrentService('Offline mode');
      
      // Fall back to simulated responses if backend is unavailable
      setSessionId('offline-session-' + Math.random().toString(36).substr(2, 9));
    }
  };

  /**
   * Handle opening the chatbot
   * Initialize session if needed
   */
  const handleOpen = async () => {
    setIsOpen(true);
    
    // Initialize session if we don't have one
    if (!sessionId) {
      await initializeSession();
    }
  };

  /**
   * Send Message to Backend
   * Sends user message to the AI backend and handles response
   */
  const sendMessageToBackend = async (message, currentSessionId) => {
    try {
      console.log('🤖 Sending message to backend:', message);
      
      const response = await fetch(`${apiUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          sessionId: currentSessionId
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Update service info if provided
      if (data.service) {
        setCurrentService(data.service);
        console.log('🔄 Using AI service:', data.service);
      }
      
      return data.response;
      
    } catch (error) {
      console.error('❌ Backend request failed:', error);
      throw error;
    }
  };

  /**
   * Enhanced Fallback AI Responses
   * Used when backend is unavailable - now with more intelligent responses
   */
  const getFallbackResponse = async (message) => {
    const responses = {
      'skills': 'I specialize in backend development with Node.js, Express.js, and MongoDB. I have 2.5+ years of experience working with these technologies. I also work with AWS, Docker, Redis, and SQL databases.',
      'experience': 'Atindra has 2.5+ years of experience as a Backend Developer. He currently works at TechNova Solutions where he designs RESTful APIs, integrates AWS services, and optimizes database performance.',
      'projects': 'Atindra has built several impressive projects including an E-Commerce API with Node.js and MongoDB, a Real-Time Chat Backend with WebSocket, and a Serverless Image Processor using AWS Lambda.',
      'contact': 'You can reach Atindra at atindra.mohan@email.com or connect with him on LinkedIn and GitHub. Feel free to use the contact form on this portfolio!',
      'education': 'Atindra holds a B.Tech in Computer Science from National Institute of Technology (2017-2021) and is AWS Certified Developer – Associate (2023).',
      'node': 'Atindra has 2.5 years of experience with Node.js, building scalable backend systems, RESTful APIs, and microservices. He has worked extensively with Express.js framework.',
      'mongodb': 'With 2.5 years of MongoDB experience, Atindra has designed database schemas, optimized queries, and implemented data aggregation pipelines for various applications.',
      'aws': 'Atindra has 1.5 years of AWS experience, working with services like S3, Lambda, EC2, and implementing serverless architectures for scalable applications.',
      'api': 'Atindra specializes in REST API development with 2.5 years of experience. He has built APIs for e-commerce platforms, chat applications, and serverless image processing systems.',
      'chatbot': 'This chatbot itself is one of Atindra\'s projects! It\'s built with React, Node.js, Express.js, and integrates with both OpenAI and Ollama for AI responses. It features smart fallback systems and session management.',
      'portfolio': 'This portfolio showcases Atindra\'s backend development skills. It\'s built with React and includes projects like this AI chatbot, demonstrating his ability to create full-stack applications.',
      'backend': 'Atindra is a backend specialist with 2.5+ years of experience. He works with Node.js, Express.js, MongoDB, AWS, and has built scalable APIs, real-time chat systems, and serverless applications.'
    };
    
    const lowerMessage = message.toLowerCase();
    
    // Check which response matches the message
    for (const [key, response] of Object.entries(responses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Default responses for common greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return 'Hello! I\'m here to help you learn more about Atindra\'s background. You can ask me about his skills, experience, projects, or how to contact him.';
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return 'You\'re welcome! Is there anything else you\'d like to know about Atindra\'s background or experience?';
    }

    if (lowerMessage.includes('help')) {
      return 'I can help you learn about:\n• Technical skills and experience\n• Past projects and achievements\n• Education and certifications\n• Contact information\n• This chatbot project itself\n\nJust ask me anything about Atindra!';
    }
    
    // Default response
    return 'That\'s an interesting question! You can ask me about Atindra\'s skills, experience, projects, education, or contact information. What would you like to know more about?';
  };

  /**
   * Main Send Message Function
   * Handles the complete message sending flow
   */
  const sendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    const messageToSend = inputValue; // Store before clearing
    
    // Add user message to UI immediately
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    setError(null);

    try {
      let aiResponse;
      
      /**
       * Try backend first, fall back to offline mode if needed
       */
      if (isConnected && sessionId && !sessionId.startsWith('offline-')) {
        try {
          aiResponse = await sendMessageToBackend(messageToSend, sessionId);
        } catch (backendError) {
          console.warn('⚠️ Backend failed, switching to offline mode:', backendError);
          setIsConnected(false);
          setCurrentService('Offline mode');
          setError('Connection lost. Using offline responses.');
          aiResponse = await getFallbackResponse(messageToSend);
        }
      } else {
        // Use fallback responses
        aiResponse = await getFallbackResponse(messageToSend);
        setCurrentService('Built-in responses');
      }
      
      // Simulate thinking time for better UX
      setTimeout(() => {
        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          content: aiResponse,
          isUser: false,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      }, isConnected ? 800 : 1200); // Shorter delay for real backend

    } catch (error) {
      console.error('❌ Message sending failed:', error);
      
      setTimeout(() => {
        const errorMessage = {
          id: (Date.now() + 1).toString(),
          content: "I apologize, but I'm having trouble right now. Please try again in a moment, or ask me about Atindra's skills, experience, or projects.",
          isUser: false,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
        setError('Message failed to send. Please try again.');
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  /**
   * Quick Reply Handler
   * Sends predefined messages when quick reply buttons are clicked
   */
  const handleQuickReply = (message) => {
    setInputValue(message);
    // Auto-send the message after a short delay
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={handleOpen}
        className={`text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isConnected 
            ? 'bg-cyan-500 hover:bg-cyan-600 animate-pulse' 
            : 'bg-gray-500 hover:bg-gray-600'
        }`}
        aria-label="Open Chat Assistant"
        title={`Chat with Atin Assistant (${currentService})`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col animate-slide-in">
          {/* Header */}
          <div className={`text-white p-4 rounded-t-lg flex justify-between items-center ${
            isConnected ? 'bg-cyan-500' : 'bg-gray-500'
          }`}>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                isConnected ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'
              }`}></div>
              <div className="flex flex-col">
                <span className="font-semibold">Atin Assistant</span>
                <span className="text-xs opacity-80">{currentService}</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className={`rounded p-1 transition-colors ${
                isConnected ? 'hover:bg-cyan-600' : 'hover:bg-gray-600'
              }`}
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Error Banner */}
          {error && (
            <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs p-2 text-center">
              {error}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-cyan-500 text-white rounded-br-sm'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.content}</p>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 max-w-xs">
                  <div className="flex space-x-1 items-center">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <span className="text-xs text-slate-500 ml-2">{currentService}</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-600">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isConnected ? "Ask me about Atindra's skills..." : "Ask me about Atindra... (offline)"}
                className="flex-1 p-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:bg-slate-700 dark:text-white text-sm transition-all"
                disabled={isTyping}
              />
              <button
                onClick={sendMessage}
                disabled={isTyping || !inputValue.trim()}
                className={`text-white px-4 py-2 rounded-lg transition-all ${
                  isTyping || !inputValue.trim()
                    ? 'bg-slate-300 dark:bg-slate-600 cursor-not-allowed'
                    : isConnected
                    ? 'bg-cyan-500 hover:bg-cyan-600'
                    : 'bg-gray-500 hover:bg-gray-600'
                }`}
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </div>
            
            {/* Quick Replies */}
            <div className="mt-2 flex flex-wrap gap-1">
              {!isTyping && messages.length <= 2 && (
                <>
                  <button
                    onClick={() => handleQuickReply('What are your technical skills?')}
                    className="text-xs bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-2 py-1 rounded transition-colors"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => handleQuickReply('Tell me about your projects')}
                    className="text-xs bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-2 py-1 rounded transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => handleQuickReply('How can I contact Atindra?')}
                    className="text-xs bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-2 py-1 rounded transition-colors"
                  >
                    Contact
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
          transform-origin: bottom right;
        }
        
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        
        .scrollbar-thumb-slate-300::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 3px;
        }
        
        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default Chatbot;