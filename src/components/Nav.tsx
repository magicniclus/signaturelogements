import Image from "next/image";
import Button from "./Button";

const Nav = () => {
  return (
    <header className="w-full">
      <div className="max-w-6xl px-4 py-5 flex lg:justify-between justify-center mx-auto">
        <Image src="/logos/logo.png" alt="logo" width={250} height={80} />
        <div className="flex items-center lg:flex hidden">
          <nav className=" px-4 py-2 bg-bluePrimary text-white rounded-full mr-5">
            <ul className="flex space-x-4">
              <li className="">
                <a href="#">Côté atlantique</a>
              </li>
              <li className="mr-4">
                <a href="#">Les adresses</a>
              </li>
              <li className="mr-4">
                <a href="#">Les logements</a>
              </li>
              <li>
                <a href="#">Nos engagements</a>
              </li>
            </ul>
          </nav>
          <Button
            href="#"
            value="Contactez-moi"
            className="bg-orange text-white max-h-[50px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
