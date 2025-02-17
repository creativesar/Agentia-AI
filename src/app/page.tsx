import Image from "next/image";
import Hero from "@/components/Hero";
import AISection from "@/components/AISection";
import NeuralCapabilities from "@/components/NeuralCab";
import AISolutions from "@/components/AISolutions";
import PricingPlans from "@/components/PricingSelection";
import ContactSection from "@/components/Contact";
import Chatbot from "@/components/ChatBot";
export default function Home() {
  return (
    <div> 
      <Hero />
      <AISection />
      <NeuralCapabilities />
      <AISolutions />
      <PricingPlans />
      <ContactSection />
      <Chatbot />
    </div>
  );
}
