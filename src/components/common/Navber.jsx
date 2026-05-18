import { useState } from "react";
import { Link } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import { CiApple, CiCoffeeCup } from "react-icons/ci";
import { TbSalad, TbMeat } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import { PiCookingPot, PiPopsicleLight } from "react-icons/pi";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import Container from "../layouts/Container";
import NavLinks from "./NavLinks";
import CategorySidebar from "./Catagorysidebar";
import { catagories } from "../../utils/catagoryData";
// ─── Navbar ───────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <nav className="bg-gray-8">
      <Container>
        <div className="hidden lg:flex justify-between items-center w-full h-full relative">

          {/* Left group: Categories + Nav links */}
          <div className="flex items-center gap-x-8 relative">
            <CategorySidebar
              categories={catagories}
              isOpen={categoriesOpen}
              onToggle={() => setCategoriesOpen((p) => !p)}
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            />

            <NavLinks />
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