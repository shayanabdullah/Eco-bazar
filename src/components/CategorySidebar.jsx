import React, { useRef, useState } from "react";

import { BsPlusLg } from "react-icons/bs";
import { LuMinus } from "react-icons/lu";
import { AnimatePresence, motion } from "motion/react";
import useScrollLock from "./../hooks/useScrollLock";
import useClickOutside from "../hooks/useClickOutside";
import { allCategoriesSidebar } from "../utils/catagoryData";

import { IoClose } from "react-icons/io5";
import { RiMenuFold2Line } from "react-icons/ri";
import { Link } from "react-router";
const CategorySidebar = ({ isOpen = false, setIsOpen }) => {
  const [dropDownIndex, setDropDownIndex] = useState(null);

 

  const toggleDropdown = (index) => {
   setDropDownIndex((prevIndex) => prevIndex === index ? null : index)
  };

  useScrollLock(isOpen);
  const sideBarRef = useRef();

  useClickOutside(sideBarRef, () => setIsOpen(false), "mousedown", isOpen);
 
  return (
    <>
      <div>
        <div
          className={`max-w-[300px] md:max-w-[400px] bg-white fixed top-0 h-screen z-105 md:block  w-full transition-all duration-300 border-r border-gray-2 overflow-y-scroll catagory-scroll ${isOpen ? "left-0" : "-left-full"}`}
          ref={sideBarRef}
        >
          <div className="header w-full border-b border-gray-3/70 p-5 bg-gray-0/70 flex items-center justify-between mb-4">
            <div className="">
            
              <h2 className="font-semibold text-base md:text-xl  text-gray-9">
               Explore Category & Shop
              </h2>
            </div>
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Drop Down items  */}
          <h3 className="px-4 text-[13px] md:text-[15px] font-bold text-gray-7 mb-2 uppercase tracking-wider">
            All Categories
          </h3>
          <div className=" flex flex-col px-2">
            {allCategoriesSidebar.map((item, index) => {

              return (
                <div
                  key={index}
                  onClick={() => toggleDropdown(index)}
                  className={`${index !== 0 && "border-t border-gray-2/50"}`}
                >
                  <div
                    className={`flex items-center justify-between font-poppins font-medium cursor-pointer text-gray-6 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 group rounded-md  p-3 ${dropDownIndex === index && "bg-primary text-white"}`}
                  >
                    <div className="flex items-center gap-x-3">
                      <i className="text-2xl">{item.icon}</i>
                      <p className="font-medium text-[15px] text-gray-700 group-hover:text-white">{item.category}</p>
                    </div>
                    <div className="group-hover:text-white">
                      {dropDownIndex === index ? <LuMinus /> : <BsPlusLg />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {dropDownIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                        className="dropdown w-full pl-13 pt-3 pb-3 flex flex-col gap-y-2"
                      >
                        {item?.subCategories?.map((sub, index) => (
                          <Link to='/shop'
                            key={index}
                            onClick={() => setIsOpen(false)}
                            className="font-poppins font-medium text-base text-gray-5 hover:underline cursor-pointer"
                          >
                            {sub}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isOpen && <div className="fixed top-0 inset-0 bg-gray-9/80 z-100" />}
    </>
  );
};

export default CategorySidebar;
