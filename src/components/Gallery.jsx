import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Gallery = ({ images = [] }) => {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(images[0] || ""); // Imagen inicial
  const [currentIndex, setCurrentIndex] = useState(0); // Índice de la imagen actual

  // Si gallery está vacío, podemos manejarlo de alguna manera
  if (images.length === 0) {
    return <div>No hay imágenes para mostrar.</div>; // O cualquier mensaje de fallback
  }

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
    setLightboxImage("");
  };

  const selectImage = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
  };

  // Cambiar imágenes automáticamente
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length; // Ir al siguiente índice (circular)
      setSelectedImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 5000); // Cambiar imagen cada 5 segundos

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(timer);
  }, [currentIndex, images]);

  return (
    <section className="py-4 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <div className="mb-16"></div>
        <div className="flex flex-col lg:flex-row gap-8 mx-auto">
          {/* Imagen Principal */}
          <div className="box w-full gallery lg:w-[1062px]">
            <div className="swiper main-slide-carousel swiper-container relative">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="block w-full mx-auto h-[300px] sm:h-[400px] lg:h-[627px] rounded-3xl overflow-hidden">
                    <img
                      src={selectedImage} // Mostrar la imagen seleccionada
                      alt="Selected gallery item"
                      className="gallery-image w-full h-full mx-auto rounded-3xl object-cover opacity-0 transition-opacity duration-1000 ease-in-out" // Transición de opacidad
                      style={{ opacity: 1 }} // Cambiar opacidad para el desvanecimiento
                      onClick={() => openLightbox(selectedImage)} // Abrir el lightbox con la imagen seleccionada
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="nav-for-slider lg:w-[126px] w-full grid grid-cols-4 gap-4 sm:gap-6 sm:grid-cols-4 lg:flex lg:flex-col">
            {images.map((image, index) => (
              <div
                key={index}
                className={`thumbs-slide w-full h-[80px] sm:h-[100px] lg:!w-[126px] lg:!h-[135px] ${
                  currentIndex === index ? "border-indigo-600" : "border-gray-200"
                }`}
              >
                <img
                  src={image} // Usar la ruta de la imagen
                  alt={`Thumbnail item ${index + 1}`}
                  className={`gallery-image w-full cursor-pointer h-full rounded-2xl border-2 transition-all duration-500 ${
                    currentIndex === index
                      ? "border-indigo-600"
                      : "hover:border-indigo-600"
                  } object-cover`}
                  onClick={() => selectImage(image, index)} // Cambiar la imagen principal al hacer clic
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxVisible && (
          <div
            className="lightbox fixed z-50 inset-0 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <span
              className="close text-white text-3xl absolute top-5 right-10 cursor-pointer"
              onClick={closeLightbox}
            >
              &times;
            </span>
            <img
              src={lightboxImage}
              alt="Lightbox item"
              className="lightbox-image max-w-full max-h-full"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
