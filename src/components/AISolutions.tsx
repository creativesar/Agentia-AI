'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Brain, Briefcase } from 'lucide-react';

const solutions = [
  {
    icon: <Briefcase size={40} className="text-indigo-500 drop-shadow-lg" />, 
    title: 'Enterprise AI',
    description: 'Empower your business with advanced AI agents for decision-making and efficiency.',
  },
  {
    icon: <Brain size={40} className="text-indigo-500 drop-shadow-lg" />, 
    title: 'Cognitive Automation',
    description: 'Smarter workflows powered by AI-driven neural networks to boost productivity.',
  },
  {
    icon: <ShieldCheck size={40} className="text-indigo-500 drop-shadow-lg" />, 
    title: 'Fortified AI Security',
    description: 'Unbreakable privacy with AI-driven encryption and military-grade protection.',
  },
];

export default function AISolutions() {
  return (
    <section className="py-20 bg-black text-white text-center relative overflow-hidden">
      {/* Background Animated Stars Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-6xl font-extrabold font-['sansation'] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-2xl"
      >
        Next-Gen AI Solutions
      </motion.h2>
      <p className="text-gray-400 mt-3 font-['sansation'] text-lg">Revolutionizing industries with cutting-edge intelligence</p>
      <div className="grid md:grid-cols-3 gap-10 mt-10 px-6 md:px-20 relative z-10">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.1, 
              rotate: 1, 
              boxShadow: "0px 0px 40px rgba(99, 102, 241, 0.9)",
              backgroundColor: "rgba(29, 78, 216, 0.3)"
            }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
            className="bg-gray-900 p-8 rounded-3xl shadow-lg border border-indigo-500/30 hover:border-indigo-400 hover:shadow-indigo-500/50 transition-all relative overflow-hidden transform"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex justify-center mb-4"
            >
              {solution.icon}
            </motion.div>
            <h3 className="text-2xl font-bold font-['sansation'] text-indigo-300">{solution.title}</h3>
            <p className="text-gray-400 mt-3 font-['sansation'] leading-relaxed">{solution.description}</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3, scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute inset-0 bg-indigo-900 opacity-10 blur-3xl"
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
