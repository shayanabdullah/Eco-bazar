import { motion } from "motion/react";
import React from "react";
import { fadeIn, container, textVariant } from "../utils/animations";
import Container from "./layouts/Container";
import { IoIosMenu } from "react-icons/io";
import { CgChevronDown } from "react-icons/cg";
import { Link } from "react-router";
import { FiPhoneCall } from "react-icons/fi";

const Navber = () => {
  const navLinks = [
    {
      navItem: "Home",
      Link: "/",
      dropDown: true,
    },
    {
      navItem: "Shop",
      Link: "/",
      dropDown: true,
    },
    {
      navItem: "Pages",
      Link: "/",
      dropDown: true,
    },
    {
      navItem: "Blog",
      Link: "/",
      dropDown: true,
    },
    {
      navItem: "About Us",
      Link: "/",
      dropDown: false,
    },
    {
      navItem: "Contact Us",
      Link: "/",
      dropDown: false,
    },
  ];

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-8"
    >
      <Container>
        <motion.div
          className="nav-main flex justify-between items-center h-full"
        >
          {/* right */}
          <motion.div className="right flex items-center gap-x-8 h-full">

            {/* Categories */}
            <motion.div
           
              className="drop-down flex items-center h-full"
            >
              {/* BUTTON */}
              <motion.button
           
                className="p-2.5 bg-primary cursor-pointer"
              >
                <IoIosMenu className="text-4xl text-white" />
              </motion.button>

              {/* TEXT BOX */}
              <motion.div
                
                className="w-full flex items-center justify-between pr-4 pl-6 bg-gray-9 cursor-pointer text-white py-4 min-h-full min-w-62.5 font-poppins font-medium text-body-md"
              >
                <motion.h2 variants={textVariant(0.4)} >All Categories</motion.h2>

                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  variants={textVariant(0.45)}
                >
                  <CgChevronDown className="text-2xl cursor-pointer" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Nav Links */}
            <div className="navlinks">
              <ul className="flex items-center gap-x-8">
                {navLinks.map((link, index) => (
                  <Link to={link.Link} key={index}>
                    <motion.li variants={textVariant(0.2)} className="flex items-center gap-x-1 text-gray-5 font-poppins font-medium text-body-sm">{link.navItem}
                        {link.dropDown &&  <CgChevronDown/>}
                    </motion.li>
                  </Link>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Left */}
          <div className="flex items-center gap-x-2 font-poppins font-medium text-body-sm text-white cursor-pointer ">
            <FiPhoneCall className="text-xl" />
            <motion.p variants={textVariant(0.4)}>01998-422037</motion.p>
          </div>
        </motion.div>
      </Container>
    </motion.nav>
  );
};

export default Navber;
