import Button from "./Button";

const Programme = () => {
  const programmeList = [
    {
      city: "Lège-Cap Ferret",
      zip: "33950",
      list: [
        "Au cœur d’un espace boisé",
        "Maison de 3 ou 4 pièces",
        "À partir de 453 000 €",
      ],
      image: "/images/lege.jpg",
    },
    {
      city: "Gujan-Mestras",
      zip: "33470",
      list: [
        "À 4 min. du port",
        "Appartements de 2 ou 3 pièces",
        "À partir de 264 000 €",
      ],
      image: "/images/lestran.jpg",
    },
    {
      city: "Lacanau Océan",
      zip: "33680",
      list: [
        "À 300 m. de la plage océanique",
        "Appartements de 1 à 5 pièces",
        "À partir de 196 000 €",
      ],
      image: "/images/lacanau-ocean.jpg",
    },
    {
      city: "Breuillet",
      zip: "17920",
      list: [
        "En plein centre-bourg",
        "Maison de 3 ou 4 pièces",
        "À partir de 250 000 €",
      ],
      image: "/images/cambium.jpg",
    },
    {
      city: "Carcans",
      zip: "33121",
      list: [
        "En plein centre-bourg",
        "Appartements de 2 ou 3 pièces",
        "À partir de 189 000 €",
      ],
      image: "/images/carcans.jpg",
    },
    {
      city: "Lacanau Ville",
      zip: "33680",
      list: [
        "En plein centre-bourg",
        "Appartements 2 à 4 p. + maisons 3 ou 4 p.",
        "À partir de 224 000 €",
      ],
      image: "/images/lacanau-ville.jpg",
    },
  ];
  return (
    <section className="w-full mt-16" id="adresses">
      <div className="max-w-6xl mx-auto px-7 flex flex-col items-center">
        <h2 className="text-greenPrimary w-full md:w-9/12 text-[40px] font-bold text-center">
          Entre plages et pins maritimes pour une qualité de vie aussi
          <span className="text-bluePrimary"> épanouissante que pratique</span>
        </h2>
        <div className="flex justify-between flex-wrap w-full">
          {programmeList.map((programme, index) => {
            return (
              <div
                key={index}
                className="w-full mt-10 flex flex-col md:w-[30%] w-full"
              >
                <div
                  className={`w-full h-[247px] rounded-lg`}
                  style={{
                    backgroundImage: `url(${programme.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="w-full md:min-h-[370px] flex flex-col justify-between items-start md:px-0 px-2">
                  <div className="w-full">
                    <h3 className="text-[40px] font-bold text-greenPrimary leading-[40px] mt-3">
                      {programme.city} <br />
                      <span className="font-light text-[30px]">
                        ({programme.zip})
                      </span>
                    </h3>
                    <ul className="mt-5 text-bluePrimary md:w-content w-full flex flex-col items-start">
                      {programme.list.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="text-[20px] list-disc mt-2 max-w-max ml-5"
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <Button
                    value="Je me renseigne"
                    className="bg-bluePrimary text-white mt-10 px-5 py-3 max-w-max"
                    href="#form"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programme;
