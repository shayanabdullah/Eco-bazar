import React, { useState } from "react";
import Container from "./layouts/Container";
import { LuMapPin } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, } from "../utils/animations";

const TopBar = () => {
  const [openLan, setOpenLan] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);

  return (
    <motion.header
      variants={fadeIn('down', 0.4)}
      initial="hidden"
      whileInView="show"
      className="py-3 border-b border-gray-1"
    >
      <Container>
        <div className="flex justify-between items-center font-poppins text-body-xs text-gray-6 font-normal">
          
          {/* LEFT */}
          <div className="flex items-center gap-x-1">
            <LuMapPin className="text-body-sm" />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-x-10 ">
            
       <div className="flex items-center gap-x-5 relative after:absolute after:content-[''] after:h-full after:w-px after:left-1/2 after:top-0 after:-translate-x-1/2 after:bg-gray-1 after:rounded-full">
             {/* LANGUAGE */}
            <div className="flex items-center relative">
              <div
                className="flex items-center gap-x-1.25 cursor-pointer"
                onClick={() => setOpenLan(!openLan)}
              >
                Eng <IoChevronDownOutline />
              </div>

              {/* DROPDOWN */}
              <AnimatePresence>
                {openLan && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-0 rounded-sm text-body-sm absolute top-[122%] z-50 left-0 shadow-md"
                  >
                    <ul>
                      <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer">
                        BN
                      </li>
                      <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer">
                        JP
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CURRENCY */}
          <div className="flex items-center relative">
              <div
                className="flex items-center gap-x-1.25 cursor-pointer"
                onClick={() => setOpenCurrency(!openCurrency)}
              >
                USD <IoChevronDownOutline />
              </div>

              {/* DROPDOWN */}
              <AnimatePresence>
                {openCurrency && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-0 rounded-sm text-body-sm absolute top-[122%] z-50 left-0 shadow-md"
                  >
                    <ul>
                      <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer">
                       BDT
                      </li>
                      <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer">
                      INR
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
       </div>

             {/* AUTH */}
            <div className="capitalize cursor-pointer">
              Sign in / Sign Up
            </div>
          </div>
        </div>
      </Container>
    </motion.header>
  );
};

export default TopBar;