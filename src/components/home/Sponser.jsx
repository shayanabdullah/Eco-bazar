import React from "react";
import icon from "../../assets/icons/icon.png";
import icon1 from "../../assets/icons/icon-1.png";
import icon2 from "../../assets/icons/icon-2.png";
import icon3 from "../../assets/icons/icon-3.png";
import icon4 from "../../assets/icons/icon-4.png";
import icon5 from "../../assets/icons/icon-5.png";
import Container from "../layouts/Container";
import { motion } from 'motion/react';
import './sponser.css'
const Sponser = () => {
  const logos = [icon, icon1, icon2, icon3, icon4, icon5];
  const extendedLogos = [...logos, ...logos, ...logos, ...logos];
  return (
   <section className="py-15 overflow-hidden">
  <Container>
    <div className="overflow-hidden">
      <div className="flex w-max gap-12 logo-slide">
        {extendedLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 pr-20 border-r border-gray-1 group">
            <motion.img
              src={logo}
              alt="logo"
              initial={{opacity:0.5}}
              whileHover={{opacity:1}}
              className="w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </Container>
</section>
  );
};

export default Sponser;
