/* eslint-disable @next/next/no-img-element */
// components/Carousel.tsx
"use client";
import classNames from "classnames"; // Make sure you have the classNames package installed
import { useEffect, useRef, useState } from "react";
import Button from "./Button"; // Adjust the import according to your project structure

const styles = {
  carousel: {
    position: "relative",
    width: "100%",
    height: "506px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
  } as React.CSSProperties,
  slidesContainer: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    gap: "20px", // Add gap between slides
  } as React.CSSProperties,
  slide: {
    minWidth: "725px",
    height: "506px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    position: "relative", // Ensure positioning for captions
  } as React.CSSProperties,
  image: {
    width: "725px",
    maxWidth: "90vw",
    height: "506px",
    objectFit: "cover",
  } as React.CSSProperties,
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  } as React.CSSProperties,
  title: {
    fontSize: "24px",
    color: "#FCAF43",
  } as React.CSSProperties,
  button: {
    backgroundColor: "#00d1b2",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  } as React.CSSProperties,
};

type Image = {
  src: string;
  title: string;
};

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images: Image[] = [
    {
      src: "/images/cuisine.png",
      title: "ESPACES EXTÉRIEURS POUR TOUS",
    },
    {
      src: "/images/exterieur.png",
      title: "DIFFÉRENTS AGENCEMENTS DE 1 À 3 PIÈCES",
    },
    {
      src: "/images/plage.png",
      title: "LOCALISATION EN CENTRE-BOURG",
    },
  ];

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startSlider();
    return () => {
      stopSlider();
    };
  }, []);

  const startSlider = () => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    stopSlider();
    startSlider();
  };

  return (
    <div className="mt-16">
      <div className="flex flex-col items-center text-[#FCAF43]">
        <div style={styles.title}>{images[currentIndex].title}</div>
        <Button
          value="En savoir plus"
          className="bg-bluePrimary text-white mt-3 px-10 py-3 max-w-max charm-text"
          href="#form"
        />
      </div>
      <div style={styles.carousel} className="mt-10">
        <div
          style={{
            ...styles.slidesContainer,
            transform: `translateX(calc(-${currentIndex} * (745px + 20px) + 50% - 362.5px))`, // Account for gap between slides and center the first image
          }}
        >
          {images.map((image, index) => (
            <div key={index} style={styles.slide}>
              <img src={image.src} alt={image.title} style={styles.image} />
            </div>
          ))}
        </div>
      </div>
      <div style={styles.dotsContainer}>
        {images.map((_, index) => (
          <span
            key={index}
            className={classNames(
              "w-2.5 h-2.5 rounded-full cursor-pointer mx-3",
              {
                "bg-bluePrimary": index === currentIndex,
                "bg-bluePrimary/50": index !== currentIndex,
              }
            )}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
