"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { writeUserData } from "../firebase/datamanager";

import gsap from "gsap";

const Hero = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
  };

  useEffect(() => {
    gsap.set(".hero", { opacity: 0 });
    gsap.fromTo(
      ".hero",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out", delay: 1 }
    );
  }, []);

  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting:", { email, isCheckboxChecked });
    const userId = Date.now().toString();
    writeUserData(email, userId)
      .then((response) => {
        console.log(response);
        route.push("/merci");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    const emailValue = (e.target as HTMLInputElement).value;
    setEmail(emailValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(emailValue));
  };

  return (
    <section className="w-full md:bg-[url('/images/vague.png')] bg-no-repeat bg-cover bg-bottom flex flex-col relative hero overflow-hidden">
      <div className="md:hidden flex h-[1000px] bg-[url('/images/vagueBig.png')] bg-no-repeat bg-cover bg-top"></div>
      <div className="max-w-7xl md:px-4 min-h-[667px] flex justify-center items-end mx-auto w-full md:relative absolute -bottom-0">
        <form
          id="form"
          onSubmit={handleSubmit}
          className="bg-bluePrimary rounded-t-full md:rounded-full p-5 flex w-full md:w-[522px] md:h-[522px] max-w-full flex-col items-center text-center relative"
        >
          <h1 className="text-[40px] md:text-[55px] text-center text-white leading-[50px] mt-14 md:mt-5">
            Devenez <br /> propriétaire <br />{" "}
            <span className="text-[30px] font-light">sur la</span> <br />{" "}
            <span className="text-greenPrimary text-[45px] md:text-[60px] font-semibold">
              Côte Atlantique
            </span>
          </h1>
          <h2 className="font-bold text-[21px] text-white mt-3">
            Besoin de renseignements ?
          </h2>
          <p className="text-white text-[20px] leading-[20px] mb-3">
            On vous recontacte !
          </p>
          <input
            type="text"
            placeholder="Email"
            className="p-3 rounded-full w-[290px] md:w-[342px] rounded-lg mt-3 h-[33px]"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="flex mb-5 md:mb-20 items-start mt-3 max-w-[70%]">
            <input
              type="checkbox"
              className="bg-white mt-0.5 text-[15px]"
              onChange={handleCheckboxChange}
            />
            <p className="text-start text-white text-[12px] ml-1">
              J’accepte de recevoir par email des informations de la part de
              Signature Promotion.
            </p>
          </div>
          <button
            type="submit"
            disabled={!isEmailValid}
            className="p-5 rounded-full border border-white flex justify-center items-center bg-orange text-white mb-10 px-10 w-[290px] md:min-w-[342px] md:px-16 text-[20px] md:hidden flex"
          >
            Je veux être contacté
          </button>
          <button
            type="submit"
            disabled={!isEmailValid}
            className="p-5 rounded-full border border-white flex justify-center items-center bg-orange text-white absolute bottom-[-0px] px-16 text-[30px] md:flex hidden"
          >
            Je veux être contacté
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
