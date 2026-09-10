import { Link, NavLink, useLocation } from "react-router";
import { HiSquares2X2, HiOutlineShoppingBag } from "react-icons/hi2";
import {  AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

import CategorySidebar from "./CategorySidebar";
import { IoHomeOutline } from "react-icons/io5";
import { useCart } from "../context/useCart";

const MobileBottomNav = () => {
  const { isCartOpen, toggleCart } = useCart();
  const { pathname } = useLocation();
  const isHomeActive = pathname === "/";
  const isActive = (path) => {
    if (pathname.includes(path)) {
      return true;
    }
  };
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const user = false;
  return (
    <section className="lg:hidden">
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.08)] z-80 flex justify-between items-center px-6 py-2.5 border-t border-gray-100 font-pop pb-safe">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 transition-colors ${isHomeActive ? "text-primary" : "text-gray-500 hover:text-primary"}`}
        >
          <IoHomeOutline size={22} />
          <span className="text-[10px] font-medium tracking-wide uppercase">
            Home
          </span>
        </Link>
        <button
          className={`flex flex-col items-center gap-1 transition-colors ${mobileCategoryOpen ? "text-primary" : "text-gray-500 hover:text-primary"}`}
          onClick={() => setMobileCategoryOpen(!mobileCategoryOpen)}
        >
          <HiSquares2X2 size={22} />
          <span className="text-[10px] font-medium tracking-wide uppercase text-gray-5">
            Category
          </span>
        </button>
        <button
          type="button"
          aria-label={isCartOpen ? "Close shopping cart" : "Open shopping cart"}
          aria-expanded={isCartOpen}
          onClick={toggleCart}
          className={`flex flex-col items-center gap-1 transition-colors ${isCartOpen ? "text-primary" : "text-gray-500 hover:text-primary"}`}
        >
          <HiOutlineShoppingBag size={22} />
          <span className="text-[10px] font-medium tracking-wide uppercase ">
            Cart
          </span>
        </button>
        <Link
          to="account/login"
          className={`flex flex-col items-center gap-1 transition-colors ${isActive("account") ? "text-primary" : "text-gray-500 hover:text-primary"}`}
        >
          <AiOutlineUser size={22} />

          <span className="text-[10px] font-medium tracking-wide uppercase truncate max-w-[60px] text-center">
            {user
              ? user.name?.split(" ")[0] || user.firstName || "Account"
              : "Account"}
          </span>
        </Link>
      </div>
  <CategorySidebar isOpen={mobileCategoryOpen} setIsOpen={setMobileCategoryOpen} />
    </section>
  );
};

export default MobileBottomNav;
