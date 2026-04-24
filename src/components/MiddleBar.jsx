import { motion } from "motion/react";
import React from "react";
import Container from "./layouts/Container";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router";
import { fadeIn, textVariant, scale, fadeUp } from "../utils/animations";
import { BiSearch } from "react-icons/bi";
import { BsHeart, BsSearch } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
import { SlHandbag } from "react-icons/sl";
const MiddleBar = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      whileInView="show"
      className="py-6"
    >
      <Container>
        <motion.nav
          variants={textVariant(0.4)}
          initial="hidden"
          whileInView="show"
          className="flex justify-between items-center"
        >
          {/* Logo */}
          <div className="logo flex items-center gap-x-1">
            <img src={logo} alt="" />
            <Link to={"/"}>
              <motion.h2
                variants={fadeUp(0.4)}
                initial="hidden"
                whileInView="show"
                className="font-poppins font-medium text-heading-05 text-green-gray-9"
              >
                Ecobazar
              </motion.h2>
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
            <Link to={'/'}>
            <BsHeart className="text-2xl "/>
            </Link>
            {/* CART */}
            <div className="flex items-center gap-x-3">
              <div className="cart relative">
                <span className="absolute -top-2 -right-0.5 w-4 h-4 flex items-center justify-center  rounded-full bg-hard-primary text-white font-poppins font-medium text-[10px]">2</span>
                <Link>
                <SlHandbag className="text-[26px]" />
                </Link>
              </div>
              <div className="cart quantity pl-2">
                <h2 className="font-poppins text-body-xs text-gray-7 ">Shopping cart:</h2>
                <p className="font-poppins text-body-sm font-medium text-gray-9 pb-2">$57.00</p>
              </div>
            </div>
           </div>

        </motion.nav>
      </Container>
    </motion.div>
  );
};

export default MiddleBar;
