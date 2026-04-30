import React, { useRef, useState } from "react";
import Container from "./layouts/Container";
import { LuMapPin } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant, } from "../utils/animations";
import useClickOutside from "../hooks/useClickOutside";

const TopBar = () => {
  const [openLan, setOpenLan] = useState(false);
  const [openCurrency, setOpenCurrency] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState('USD');
  const [currentlan, setCurrentLan] = useState('Eng');

  const dropDownlanRef = useRef(null)
  const dropDownCurRef = useRef(null)
  useClickOutside(dropDownlanRef, ()=> setOpenLan(false), openLan)
  useClickOutside(dropDownCurRef, ()=> setOpenCurrency(false), openCurrency)



  

  return (
    <motion.header
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      animate="show"
      className="py-3 border-b border-gray-1"
    >
      <Container>
        <div className=" hidden lg:flex justify-between items-center font-poppins text-body-xs text-gray-6 font-normal">
          
          {/* LEFT */}
          <div className="flex items-center gap-x-1">
            <LuMapPin className="text-body-sm" />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-x-10 ">
            
       <div className="flex items-center gap-x-5 relative divider">
             {/* LANGUAGE */}
            <div className="flex items-center relative">
              <div
                className="flex items-center gap-x-1.25 cursor-pointer"
                onClick={() => setOpenLan(!openLan)}
                ref={dropDownlanRef}
              >
                 {currentlan} <IoChevronDownOutline />

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
                   {
                    currentlan !== 'Eng' && (
                         <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer" onClick={() => setCurrentLan('Eng')}>
                        Eng
                      </li>
                    )
                   }
                      <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer" onClick={() => setCurrentLan('BN')}>
                        BN
                      </li>
                      <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer" onClick={() => setCurrentLan('JP')}>
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
                onClick={() => setOpenCurrency(prev => !prev)}
                 ref={dropDownCurRef}
              >
                {currentCurrency} <IoChevronDownOutline />
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
                          {
                    currentCurrency !== 'USD' && (
                         <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer" onClick={() => setCurrentLan('USD')}>
                        USD
                      </li>
                    )
                   }
                      <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer" onClick={() => setCurrentCurrency('BDT')}>
                       BDT
                      </li>
                      <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer" onClick={() => setCurrentCurrency('INR')}>
                      INR
                      </li>
                      <li className="hover:bg-gray-2 px-3 py-1 cursor-pointer" onClick={() => setCurrentCurrency('EUR')}>
                     EUR
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

        {/* mobilo topbar */}
        <motion.div variants={textVariant(0.2)} className="w-full flex justify-center lg:hidden ">
                    <div className="flex items-center gap-x-1 text-body-xs font-poppins font-medium">
            <LuMapPin className="text-body-sm" />
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>
        </motion.div>
      </Container>
    </motion.header>
  );
};

export default TopBar;