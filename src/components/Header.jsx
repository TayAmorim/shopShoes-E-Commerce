import { ShoppingCart } from "@phosphor-icons/react";
import AvatarImg from "../assets/avatar.jpg";

function Header() {
  return (
    <header className="flex py-7 items-center">
      <h1 className="font-logo text-3xl">sneakers</h1>
      <nav className="flex gap-4 items-center text-Grayish-blue ml-14">
        <a className="hover:text-black" href="#">
          Collections
        </a>
        <a className="hover:text-black" href="#">
          Men
        </a>
        <a className="hover:text-black" href="#">
          Women
        </a>
        <a className="hover:text-black" href="#">
          About
        </a>
        <a className="hover:text-black" href="#">
          Contact
        </a>
      </nav>
      <div className="flex gap-8 items-center ml-auto">
        <ShoppingCart size={22} className="fill-Grayish-blue" weight="bold" />
        <img
          src={AvatarImg}
          alt="Foto do Avatar"
          className="rounded-full w-12 h-12 border-2 border-orange"
        />
      </div>
    </header>
  );
}

export default Header;
