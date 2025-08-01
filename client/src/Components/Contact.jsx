import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const contactVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="contact"
      className="relative bg-gray-950 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-40 h-40 sm:w-60 sm:h-60 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-600/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-block py-1.5 px-4 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-cyan-400 bg-cyan-900/20 rounded-full border border-cyan-400/20">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Contact Me
            </span>
          </h2>
          <motion.div 
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4 sm:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={contactVariants}
            initial="hidden"
            animate={isInView ? "visible" : ""}
            className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 sm:mb-6">
              Send a Message
            </h3>
            
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800/50 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-sm sm:text-base"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800/50 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1 sm:mb-2 text-xs sm:text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-gray-800/50 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all text-sm sm:text-base"
                  placeholder="Hello, I'd like to discuss..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-2.5 sm:py-3.5 rounded-lg transition-all shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={contactVariants}
            initial="hidden"
            animate={isInView ? "visible" : ""}
            transition={{ delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Contact Card */}
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/10">
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 sm:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="bg-cyan-400/10 p-2 sm:p-3 rounded-lg border border-cyan-400/20">
                    <FaEnvelope className="text-cyan-400 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs sm:text-sm font-medium">Email</h4>
                    <a 
                      href="mailto:vishalsaini5678niwarkhas@gmail.com" 
                      className="text-white no-underline hover:text-cyan-400 transition-colors text-sm sm:text-base"
                    >
                      vishalsaini5678niwarkhas@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="bg-cyan-400/10 p-2 sm:p-3 rounded-lg border border-cyan-400/20">
                    <FaPhoneAlt className="text-cyan-400 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs sm:text-sm font-medium">Phone</h4>
                    <a 
                      href="tel:7505784698" 
                      className="text-white no-underline hover:text-cyan-400 transition-colors text-sm sm:text-base"
                    >
                      +91 7505784698
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="bg-cyan-400/10 p-2 sm:p-3 rounded-lg border border-cyan-400/20">
                    <FaMapMarkerAlt className="text-cyan-400 text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs sm:text-sm font-medium">Current Location</h4>
                    <p className="text-white text-sm sm:text-base">
                      Malout Punjab, India
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/10">
              <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 sm:mb-6">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/nickfree4437x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center no-underline gap-2 sm:gap-3 bg-gray-800/50 hover:bg-gray-800/50 px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-gray-700 transition-all text-sm sm:text-base"
                >
                  <FaGithub className="text-cyan-400 text-lg sm:text-xl" />
                  <span>GitHub</span>
                </motion.a>
                
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/vishalkumarji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center no-underline gap-2 sm:gap-3 bg-gray-800/50 hover:bg-gray-800/50 px-4 sm:px-5 py-2 sm:py-3 rounded-lg border border-gray-700 transition-all text-sm sm:text-base"
                >
                  <FaLinkedin className="text-cyan-400 text-lg sm:text-xl" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;
