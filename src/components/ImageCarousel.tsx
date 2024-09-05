import React, { useState } from "react";
import styles from "./ImageCarousel.module.css";
import classNames from "classnames";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const nextSlide = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={classNames(styles.carouselItem, {
            [styles.active]: index === activeIndex,
          })}
          style={{ backgroundImage: `url(${image})` }}
        >
          <p>Image {index + 1}</p>
          <div />
        </div>
      ))}
      <button className={styles.prev} onClick={prevSlide}>
        ‹
      </button>
      <button className={styles.next} onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default Carousel;
