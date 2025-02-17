import { FaLinkedin, FaTwitter, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative bg-black text-white py-24 px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-black to-blue-700 opacity-30 blur-3xl"></div>
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 relative z-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-5xl font-extrabold font-['sansation'] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Get in Touch
          </h2>
          <p className="text-gray-400 mt-4 text-lg font-['sansation']">Ready to transform your business with AI?</p>
          <div className="mt-8 space-y-5 text-lg">
            <div className="flex items-center gap-4 text-gray-300 font-['sansation']">
              <FaEnvelope className="text-purple-400 text-2xl" />
              <span className="hover:text-white transition">contact@agentiaworld.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300 font-['sansation']">
              <FaGlobe className="text-purple-400 text-2xl" />
              <span className="hover:text-white transition ">www.agentiaworld.com</span>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex gap-6 mt-8 text-3xl">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-transform transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-transform transform hover:scale-110">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-900 p-10 rounded-3xl shadow-2xl border border-gray-800 backdrop-blur-lg">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 bg-gray-800 font-['sansation'] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-4 bg-gray-800 font-['sansation'] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mt-6 p-4 bg-gray-800 font-['sansation'] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mt-6 p-4 font-['sansation'] bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
            rows={4}
          ></textarea>
          <a
            href="#"
            className="relative hidden md:inline-flex items-center justify-center px-6 py-3 mt-6 text-lg font-semibold font-['sansation'] text-white 
                     bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-lg overflow-hidden 
                     transition-all duration-300 hover:bg-white/20 hover:border-white/30 group"
          >
            <span className="relative z-10">Send Message</span>

            {/* Moving Light Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
                             translate-x-[-100%] transition-transform duration-[800ms] ease-in-out 
                             group-hover:translate-x-[100%]"></span>

            {/* Subtle Inner Glow */}
            <span className="absolute inset-0 w-full h-full bg-white/5 opacity-10 blur-lg"></span>

            {/* Outer Glow Border Effect */}
            <span className="absolute inset-0 border border-transparent group-hover:border-white/40 rounded-lg 
                             transition-all duration-300"></span>
          </a>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
