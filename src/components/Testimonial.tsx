import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect } from "react";

// Charger dynamiquement le widget Immodvisor
const ImmodvisorWidget = dynamic(() => import("./ImmodvisorWidget"), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  useEffect(() => {
    // GSAP animations
    gsap.set(".carousel-content", { y: -100, opacity: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.out" },
      scrollTrigger: {
        trigger: ".carousel-contant-container",
        start: "top 80%",
        end: "top 50%",
      },
    });
    tl.fromTo(
      ".carousel-content",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="w-full carousel-contant-container overflow-hidden md:block hidden">
      <div className="max-w-7xl mx-auto py-16 px-7 md:px-0 flex items-center flex-col">
        <h2 className="text-[#1D2749] w-full text-[40px] font-bold text-center carousel-content">
          100%
          <span className="text-[#1D2749]">
            {" "}
            de nos clients nous recommandent
          </span>
        </h2>
        <div className="w-[90%] mt-10 carousel-content">
          {/* Widget container */}
          <ImmodvisorWidget />
        </div>
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
