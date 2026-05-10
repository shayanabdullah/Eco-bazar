import { AnimatePresence } from "motion/react";
import React, { useRef, useState } from "react";
import Container from "../layouts/Container";
import { IoIosMenu } from "react-icons/io";
import { CgChevronDown, CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import { CiApple, CiCoffeeCup } from "react-icons/ci";
import { TbCategory2, TbMeat, TbSalad } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import { PiCookingPot, PiPopsicleLight } from "react-icons/pi";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import useClickOutside from "../../hooks/useClickOutside";
import { motion } from "motion/react";
import { FaFire } from "react-icons/fa";
import poster from "../../assets/images/poster.webp";
const Navber = () => {
  const navLinks = [
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

  const megaMenuCategories = [
    {
      title: "Fresh Fruits",
      icon: <CiApple />,
      items: ["Apple", "Banana", "Mango", "Orange", "Strawberry"],
      tag: "Hot",
    },
    {
      title: "Vegetables",
      icon: <TbSalad />,
      items: ["Tomato", "Potato", "Onion", "Carrot", "Broccoli"],
      tag: "New",
    },
    {
      title: "Meat & Fish",
      items: ["Chicken", "Beef", "Mutton", "Fresh Fish", "Prawns & Shrimp"],
      tag: "Sale",
    },
    {
      title: "Dairy & Drinks",
      icon: <CiCoffeeCup />,
      items: ["Milk", "Butter", "Yogurt", "Juice", "Soft Drinks"],
      tag: null, // no badge
    },
  ];

  const categoryButtons = {
    "Fresh Fruits": "See all fruits ",
    Vegetables: "See all vegetables ",
    "Meat & Fish": "Explore meat & seafood ",
    "Dairy & Drinks": "Discover dairy & drinks ",
  };
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

  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const handleCatagoryOpen = () => {
    setCategoriesOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gray-8">
      <Container>
        <div className="nav-main hidden lg:flex justify-between items-center w-full  h-full relative">
          {/* right */}
          <div className="right flex items-center gap-x-8">
            {/* Categories */}
            <div
              className="drop-down flex items-center h-full"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
              onClick={() => setCategoriesOpen((prev) => !prev)}
              
              >

              {/* BUTTON */}
              <button className="p-2.5 bg-primary cursor-pointer">
                <IoIosMenu className="text-4xl text-white" />
              </button>

              {/* TEXT BOX */}
              <div className="w-full flex items-center justify-between pr-4 pl-6 bg-gray-9 cursor-pointer text-white py-4 min-h-full min-w-62.5 font-poppins font-medium text-body-md group">
                <h2>All Categories</h2>
                <div>
                  <CgChevronDown
                    className={`text-2xl cursor-pointer transition-transform duration-400 ${categoriesOpen && "rotate-180 "}`}
                  />
                </div>
              </div>

              {/* mega menu */}
              <AnimatePresence>
                {categoriesOpen && (
                <div className="hidden lg:block">
                    <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-full   bg-white p-5 rounded-md grid grid-cols-4 border border-gray-1 shadow z-99  "
                  >
                    <div className="right col-span-3">
                      <div className="grid grid-cols-4 gap-x-7 mb-6">
                        {megaMenuCategories.map((menu, index) => (
                          <div
                            className={`w-full  ${index === megaMenuCategories.length - 1 ? "border-r-0" : "border-r"}`}
                            key={index}
                          >
                            <div className="header flex items-center gap-x-1 font-poppins font-semibold text-green-gray-6 pb-4 relative">
                              <i className="text-2xl">{menu.icon}</i>
                              <h2>{menu.title}</h2>
                              {menu.tag == "Hot" && (
                                <span className="absolute p-1 -right-1 xl:right-5  capitalize! bg-orange-500 text-white text-xs rounded-md flex items-center gap-x-0.5">
                                  {menu.tag} <FaFire />
                                </span>
                              )}
                              {menu.tag == "Sale" && (
                                <span className="absolute p-1 -right-1 xl:right-5  capitalize! bg-green-500 text-white text-xs rounded-md flex items-center gap-x-0.5">
                                  {menu.tag} <FaFire />
                                </span>
                              )}
                              {menu.tag == "New" && (
                                <span className="absolute p-1 -right-1 xl:right-5 capitalize! bg-badge-blue text-white text-xs rounded-md flex items-center gap-x-0.5">
                                  {menu.tag} <FaFire />
                                </span>
                              )}
                            </div>
                            <div className="menus px-3">
                              <ul className="flex flex-col gap-y-2">
                                {menu.items.map((item) => (
                                  <>
                                    <li className="font-poppins font-medium text-base text-gray-5 w-full hover:bg-gray-0 hover:font-bold transition-all duration-300 hover:text-primary p-2 cursor-pointer rounded-md relative">
                                      {item}
                                      {menu.sale && (
                                        <span className="bg-primary p-1 text-xs font-poppins text-white">
                                          {menu.sale}
                                        </span>
                                      )}
                                    </li>
                                  </>
                                ))}
                              </ul>
                              <button className="font-poppins font-medium text-xs text-primary underline flex items-center gap-x-1 cursor-pointer mt-3">
                                {categoryButtons[menu.title]}{" "}
                                <CgChevronRight />{" "}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="font-poppins font-semibold hover:bg-green-800 hover:text-white transition-all duration-300 text-green-gray-6 py-2 px-12 border-2 border-green-gray-6 rounded-md cursor-pointer flex items-center gap-x-2">
                          View all
                          <TbCategory2 className="text-xl" />
                        </button>
                      </div>
                    </div>
                    <div className="banner col-span-1 w-full-full overflow-hidden">
                      <Link to={"/shop"}>
                        <img
                          src={poster}
                          alt="poster"
                          width={"100%"}
                          fetchPriority="high"
                          loading="lazy"
                          className="hover:scale-[1.02] transition-all duration-300 cursor-pointer h-92.5"
                        />
                      </Link>
                    </div>
                  </motion.div>
                </div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav Links */}
            <div className="navlinks">
              <ul className="flex items-center gap-x-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.Link}
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "#808080",
                        textDecoration: "none",
                      })}
                    >
                      <h2 className="flex items-center gap-x-1  font-poppins font-medium text-body-sm hover:text-white transition-colors duration-300">
                        {link.navItem}
                      </h2>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left */}
          <div className="flex items-center gap-x-2 font-poppins font-medium text-body-sm text-white cursor-pointer ">
            <FiPhoneCall className="text-xl" />
            <Link to={"tel:01998-422037"}>01998-422037</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
