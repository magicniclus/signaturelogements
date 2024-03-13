"use client";

import Image from "next/image";
import Button from "./Button";

import gsap from "gsap";

import { useEffect } from "react";

interface NavProps {
  nav: boolean;
}

const Nav = ({ nav }: NavProps) => {
  gsap.set(".header", { y: -50, opacity: 0 });

  useEffect(() => {
    gsap.fromTo(
      ".header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <header className="w-full header">
      <div className="max-w-7xl px-4 py-5 flex lg:justify-between justify-center mx-auto">
        <a href="/">
          <Image src="/logos/logo.png" alt="logo" width={250} height={80} />
        </a>
        {nav && (
          <div className="flex items-center lg:flex hidden">
            <nav className=" px-4 py-2 bg-bluePrimary text-white rounded-full mr-5">
              <ul className="flex space-x-4">
                <li className="">
                  <a href="#atlantique">Côté atlantique</a>
                </li>
                <li className="mr-4">
                  <a href="#adresses">Les adresses</a>
                </li>
                <li className="mr-4">
                  <a href="#adresses">Les logements</a>
                </li>
                <li>
                  <a href="#engagement">Nos engagements</a>
                </li>
              </ul>
            </nav>
            <Button
              href="#form"
              value="Contactez-moi"
              className="bg-orange text-white max-h-[50px]"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
