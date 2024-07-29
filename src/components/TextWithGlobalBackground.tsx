"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const TextWithGlobalBackground = () => {
  useEffect(() => {
    gsap.set(".text-with-global-background-container", { y: -50, opacity: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.out" },
      scrollTrigger: {
        trigger: ".text-with-global-background",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
      },
    });
    tl.fromTo(
      ".text-with-global-background-container",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);
  return (
    <section
      id="volumes"
      className="w-full bg-[url('/images/cabaneblue.png')] bg-no-repeat bg-cover bg-center mt-16 text-with-global-background overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto flex md:flex-row flex-col h-full">
        <div className="w-full md:w-6/12 h-full bg-bluePrimary py-28 px-10 md:px-16 ">
          <h2 className="text-white w-full text-[40px] font-bold leading-[50px] text-with-global-background-container">
            Carcans, ville nature et vie de village
          </h2>
          <p className="text-start text-white text-[20px] ml-1 mt-7 text-with-global-background-container">
            Seulement 50 kilomètres séparent le coeur battant de la « Presqu’île
            médocaine », de la métropole bordelaise, mais le dépaysement est
            total !
          </p>
          <p className="text-start text-white text-[20px] ml-1 mt-5 text-with-global-background-container">
            Ruban de sable fin face aux déferlantes de l’océan, parfums de
            résine et de bruyères à l’ombre des pinèdes, quiétude de son lac
            immense… Carcans éveille les sens au rythme d’une nature généreuse
            et préservée.
          </p>
          <p className="text-start text-white text-[20px] ml-1 mt-5 text-with-global-background-container">
            Côté centre-bourg, Carcans se révèle pratique et vivant avec tout à
            portée de main.
          </p>
          <Button
            value="Découvrir l’adresse"
            className="bg-orange text-white mt-5 px-10 py-3 max-w-max charm-text border border-white"
            href="#form"
          />
        </div>
        <div className="md:hidden flex bg-[url('/images/interieur.jpg')] bg-no-repeat bg-cover bg-center min-h-[550px] w-full"></div>
      </div>
    </section>
  );
};

export default TextWithGlobalBackground;
