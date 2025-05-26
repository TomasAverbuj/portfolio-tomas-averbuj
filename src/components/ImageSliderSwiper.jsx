import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Importamos los módulos necesarios
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const images = [
  "/images/haras-abril.png",
  "/images/mariu-cestau.png",
  "/images/escoplay.png",
  "/images/surmarchands.png",
  "/images/logo-pokedex-tarjeta.jpg",
  // "/images/icono-levelear-portfolio.jpg", // Comentado temporalmente
  "/images/logo-galeria-admilink.jpg",
];

const ImageSliderSwiper = () => {
  return (
    <div className="w-full overflow-x-hidden bg-[#121212]">
      <div className="mx-auto max-w-[100vw] px-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          initialSlide={1}
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
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="max-w-[300px] md:max-w-[400px]">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] md:h-[500px] object-cover object-top rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
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