"use client";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Using Heroicons for hamburger and close icons

const Navbar = () => {
  return (
    <nav className="relative bg-black text-white shadow-lg h-20 w-full top-0 z-50 overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-[url('/images/particle-bg.svg')] bg-cover opacity-15 animate-particles pointer-events-none -z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-radial-gradient from-purple-500/30 to-transparent rounded-full opacity-40 animate-float-1 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-radial-gradient from-blue-500/30 to-transparent rounded-full opacity-40 animate-float-2 blur-3xl" />
      <div className="absolute inset-0 w-full h-full bg-[url('/images/holographic-grid.svg')] bg-top bg-cover opacity-5 animate-grid-pan pointer-events-none" />

      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full backdrop-blur-lg relative z-10">
        {/* Logo */}
        <a href="/" className="text-3xl font-extrabold flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">
          Agentia World
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-['sansation']">
          {["Features", "Technology", "Agent", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
            >
              {item}
              {/* Glowing Underline Effect */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              {/* Floating Arrow */}
              <span className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Launch Console Button with Glass Effect */}
        <a
          href="#"
          className="relative hidden md:inline-flex items-center justify-center px-6 py-2 text-lg font-semibold font-['sansation'] text-white 
                     bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-lg overflow-hidden 
                     transition-all duration-300 hover:bg-white/20 hover:border-white/30 group"
        >
          <span className="relative z-10">Launch Console</span>
          {/* Moving Light Effect */}
          <span
            className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                           translate-x-[-100%] transition-transform duration-[800ms] ease-in-out 
                           group-hover:translate-x-[100%]"
          ></span>
          {/* Subtle Inner Glow */}
          <span className="absolute inset-0 w-full h-full bg-white/5 opacity-10 blur-lg"></span>
          {/* Outer Glow Border Effect */}
          <span
            className="absolute inset-0 border border-transparent group-hover:border-white/40 rounded-lg 
                           transition-all duration-300"
          ></span>
        </a>

        {/* Mobile Menu Toggle */}
        <Menu as="div" className="md:hidden relative">
          <Menu.Button className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">
            <Bars3Icon className="h-6 w-6" />
          </Menu.Button>

          {/* Mobile Menu */}
          <Transition
            show={true}
            enter="transition-opacity ease-in duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Menu.Items className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-lg p-6 flex flex-col space-y-4">
              {/* Close Button */}
              <div className="absolute top-4 right-4">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className="text-gray-300 text-2xl"
                      onClick={() => {}}
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  )}
                </Menu.Item>
              </div>

              {["Features", "Technology", "Agent", "Pricing", "Contact"].map((item) => (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <a
                      href={`/${item.toLowerCase()}`}
                      className="relative text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                    >
                      {item}
                      {/* Glowing Underline Effect */}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                      {/* Floating Arrow */}
                      <span className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300">
                        →
                      </span>
                    </a>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className="relative text-gray-300 hover:text-blue-500 transition-all duration-300 group"
                  >
                    🚀 Launch Console
                    {/* Glowing Underline Effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    {/* Floating Arrow */}
                    <span className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300">
                      →
                    </span>
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
