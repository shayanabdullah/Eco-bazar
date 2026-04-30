import { AnimatePresence, motion } from "motion/react";
import React, { useRef, useState } from "react";
import { fadeIn, container, textVariant } from "../utils/animations";
import Container from "./layouts/Container";
import { IoIosMenu } from "react-icons/io";
import { CgChevronDown } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import { CiApple, CiCoffeeCup } from "react-icons/ci";
import { TbMeat, TbSalad } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import { PiCookingPot, PiPopsicleLight } from "react-icons/pi";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import useClickOutside from "../hooks/useClickOutside";

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
  const categoryRef = useRef(null);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const handleCatagoryOpen = () => {
    setCategoriesOpen((prev) => !prev);
  };

  useClickOutside(categoryRef, () => setCategoriesOpen(false), categoriesOpen);
  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      className="bg-gray-8"
    >
      <Container>
        <motion.div className="nav-main hidden lg:flex justify-between items-center w-full  h-full">
          {/* right */}
          <motion.div className="right flex items-center gap-x-8  h-full">
            {/* Categories */}
            <motion.div
              className="drop-down flex items-center h-full relative"
              onHoverStart={() => setCategoriesOpen(true)}
              onHoverEnd={() => setCategoriesOpen(false)}
              ref={categoryRef}
            >
              {/* BUTTON */}
              <motion.button
                className="p-2.5 bg-primary cursor-pointer"
                onClick={handleCatagoryOpen}
              >
                <IoIosMenu className="text-4xl text-white" />
              </motion.button>

              {/* TEXT BOX */}
              <motion.div
                onClick={handleCatagoryOpen}
                className="w-full flex items-center justify-between pr-4 pl-6 bg-gray-9 cursor-pointer text-white py-4 min-h-full min-w-62.5 font-poppins font-medium text-body-md group"
              >
                <motion.h2 variants={textVariant(0.2)}>
                  All Categories
                </motion.h2>

                <motion.div variants={textVariant(0.25)}>
                  <CgChevronDown
                    className={`text-2xl cursor-pointer transition-transform duration-400 ${categoriesOpen && "rotate-180 "}`}
                  />
                </motion.div>
              </motion.div>

              {/* categories */}

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className=" border border-gray-1 absolute top-[130%] left-0 z-999999 bg-white w-full font-poppins font-normal text-body-sm text-green-gray-9 rounded-sm"
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Nav Links */}
            <div className="navlinks">
              <ul className="flex items-center gap-x-8">
                {navLinks.map((link, index) => (
                  <motion.li variants={textVariant(0.2)} key={index}>
                    <NavLink
                      to={link.Link}
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "#808080",
                        textDecoration: "none",
                      })}
           
                    >
                      <h2 className="flex items-center gap-x-1  font-poppins font-medium text-body-sm hover:text-white transition-colors duration-300">
                      {link.navItem}
                      {link.dropDown && <CgChevronDown />}
                      </h2>
                     
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Left */}
          <div className="flex items-center gap-x-2 font-poppins font-medium text-body-sm text-white cursor-pointer ">
            <FiPhoneCall className="text-xl" />
            <motion.p variants={textVariant(0.2)}>01998-422037</motion.p>
          </div>
        </motion.div>
      </Container>
    </motion.nav>
  );
};

export default Navber;
