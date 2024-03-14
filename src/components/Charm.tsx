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
      <div className="max-w-7xl mx-auto md:rounded-lg md:mt-20 flex min-h-[526px] overflow-hidden md:flex-row flex-col">
        <div className="md:w-1/2 w-full py-10 px-8 bg-greenPrimary flex flex-col justify-between">
          <h2 className="text-[40px] font-bold text-white charm-text">
            Tombez sous le charme des{" "}
            <span className="text-bluePrimary">joyaux de l’atlantique</span>{" "}
          </h2>
          <ul className="mt-5 ml-5 charm-text">
            <li className="text-[20px] text-white list-disc mt-2">
              La Côte de beauté à Breuillet, commune de
              <span className="font-bold">Royan Atlantique</span>, située entre
              estuaire et océan,
            </li>
            <li className="text-[20px] text-white list-disc mt-2">
              Le <span className="font-bold">Bassin d’Arcachon</span>, ses ports
              ostréicoles à Gujan-Mestras et sa presque’île à Lège-Cap Ferret,
            </li>
            <li className="text-[20px] text-white list-disc mt-2">
              La Côte <span className="font-bold">Médoc Atlantique</span> entre
              lacs et dunes de sables sculptées par les vagues à Lacanau et
              Carcans.
            </li>
          </ul>
          <Button
            value="Je me renseigne"
            className="bg-bluePrimary text-white mt-10 px-10 py-3 max-w-max charm-text"
            href="#form"
          />
        </div>
        <div className="md:w-1/2 w-full bg-[url('/images/FAMILLE-PLAGE.jpg')] bg-no-repeat bg-cover bg-center min-h-max"></div>
      </div>
    </section>
  );
};

export default Charm;
