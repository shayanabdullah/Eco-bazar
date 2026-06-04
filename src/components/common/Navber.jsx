import { useState } from "react";
import { Link, NavLink } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import { CiApple, CiCoffeeCup } from "react-icons/ci";
import { TbSalad, TbMeat } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import { PiCookingPot, PiPopsicleLight } from "react-icons/pi";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import Container from "../layouts/Container";
import CatagoryDropDown from "./CatagoryDropDown";
import { catagoriesMegaMenu } from "../../utils/catagoryData";

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {

  const NAV_LINKS = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "Blog", to: "/blog" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
  ];
  
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="bg-gray-8">
      <Container>
        <div className="hidden lg:flex justify-between items-center w-full h-full relative">
          {/* Left group: Categories + Nav links */}
          <div className="flex items-center gap-x-8 relative">
            <CatagoryDropDown
              categories={catagoriesMegaMenu}
              isOpen={categoriesOpen}
              onToggle={() => setCategoriesOpen((p) => !p)}
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            />
           <div className="">
             <ul className="flex items-center gap-x-8">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "#808080",
                      textDecoration: "none",
                    })}
                  >
                    <span className="font-poppins font-medium text-sm hover:text-white transition-colors duration-300">
                      {label}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
           </div>
          </div>

          {/* Right: Phone */}
          <div className="flex items-center gap-x-2 font-poppins font-medium text-sm text-white cursor-pointer">
            <FiPhoneCall className="text-xl" />
            <Link to="tel:01998-422037">01998-422037</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
