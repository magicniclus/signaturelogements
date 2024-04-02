"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";

const Avantages = () => {
  useEffect(() => {
    gsap.set(".avantages-container", { y: -50, opacity: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.out" },
      scrollTrigger: {
        trigger: ".avantages",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
      },
    });
    tl.fromTo(
      ".avantages-container",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="w-full avantages overflow-hidden" id="engagement">
      <div className="max-w-7xl mx-auto py-16 px-7 flex items-center flex-col avantages-container">
        <Image src="/logos/logoBig.png" width={412} height={100} alt="logo" />
        <h2 className="text-bluePrimary w-full text-[40px] font-bold text-center w-9/12 mt-10">
          Le sur-mesure{" "}
          <span className="text-greenPrimary">
            plutôt que le tout identique pour
          </span>{" "}
          satisfaire nos clients propriétaires
        </h2>
        <div className="w-full flex justify-around items-center mt-16 md:flex-row flex-col">
          <div className="flex flex-col items-center">
            <div className="p-5 rounded-full bg-bluePrimary flex justify-center items-center h-[100px] w-[100px]">
              <Image src="/icons/hand.png" width={60} height={60} alt="house" />
            </div>
            <div className="mt-3">
              <h3 className="text-bluePrimary text-center">
                Un acteur <br />
                <b>DE PROXIMITÉ</b>
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center md:mt-0 mt-7">
            <div className="p-5 rounded-full bg-bluePrimary flex justify-center items-center h-[100px] w-[100px]">
              <Image src="/icons/hand.png" width={60} height={60} alt="house" />
            </div>
            <div className="mt-3">
              <h3 className="text-bluePrimary text-center">
                Des architectures pour <br />
                <b>VIVRE HEUREUX</b>
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center md:mt-0 mt-7">
            <div className="p-5 rounded-full bg-bluePrimary flex justify-center items-center h-[100px] w-[100px]">
              <Image
                src="/icons/smiley.png"
                width={60}
                height={60}
                alt="house"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-bluePrimary text-center">
                Une construction <br />
                <b>DURABLE</b>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avantages;
