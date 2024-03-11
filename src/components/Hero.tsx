import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full md:bg-[url('/images/vague.png')] bg-no-repeat bg-cover bg-bottom flex flex-col relative">
      <div className="md:hidden flex h-[1000px] bg-[url('/images/vagueBig.png')] bg-no-repeat bg-cover bg-top"></div>
      <div className="max-w-6xl md:px-4 min-h-[667px] flex justify-center items-end mx-auto w-full md:relative absolute -bottom-0">
        <div className="bg-bluePrimary rounded-t-full md:rounded-full p-5 flex w-full md:w-[522px] md:h-[522px] max-w-full flex-col items-center text-center relative">
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
          />
          <div className="flex mb-5 md:mb-20 items-start mt-3 max-w-[70%]">
            <input type="checkbox" className="bg-white mt-0.5 text-[15px]" />
            <p className="text-start text-white text-[12px] ml-1">
              J’accepte de recevoir par email des informations de la part de
              Signature Promotion.
            </p>
          </div>
          <Button
            value="Je veux être contacté"
            className="bg-orange text-white mb-10 px-10 w-[290px] md:min-w-[342px] md:px-16 text-[20px] md:hidden flex"
            href="#"
          />
          <Button
            value="Je veux être contacté"
            className="bg-orange text-white absolute bottom-[-0px] px-16 text-[30px] md:flex hidden"
            href="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
