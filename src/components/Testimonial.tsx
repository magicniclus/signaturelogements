import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {
  return (
    <section className="w-full bg-greenPrimary">
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-0 flex items-center flex-col">
        <h2 className="text-white w-full text-[40px] font-bold text-center">
          100%
          <span className="text-bluePrimary">
            {" "}
            de nos clients nous recommandent
          </span>
        </h2>
        <div className="w-[90%] mt-10">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="w-[85%] flex items-center mx-auto">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">M</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « ACCUEUIL SYMPATHIQUE ET PROFESSIONNEL »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Entreprise très sérieuse Nous apprécions d’être tenus
                      informés régulièrement sur l’avancement des travaux Très
                      bon accueil à chaque rencontre avec un personnel très
                      compétent{" "}
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-[85%] flex items-center mx-auto">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">M</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « ACCUEUIL SYMPATHIQUE ET PROFESSIONNEL »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Entreprise très sérieuse Nous apprécions d’être tenus
                      informés régulièrement sur l’avancement des travaux Très
                      bon accueil à chaque rencontre avec un personnel très
                      compétent{" "}
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-[85%] flex items-center mx-auto">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">M</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « ACCUEUIL SYMPATHIQUE ET PROFESSIONNEL »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Entreprise très sérieuse Nous apprécions d’être tenus
                      informés régulièrement sur l’avancement des travaux Très
                      bon accueil à chaque rencontre avec un personnel très
                      compétent{" "}
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-[85%] flex items-center mx-auto">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">M</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « ACCUEUIL SYMPATHIQUE ET PROFESSIONNEL »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Entreprise très sérieuse Nous apprécions d’être tenus
                      informés régulièrement sur l’avancement des travaux Très
                      bon accueil à chaque rencontre avec un personnel très
                      compétent{" "}
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-[85%] flex items-center mx-auto">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">M</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « ACCUEUIL SYMPATHIQUE ET PROFESSIONNEL »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Entreprise très sérieuse Nous apprécions d’être tenus
                      informés régulièrement sur l’avancement des travaux Très
                      bon accueil à chaque rencontre avec un personnel très
                      compétent{" "}
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-[85%] flex items-center mx-auto">
                  <div className="h-[100px] w-[100px] flex justify-center items-center bg-orange rounded-full">
                    <p className="text-white text-[43px]">M</p>
                  </div>
                  <div className="w-9/12 flex flex-col ml-5">
                    <h3 className="text-bluePrimary text-[20px] font-bold">
                      « ACCUEUIL SYMPATHIQUE ET PROFESSIONNEL »
                    </h3>
                    <p className="text-bluePrimary text-[20px]">
                      Entreprise très sérieuse Nous apprécions d’être tenus
                      informés régulièrement sur l’avancement des travaux Très
                      bon accueil à chaque rencontre avec un personnel très
                      compétent{" "}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
