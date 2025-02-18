"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, BarChart3, Globe } from "lucide-react";

const AISection = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Powered by Advanced AI
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-gray-400 mt-3 text-lg font-bold"
        >
          Built on cutting-edge neural architectures
        </motion.p>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(147, 51, 234, 0.7)" }}
            className="relative bg-gray-900 p-6 rounded-xl shadow-lg transition duration-300"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold font-['sansation'] mt-4">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Feature Data
const features = [
  {
    title: "Neural Networks",
    description: "Advanced neural architectures for complex decision making",
    icon: <Brain size={32} className="text-white" />,
  },
  {
    title: "Deep Learning",
    description: "Sophisticated deep learning models for pattern recognition",
    icon: <Cpu size={32} className="text-white" />,
  },
  {
    title: "Advanced ML",
    description: "Cutting-edge machine learning algorithms",
    icon: <BarChart3 size={32} className="text-white" />,
  },
  {
    title: "Global Scale",
    description: "Distributed AI processing across global networks",
    icon: <Globe size={32} className="text-white" />,
  },
];

export default AISection;
