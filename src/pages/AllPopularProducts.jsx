import React, { useState } from "react";
import Container from "../components/layouts/Container";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuArrowRight, LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { popularProducts } from "../utils/data";
import { BsGrid3X3 } from "react-icons/bs";
import { CiGrid2V } from "react-icons/ci";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

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
    <section className="px-4 lg:px-0 py-15">
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
            <div
              className={`border border-gray-1 transition-all duration-300 hover:border-hard-primary group relative cursor-pointer hover:shadow-md shadow-primary/32 ${view === "list" ? "flex flex-row items-center" : "flex flex-col"}`}
              key={item.id}
            >
              {/* Img */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="group-hover:scale-[1.02] transition-all duration-300"
                />
              </div>
              {/* text */}
              <div className="p-3 w-full">
                {/* title, cart */}
                <div className="flex items-center justify-between pb-2 w-full">
                  <div className="">
                    <h2 className="font-poppins font-normal text-sm text-gray-7  group-hover:text-primary">
                      {item.name}
                    </h2>
                    <p className="font-poppins font-medium text-body-md text-gray-9">
                      ${item.price.toFixed(2)}{" "}
                      {item.oldPrice && (
                        <span className="font-normal text-gray-4 line-through">
                          ${item.oldPrice}
                        </span>
                      )}
                    </p>
                  </div>
                  {/* Cart */}
                  <div className="w-7 md:w-10 h-7 md:h-10 rounded-full flex items-center justify-center bg-gray-100 cursor-pointer transition-all duration-300 group-hover:bg-primary group-hover:text-white!">
                    <HiOutlineShoppingBag className="text-gray-9 group-hover:text-white! md:text-xl" />
                  </div>
                  {/* hover quick view  */}

                  <div
                    className={`flex gap-y-1.5 absolute z-10 ${view === "list" ? "bottom-3 right-5 flex-row" : "top-2 right-3 flex-col "}`}
                  >
                    <div
                      className={`w-7 md:w-10 h-7 md:h-10 rounded-full shadow-md flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100  bg-white border border-gray-100 cursor-pointer ${view === "list" ? "translate-y-3  group-hover:translate-y-0" : "translate-x-3 group-hover:translate-x-0 "}`}
                    >
                      <LuEye className="text-gray-9  md:text-xl" />
                    </div>
                    <div
                      className={`w-7 md:w-10 h-7 md:h-10 rounded-full shadow-md flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100  bg-white border border-gray-100 cursor-pointer ${view === "list" ? "translate-y-3  group-hover:translate-y-0" : "translate-x-3 group-hover:translate-x-0 "}`}
                    >
                      <CiHeart className="text-gray-9 md:text-xl" />
                    </div>
                  </div>
                </div>
                {/* rating */}
                <div className={`${view=== 'grid' ?'flex flex-col md:flex-row md:items-center gap-2' : 'flex items-center gap-2'}`}>
                  <div className="flex items-center ">
                    {dynamicRating(item.rating).map((rate) =>
                      rate === "full" ? (
                        <FaStar className="text-warning text-body-md" />
                      ) : rate === "half" ? (
                        <FaStarHalfAlt className="text-warning text-body-md" />
                      ) : (
                        <FaRegStar className="text-gray-4 text-[17px]" />
                      ),
                    )}
                  </div>
                  <div className="font-poppins test-sm font-medium text-gray-4">
                    <p>
                      {item.rating} ({item.reviewCount})
                    </p>
                  </div>
                </div>
              </div>
              {/* discount badge */}
              {item.sale && (
                <div className="py-1 px-2 rounded-sm bg-danger text-gray-0 font-poppins test-sm font-medium absolute top-3 left-2 capitalize">
                  <p>
                    sale <span className="font-semibold">{item.sale}%</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AllPopularProducts;
