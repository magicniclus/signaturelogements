/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import Button from "./Button";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Charm = () => {
  useEffect(() => {
    gsap.set(".charm-text", { y: -50, opacity: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.out" },
      scrollTrigger: {
        trigger: ".charm-container",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
      },
    });
    tl.fromTo(
      ".charm-text",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section
      className="w-full md:px-7 charm-container overflow-hidden"
      id="atlantique"
    >
      <div className="max-w-7xl mx-auto md:rounded-lg md:mt-20 flex md:min-h-[926px] overflow-hidden md:flex-row flex-col">
        <div className="md:w-1/2 w-full py-10 px-8 bg-[#FCAF43] flex flex-col justify-between">
          <h2 className="text-[43px] font-bold text-white charm-text">
            Journées privilèges les 13 et 14 sept. 2024
          </h2>
          <ul className="mt-5 md:ml-5 charm-text">
            <li className="text-[24px] text-white list-none mt-2">
              &gt; Large choix d’appartements
            </li>
            <li className="text-[24px] text-white list-none mt-2">
              &gt; Remise exceptionnelle de -10%
            </li>
            <li className="text-[24px] text-white list-none mt-2">
              &gt; Frais de notaire offerts
            </li>
          </ul>
          <p className="mt-5 md:ml-5 charm-text text-[24px] text-white">
            pour les 12 premiers réservataires. Premiers arrivés, premiers
            servis, contactez-nous au plus vite !
          </p>
          <div className="w-full md:min-w-[110%] flex flex-col">
            <div className="flex justify-between flex-col md:flex-row mt-7">
              <div className="w-full md:w-[48%] bg-white flex flex-col items-center justify-between text-bluePrimary px-3 py-1 rounded-xl">
                <p className="text-[25px]">1 pièce à partir de</p>
                <h2 className="font-bold text-[48px]">130 150 €*</h2>
              </div>
              <div className="w-full md:w-[48%] mt-3 md:mt-0 bg-white flex flex-col items-center justify-between text-orange relative px-3 py-1 rounded-xl">
                <img
                  src="/icons/closered.png"
                  alt="closed"
                  className="w-[201px] absolute h-auto -top-2"
                />
                <p className="text-[25px]">au lieu de</p>
                <h2 className="font-bold text-[48px]">149 100 €*</h2>
              </div>
            </div>
            <div className="flex  justify-between flex-col md:flex-row mt-7">
              <div className="w-full md:w-[48%] bg-white flex flex-col items-center justify-between text-bluePrimary px-3 py-1 rounded-xl">
                <p className="text-[25px]">2 pièces à partir de</p>
                <h2 className="font-bold text-[48px]">153 900 €*</h2>
              </div>
              <div className="w-full md:w-[48%] mt-3 md:mt-0 bg-white flex flex-col items-center justify-between text-orange relative px-3 py-1 rounded-xl">
                <img
                  src="/icons/closered.png"
                  alt="closed"
                  className="w-[201px] absolute h-auto -top-2"
                />
                <p className="text-[25px]">au lieu de</p>
                <h2 className="font-bold text-[48px]">175 350 €*</h2>
              </div>
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-7">
              <div className="w-full md:w-[48%] bg-white flex flex-col items-center justify-between text-bluePrimary px-3 py-1 rounded-xl">
                <p className="text-[25px]">3 pièces à partir de</p>
                <h2 className="font-bold text-[48px]">218 500 €*</h2>
              </div>
              <div className="w-full md:w-[48%] mt-3 md:mt-0 bg-white flex flex-col items-center justify-between text-orange relative px-3 py-1 rounded-xl">
                <img
                  src="/icons/closered.png"
                  alt="closed"
                  className="w-[201px] absolute h-auto -top-2"
                />
                <p className="text-[25px]">au lieu de</p>
                <h2 className="font-bold text-[48px]">241 500 €*</h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <Button
              value="Je me renseigne"
              className="bg-bluePrimary text-white mt-10 px-10 py-8 text-[22px] max-w-max charm-text hover:text-[#1D2749]"
              href="#form"
            />
            <Button
              value="*Télécharger la grille"
              className="bg-bluePrimary text-white mt-10 px-10 py-8 text-[22px] max-w-max charm-text ml-0 md:ml-5 hover:text-[#1D2749]"
              href="#form"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full bg-[url('/images/family.png')] bg-no-repeat bg-cover bg-center min-h-max md:h-auto h-[800px]"></div>
      </div>
    </section>
  );
};

export default Charm;
