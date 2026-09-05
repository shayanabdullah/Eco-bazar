import React, { useRef, useState } from "react";
import Container from "./../layouts/Container";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { BsHeart } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { IoMenuOutline } from "react-icons/io5";
import useClickOutside from "../../hooks/useClickOutside";
import useScrollLock from "../../hooks/useScrollLock";
import CategorySidebar from "../CategorySidebar";
import {
  CircleHelp,
  ChevronRight,
  Headphones,
  Heart,
  Home as HomeIcon,
  Info,
  Newspaper,
  ShoppingBag,
  Tag,
  UserCircle,
  X,
  Search,
} from "lucide-react";
import { categories } from "../../utils/catagoryData";
import { navMenus } from "../../data/menuData";

const MiddleBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useScrollLock(isMenuOpen);

  const toggleNavigation = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleCLick = () => {
    if (isMenuOpen === false) return;

    setIsMenuOpen(false);
  };

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setIsMenuOpen(false), "mousedown", isMenuOpen);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="lg:py-6 border border-gray-200 lg:border-0">
      <Container>
        <nav className="hidden lg:flex justify-between items-center ">
          {/* Logo */}
          <div className="w-auto">
            <Link to={"/"}>
              <img
                src={logo}
                alt="logo"
                loading="lazy"
                className="w-28 sm:w-32 lg:w-auto"
              />
            </Link>
          </div>

             {/* Search bar */}
          <div className="flex relative w-full lg:max-w-xl mx-0 lg:mx-8 order-last lg:order-0">
              <form className="flex w-full shadow-sm lg:shadow-none rounded-full lg:rounded-none ">
              <div className="relative w-full" bis_skin_checked="1">
                <input
                  placeholder="Search products..."
                  className="w-full border border-gray-200 lg:border-brdr lg:focus:border-primary border-r-0 font-pop text-[13px] lg:text-[15px] text-black placeholder:text-gray-400 font-normal leading-5.5 ps-10 lg:ps-11 py-2.5 lg:py-3.5 rounded-l-full lg:rounded-none lg:rounded-l-md outline-none transition-colors"
                  type="text"
                  value=""
                />
                <Search className="absolute top-1/2 -translate-y-1/2 left-3 lg:left-4 size-4 lg:size-5 text-gray-400 lg:text-logoc" />
              </div>
              <button
                type="submit"
                className="bg-primary text-white text-[13px] lg:text-sm font-semibold font-pop leading-[120%] px-5 lg:px-6 py-2.5 lg:py-4 rounded-r-full lg:rounded-none lg:rounded-r-md hover:bg-opacity-90 transition cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>
          </div>

          {/*   CART, WISHLIST */}
          <div className="flex items-center relative divider gap-x-8">
            {/* WISHLIST */}
            <Link to={"/"}>
              <BsHeart className="text-2xl " />
            </Link>
            {/* CART */}
            <div className="flex items-center gap-x-3">
              <div className="cart relative">
                <span className="absolute -top-2 -right-0.5 w-4 h-4 flex items-center justify-center  rounded-full bg-hard-primary text-white font-poppins font-medium text-[10px]">
                  2
                </span>
                <Link>
                  <SlHandbag className="text-[26px]" />
                </Link>
              </div>
              <div className="cart quantity pl-2">
                <h2 className="font-poppins text-body-xs text-gray-7 ">
                  Shopping cart:
                </h2>
                <p className="font-poppins text-body-sm font-medium text-gray-9 pb-2">
                  $57.00
                </p>
              </div>
            </div>
          </div>
        </nav>

        {/* mobile middle bar */}
        <div className="lg:hidden py-1  overflow-x-hidden">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between py-3 lg:py-6 gap-y-3 lg:gap-y-0">
            <div className="flex items-center gap-x-4">
              <div className="">
                <Link to={"/"}>
                  <img
                    src={logo}
                    alt="logo"
                    loading="lazy"
                    className="w-28 sm:w-32 lg:w-auto"
                  />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-x-3">
              {/* WISHLIST */}
              <Link to={"/"}>
                <BsHeart className="text-lg md:text-2xl " />
              </Link>
              <div className="menu-btn" onClick={toggleNavigation}>
                <IoMenuOutline className="text-3xl cursor-pointer" />
              </div>
            </div>

            {/* Search bar */}
            <form className="flex w-full shadow-sm lg:shadow-none rounded-full lg:rounded-none">
              <div className="relative w-full" bis_skin_checked="1">
                <input
                  placeholder="Search products..."
                  className="w-full border border-gray-200 lg:border-brdr lg:focus:border-primary border-r-0 font-pop text-[13px] lg:text-[15px] text-black placeholder:text-gray-400 font-normal leading-5.5 ps-10 lg:ps-11 py-2.5 lg:py-3.5 rounded-l-full lg:rounded-none lg:rounded-l-md outline-none transition-colors"
                  type="text"
                  value=""
                />
                <Search className="absolute top-1/2 -translate-y-1/2 left-3 lg:left-4 size-4 lg:size-5 text-gray-400 lg:text-logoc" />
              </div>
              <button
                type="submit"
                className="bg-primary text-white text-[13px] lg:text-sm font-semibold font-pop leading-[120%] px-5 lg:px-6 py-2.5 lg:py-4 rounded-r-full lg:rounded-none lg:rounded-r-md hover:bg-opacity-90 transition cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>
          </div>

          <div className="">
            <CategorySidebar
              isOpen={isSidebarOpen}
              setIsOpen={setIsSidebarOpen}
            />
          </div>

          {/* mobile side bar */}
          <div
            className={`fixed inset-y-0 left-0 z-105 w-[min(88vw,380px)] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            ref={menuRef}
          >
            <div className="flex h-full flex-col overflow-y-auto">
              <div className="flex items-center justify-between bg-hard-primary px-5 py-5 text-white">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full bg-white/15">
                    <UserCircle size={28} />
                  </span>
                  <div>
                    <p className="font-poppins text-xs text-white/70">
                      Welcome back!
                    </p>
                    <Link
                      to="/account/login"
                      onClick={handleCLick}
                      className="font-poppins text-sm font-semibold"
                    >
                      Sign In / Register
                    </Link>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={handleCLick}
                  className="rounded-full p-2 hover:bg-white/10"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="space-y-6 px-4 py-6">
                <section>
                  <h2 className="mb-2 px-2 text-[11px] font-bold tracking-[0.18em] text-gray-400">
                    EXPLORE
                  </h2>
                  <div className="divide-y divide-gray-100">
                    <NavLink
                      to="/"
                      onClick={handleCLick}
                      className="flex min-h-12 items-center gap-3 px-2 py-3 font-poppins text-sm font-semibold text-gray-700"
                    >
                      <HomeIcon size={19} className="text-primary" />
                      Home
                    </NavLink>
                    <NavLink
                      to="/shop"
                      onClick={handleCLick}
                      className="flex min-h-12 items-center gap-3 px-2 py-3 font-poppins text-sm font-semibold text-gray-700"
                    >
                      <ShoppingBag size={19} className="text-primary" />
                      Shop
                      <ChevronRight
                        size={17}
                        className="ml-auto text-gray-400"
                      />
                    </NavLink>
                    {navMenus
                      .filter((menu) => menu.id !== "more")
                      .map((menu) => {
                        const sort = {
                          deals: "best-selling",
                          "new-arrivals": "new-arrivals",
                          "best-picks": "top-rated",
                        }[menu.id];
                        const to = sort ? `/shop?sort=${sort}` : "/blog";
                        const Icon =
                          menu.id === "deals"
                            ? Tag
                            : menu.id === "new-arrivals"
                              ? ShoppingBag
                              : menu.id === "best-picks"
                                ? Tag
                                : Newspaper;
                        return (
                          <NavLink
                            key={menu.id}
                            to={to}
                            onClick={handleCLick}
                            className="flex min-h-12 items-center gap-3 px-2 py-3 font-poppins text-sm font-semibold text-gray-700"
                          >
                            <Icon size={19} className="text-primary" />
                            {menu.label}
                            {menu.badge && (
                              <span className="ml-auto rounded bg-primary px-1.5 py-0.5 text-[9px] font-bold text-white">
                                {menu.badge}
                              </span>
                            )}
                            <ChevronRight size={17} className="text-gray-400" />
                          </NavLink>
                        );
                      })}
                  </div>
                </section>

                <section>
                  <h2 className="mb-2 px-2 text-[11px] font-bold tracking-[0.18em] text-gray-400">
                    SHOP BY CATEGORY
                  </h2>
                  <div className="rounded-xl bg-gray-50 p-2">
                    {categories.slice(0, 7).map((category) => (
                      <Link
                        key={category.id}
                        to={`/shop?category=${category.slug}`}
                        onClick={handleCLick}
                        className="flex min-h-11 items-center justify-between border-b border-gray-200/70 px-3 py-2 font-poppins text-sm text-gray-700 last:border-0"
                      >
                        <span>{category.name}</span>
                        <ChevronRight size={16} className="text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="mb-2 px-2 text-[11px] font-bold tracking-[0.18em] text-gray-400">
                    QUICK ACCESS
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      ["/about", "About Us", Info],
                      ["/wishlist", "Wishlist", Heart],
                      ["/help/faq", "FAQ", CircleHelp],
                      ["/blog", "Blog", Newspaper],
                      ["/contact", "Contact Us", Headphones],
                    ].map(([to, label, IconComponent]) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={handleCLick}
                        className="flex items-center gap-2 rounded-lg border border-gray-100 px-3 py-3 font-poppins text-xs font-medium text-gray-700 hover:border-primary hover:text-primary"
                      >
                        <IconComponent size={16} className="text-primary" />
                        {label}
                      </Link>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-100 pt-5">
                  <h2 className="mb-3 px-2 text-[11px] font-bold tracking-[0.18em] text-gray-400">
                    CUSTOMER SUPPORT
                  </h2>
                  <a
                    href="tel:01998-422037"
                    className="flex items-center gap-3 rounded-xl bg-hard-primary px-4 py-4 text-white"
                  >
                    <Headphones size={22} />
                    <span>
                      <span className="block font-poppins text-xs text-white/70">
                        Need a hand?
                      </span>
                      <span className="font-poppins text-sm font-semibold">
                        01998-422037
                      </span>
                    </span>
                  </a>
                </section>
              </div>
            </div>
          </div>

          {/* overlay */}
          {isMenuOpen && (
            <button
              type="button"
              aria-label="Close menu"
              onClick={handleCLick}
              className="fixed inset-0 z-100 bg-gray-9/70 lg:hidden"
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default MiddleBar;
