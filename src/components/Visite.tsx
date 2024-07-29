import Button from "./Button";

/* eslint-disable @next/next/no-img-element */
const Visite = () => {
  return (
    <section className="w-full font-larsseit">
      <div className="px-8 max-w-7xl mx-auto flex w-full justify-between items-center flex-col md:flex-row py-10 md:py-5">
        <div className="w-full md:w-1/2">
          <img src="/images/visite.png" alt="visite 3d" className="w-fill" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-[50px] font-larsseit leading-[53px] text-[#1D2749] text-start mt-10 md:mt-0">
            VISITE IMMERSIVE <br /> en ligne sur <br /> RENDEZ-VOUS
          </h2>
          <Button
            value="Je veux visiter"
            className="bg-bluePrimary text-white mt-10 px-10 py-3 max-w-max charm-text"
            href="#form"
          />
        </div>
      </div>
      <div className="px-8 max-w-7xl mx-auto flex flex-col">
        <h2 className="font-bold text-[43px] text-[#1D2749]">
          Résidence nouvelle{" "}
          <span className="text-[#FCAF43]">entre plages et pins maritimes</span>{" "}
          pour une <span className="text-[#FCAF43]">qualité de vie</span> aussi{" "}
          <span className="text-[#FCAF43]">épanouissante</span> que{" "}
          <span className="text-[#FCAF43]">pratique</span>{" "}
        </h2>
        <p className="text-[24px] text-[#1D2749] mt-5">
          Cap vers l’Ouest à Carcans avec des appartements à la clarté et aux
          agencements remarquables parce qu’ici rien n’est laissé au hasard…
          Double orientation, équipements bien pensés, espaces extérieurs
          généreux, tout y est, jugez par vous-mêmes !
        </p>
      </div>
    </section>
  );
};

export default Visite;
