import React from "react";
import { useState, useEffect } from "react";

import NextArrow from "./svgComponents/icons/NextArrow";
import Button from "./layout/utilities/Button";
import PhotoIcon from "./svgComponents/icons/PhotoIcon";

import styles from "./ImageSlider.module.css";

const ImageSlider = ({ galleryData, dimensions }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const gallerySize = galleryData.length;
  const slideDuration = 6000;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === gallerySize - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? gallerySize - 1 : prev - 1));
  };

  //auto scroll
  useEffect(() => {
    let slideInterval = setInterval(nextSlide, slideDuration);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentSlide]);

  return (
    <div className={`${styles.slider} ${dimensions}`}>
      <Button
        className={`${styles.button} ${styles.prev}`}
        onClick={previousSlide}
      >
        <NextArrow
          className={`${styles.arrow} ${styles.scaleX}`}
          color="white"
        />
      </Button>
      <Button className={`${styles.button} ${styles.next}`} onClick={nextSlide}>
        <NextArrow className={styles.arrow} color="white" />
      </Button>
      {galleryData.map((slidePath, index) => {
        return (
          <img
            src={slidePath}
            alt="galeria Wiatr od Morza"
            className={`${styles.slide} ${
              index === currentSlide && styles.current
            }`}
            key={index}
          />
        );
      })}
      <div className={styles.photoData}>
        <PhotoIcon className={styles.photoIcon} color="white" />
        <p>{`${currentSlide + 1} / ${gallerySize}`}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
