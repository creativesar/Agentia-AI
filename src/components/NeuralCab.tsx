import { BrainCircuit, Eye, PlugZap, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    title: "Autonomous Evolution",
    description:
      "AI-driven systems that learn and evolve dynamically, adapting seamlessly to complex challenges.",
    icon: <BrainCircuit size={32} className="text-purple-400" />,
  },
  {
    title: "Multi-Sensory Intelligence",
    description:
      "Cutting-edge AI that processes text, speech, and visuals simultaneously for unparalleled comprehension.",
    icon: <Eye size={32} className="text-purple-400" />,
  },
  {
    title: "Seamless Cognitive Integration",
    description:
      "Revolutionary APIs that merge AI intelligence with your existing workflows effortlessly.",
    icon: <PlugZap size={32} className="text-purple-400" />,
  },
  {
    title: "Ethical & Secure AI",
    description:
      "Advanced safety protocols ensuring ethical AI use and robust security compliance.",
    icon: <ShieldCheck size={32} className="text-purple-400" />,
  },
];

export default function NeuralCapabilities() {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 text-center bg-black text-white relative overflow-hidden">
      <h2 className="text-5xl font-extrabold text-purple-400 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
        Next-Gen Neural Capabilities
      </h2>
      <p className="mt-3 text-lg text-gray-300 max-w-3xl mx-auto">
        Experience the future of artificial intelligence, designed for limitless potential.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 shadow-lg transform hover:scale-105 hover:rotate-2 transition-all duration-500 p-6 rounded-xl flex flex-col items-center text-center relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 hover:shadow-purple-500/50 hover:shadow-xl"
          >
            <div className="mb-4 text-3xl text-purple-400 bg-white/10 p-2 rounded-full shadow-md">{capability.icon}</div>
            <h3 className="text-xl font-bold text-white">{capability.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{capability.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}