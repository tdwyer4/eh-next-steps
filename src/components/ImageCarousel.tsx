import React, { useState, useEffect, useRef } from "react";
import styles from "./ImageCarousel.module.css";
import images from "../images";

type Card = {
  id: number;
  imgSrc: string;
};

function Carousel() {
  const [cards, setCards] = useState<Card[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPos = window.scrollY;
      const initialTransform = `translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)`;
      const zOffset = scrollPos * 0.5;
      sliderRef.current.style.transform = `${initialTransform} translateY(${zOffset}px)`;
    }
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = "15%";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = "0%";
  };

  useEffect(() => {
    const newCards = images.map((img, index) => ({
      id: index + 1,
      imgSrc: img,
    }));

    setCards(newCards);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.slider} ref={sliderRef}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={styles.card}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={card.imgSrc} alt={`img${card.id}`} />
        </div>
      ))}
    </div>
  );
}

export default Carousel;
