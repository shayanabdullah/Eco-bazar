import { AnimatePresence } from "motion/react";
import React, { useRef, useState } from "react";
import Container from "./../layouts/Container";
import logo from "../../assets/images/logo.webp";
import { Link, NavLink } from "react-router";
import { BsHeart } from "react-icons/bs";
import { LuFacebook, LuSearch } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose, IoChevronDown } from "react-icons/io5";
import { CiApple, CiCoffeeCup } from "react-icons/ci";
import { TbMeat, TbSalad } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import {
  PiCookingPot,
  PiInstagramLogoLight,
  PiPopsicleLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";
import { LuIceCreamBowl } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { GiCupcake } from "react-icons/gi";
import useClickOutside from "../../hooks/useClickOutside";
import useScrollLock from "../../hooks/useScrollLock";

const MiddleBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavLinks = [
    {
      navItem: "Home",
      Link: "/",
      dropDown: true,
    },
    {
      navItem: "Shop",
      Link: "/shop",
      dropDown: true,
    },
    {
      navItem: "Pages",
      Link: "/pages",
      dropDown: true,
    },
    {
      navItem: "Blog",
      Link: "/blog",
      dropDown: true,
    },
    {
      navItem: "About Us",
      Link: "/about",
      dropDown: false,
    },
    {
      navItem: "Contact Us",
      Link: "/contact",
      dropDown: false,
    },
  ];
  const catagories = [
    {
      category: "Fresh Fruit",
      icon: <CiApple />,
    },
    {
      category: "Vegetables",
      icon: <TbSalad />,
    },
    {
      category: "River Fish",
      icon: <IoFishOutline />,
    },
    {
      category: "Chicken & Meat",
      icon: <TbMeat />,
    },
    {
      category: "Drink & Water",
      icon: <CiCoffeeCup />,
    },
    {
      category: "Yogurt & Ice Cream",
      icon: <PiPopsicleLight />,
    },
    {
      category: "Cake & Bread",
      icon: <GiCupcake />,
    },
    {
      category: "Butter & Cream",
      icon: <LuIceCreamBowl />,
    },
    {
      category: "Cooking",
      icon: <PiCookingPot />,
    },
    {
      category: "View all Category",
      icon: <GoPlus />,
      last: true,
    },
  ];
useScrollLock(isMenuOpen);

    const toggleNavigation = () => {
    setIsMenuOpen((prev) => !prev)
  }
    const handleCLick = () => {
      if(isMenuOpen === false) return
      
    setIsMenuOpen(false)
    }
  
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleCatagoryOpen = () => {
    setCategoriesOpen((prev) => !prev);
  };

  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setIsMenuOpen(false), 'mousedown', isMenuOpen);


  
  return (
    <div
      className="py-6 border-b border-gray-3 lg:border-0"
    >
      <Container>
        <nav
          className="hidden lg:flex justify-between items-center "
        >
          {/* Logo */}
          <div className="logo flex items-center gap-x-1">
            <img src={logo} alt="logo" loading="lazy" />
            <Link to={"/"}>
              <h2
                className="font-poppins font-medium text-heading-05 text-green-gray-9"
              >
                Ecobazar
              </h2>
            </Link>
          </div>

          {/* Search Box */}
          <div className="inputs  flex items-center relative">
            <LuSearch className="text-2xl absolute top-1/2 -translate-y-1/2  left-2" />
            <input
              type="text"
              className="border border-gray-1 py-3 pl-10 rounded-l-md! outline-0 min-w-100  font-poppins text-body-md text-gray-5 "
              placeholder="Search"
            />
            <button className="py-3.5 px-6 font-poppins font-semibold text-white text-body-sm bg-primary rounded-r-md cursor-pointer">
              Search
            </button>
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
        <div className="lg:hidden py-1 px-4 flex items-center justify-between overflow-x-hidden">
          <div className="flex items-center gap-x-4">
            <div
              className="menu-btn"
              onClick={toggleNavigation}
            >
              <HiMenuAlt2 className="text-3xl cursor-pointer" />
            </div>
            <div className="logo flex items-center gap-x-1">
              <img src={logo} alt="logo" loading="lazy" />
              <Link to={"/"}>
                <h2
                  className="font-poppins font-medium text-2xl text-green-gray-9"
                >
                  Ecobazar
                </h2>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
               {/* WISHLIST */}
            <Link to={"/"}>
              <BsHeart className="text-2xl " />
            </Link>
          {/* CART */}
          <div className="cart relative ">
            <span className="absolute -top-2 -right-0.5 w-4 h-4 flex items-center justify-center  rounded-full bg-hard-primary text-white font-poppins font-medium text-[10px]">
              2
            </span>
            <Link>
              <SlHandbag className="text-[26px]" />
            </Link>
          </div>
          </div>

          {/* mobile side bar */}
          <div
            className={`absolute top-0 max-w-[350px] w-full h-screen z-30 bg-white p-6 lg:hidden border-r border-gray-2 transition-all duration-300 overflow-y-scroll ${isMenuOpen ? "left-0" : "-left-full "}`}
            ref={menuRef}
          >
            {/* logo */}
            <div className="flex justify-between items-center pb-4">
              <div className="logo flex items-center gap-x-1">
                <img src={logo} alt="logo" loading="lazy" />
                <Link to={"/"}>
                  <h2
                    className="font-poppins font-medium text-2xl text-green-gray-9"
                  >
                    Ecobazar
                  </h2>
                </Link>
              </div>
              <div className="close" onClick={() => setIsMenuOpen(false)}>
                <IoClose className="text-3xl cursor-pointer" />
              </div>
            </div>
            {/* Search bar */}
            <div className="inputs flex flex-col items-center relative gap-y-2 pb-4">
              <LuSearch className="text-2xl absolute top-3  left-2" />
              <input
                type="text"
                className="border border-gray-1 py-3 pl-10 rounded-md! outline-0 min-w-full  font-poppins text-body-md text-gray-5 focus-within:border-gray-3 "
                placeholder="Search"
              />
              <button className="py-2.5 px-6 font-poppins font-semibold text-white text-body-lg bg-primary rounded-md cursor-pointer w-full ">
                Search
              </button>
            </div>
            {/* Nav links */}
            <div className="pt-4 flex flex-col justify-center gap-y-4 pb-8">
              {mobileNavLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.Link}
                  className={
                    "font-poppins font-semibold text-body-md pb-3 border-b border-gray-1 w-full flex justify-between items-center"
                  }
                  style={({ isActive }) => ({
                    color: isActive ? "green" : "#808080",
                  })}
                  onClick={handleCLick}
                >
                  {link.navItem}{" "}
                 
                </NavLink>
              ))}
            </div>

            {/* categories */}
            <div className="mb-10">
              {/* Categories */}
              <div className="drop-down  h-full relative">
                <div className="flex items-center">
                  {/* BUTTON */}
                  <button
                    className="p-2.5 bg-primary cursor-pointer"
                    onClick={handleCatagoryOpen}
                  >
                    <IoIosMenu className="text-4xl text-white" />
                  </button>

                  {/* TEXT BOX */}
                  <div
                    onClick={handleCatagoryOpen}
                    className="w-full flex items-center justify-between pr-4 pl-6 bg-gray-9 cursor-pointer text-white! py-4 min-h-full  font-poppins font-medium text-body-md group"
                  >
                    <h2>All Categories</h2>

                    <div>
                      <IoChevronDown
                        className={`text-2xl cursor-pointer transition-transform duration-400 ${categoriesOpen && "rotate-180 "}`}
                      />
                    </div>
                  </div>
                </div>

                {/* categories */}

                <AnimatePresence>
                  {categoriesOpen && (
                    <div className=" border border-gray-1  bg-white w-full font-poppins font-normal text-body-sm text-green-gray-9 rounded-sm mb-5">
                      {catagories?.map((catagory, index) => (
                        <div
                          className="w-full py-4 px-5 flex gap-x-3 items-center cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300 group"
                          key={index}
                          style={
                            catagory.last && { borderTop: "1px solid #e6e6e6" }
                          }
                        >
                          <i className="text-[26px] text-gray-4 group-hover:text-white! transition-colors duration-300">
                            {catagory.icon}
                          </i>
                          <p>{catagory.category}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* cart, wishlist */}
            <div className="flex flex-col gap-y-4 mb-5">
              <div className="cart w-full flex items-center justify-between pb-3 border-b border-gray-1 text-body-md font-poppins font-semibold capitalize text-gray-7">
                cart
                <div className="cart relative">
                  <span className="absolute -top-2 -right-0.5 w-4 h-4 flex items-center justify-center  rounded-full bg-hard-primary text-white font-poppins font-medium text-[10px]">
                    2
                  </span>
                  <Link>
                    <SlHandbag className="text-[26px]" />
                  </Link>
                </div>
              </div>
              <div className="cart w-full flex items-center justify-between pb-3 border-b border-gray-1 text-body-md font-poppins font-semibold capitalize text-gray-7">
                Wishlist
                <div className="wishlist ">
                  <Link to={"/"}>
                    <BsHeart className="text-2xl " />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sign in */}
            <Link to="/account/login" onClick={handleCLick} className="py-3 w-full border border-gray-3 hover:border-primary transition-colors duration-200 flex justify-center rounded-md font-poppins font-medium text-gray-7 hover:text-primary cursor-pointer mb-5">
              Sign Up / Sign In
            </Link>
            {/* socal media icon */}
            <div className="flex items-center gap-x-6 text-[#141718] text-2xl">
              <PiInstagramLogoLight />
              <a href="https://www.facebook.com/profile.php?id=61580061792886">
                <LuFacebook />
              </a>
              <PiYoutubeLogoLight />
            </div>
          </div>
          {/* overlay */}
          {isMenuOpen && (
            <div className="fixed top-0 inset-0 bg-gray-6/70 z-1"></div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MiddleBar;