"use client";
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
        await writeUserData(email, name, phone, userId);
        await writeCRMUserData(email, name, phone);
        router.push("/merci");
      } catch (error) {
        console.error(error);
        setErrorMessage("Une erreur est survenue lors de l'envoi des données.");
      }
    }
  };

  return (
    <section className="w-full md:bg-[url('/images/vague.png')] bg-no-repeat bg-cover bg-bottom flex flex-col relative hero overflow-hidden">
      <div className="md:hidden flex h-[1000px] bg-[url('/images/vagueBig.jpg')] bg-no-repeat bg-cover bg-top"></div>
      <div className="max-w-7xl md:px-4 min-h-[667px] flex justify-center items-end mx-auto w-full md:relative absolute -bottom-0">
        <form
          id="form"
          onSubmit={handleSubmit}
          className="bg-bluePrimary rounded-t-full md:rounded-full p-5 flex w-full md:w-[522px] md:h-[522px] max-w-full flex-col items-center text-center relative"
        >
          <h1 className="text-[35px] font-medium md:text-[55px] text-center text-white leading-[50px] mt-14 md:mt-5">
            Devenez <br /> propriétaire <br />{" "}
            <span className="text-[16px] font-light">sur la</span> <br />{" "}
            <span className="text-greenPrimary text-[50px] md:text-[60px] font-semibold">
              Côte Atlantique
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
              className="p-3 rounded-full w-[290px] md:w-[342px] rounded-full md:rounded-lg mt-3 h-[64px] md:h-[33px]"
            />
          )}
          {step === 2 && (
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="p-3 rounded-full w-[290px] md:w-[342px] rounded-full md:rounded-lg mt-3 h-[64px] md:h-[33px]"
              placeholder="Votre nom"
            />
          )}
          {step === 3 && (
            <>
              <input
                type="text"
                placeholder="Téléphone"
                className="p-3 rounded-full w-[290px] md:w-[342px] rounded-full md:rounded-lg mt-3 h-[64px] md:h-[33px]"
                value={phone}
                onChange={handlePhoneChange}
              />
              <div className="flex mb-5 md:mb-20 items-start mt-3 max-w-[70%]">
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
          {errorMessage && <div>{errorMessage}</div>}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNextClick}
              disabled={!canProceed()}
              className="p-5 rounded-full border border-white flex justify-center items-center bg-orange text-white mb-10 px-10 w-[290px] md:min-w-[342px] md:px-16 text-[20px] md:hidden flex md:mt-0 mt-5"
            >
              Je veux être contacté
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              id="submit"
              disabled={!canProceed()}
              className="p-5 rounded-full border border-white flex justify-center items-center bg-orange text-white mb-10 px-10 w-[290px] md:min-w-[342px] md:px-16 text-[20px] md:hidden flex md:mt-0 mt-5"
            >
              Je veux être contacté
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={handleNextClick}
              disabled={!canProceed()}
              className="p-5 rounded-full border border-white flex justify-center items-center bg-orange text-white absolute bottom-[-0px] px-16 text-[30px] md:flex hidden md:mt-0 mt-5"
            >
              Je veux être contacté
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              id="submit"
              disabled={!canProceed()}
              className="p-5 rounded-full border border-white flex justify-center items-center bg-orange text-white absolute bottom-[-0px] px-16 text-[30px] md:flex hidden md:mt-0 mt-5"
            >
              Je veux être contacté
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Hero;
