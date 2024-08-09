/* eslint-disable @next/next/no-img-element */
// components/Carousel.tsx
"use client";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";

const styles = {
  carousel: {
    position: "relative",
    width: "100%",
    height: "506px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  } as React.CSSProperties,
  image: {
    width: "725px",
    height: "506px",
    objectFit: "cover",
  } as React.CSSProperties,
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  } as React.CSSProperties,
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    cursor: "pointer",
    margin: "0 5px",
  } as React.CSSProperties,
  title: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "24px",
  } as React.CSSProperties,
  button: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#00d1b2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    textDecoration: "none",
    marginBottom: "20px",
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
    <div className="mt-16 px-4">
      <div className="flex flex-col items-center text-[#FCAF43]">
        <div style={styles.title}>{images[currentIndex].title}</div>
        <Button
          value="En savoir plus"
          className="bg-bluePrimary text-white mt-3 px-10 py-8 text-[22px] max-w-max charm-text hover:text-[#1D2749]"
          href="#form"
        />
      </div>
      <div style={styles.carousel} className="mt-10">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          className={classNames({
            "w-[725px] max-w-[95vw] rounded-md h-[506px] object-cover rounded-lg":
              true,
            "md:w-[90vw] rounded-lg": true,
          })}
        />
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
