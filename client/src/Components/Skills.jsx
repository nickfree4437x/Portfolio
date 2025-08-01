import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaPhp, FaLaravel } from "react-icons/fa";
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiRedux, 
  SiExpress, 
  SiMongodb, 
  SiPostman, 
  SiVite, 
  SiGithub,
  SiGit,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiDocker,
  SiFirebase,
  SiVercel,
  SiMysql
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  const skills = {
    "Frontend Mastery": [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" />, level: 95 },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" />, level: 90 },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 92 },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 85 },
      { name: "React.js", icon: <FaReact className="text-cyan-500" />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" />, level: 88 },
      { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 85 }
    ],
    "Backend Expertise": [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 88 },
      { name: "Express.js", icon: <SiExpress className="text-gray-100" />, level: 85 },
      { name: "PHP", icon: <FaPhp className="text-purple-400" />, level: 80 },
      { name: "Laravel", icon: <FaLaravel className="text-red-500" />, level: 75 },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" />, level: 82 },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 82 },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-500" />, level: 75 },
      { name: "REST API", icon: <FaDatabase className="text-blue-400" />, level: 90 }
    ],
    "DevOps & Tools": [
      { name: "Git", icon: <SiGit className="text-orange-500" />, level: 90 },
      { name: "GitHub", icon: <SiGithub className="text-gray-100" />, level: 85 },
      { name: "Docker", icon: <SiDocker className="text-blue-400" />, level: 70 },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" />, level: 75 },
      { name: "Vercel", icon: <SiVercel className="text-white" />, level: 80 },
      { name: "Vite", icon: <SiVite className="text-yellow-500" />, level: 80 },
      { name: "Postman", icon: <SiPostman className="text-orange-400" />, level: 85 },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" />, level: 95 }
    ]
  };

  const categoryIcons = {
    "Frontend Mastery": <FaReact className="text-cyan-400" />,
    "Backend Expertise": <FaNodeJs className="text-green-400" />,
    "DevOps & Tools": <FaTools className="text-yellow-400" />
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(34, 211, 238, 0.1), 0 10px 10px -5px rgba(34, 211, 238, 0.04)"
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        type: "spring",
        damping: 10
      }
    })
  };

  return (
    <section
      id="skills"
      className="relative bg-gray-950 text-white px-4 sm:px-6 py-24 md:py-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1.5 px-4 mb-4 text-sm font-medium text-cyan-400 bg-cyan-900/20 rounded-full border border-cyan-400/20">
            TECHNICAL EXPERTISE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              My Skills
            </span> & <span className="text-white">Technologies</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            The tools and technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all shadow-lg hover:shadow-cyan-500/20"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-800 rounded-xl border border-gray-700">
                  <div className="text-3xl">
                    {categoryIcons[category]}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {category}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-4">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="group"
                    variants={skillItemVariants}
                    whileHover="hover"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="text-2xl p-2 bg-gray-800 rounded-lg group-hover:text-cyan-400 transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-medium text-gray-200">{item.name}</span>
                      <span className="ml-auto text-sm text-gray-400">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          item.level > 85 ? 'bg-green-500' : 
                          item.level > 70 ? 'bg-cyan-500' : 'bg-blue-500'
                        }`}
                        variants={progressBarVariants}
                        custom={item.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Banner */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 rounded-xl p-6 overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaTools className="text-cyan-400" />
              <span>My Preferred Tech Stack</span>
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                <FaReact className="text-cyan-500 text-xl" />
                <span>React Ecosystem</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                <FaNodeJs className="text-green-500 text-xl" />
                <span>Node.js Runtime</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                <FaLaravel className="text-red-500 text-xl" />
                <span>Laravel Framework</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                <SiFirebase className="text-yellow-500 text-xl" />
                <span>Firebase Services</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700">
                <SiVercel className="text-white text-xl" />
                <span>Vercel Hosting</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animation CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-2deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
        .animate-float-2 {
          animation: float-2 9s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default Skills;