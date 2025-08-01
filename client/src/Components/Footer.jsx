import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-400 py-12 px-6 border-t border-gray-800 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 50],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-sm">
              &copy; {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Vishal Kumar</span>. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              whileHover={{ y: -3 }}
              href="#about"
              className="text-gray-400 no-underline hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              About
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#projects"
              className="text-gray-400 no-underline hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="#contact"
              className="text-gray-400 no-underline hover:text-cyan-400 transition-colors text-sm font-medium"
            >
              Contact
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center md:justify-end gap-6 text-xl"
          >
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/nickfree4437x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/vishalkumarji/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://twitter.com/@sainivishal512"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </div>

        {/* Made With Love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 text-xs text-gray-500"
        >
          <p>Built with ❤️ using React & Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;