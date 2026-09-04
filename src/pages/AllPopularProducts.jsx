import React, { useState } from "react";
import Container from "../components/layouts/Container";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuArrowRight, LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { popularProducts } from "../utils/data";
import { BsGrid3X3 } from "react-icons/bs";
import { CiGrid2V } from "react-icons/ci";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ProductCard from "../components/common/ProductCard";

const AllPopularProducts = () => {
  const [view, setView] = useState("grid");

  const maxtoShow = popularProducts;
  const dynamicRating = (rating) => {
    let ratingArr = [];
    let halfStar = rating.toString().split(".")[1];
    let index = Math.floor(rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ratingArr.push("full");
      } else {
        ratingArr.push(i);
      }
    }
    if (halfStar) {
      ratingArr[index] = "half";
    }
    return ratingArr;
  };
  return (
    <section className="py-15">
      <Container>   
        {/* Heading */}
        <div className="heading flex items-center justify-between pb-8">
          <div className="">
            <h2 className="font-poppins font-semibold text-xl md:text-heading-05 text-gray-9 pb-2 md:pb-0">
              Popular Products
            </h2>
            <p className="font-poppins font-medium text-xs max-w-[150px] md:max-w-full md:text-lg text-gray-5">
              Handpicked bestsellers loved by our customers
            </p>
          </div>
          {/* View Btn */}
          <div className="font-poppins font-medium text-sm md:text-body-md text-primary flex items-center gap-x-2 transition-all duration-300  cursor-pointer capitalize">
            View :
            <div className="flex items-center gap-x-1">
              <button
                className={`p-2 rounded-md border border-gray-100 cursor-pointer ${view === "grid" ? "bg-primary text-white" : "bg-gray-50 text-gray-9 "}`}
                onClick={() => setView("grid")}
              >
                <BsGrid3X3 />
              </button>
              <button
                className={`p-2 rounded-md border border-gray-100 cursor-pointer ${view === "list" ? "bg-primary text-white" : "bg-gray-50 text-gray-9 "}`}
                onClick={() => setView("list")}
              >
                <CiGrid2V />
              </button>
            </div>
          </div>
        </div>
        {/* main content */}
        <div
          className={` transition-all duration-300 ${
            view === "grid"
              ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
              : "grid grid-cols-1 md:grid-cols-2 "
          }`}
        >
          {maxtoShow.map((item) => (
            <ProductCard
            key={item.id}
            item={item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AllPopularProducts;
