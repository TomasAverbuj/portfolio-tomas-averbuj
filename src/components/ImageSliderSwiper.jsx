import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Importamos los módulos necesarios
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const images = [
  "/haras-abril.png",
  "/mariu-cestau.png",
  "/escoplay.png",
  "/surmarchands.png",
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
          initialSlide={1} // Comenzar desde la segunda imagen (índice 1)
          autoplay={{
            delay: 15000, // Cambiar cada 15 segundos (15000 ms)
            disableOnInteraction: false, // No detener el autoplay al interactuar
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
          modules={[EffectCoverflow, Pagination, Autoplay]} // Añadimos Autoplay a los módulos
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="max-w-xs flex items-start">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 md:h-100 object-top object-cover rounded-xl"
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