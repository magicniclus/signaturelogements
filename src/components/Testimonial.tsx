"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const Testimonial = () => {
  useEffect(() => {
    gsap.set(".carousel-content", { y: -100, opacity: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.out" },
      scrollTrigger: {
        trigger: ".carousel-contant-container",
        start: "top 80%",
        end: "top 50%",
        // markers: true,
      },
    });
    tl.fromTo(
      ".carousel-content",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="w-full bg-greenPrimary carousel-contant-container overflow-hidden">
      <div className="max-w-7xl mx-auto py-16 px-7 md:px-0 flex items-center flex-col">
        <h2 className="text-white w-full text-[40px] font-bold text-center carousel-content">
          100%
          <span className="text-bluePrimary">
            {" "}
            de nos clients nous recommandent
          </span>
        </h2>
        <div className="w-[90%] mt-10 carousel-content">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="flex items-center justify-center">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">M</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « ACCUEUIL SYMPATHIQUE ET PROFESSIONNEL »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Entreprise très sérieuse Nous apprécions d’être tenus
                      informés régulièrement sur l’avancement des travaux Très
                      bon accueil à chaque rencontre avec un personnel très
                      compétent{" "}
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex items-center justify-center">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">L</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « Professionnel et compétent »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Très agréable accompagnement et travail qui nous convient
                      très bien. Merci.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex items-center justify-center carousel-content">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">G</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « Agence très compétente »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Bon accueil, personnel sérieux et professionnel, réponse
                      rapide à nos questions.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex items-center justify-center">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">I</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « BIEN »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Jusqu’à présent tout c’est très bien passé. Efficacité des
                      différentes personnes, cordialité… Le projet est bien
                      avancé dans les temps annoncés. L’organisation fonctionne
                      bien.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex items-center justify-center">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">M</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « ACCUEUIL SYMPATHIQUE ET PROFESSIONNEL »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Entreprise très sérieuse Nous apprécions d’être tenus
                      informés régulièrement sur l’avancement des travaux Très
                      bon accueil à chaque rencontre avec un personnel très
                      compétent{" "}
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex items-center justify-center">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">A</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « Professionnel et compétent »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Très agréable accompagnement et travail qui nous convient
                      très bien. Merci.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex mt-7 carousel-content">
          <StarIcon className="w-[24px] h-auto text-yellowPrimary" />
          <StarIcon className="w-[24px] h-auto text-yellowPrimary ml-2" />
          <StarIcon className="w-[24px] h-auto text-yellowPrimary ml-2" />
          <StarIcon className="w-[24px] h-auto text-yellowPrimary ml-2" />
          <StarIcon className="w-[24px] h-auto text-yellowPrimary ml-2" />
        </div>
        <p className="mt-3 text-bluePrimary text-[16px] text-center carousel-content">
          Visite cloisons, avis déposé le 23 novembre 2023
        </p>
        <Image
          src={"/images/seal.png"}
          width={121}
          height={121}
          alt="immodvisor"
          className="mt-5 carousel-content"
        />
      </div>
    </section>
  );
};

export default Testimonial;
