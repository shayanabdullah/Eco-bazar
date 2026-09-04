import React, { useEffect, useState } from "react";
import Container from "../layouts/Container";
import banner from "../../assets/images/discount-banner.webp";
import mobilebanner from "../../assets/images/mobile-discount-banner.webp";
import { Link } from "react-router";

const DiscountBanner = () => {
  

  return (
    <section className="py-15 ">
      <Container>
        <div className="main size-full group overflow-hidden rounded-[10px]">
          <Link to='/shop'>
          <picture>
            <source media="(max-width: 600px)" srcSet={mobilebanner} />
            <img
              src={banner}
              alt="banner"
              className="w-full cursor-pointer group-hover:scale-[1.01] transition-all duration-300"
            />
          </picture>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default DiscountBanner;
