import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaFileAlt, FaCode, FaTwitter } from "react-icons/fa";
import { SiTypescript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import profile from "./profile.jpg"; // Add your profile image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Tech Icons Floating */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 text-cyan-400/10 text-6xl"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <SiReact />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 text-blue-400/10 text-5xl"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <SiNodedotjs />
        </motion.div>
        <motion.div
          className="absolute top-2/3 left-1/2 text-purple-400/10 text-7xl"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <SiMongodb />
        </motion.div>
      </div>

      <div className="container mx-auto mt-10 px-6 flex flex-col md:flex-row items-center justify-center min-h-screen pt-24 md:pt-0 relative z-10">
        {/* Left: Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.p 
              className="text-cyan-400 font-mono mb-2 text-lg"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-block mr-2">👋</span> Hello World!
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-7xl no font-bold mb-4 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I'm <span className="text-cyan-400 relative inline-block">
                Vishal Kumar
                <motion.span
                  className="absolute bottom-0 left-0 w-full bg-cyan-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                />
              </span>
            </motion.h1>
            
            <div className="h-20 md:h-24 mb-6">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Specialist",
                  2000,
                  "React & Node.js Expert",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                  "Tech Innovator",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              />
            </div>

            <motion.p 
              className="text-gray-300 max-w-lg mx-auto md:mx-0 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Crafting digital experiences that blend beautiful design with flawless functionality. 
              I specialize in building performant, scalable web applications that users love.
            </motion.p>

            {/* Tech Stack Badges */}
            <motion.div 
              className="flex flex-wrap gap-2 mt-8 justify-center "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: <SiReact className="text-cyan-400" />, name: "React" },
                { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
                { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
                { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {tech.icon}
                  <span className="text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mt-10 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/14G1wl3Ms6XyptJrmNqb074yVRlaeeNai/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 no-underline bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-3 group"
            >
              <FaFileAlt className="group-hover:animate-bounce" /> 
              <span>View Resume</span>
            </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(34, 211, 238, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3.5 border-2 no-underline border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400/10 transition-all duration-300 flex items-center gap-3 group"
              >
                <FaCode className="group-hover:animate-pulse" />
                <span>My Projects</span>
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              className="flex space-x-6 mt-12 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { icon: <FaGithub />, href: "https://github.com/nickfree4437x", label: "GitHub" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/vishalkumarji/", label: "LinkedIn" },
                { icon: <FaEnvelope />, href: "vishalsaini5678niwarkhas@gmail.com", label: "Email" },
                { icon: <FaTwitter />, href: "https://twitter.com/@sainivishal512", label: "Twitter" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 text-2xl transition-colors relative group"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  {social.icon}
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-800 text-cyan-400 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Floating Tech Icons Around Profile */}
            {[
              { icon: <SiReact className="text-cyan-400" />, position: "top-0 left-0" },
              { icon: <SiNodedotjs className="text-green-500" />, position: "top-0 right-0" },
              { icon: <SiTypescript className="text-blue-400" />, position: "bottom-0 left-0" },
              { icon: <SiMongodb className="text-green-400" />, position: "bottom-0 right-0" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                className={`absolute ${tech.position} text-3xl`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                {tech.icon}
              </motion.div>
            ))}
            
            {/* Profile Image Container */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400/30 hover:border-cyan-400 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-cyan-500/20">
              <img
                src={profile}
                alt="Vishal Saini"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-lg font-medium flex items-center gap-2"
                >
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  Available for Work
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#about" className="text-gray-400 no-underline hover:text-cyan-400 transition-colors flex flex-col items-center group">
          <motion.span 
            className="text-sm mb-1"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Explore More
          </motion.span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaArrowDown className="text-xl group-hover:text-cyan-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;