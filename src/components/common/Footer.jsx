import React from "react";
import Container from "../layouts/Container";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "motion/react";
import { fadeUp } from "../../utils/animations";
import logo from "../../assets/images/logo.webp";
import payLogo from "../../assets/images/payment-logo.webp";
import { Link } from "react-router";
const Footer = () => {
  const footerData = [
    {
      title: "My Account",
      links: ["My Account", "Order History", "Shopping Cart", "Wishlist"],
    },
    {
      title: "Helps",
      links: ["Contact", "Faqs", "Terms & Condition", "Privacy Policy"],
    },
    {
      title: "Proxy",
      links: ["About", "Shop", "Product", "Track Order"],
    },
    {
      title: "Categories",
      links: [
        "Fruit & Vegetables",
        "Meat & Fish",
        "Bread & Bakery",
        "Beauty & Health",
      ],
    },
  ];
  return (
    <>
      {/* Newsletter */}
      <section className="py-10 px-4 lg:px-0 bg-[#f7f7f7]">
        <Container>
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-x-28 gap-y-5">
            <div className="text-box">
              <h2 className="font-poppins font-semibold text-xl sm:text-2xl text-gray-9 pb-2">
                Subcribe our Newsletter
              </h2>
              <p className="font-poppins font-normal text-xs sm:text-sm text-gray-4">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-x-10 gap-y-5 w-full">
              <div className="input w-full relative">
                <input
                  type="text"
                  className="py-3 md:py-3.5 pl-6 bg-white border border-gray-2 focus-within:outline-gray-3 rounded-full font-poppins font-normal text-xs  md:text-body-sm lg:text-body-md text-gray-5 w-full "
                  placeholder="Your email address"
                />
                <button className="py-3.25 md:py-4 px-7 md:px-10 bg-primary text-white font-poppins font-semibold text-xs lg:text-body-md rounded-full cursor-pointer absolute top-0 right-0">
                  Subscribe
                </button>
              </div>
              {/* logo icons */}
              <div className="flex items-center gap-x-2">
                <FaFacebookF className="text-4xl text-gray-7 transition-colors duration-300 p-2  rounded-full hover:bg-primary hover:text-white cursor-pointer" />
                <FaTwitter className="text-4xl text-gray-7 transition-colors duration-300 p-2  rounded-full hover:bg-primary hover:text-white cursor-pointer" />
                <FaPinterestP className="text-4xl text-gray-7 transition-colors duration-300 p-2  rounded-full hover:bg-primary hover:text-white cursor-pointer" />
                <FaInstagram className="text-4xl text-gray-7 transition-colors duration-300 p-2  rounded-full hover:bg-primary hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-gray-9 px-4 lg:px-0">
        <Container>
          {/* Footer top */}
          <div className="py-8 lg:py-15 grid grid-cols-1 lg:grid-cols-3 gap-y-10">
            <div className="text lg:max-w-84">
              {/* logo */}
              <div className="logo flex items-center gap-x-1 pb-4">
                <img
                  src={logo}
                  alt="logo"
                  loading="lazy"
                  fetchPriority="high"
                />
                <Link to={"/"}>
                  <motion.h2
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    animate="show"
                    className="font-poppins font-medium text-heading-05 text-white"
                  >
                    Ecobazar
                  </motion.h2>
                </Link>
              </div>
              <p className="font-poppins font-normal text-sm text-gray-5 pb-4">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <div className="flex items-center gap-x-4">
                <p className="num font-poppins font-medium text-sm text-white py-1 border-b border-primary">
                  <Link to="tel:01998422037">01998422037</Link>
                </p>
                <p className="font-poppins font-normal text-sm text-gray-5">
                  or
                </p>
                <p className="num font-poppins font-medium text-sm text-white py-1 border-b border-primary">
                  <a href="mailto:shayanabdullah@gmail.com">
                    shayanabdullah@gmail.com
                  </a>{" "}
                </p>
              </div>
            </div>
            {/* Links */}
            <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-cols-4  gap-x-10 lg:gap-x-28 lg:col-span-2 gap-y-12">
              {footerData.map((setion, i) => (
                <div className="" key={i}>
                  <h2 className="font-poppins font-semibold text-sm text-white pb-5">
                    {setion.title}
                  </h2>
                  <ul className="flex flex-col gap-y-3">
                    {setion.links.map((link, index) => (
                      <li
                        key={index}
                        className="font-poppins font-normal text-sm text-gray-4 cursor-pointer hover:text-white hover:underline transition-all duration-300"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Footer bottom */}
          <div className="py-7.5  border-t border-gray-8 flex flex-col lg:flex-row items-center justify-between gap-y-5">
            <div className="text">
              <p className="font-poppins font-normal text-sm text-gray-5 capitalize">
                Ecobazar eCommerce © 2026. All Rights Reserved. develop by
                shayan abdullah
              </p>
            </div>
            <div className="img">
              <img
                src={payLogo}
                alt="logo"
                loading="lazy"
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
