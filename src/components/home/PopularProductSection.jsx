import React, { useState } from "react";
import CommonSection from "./../common/CommonSection";
import { popularProducts } from "../../utils/data"
import { useDynamicRating } from "../../hooks/useDynamicRating";
import ProductCard from './../common/ProductCard';

const PopularProductSection = () => {
  const maxtoShow = popularProducts.slice(0, 10);


  return (
    <>
      <section className="">
        <CommonSection title={"Popular Products"} link={'/all-popular-products'}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {maxtoShow.map((item) => (
             <ProductCard item={item}/>
            ))}
          </div>
        </CommonSection>
      </section>
    </>
  );
};

export default PopularProductSection;
