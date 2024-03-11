import Button from "./Button";

const Charm = () => {
  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto rounded-lg mt-20 flex min-h-[526px] overflow-hidden">
        <div className="w-1/2 py-10 px-8 bg-greenPrimary flex flex-col justify-between">
          <h2 className="text-[40px] font-bold text-white">
            Tombez sous le charme des{" "}
            <span className="text-bluePrimary">joyaux de l’atlantique</span>{" "}
          </h2>
          <ul className="mt-5">
            <li className="text-[20px] text-white list-disc mt-2">
              La Côte de beauté à Breuillet, commune de
              <span className="font-bold">Royan Atlantique</span>, située entre
              estuaire et océan,
            </li>
            <li className="text-[20px] text-white list-disc mt-2">
              Le <span className="font-bold">Bassin d’Arcachon</span>, ses ports
              ostréicoles à Gujan-Mestras et sa presque’île à Lège-Cap Ferret,
            </li>
            <li className="text-[20px] text-white list-disc mt-2">
              La Côte <span className="font-bold">Médoc Atlantique</span> entre
              lacs et dunes de sables sculptées par les vagues à Lacanau et
              Carcans.
            </li>
          </ul>
          <Button
            value="Je me renseigne"
            className="bg-bluePrimary text-white mt-10 px-10 py-3 max-w-max"
            href="#"
          />
        </div>
        <div className="w-1/2 bg-[url('/images/FAMILLE-PLAGE.jpg')] bg-no-repeat bg-cover bg-center min-h-max"></div>
      </div>
    </section>
  );
};

export default Charm;
