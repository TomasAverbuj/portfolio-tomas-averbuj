import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { projects as projectsData } from "../pages/Projects";

// Importamos los módulos necesarios
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const sliderProjects = [
  { image: "/images/haras-abril.png", id: 3 },
  { image: "/images/mariu-cestau.png", id: 2 },
  { image: "/images/escoplay.png", id: 4 },
  { image: "/images/surmarchands.png", id: 1 },
  { image: "/images/logo-pokedex-tarjeta.jpg", id: 6 },
  { image: "/images/logo-galeria-admilink.jpg", id: 7 },
];

const ImageSliderSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(1); // 1 porque initialSlide es 1
  return (
    <div className="w-full overflow-x-hidden bg-[#121212]">
      <div className="mx-auto max-w-[1200px] px-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          initialSlide={1}
          loop={true}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {sliderProjects.map((project, index) => (
            <SwiperSlide key={index} className="max-w-[300px] md:max-w-[400px] flex flex-col items-center">
              <img
                src={project.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] md:h-[500px] object-cover object-top rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center mt-8 overflow-x-hidden z-0">
          <Link
            to={`/project/${sliderProjects[activeIndex]?.id}`}
            className="w-full md:w-auto text-center px-5 py-2 sm:px-8 sm:py-4 bg-[#4fd1c5] text-black font-semibold rounded-full hover:bg-[#38b2ac] transition text-sm sm:text-base"
          >
            Ver proyecto
          </Link>
          <Link
            to="/projects"
            className="w-full md:w-auto text-center px-5 py-2 sm:px-8 sm:py-4 border-2 border-[#4fd1c5] text-[#4fd1c5] font-semibold rounded-full hover:bg-[#4fd1c5] hover:text-black transition text-sm sm:text-base"
          >
            Ver todos los proyectos
          </Link>
        </div>
     
      </div>

      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
          background-color: #000;
        }

        .swiper {
          padding-bottom: 2rem;
        }

        .swiper-pagination-bullet {
          display: none;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          display: none;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ImageSliderSwiper;