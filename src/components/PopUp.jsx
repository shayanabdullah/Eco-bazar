import React, { useEffect, useRef, useState } from "react";
import popImg from "../assets/images/popup.webp";
import { CgClose } from "react-icons/cg";
import useClickOutside from "../hooks/useClickOutside.jsx";
import { motion } from 'motion/react';
const PopUp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  useEffect(() => {
    const hasShowPopup = localStorage.getItem("seenPopup");

    if (!hasShowPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (dontShow) {
      localStorage.setItem("seenPopup", "true");
    }
    setShowPopup(false);
  };

  const popRef = useRef(null);

  useClickOutside(
    popRef,
    () => {
      localStorage.setItem("seenPopup", "true");
      setShowPopup(false);
    },
    showPopup,
  );

  return (
    <>
      {showPopup && (
        <>
          <motion.section initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative z-102">
            <div
              className="main flex flex-col md:flex-row items-center max-w-218 w-[98%] md:w-full rounded-md shadow-xl shadow-gray-7 fixed top-1/2 left-1/2 -translate-1/2 bg-white z-100"
              ref={popRef}
            >
              <div className="right max-w-[80%] md:max-w-[43%] w-full p-2.5">
                <img
                  src={popImg}
                  alt="pop"
                  fetchPriority="high"
                  loading="lazy"
                  width={"100%"}
                />
              </div>
              <div className="left py-8 md:py-12.5 md:px-10 px-5 relative">
                <div className="heading w-full text-center pb-8">
                  <h2 className="font-poppins font-semibold text-2xl md:text-heading-03">
                    Subcribe to Our Newsletter
                  </h2>
                  <p className="font-poppins font-semibold tetx-base text-gray-4">
                    Subscribe to our newlletter and Save your{" "}
                    <span className="text-warning">20% money</span> with
                    discount code today.
                  </p>
                </div>
                <div className="input pb-5 md:pb-12.5">
                  <div className="w-full">
                    <div className="input w-full relative">
                      <input
                        type="text"
                        className="py-3.5 pl-6 bg-white border border-gray-2 focus-within:outline-gray-3 rounded-full font-poppins font-normal text-body-sm lg:text-body-md text-gray-5 w-full "
                        placeholder="Your email address"
                      />
                      <button className="py-3.5 px-10 bg-primary text-white font-poppins font-semibold text-body-sm lg:text-body-md rounded-full cursor-pointer absolute top-0.5 right-0">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 justify-center">
                  <input
                    type="checkbox"
                    name="forget"
                    id="forget"
                    onChange={(e) => setDontShow(e.target.checked)}
                  />
                  <label
                    htmlFor="forget"
                    className="font-poppins font-normal text-body-sm text-gray-6"
                  >
                    Do not show this window
                  </label>
                </div>
                <div
                  className="close absolute top-5 right-5 cursor-pointer hidden md:block"
                  onClick={handleClose}
                >
                  <CgClose />
                </div>
              </div>
            </div>
          </motion.section>
          <div className="overlay absolute inset-0 h-screen w-screen top-0 bg-black/80 z-99"></div>
        </>
      )}
    </>
  );
};

export default PopUp;
