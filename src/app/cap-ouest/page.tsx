"use client";

import Avantages from "@/components/Avantages";
import Carousel from "@/components/Carousel";
import CarouselTwo from "@/components/CarouselTwo";
import Charm from "@/components/Charm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Testimonial from "@/components/Testimonial";
import TextWithGlobalBackground from "@/components/TextWithGlobalBackground";
import Visite from "@/components/Visite";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.matches("a[href^='#']")) {
        event.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <>
      <Nav nav={true} />
      <main className="font-larsseit">
        <Hero />
        <Charm />
        <Visite />
        <div className="hidden md:block">
          <Carousel />
        </div>
        <div className="block md:hidden">
          <CarouselTwo />
        </div>
        <TextWithGlobalBackground />
        <Testimonial />
        <Avantages />
      </main>
      <Footer />
    </>
  );
}
