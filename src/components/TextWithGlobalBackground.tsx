const TextWithGlobalBackground = () => {
  return (
    <section className="w-full bg-[url('/images/interieur.jpg')] bg-no-repeat bg-cover bg-center mt-16">
      <div className="max-w-6xl w-full mx-auto flex md:flex-row flex-col h-full">
        <div className="w-full md:w-6/12 h-full bg-bluePrimary py-28 px-16">
          <h2 className="text-white w-full text-[40px] font-bold leading-[50px]">
            Des volumes généreux
            <span className="text-greenPrimary"> et ouverts sur la nature</span>
          </h2>
          <p className="text-start text-white text-[20px] ml-1 mt-7">
            Des espaces de vie confortables qui proposent une{" "}
            <b>double voire triple orientation</b>, ainsi que de{" "}
            <b>larges ouvertures</b> pour un quotidien baigné de lumière
            naturelle.
          </p>
          <p className="text-start text-white text-[20px] ml-1 mt-5">
            Ambiance bord de mer ou plus contemporaine, laissez libre court à
            votre imagination dans ces logements conçus pour accueillir{" "}
            <b>tous types d’usages</b> : retour de plage, dressing, salle de
            sport, télétravail, salle de jeux, bibliothèque, extérieurs
            privatifs intimistes…
          </p>
        </div>
        <div className="md:hidden flex bg-[url('/images/interieur.jpg')] bg-no-repeat bg-cover bg-center min-h-[550px] w-full"></div>
      </div>
    </section>
  );
};

export default TextWithGlobalBackground;
