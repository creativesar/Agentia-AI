"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden isolate">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[url('/images/particle-bg.svg')] bg-cover opacity-15 animate-particles pointer-events-none -z-[1]" />
      
      {/* Floating Glow Orbs */}
      <div className="absolute -top-1/4 left-1/4 w-96 h-96 bg-radial-gradient from-purple-500/30 to-transparent rounded-full opacity-40 animate-float-1 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-radial-gradient from-blue-500/30 to-transparent rounded-full opacity-40 animate-float-2 blur-3xl" />
      
      {/* Holographic Grid */}
      <div className="absolute inset-0 w-full h-full bg-[url('/images/holographic-grid.svg')] bg-top bg-cover opacity-5 animate-grid-pan pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
          {/* Brand Section */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              Agentia World
            </h2>
            <p className="text-gray-400 mt-3 text-sm font-['sansation'] leading-relaxed max-w-lg mx-auto">
              AI-powered solutions for the future of enterprise intelligence. Experience the revolution.
            </p>
            <div className="flex justify-center gap-6 mt-6">
              {[
                { icon: FaGithub, color: "purple" },
                { icon: FaLinkedin, color: "blue" },
                { icon: FaTwitter, color: "sky" },
              ].map(({ icon: Icon, color }, index) => (
                <Link
                  key={index}
                  href="#"
                  className={`text-gray-300 hover:text-${color}-400 relative 
                    transition-all duration-300 hover:duration-100 group
                    hover:-translate-y-2 hover:drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]`}
                >
                  <Icon size={24} className="z-10 relative" />
                  <span className={`absolute -inset-2 bg-${color}-500/20 rounded-full 
                    scale-0 group-hover:scale-100 transition-transform duration-300`} />
                  <span className={`absolute inset-0 bg-gradient-to-br from-${color}-500/30 to-transparent 
                    rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Link Sections */}
          {[
            { title: "Product", links: ["Features", "Pricing", "Documentation", "API"] },
            { title: "Company", links: ["About", "Blogs", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security", "Compliance"] },
          ].map(({ title, links }, index) => (
            <div key={title} className="group text-center relative">
              <h3 className="text-xl font-semibold mb-5 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent group-hover:text-purple-400 transition-colors duration-300">
                {title}
              </h3>
              <ul className="text-gray-400 font-['sansation'] space-y-4 text-sm">
                {links.map((link, linkIndex) => (
                  <li key={link} className="relative overflow-hidden">
                    <Link
                      href="#"
                      className="hover:text-white flex items-center justify-center gap-2
                        transition-all duration-300 hover:pl-4 hover:pr-2
                        before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2
                        before:bg-gradient-to-r before:from-purple-500 before:to-blue-500
                        before:w-2 before:h-2 before:rounded-full before:opacity-0
                        hover:before:opacity-100 hover:before:left-2 before:transition-all
                        after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px
                        after:bg-gradient-to-r after:from-purple-500 after:to-blue-500
                        after:opacity-0 after:scale-x-0 hover:after:opacity-100
                        hover:after:scale-x-100 after:origin-left after:transition-all"
                    >
                      <span className="relative z-10">
                        {link}
                        <span className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 
                          group-hover:opacity-100 group-hover:right-0 transition-all duration-300">
                          →
                        </span>
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Divider */}
        <div className="relative mt-16 pt-8 text-center text-sm text-gray-400 ">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent">
            <div className="absolute -top-[1px] left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-blue-500 animate-beam pointer-events-none" />
          </div>
          © 2025 Agentia World. Powered by Panaversity. All rights reserved.
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, -40px) rotate(2deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, 30px) rotate(-3deg); }
        }
        @keyframes grid-pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes beam {
          0% { left: -50%; }
          100% { left: 150%; }
        }
        .animate-float-1 { animation: float-1 12s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 14s ease-in-out infinite; }
        .animate-grid-pan { animation: grid-pan 120s linear infinite; }
        .animate-beam {
          animation: beam 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
}
