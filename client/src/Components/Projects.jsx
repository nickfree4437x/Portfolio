import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState, useRef } from "react";
import { useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [expandedProject, setExpandedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "AstroHub",
      description: "AstroHub —an Interactive Space Exploration and Analysis Platform that transforms raw, scattered space data into an engaging, unified, and educational experience for everyone.",
      tech: ["React", "Node.js / Express", "Tailwind CSS", "Gemini API", "MongoDB", "Three.js", "REST APIs", "Framer Motion", "UI/UX Design"],
      image: "/projects/astrohub.png",
      github: "https://github.com/nickfree4437x/astrohub",  // change if different
      demo: "https://astrohub-delta.vercel.app/",                  // change if different
      features: [
        "Interactive 3D solar system visualization with real-time space data",
        "Planet & exoplanet insights with visuals and scientific stats",
        "Life-support score ranking system for exoplanets",
        "Astronaut profiles with mission highlights",
        "Earth vs. other planets comparison view"
      ]
    },
    {
      title: "AttendMaster",
      description: "Smart attendance management system with real-time dashboard and comprehensive analytics.",
      tech: ["React", "Firebase", "Tailwind CSS", "Chart.js"],
      image: "/projects/attendmaster.png",
      github: "https://github.com/nickfree4437x/attendmaster",
      demo: "https://attend-master.vercel.app",
      features: [
        "Real-time attendance tracking",
        "Interactive analytics dashboard",
        "Role-based access control",
        "PDF report generation"
      ]
    },
    {
      title: "Construction Site",
      description: "Modern landing page for construction services with animated sections and contact form integration.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      image: "/projects/construction-site.png",
      github: "https://github.com/nickfree4437x/Jhontraktor",
      demo: "https://jhontraktor-lovat.vercel.app",
      features: [
        "Scroll-triggered animations",
        "Responsive design",
        "Contact form with validation",
        "Service showcase gallery"
      ]
    },
    {
      title: "Coffee Shop Landing",
      description: "Elegant coffee shop website with smooth scroll animations and menu customization options.",
      tech: ["HTML", "CSS", "GSAP", "JavaScript"],
      image: "/projects/coffee-shop.png",
      github: "https://github.com/nickfree4437x/Coffee-hub",
      demo: "https://my-coffee-hub.netlify.app",
      features: [
        "Parallax scrolling effects",
        "Interactive menu filter",
        "Animated product cards",
        "Mobile-first design"
      ]
    },
    {
      title: "Real Estate Agency",
      description: "Property showcase platform with advanced filtering and property comparison features.",
      tech: ["React", "Tailwind CSS", "Context API"],
      image: "/projects/real-estate.png",
      github: "https://github.com/nickfree4437x/wealthome",
      demo: "https://wealthome-hai.netlify.app",
      features: [
        "Property search with filters",
        "Favorite properties list",
        "Responsive image gallery",
        "Contact agent functionality"
      ]
    },
    {
      title: "Note Taking App",
      description: "Full-featured note application with rich text editing and cloud synchronization.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      image: "/projects/note-app.png",
      github: "https://github.com/nickfree4437x/note-taking-app",
      demo: "https://note-taking-app-self.vercel.app",
      features: [
        "CRUD operations",
        "Markdown support",
        "User authentication",
        "Real-time updates"
      ]
    },
    {
      title: "Crypto Tracker",
      description: "Cryptocurrency market tracker with interactive charts and portfolio simulation.",
      tech: ["React", "Chart.js", "Tailwind CSS", "CoinGecko API"],
      image: "/projects/crypto-tracker.png",
      github: "https://github.com/nickfree4437x/CoinDekho",
      demo: "https://coin-dekho-five.vercel.app",
      features: [
        "Real-time price data",
        "Interactive candlestick charts",
        "Portfolio simulation",
        "Historical data analysis"
      ]
    },
     {
      title: "TaskFlow Board",
      description: "Real-time collaborative task board with drag-and-drop task management and assignments.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
      image: "/projects/taskflow.png",
      github: "https://github.com/nickfree4437x/to-do-borad",
      demo: "https://to-do-borad.vercel.app/",
      features: [
        "Real-time task updates using WebSockets",
        "Drag-and-drop task management (Kanban)",
        "Assign tasks to specific users",
        "Activity log & status tracking",
        "User authentication and role access"
      ]
    },
    {
      title: "SwiftLink",
      description: "A fast and secure URL shortener with real-time analytics and QR code generation.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      image: "/projects/swiftlink.png",
      github: "https://github.com/nickfree4437x/url-shortener",
      demo: "https://url-shortener-kappa-two.vercel.app/",
      features: [
        "Generate short URLs instantly",
        "Track clicks with real-time analytics",
        "Auto QR code for each shortened link",
        "Custom alias & expiration options",
        "Password-protected links for privacy"
      ]
    }
  ];

  const moreProjects = [
    {
      title: "Task Manager",
      description: "Productivity app with task prioritization and progress tracking.",
      tech: ["React", "Redux", "Firebase"],
      image: "/projects/task-manager.png",
      github: "https://github.com/nickfree4437x/LeadManager",
      demo: "https://lead-manager-delta.vercel.app",
      features: [
        "Task categorization",
        "Priority levels",
        "Progress tracking",
        "Cloud sync"
      ]
    },
    {
      title: "Real-Time Chat Application",
      description: "I built a full-stack Real-Time Chat Web App that supports group messaging, built using the MERN stack with real-time capabilities powered by Socket.io.",
      tech: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB"],
      image: "/projects/chat-app.png",
      github: "https://github.com/nickfree4437x/realtime-chat",
      demo: "https://realtime-chat-five-omega.vercel.app",
      features: [
        "Secure login/signup with JWT",
        "Passwords hashed using bcrypt",
        "Messages delivered instantly using Socket.io",
        "Users can see if their message has been viewed"
      ]
    },
    {
      title: "Leaderboard System",
      description: "I developed a dynamic Leaderboard System that allows users to claim random points, get ranked in real-time.",
      tech: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
      image: "/projects/leaderboard.png",
      github: "https://github.com/nickfree4437x/leaderboard-system",
      demo: "https://leaderboard-system-beta.vercel.app",
      features: [
        "Secure login/signup with JWT",
        "Passwords hashed using bcrypt",
        "Messages delivered instantly using Socket.io",
        "Users can see if their message has been viewed"
      ]
    },
  ];

  const visibleProjects = showAll ? [...projects, ...moreProjects] : projects;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(34, 211, 238, 0.1), 0 10px 10px -5px rgba(34, 211, 238, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section 
      id="projects"
      className="relative bg-gray-950 py-28 px-4 sm:px-6 overflow-hidden"
      ref={ref}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-20 left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1.5 px-4 mb-4 text-sm font-medium text-cyan-400 bg-cyan-900/20 rounded-full border border-cyan-400/20">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              My Projects
            </span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Interactive showcase of my best work with detailed case studies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : ""}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Project Card */}
              <div className={`h-full bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm rounded-xl border ${expandedProject === index ? 'border-cyan-400/50' : 'border-gray-800'} transition-all overflow-hidden shadow-lg hover:shadow-cyan-500/10`}>
                {/* Project Image with Links */}
                <div className="relative no-underline h-52 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Links Container - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex gap-3 justify-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center no-underline gap-2 text-sm text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                      >
                        <FiGithub /> Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center no-underline gap-2 text-sm text-white bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-lg transition-colors"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div 
                    className="flex justify-between items-center mb-3 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    {expandedProject === index ? (
                      <FiChevronUp className="text-cyan-400 text-lg" />
                    ) : (
                      <FiChevronDown className="text-gray-400 text-lg group-hover:text-cyan-400 transition-colors" />
                    )}
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="bg-gray-800 text-cyan-300 text-xs px-3 py-1.5 rounded-full border border-gray-700"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(34, 211, 238, 0.1)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Expanded Content */}
                  {expandedProject === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-gray-800">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-gray-300 text-sm">
                              <svg className="w-4 h-4 mt-0.5 mr-2 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-cyan-400 border border-cyan-400/30 rounded-lg hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all group"
          >
            {showAll ? (
              <>
                Show Less
                <FiChevronUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
              </>
            ) : (
              <>
                View More Projects
                <FiChevronDown className="w-4 h-4 group-hover:translate-y-[2px] transition-transform" />
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Animation CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-2deg); }
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

export default Projects;