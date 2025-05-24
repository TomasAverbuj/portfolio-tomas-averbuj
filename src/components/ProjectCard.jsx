import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

export default function ProjectCard({ project }) {
  const images = project?.images || [];

  return (
    <div className="flex flex-col md:flex-row items-center w-full bg-[#2a2a2a] rounded-2xl shadow-xl min-h-[520px] p-4 md:p-8">
      <div className="w-full md:w-1/2 h-[480px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-full max-w-[340px] h-full"
        >
          {images.length > 0 ? (
            images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center bg-gray-600 text-[#e2e2e2] rounded-2xl">
                Sin imágenes
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-semibold text-[#4fd1c5] mb-4">{project.title}</h3>
        <p className="text-[#e2e2e2] mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies?.map((tech, index) => (
            <span
              key={index}
              className="bg-[#4fd1c5] text-black px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          to={`/project/${project.id}`}
          className="inline-block bg-[#4fd1c5] text-black font-semibold px-4 py-2 md:px-4 md:py-2 md:text-base rounded-lg transition-all duration-200 w-full md:w-auto md:self-start"
        >
          Ver detalles
        </Link>
      </div>

      <style jsx>{`
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
