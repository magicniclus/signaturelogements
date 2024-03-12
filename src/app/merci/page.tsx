import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const page = () => {
  return (
    <>
      <Nav nav={false} />
      <main className=" min-h-[calc(100vh-117px)] flex justify-center items-center flex-col">
        <h1 className="text-bluePrimary text-[40px] md:text-[55px] text-center leading-[50px] mt-14 md:mt-5">
          Merci,
        </h1>
        <h2 className="text-bluePrimary font-bold text-[21px] mt-3">
          Nous vous recontacterons très prochainement
        </h2>
      </main>
      <Footer />
    </>
  );
};

export default page;
