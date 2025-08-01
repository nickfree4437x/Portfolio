import { useState, useEffect } from "react";
import { FiMenu, FiX, FiGithub, FiExternalLink, FiCode, FiUser, FiTool, FiLayers, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#home", icon: <FiCode className="mr-2" /> },
    { name: "About", path: "#about", icon: <FiUser className="mr-2" /> },
    { name: "Skills", path: "#skills", icon: <FiTool className="mr-2" /> },
    { name: "Projects", path: "#projects", icon: <FiLayers className="mr-2" /> },
    { name: "Contact", path: "#contact", icon: <FiMail className="mr-2" /> }
  ];

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const hoverSpring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-gray-900 backdrop-blur-md py-2 shadow-2xl" : "bg-gray-900/80 backdrop-blur-sm py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex items-center"
          >
            <a href="#home" className="flex items-center group no-underline">
              <motion.span 
                className="text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {"<Vishal"}
              </motion.span>
              <motion.span 
                className="text-3xl font-bold text-white group-hover:text-cyan-100 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {" />"}
              </motion.span>
              <motion.div
                className="ml-2 h-3 w-3 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <motion.a 
                  href={link.path}
                  className="relative px-4 hover:bg-gray-800 hover:rounded-sm py-2 flex no-underline items-center text-gray-300 hover:text-cyan-400 transition-colors"
                  onHoverStart={() => setHoveredLink(link.name)}
                  onHoverEnd={() => setHoveredLink(null)}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.icon}
                  {link.name}
                  {hoveredLink === link.name && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                      layoutId="navUnderline"
                      initial={false}
                      transition={hoverSpring}
                    />
                  )}
                </motion.a>
              </li>
            ))}
            
            {/* GitHub Button - Desktop */}
            <motion.div 
              initial={{ scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <a
                href="https://github.com/nickfree4437x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center no-underline gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-cyan-500/30 duration-300"
              >
                <FiGithub className="text-lg" />
                <span>GitHub</span>
                <motion.div
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiExternalLink className="text-sm opacity-70" />
                </motion.div>
              </a>
            </motion.div>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            animate={{
              rotate: menuOpen ? 180 : 0,
              backgroundColor: menuOpen ? "rgba(34, 211, 238, 0.1)" : "transparent"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {menuOpen ? (
              <FiX className="text-cyan-400 text-2xl" />
            ) : (
              <FiMenu className="text-white text-2xl" />
            )}
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: "auto",
                transition: { type: "spring", damping: 25 }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { duration: 0.3 }
              }}
              className="md:hidden overflow-hidden"
            >
              <motion.ul 
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="py-4 space-y-2"
              >
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name} 
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <a
                      href={link.path}
                      onClick={toggleMenu}
                      className="flex items-center py-3 px-6 hover:bg-gray-800 hover:rounded-sm no-underline text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all"
                    >
                      <motion.span 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      >
                        {link.icon}
                      </motion.span>
                      <span className="ml-3">{link.name}</span>
                    </a>
                  </motion.li>
                ))}
                <motion.li 
                  variants={itemVariants}
                  className="pt-4 px-2"
                >
                  <a
                    href="https://github.com/nickfree4437x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center no-underline justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg transition-all shadow-lg hover:shadow-cyan-500/30"
                  >
                    <FiGithub className="text-lg" />
                    <span>Visit My GitHub</span>
                    <motion.div
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FiExternalLink className="text-sm opacity-70" />
                    </motion.div>
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;