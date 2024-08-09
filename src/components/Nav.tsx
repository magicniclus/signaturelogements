"use client";

import Image from "next/image";
import Button from "./Button";

import gsap from "gsap";

import { useEffect } from "react";

interface NavProps {
  nav: boolean;
}

const Nav = ({ nav }: NavProps) => {
  useEffect(() => {
    const headerElement = document.querySelector(".header");

    gsap.set("headerElement", { y: -50, opacity: 0 });
    if (headerElement) {
      gsap.fromTo(
        headerElement,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <header className="w-full header">
      <div className="px-4 md:px-7 py-10 flex lg:justify-between justify-center mx-auto">
        <a href="/">
          <Image src="/logos/logo.png" alt="logo" width={250} height={80} />
        </a>
        {nav && (
          <div className="flex items-center lg:flex hidden">
            <nav className=" px-[25px] py-[15px] bg-bluePrimary text-white rounded-full mr-5">
              <ul className="flex space-x-10 font-larsseit text-[22px] font-light">
                <li className=" hover:text-yellowPrimary transition duration-150 ease-in-out">
                  <a href="#atlantique">Ventes privilèges</a>
                </li>
                <li className="mr-4 hover:text-yellowPrimary transition duration-150 ease-in-out">
                  <a href="#residence">La résidence</a>
                </li>
                <li className="mr-4 hover:text-yellowPrimary transition duration-150 ease-in-out">
                  <a href="#residence">Les appartements</a>
                </li>
                <li className=" hover:text-yellowPrimary transition duration-150 ease-in-out">
                  <a href="#volumes">Carcans</a>
                </li>
              </ul>
            </nav>
            <Button
              href="#form"
              value="Contactez-moi"
              className="bg-orange text-white px-[25px] py-[15px] font-larsseit text-[22px] font-light"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
