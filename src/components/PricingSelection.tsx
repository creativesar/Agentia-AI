import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Starter",
    price: "$499",
    period: "/month",
    features: [
      "2 AI Agent Instances",
      "Basic Neural Processing",
      "24/7 Support",
      "Weekly Analytics",
      "Basic Integration Support",
    ],
  },
  {
    title: "Professional",
    price: "$999",
    period: "/month",
    features: [
      "10 AI Agent Instances",
      "Advanced Neural Networks",
      "Priority Support",
      "Real-time Analytics",
      "Custom Integration",
      "API Access",
      "Advanced Security",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "$Custom",
    period: "",
    features: [
      "Unlimited Agents",
      "Full Neural Suite",
      "Dedicated Support Team",
      "Advanced Analytics Dashboard",
      "Custom Development",
      "Full API Access",
      "Enterprise Security",
      "Custom Training",
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="py-20 px-8 md:px-16 lg:px-32 text-center bg-black text-white relative overflow-hidden">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-indigo-900 drop-shadow-2xl animate-pulse">
        Choose Your Plan
      </h2>
      <p className="mt-3 text-lg text-gray-400 max-w-3xl mx-auto">
        Scale your AI capabilities with our flexible pricing and powerful features.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-10 rounded-2xl border border-gray-700 shadow-2xl bg-gray-900 transition-transform transform hover:scale-105 hover:shadow-purple-500/80 ${
              plan.highlight ? "border-purple-500 ring-2 ring-purple-500" : ""
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-semibold px-6 py-2 rounded-full shadow-md animate-bounce">
                Most Popular
              </div>
            )}
            <h3 className="text-3xl font-bold text-white">{plan.title}</h3>
            <p className="text-5xl font-extrabold text-purple-400 drop-shadow-xl">
              {plan.price} <span className="text-lg font-medium">{plan.period}</span>
            </p>
            <ul className="mt-6 space-y-3 text-gray-300 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg">
                  <CheckCircle size={22} className="text-purple-400" /> {feature}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="relative mt-8 w-full py-4 flex items-center justify-center text-lg font-semibold text-white 
                         bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl overflow-hidden 
                         transition-all duration-300 hover:bg-white/20 hover:border-white/30 group"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                               translate-x-[-100%] transition-transform duration-[800ms] ease-in-out 
                               group-hover:translate-x-[100%]"></span>
              <span className="absolute inset-0 w-full h-full bg-white/5 opacity-10 blur-xl"></span>
              <span className="absolute inset-0 border border-transparent group-hover:border-white/40 rounded-xl 
                               transition-all duration-300"></span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
