import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="w-full bg-bluePrimary">
      <div className="max-w-7xl mx-auto w-full py-16 px-7 flex justify-between items-center lg:flex-row flex-col h-full">
        <div className="flex flex-col">
          <Image
            src="/logos/logoWhite.png"
            alt="logo"
            width={432}
            height={80}
          />
          <p className="text-[20px] text-white mt-10">
            ©Signature Promotion 2024 |{" "}
            <a
              href="https://www.signature-promotion.fr/mentions-legales/"
              target="_blank"
            >
              Mentions légales
            </a>
          </p>
        </div>
        <div className="flex flex-col md:h-[180px] justify-between md:mt-0 mt-10 items-center">
          <p className="text-white text-[28px] font-bold text-center mt-10">
            Je veux être contacté
          </p>
          <Button
            href="#form"
            value="Contactez-moi"
            className="bg-orange text-white md:h-[83px] w-[287px] md:mt-0 mt-8"
          />
        </div>
        <div className="flex flex-col md:h-[180px] justify-between md:mt-0 mt-10 items-center">
          <p className="text-white text-[28px] font-bold text-center mt-10">
            Je préfère vous appeler
          </p>
          <Button
            href="tel:0556367038"
            value="05 56 36 70 38"
            className="bg-orange text-white md:h-[83px] w-[287px] md:mt-0 mt-8"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
