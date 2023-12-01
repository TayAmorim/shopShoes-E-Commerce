import { ShoppingCart } from "@phosphor-icons/react";
import AvatarImg from "../assets/avatar.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  const MenuItem = [
    { name: "Collections", href: "/" },
    { name: "Men", href: "men" },
    { name: "Women", href: "woman" },
    { name: "About", href: "about" },
    { name: "Contact", href: "contact" },
  ];
  return (
    <header className="flex py-6 items-center">
      <h1 className="font-logo text-3xl">sneakers</h1>
      <nav className="flex box-border h-5 gap-4 items-center text-Grayish-blue ml-14">
        {MenuItem.map((item) => (
          <NavLink
            key={item}
            to={item.href}
            className={({ isActive }) =>
              isActive
                ? "relative text-black after:block after:bg-orange after:w-[100%] after:h-1 after:absolute after:mt-8 after:transition-all duration-500"
                : "transition-all duration-300"
            }
          >
            {item.name}
          </NavLink>
        ))}
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
