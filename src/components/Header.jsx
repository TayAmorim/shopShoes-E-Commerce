import { ShoppingCart } from "@phosphor-icons/react";
import AvatarImg from "../assets/avatar.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex py-7 items-center">
      <h1 className="font-logo text-3xl">sneakers</h1>
      <nav className="flex gap-4 items-center text-Grayish-blue ml-14">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "text-black border-b-2 border-orange" : ""
          }
        >
          Collections
        </NavLink>
        <NavLink className="hover:text-black">Men</NavLink>
        <NavLink className="hover:text-black">Women</NavLink>
        <NavLink to="about" className="hover:text-black">
          About
        </NavLink>
        <NavLink className="hover:text-black">Contact</NavLink>
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
