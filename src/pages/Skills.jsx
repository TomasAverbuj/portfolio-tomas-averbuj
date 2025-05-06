import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Vue.js", "React", "Vite"],
  },
  {
    category: "Backend",
    skills: ["PHP", "Node.js", "APIs REST", "MongoDB", "Firebase"],
  },
  {
    category: "Diseño y Herramientas",
    skills: ["Illustrator", "Photoshop", "Figma", "CapCut", "Canvas API"],
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
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#4fd1c5] mb-10">
          Mis Habilidades
        </h1>

        {/* Contenedor de solapas con borde inferior */}
        <div className="flex justify-center border-b border-gray-600 mb-8">
          {skillsData.map((skillSet) => (
            <button
              key={skillSet.category}
              onClick={() => setActiveTab(skillSet.category)}
              className={`px-6 py-3 text-lg font-medium transition-all duration-300 rounded-t-lg ${
                activeTab === skillSet.category
                  ? "bg-[#3a3a3a] text-[#4fd1c5] border-b-2 border-[#4fd1c5]"
                  : "bg-transparent text-[#e2e2e2] hover:text-[#4fd1c5]"
              }`}
            >
              {skillSet.category}
            </button>
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
                  <h2 className="text-2xl font-semibold text-[#4fd1c5] mb-4">
                    {skillSet.category}
                  </h2>
                  <ul className="list-disc list-inside text-[#e2e2e2] text-lg">
                    {skillSet.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;