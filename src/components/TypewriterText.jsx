import React, { useState, useEffect } from 'react';

const TypewriterText = () => {
  const roles = [
    "Desarrollador Web",
     "Front End Developer",
    "Back End Developer",
    "Diseñador Web",
   
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false); // Inicia el fade out
      
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsVisible(true); // Inicia el fade in con el nuevo texto
      }, 500); // Espera a que termine el fade out
      
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[1.2em] overflow-hidden">
      <span 
        className={`
          text-white
          transition-all duration-500 ease-in-out
          block
          ${isVisible 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform -translate-y-full'}
        `}
      >
        {roles[currentRoleIndex]}
      </span>
    </div>
  );
};

export default TypewriterText; 