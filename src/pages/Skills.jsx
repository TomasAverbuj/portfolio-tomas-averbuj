import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Vue.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Vite", level: 80 }
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "PHP", level: 70 },
      { name: "APIs REST", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "Firebase", level: 75 },
      { name: "Express", level: 75 }
    ],
  },
  {
    category: "Diseño y Herramientas",
    skills: [
      { name: "WordPress", level: 85 },
      { name: "WooCommerce", level: 80 },
      { name: "Figma", level: 85 },
      { name: "Photoshop", level: 80 },
      { name: "Illustrator", level: 75 },
      { name: "CapCut", level: 85 },
      { name: "Git/GitHub", level: 80 }
    ],
  },
];

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState(skillsData[0].category);

  return (
    <section id="skills" className="min-h-screen w-full bg-[#1e1e1e] text-white py-20 px-4 flex items-center justify-center">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#4fd1c5] mb-10"
        >
          Mis Habilidades
        </motion.h1>

        {/* Contenedor de solapas con borde inferior */}
        <div className="flex justify-center border-b border-gray-600 mb-8">
          {skillsData.map((skillSet) => (
            <motion.button
              key={skillSet.category}
              onClick={() => setActiveTab(skillSet.category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-lg font-medium transition-all duration-300 rounded-t-lg ${
                activeTab === skillSet.category
                  ? "bg-[#3a3a3a] text-[#4fd1c5] border-b-2 border-[#4fd1c5]"
                  : "bg-transparent text-[#e2e2e2] hover:text-[#4fd1c5]"
              }`}
            >
              {skillSet.category}
            </motion.button>
          ))}
        </div>

        {/* Contenido de la solapa activa */}
        <AnimatePresence mode="wait">
          {skillsData.map(
            (skillSet) =>
              skillSet.category === activeTab && (
                <motion.div
                  key={skillSet.category}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={tabVariants}
                  className="w-full bg-[#2a2a2a] p-8 rounded-2xl shadow-lg"
                >
                  <h2 className="text-2xl font-semibold text-[#4fd1c5] mb-6">
                    {skillSet.category}
                  </h2>
                  <div className="space-y-4">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[#e2e2e2] text-lg">{skill.name}</span>
                          <span className="text-[#4fd1c5]">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-[#3a3a3a] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="h-full bg-[#4fd1c5] rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;