import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaCode, FaServer, FaDatabase, FaChevronDown, FaChevronUp, FaRocket, FaLightbulb, FaLayerGroup } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiGithub } from "react-icons/si";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white px-6 py-24 md:py-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/5"
            style={{
              width: Math.random() * 20 + 10 + 'px',
              height: Math.random() * 20 + 10 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              My Journey
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto"
          >
            From passion to profession - the story behind the code
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="inline-flex bg-gray-800/50 backdrop-blur-md rounded-xl p-1.5 border border-gray-700">
            {[
              { id: "story", label: "My Story", icon: <FaCode /> },
              { id: "philosophy", label: "Philosophy", icon: <FaLightbulb /> },
              { id: "approach", label: "Approach", icon: <FaLayerGroup /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${activeTab === tab.id ? 'bg-gradient-to-r from-cyan-500/30 to-blue-600/30 text-cyan-400' : 'text-gray-300 hover:text-white'}`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              {activeTab === "story" && (
                <motion.div
                  key="story"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-xl"
                >
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
                    <FaRocket className="text-cyan-400" /> 
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      The Beginning
                    </span>
                  </h3>
                  <div className="text-gray-300 space-y-5 text-lg leading-relaxed">
                    <p>
                      My journey into web development began with a simple curiosity about how websites work. What started as tweaking HTML templates soon became an all-consuming passion for building digital experiences.
                    </p>
                    <p>
                      I'm <span className="text-cyan-400 font-medium">Vishal Kumar</span>, a self-taught developer who transformed that curiosity into a career. Along the way, I've had the privilege to work with amazing teams and build products used by thousands.
                    </p>
                    <p>
                      Every project is an opportunity to learn, grow, and push the boundaries of what I can create. The evolution never stops, and that's what I love about this field.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "philosophy" && (
                <motion.div
                  key="philosophy"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-xl"
                >
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
                    <FaLightbulb className="text-cyan-400" /> 
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Development Philosophy
                    </span>
                  </h3>
                  <div className="text-gray-300 space-y-5 text-lg leading-relaxed">
                    <p>
                      <span className="text-cyan-400 font-medium">Technology serves people</span> - I believe the best code disappears into the background, creating seamless experiences that feel intuitive and magical.
                    </p>
                    <p>
                      <span className="text-cyan-400 font-medium">Continuous learning</span> - In our fast-moving industry, staying curious and adaptable is more valuable than any single technical skill.
                    </p>
                    <p>
                      <span className="text-cyan-400 font-medium">Balance matters</span> - Beautiful design and robust engineering should work in harmony, not compete for attention.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "approach" && (
                <motion.div
                  key="approach"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-xl"
                >
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-6 flex items-center gap-3">
                    <FaLayerGroup className="text-cyan-400" /> 
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      How I Work
                    </span>
                  </h3>
                  <div className="text-gray-300 space-y-5 text-lg leading-relaxed">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-cyan-400">
                        <FaServer />
                      </div>
                      <div>
                        <h4 className="font-medium text-cyan-400">Architecture First</h4>
                        <p>Thoughtful system design before writing code ensures scalability and maintainability.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-cyan-400">
                        <FaDatabase />
                      </div>
                      <div>
                        <h4 className="font-medium text-cyan-400">Data-Driven</h4>
                        <p>Metrics and user feedback guide iterations, not just personal preference.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-cyan-400">
                        <FaCode />
                      </div>
                      <div>
                        <h4 className="font-medium text-cyan-400">Clean Foundations</h4>
                        <p>Readable, well-documented code that others can easily understand and extend.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-full flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/20"
              />
              
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 80,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-blue-400/20"
              />
              
              <div className="relative bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Why I Love Development
                  </h3>
                  <p className="text-gray-400 mt-2">The intersection of creativity and logic</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Problem Solving",
                      description: "Every bug is a puzzle waiting to be solved",
                      icon: "🧩",
                      color: "text-purple-400"
                    },
                    {
                      title: "Continuous Learning",
                      description: "The field never stops evolving, and neither do I",
                      icon: "📚",
                      color: "text-cyan-400"
                    },
                    {
                      title: "Creating Impact",
                      description: "Building tools that make people's lives better",
                      icon: "💡",
                      color: "text-yellow-400"
                    },
                    {
                      title: "Beautiful Code",
                      description: "The artistry in elegant solutions",
                      icon: "🎨",
                      color: "text-pink-400"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                    >
                      <span className={`text-3xl ${item.color}`}>{item.icon}</span>
                      <div>
                        <h4 className={`font-semibold ${item.color}`}>{item.title}</h4>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;