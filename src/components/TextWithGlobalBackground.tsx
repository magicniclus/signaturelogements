"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

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
    <section className="w-full bg-[url('/images/interieur.jpg')] bg-no-repeat bg-cover bg-center mt-16 text-with-global-background overflow-hidden">
      <div className="max-w-7xl w-full mx-auto flex md:flex-row flex-col h-full">
        <div className="w-full md:w-6/12 h-full bg-bluePrimary py-28 px-16 ">
          <h2 className="text-white w-full text-[40px] font-bold leading-[50px] text-with-global-background-container">
            Des volumes généreux
            <span className="text-greenPrimary"> et ouverts sur la nature</span>
          </h2>
          <p className="text-start text-white text-[20px] ml-1 mt-7 text-with-global-background-container">
            Des espaces de vie confortables qui proposent une{" "}
            <b>double voire triple orientation</b>, ainsi que de{" "}
            <b>larges ouvertures</b> pour un quotidien baigné de lumière
            naturelle.
          </p>
          <p className="text-start text-white text-[20px] ml-1 mt-5 text-with-global-background-container">
            Ambiance bord de mer ou plus contemporaine, laissez libre court à
            votre imagination dans ces logements conçus pour accueillir{" "}
            <b>tous types d’usages</b> : retour de plage, dressing, salle de
            sport, télétravail, salle de jeux, bibliothèque, extérieurs
            privatifs intimistes…
          </p>
        </div>
        <div className="md:hidden flex bg-[url('/images/interieur.jpg')] bg-no-repeat bg-cover bg-center min-h-[550px] w-full"></div>
      </div>
    </section>
  );
};

export default TextWithGlobalBackground;
