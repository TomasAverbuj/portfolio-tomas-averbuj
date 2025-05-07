import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = ({ images }) => {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, images]);

  return (
    <section className="py-4 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-5 lg:px-6">
        <div className="flex flex-col lg:flex-row gap-6 mx-auto">
          {/* Imagen Principal */}
          <div className="box w-full gallery lg:w-[800px]">
            <div className="relative">
              <div className="block w-full mx-auto h-[250px] sm:h-[350px] lg:h-[500px] rounded-2xl overflow-hidden">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={selectedImage}
                  alt="Selected gallery item"
                  className="gallery-image w-full h-full mx-auto rounded-2xl object-cover"
                  onClick={() => openLightbox(selectedImage)}
                />
              </div>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="nav-for-slider lg:w-[100px] w-full grid grid-cols-4 gap-3 sm:gap-4 sm:grid-cols-4 lg:flex lg:flex-col">
            {images.map((src, index) => (
              <div
                key={index}
                className={`thumbs-slide w-full h-[60px] sm:h-[80px] lg:!w-[100px] lg:!h-[110px] ${
                  currentIndex === index ? "border-indigo-600" : "border-gray-200"
                }`}
              >
                <img
                  src={src}
                  alt={`Thumbnail item ${index + 1}`}
                  className={`gallery-image w-full cursor-pointer h-full rounded-xl border-2 transition-all duration-300 ${
                    currentIndex === index
                      ? "border-indigo-600"
                      : "hover:border-indigo-600"
                  } object-cover`}
                  onClick={() => selectImage(src, index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lightbox fixed z-50 inset-0 bg-black bg-opacity-80 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <span
                className="close text-white text-3xl absolute top-5 right-10 cursor-pointer hover:text-gray-300 transition-colors"
                onClick={closeLightbox}
              >
                &times;
              </span>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                src={lightboxImage}
                alt="Lightbox item"
                className="lightbox-image max-w-full max-h-[90vh] object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
