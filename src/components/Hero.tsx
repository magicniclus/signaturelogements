/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { writeCRMUserData, writeUserData } from "../firebase/datamanager";

const Hero = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);
  const [isPhoneValid, setIsPhoneValid] = useState<boolean>(false);

  useEffect(() => {
    gsap.set(".hero", { opacity: 0 });
    gsap.fromTo(
      ".hero",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power1.out", delay: 1 }
    );
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(value.length >= 2);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setIsPhoneValid(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(value)
    );
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const canProceed = () => {
    if (step === 1) return isEmailValid;
    if (step === 2) return isNameValid;
    if (step === 3) return isPhoneValid && isCheckboxChecked;
    return false;
  };

  const handleNextClick = () => {
    if (!canProceed()) {
      setErrorMessage(
        "Veuillez compléter correctement tous les champs avant de continuer."
      );
      return;
    }

    if (step < 3) {
      setStep(step + 1);
      setErrorMessage("");
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (canProceed()) {
      const userId = Date.now().toString();
      try {
        // Enregistrez les données utilisateur
        await writeUserData(email, name, phone, userId);
        await writeCRMUserData(email, name, phone);

        // Téléchargement du fichier PDF
        const response = await fetch("/plaquette.pdf");
        const blob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "plaquette.pdf";
        document.body.appendChild(link); // Ajouté pour garantir que le lien est dans le DOM
        link.click();

        // Redirection après un délai pour permettre le téléchargement
        setTimeout(() => {
          router.push("/merci");
        }, 1000); // Délai de 1 seconde

        // Supprimer le lien après le téléchargement pour éviter les fuites de mémoire
        link.remove();
      } catch (error) {
        console.error(error);
        setErrorMessage("Une erreur est survenue lors de l'envoi des données.");
      }
    }
  };

  return (
    <section className="w-full bg-[url('/images/CC01.png')] bg-no-repeat bg-cover bg-bottom flex flex-col relative hero overflow-hidden">
      <div className="md:px-0 md:min-h-[667px] min-h-[] flex justify-between items-end mx-auto w-full relative max-w-7xl mx-auto">
        <img
          src="/images/3d.png"
          alt="3d"
          className="h-[152px] w-auto mb-44 hidden md:block"
        />
        <form
          id="form"
          onSubmit={handleSubmit}
          className="bg-bluePrimary md:rounded-3xl p-5 border border-4 border-white flex w-full md:w-[400px] md:h-[550px] h-full max-w-full flex-col items-center text-center relative"
        >
          <h1 className="text-[35px] mt-3 font-medium md:text-[55px] text-center text-white leading-[50px]">
            Devenez <br /> propriétaire <br />{" "}
            <span className="text-[24px] font-light">à</span> <br />{" "}
            <span className="text-yellowPrimary text-[50px] md:text-[60px] font-libre font-semibold">
              Carcans
            </span>
          </h1>
          <h2 className="font-bold text-[16px] text-white mt-3">
            Besoin de renseignements ?
          </h2>
          <p className="text-white text-[16px] leading-[20px] mb-3">
            On vous recontacte !
          </p>
          {step === 1 && (
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Votre email"
              className="p-3 rounded-full w-[290px] md:w-[342px] mt-3 h-[44px] mb-5 md:mb-0"
            />
          )}
          {step === 2 && (
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="p-3 rounded-full w-[290px] md:w-[342px] mt-3 h-[44px] mb-5 md:mb-0"
              placeholder="Votre nom"
            />
          )}
          {step === 3 && (
            <>
              <input
                type="text"
                placeholder="Téléphone"
                className="p-3 rounded-full w-[290px] md:w-[342px] mt-3 h-[44px] mb-5 md:mb-0"
                value={phone}
                onChange={handlePhoneChange}
              />
              <div className="flex mb-5  items-start mt-3">
                <input
                  type="checkbox"
                  className="bg-white mt-0.5 text-[15px]"
                  onChange={handleCheckboxChange}
                />
                <p className="text-start text-white text-[12px] ml-1">
                  J’accepte de recevoir par email des informations de la part de
                  Signature Promotion.
                </p>
              </div>
            </>
          )}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNextClick}
              disabled={!canProceed()}
              className="p-2 rounded-full border-4 border-white flex justify-center items-center bg-orange text-white mb-10 px-10 w-[290px] md:min-w-[342px] md:px-[25px] py-5 w-full text-[20px] md:hidden flex"
            >
              Contactez-moi
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              id="submit"
              disabled={!canProceed()}
              className="p-2 rounded-full border-4 border-white flex justify-center items-center bg-orange text-white mb-10 px-10 w-[290px] md:min-w-[342px] md:px-[25px] py-5 w-full text-[20px] flex md:hidden"
            >
              Contactez-moi
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNextClick}
              disabled={!canProceed()}
              className="p-2 rounded-full border-4 border-white flex justify-center items-center bg-orange text-white px-10 md:px-[25px] py-5 w-full text-[30px] md:flex hidden mt-14"
            >
              Contactez-moi
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              id="submit"
              disabled={!canProceed()}
              className="p-2 rounded-full border-4 border-white flex justify-center items-center bg-orange text-white px-10 md:px-[25px] py-5 w-full text-[30px] md:flex hidden"
            >
              Contactez-moi
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Hero;
