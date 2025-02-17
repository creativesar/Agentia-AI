'use client'

import { useState, useRef, useEffect } from "react";
import { FaCommentAlt, FaRobot, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import anime from "animejs";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; from: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Add initial bot message when chat opens
      setTimeout(() => {
        setMessages([{ text: "Hello! I'm your AI assistant. How can I help you today? ✨", from: "bot" }]);
      }, 500);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isBotTyping) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, from: "user" }]);
    setInput("");

    // Simulate bot typing
    setIsBotTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I'm still learning, but I'll do my best to assist you! 🤖", from: "bot" },
      ]);
      setIsBotTyping(false);
    }, 1500);
  };

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Floating particles effect
  useEffect(() => {
    if (isOpen) {
      anime({
        targets: ".chat-particle",
        translateY: () => anime.random(-50, 50),
        translateX: () => anime.random(-50, 50),
        scale: [0.5, 1.2],
        opacity: [1, 0],
        duration: 3000,
        delay: anime.stagger(100),
        easing: "easeOutExpo",
        loop: true,
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Chat Icon with Hover Effect */}
      <motion.div
        onClick={toggleChat}
        className="fixed bottom-8 right-8 p-5 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-2xl cursor-pointer hover:shadow-3xl transition-all"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <FaCommentAlt size={28} />
        <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-8 right-8 w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute chat-particle text-xl opacity-0"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  {["✨", "🌟", "⚡", "💫", "🌌"][i % 5]}
                </div>
              ))}
            </div>

            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaRobot className="text-2xl animate-bounce" />
                  <h3 className="text-xl font-bold">AI Assistant</h3>
                </div>
                <button
                  onClick={toggleChat}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-3">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    className={`flex ${
                      msg.from === "bot" ? "justify-start" : "justify-end"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <div
                      className={`max-w-[75%] p-3 rounded-xl ${
                        msg.from === "bot"
                          ? "bg-gray-700 text-white"
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isBotTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 p-3 rounded-xl">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-gray-800">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSend}
                  disabled={isBotTyping}
                  className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;