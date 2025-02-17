'use client';

import { useState, useRef, useEffect } from 'react';
import { FaCommentAlt, FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import anime from 'animejs';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! I'm your AI assistant. How can I help you today? ✨", from: 'bot' }]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (!input.trim() || isBotTyping) return;
    setMessages(prev => [...prev, { text: input, from: 'user' }]);
    setInput('');

    setIsBotTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I'm still learning, but I'll do my best to assist you! 🤖", from: 'bot' }]);
      setIsBotTyping(false);
    }, 1500);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <motion.div
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform"
      >
        <FaCommentAlt size={24} />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-4 w-80 bg-gray-900 text-white rounded-lg shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Header */}
            <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FaRobot className="text-xl" />
                <h3 className="text-lg font-bold">AI Assistant</h3>
              </div>
              <button onClick={toggleChat} className="text-white">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-3 bg-gray-800">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={`p-3 rounded-lg max-w-[75%] ${msg.from === 'bot' ? 'bg-gray-700' : 'bg-blue-500'}`}>
                    <p>{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              {isBotTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 p-3 rounded-lg flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-gray-900 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
              />
              <button onClick={handleSend} className="bg-blue-500 p-3 rounded-lg">
                <FaPaperPlane className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
