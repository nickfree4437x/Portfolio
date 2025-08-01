import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    stream: "Information Technology",
    college: "I K Gujral Punjab Technical University",
    year: "2022 - 2026",
    icon: "🎓",
    description: "Specialized in Computer Science Engineering and Information Technology with a CGPA of 7.5/10.",
    highlights: [
      "Recipient of Academic Excellence Scholarship",
      "Hands on experience with various programming languages and software development tools",
      "Lead developer for college AI club"
    ],
    color: "from-purple-500 to-indigo-600"
  },
  {
    degree: "Higher Secondary (12th)",
    stream: "Science (PCM)",
    college: "Vidya Niketan Inter College",
    year: "2018 - 2020",
    icon: "📚",
    description: "Scored 77.8 in UP Board examinations with distinction in Mathematics and Physics.",
    highlights: [
      "2nd School Topper in Mathematics",
      "Having a strong foundation in Physics and Chemistry",
      "Head of Student Council"
    ],
    color: "from-cyan-400 to-teal-600"
  },
  {
    degree: "Secondary (10th)",
    stream: "General Education",
    college: "Kameshwar Intermediate College",
    year: "Completed in 2018",
    icon: "🏫",
    description: "Achieved 85.50% in UP Board examinations with A1 grade in all subjects.",
    highlights: [
      "Perfect score in Mathematics and Science",
      "Winner of Inter-School Quiz Competition",
      "Active participant in STEM workshops"
    ],
    color: "from-amber-400 to-orange-500"
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  return (
    <section 
      id="education" 
      className="relative bg-gray-950 text-white py-20 px-4 scroll-mt-20 overflow-hidden"
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
            ACADEMIC JOURNEY
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              My Education
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
            The foundation of my technical expertise and problem-solving skills
          </p>
        </motion.div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 h-full w-1.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-amber-400 rounded-full z-0 transform -translate-x-1/2"></div>
            
            <div className="relative z-10 space-y-16">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : ""}
                  variants={cardVariants}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Education Card */}
                  <div className={`w-full max-w-md xl:max-w-lg rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 group ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 hover:bg-gray-900/90 transition-all duration-300">
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${edu.color} opacity-10 transform rotate-45 origin-bottom-left backdrop-blur-sm`}></div>
                      </div>
                      
                      {/* Header */}
                      <div className="flex items-start gap-5 mb-6">
                        <div className={`text-4xl p-3 bg-gradient-to-r ${edu.color} bg-opacity-10 rounded-lg border border-gray-800 group-hover:border-cyan-400/50 transition-colors`}>
                          {edu.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          <p className="text-cyan-400 font-medium">{edu.stream}</p>
                        </div>
                      </div>
                      
                      {/* College and year */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                          <span className="text-gray-300">{edu.college}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span className="text-gray-300">{edu.year}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-300 mb-6">{edu.description}</p>
                      
                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Key Achievements</h4>
                        <ul className="space-y-3">
                          {edu.highlights.map((highlight, i) => (
                            <motion.li 
                              key={i}
                              className="flex items-start gap-3"
                              whileHover={{ x: 5 }}
                            >
                              <svg className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-gray-300">{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 top-8 w-8 h-8 rounded-full bg-gradient-to-r ${edu.color} border-4 border-gray-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 transform -translate-x-1/2 z-10 group-hover:scale-110 transition-transform`}>
                    <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden">
          <div className="relative pl-10">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 h-full w-1.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-amber-400 rounded-full z-0"></div>
            
            <div className="relative z-10 space-y-10">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : ""}
                  variants={cardVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} border-4 border-gray-950 flex items-center justify-center shadow-lg shadow-cyan-500/30 transform -translate-x-1/2 z-10`}>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  </div>
                  
                  {/* Education Card */}
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 ml-6">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-5">
                        <div className={`text-3xl p-2 bg-gradient-to-r ${edu.color} bg-opacity-10 rounded-lg border border-gray-800`}>
                          {edu.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                          <p className="text-cyan-400 text-sm font-medium">{edu.stream}</p>
                        </div>
                      </div>
                      
                      {/* College and year */}
                      <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                          <span className="text-sm text-gray-300">{edu.college}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <span className="text-sm text-gray-300">{edu.year}</span>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-300 mb-5">{edu.description}</p>
                      
                      {/* Highlights */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Key Achievements</h4>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <svg className="w-3 h-3 mt-0.5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              <span className="text-xs text-gray-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
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

export default Education;