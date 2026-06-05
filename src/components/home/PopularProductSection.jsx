import React, { useState } from "react";
import CommonSection from "./../common/CommonSection";
import { popularProducts } from "../../utils/data";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";

const PopularProductSection = () => {
  const maxtoShow = popularProducts.slice(0, 10);
  return (
    <>
      <section className="pb-15">
        <CommonSection title={"Popular Products"} link={'/all-popular-products'}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {maxtoShow.map((item) => (
              <div
                className="border border-gray-1 transition-all duration-300 hover:border-hard-primary group relative cursor-pointer hover:shadow-md shadow-primary/32"
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
                <div className="p-3">
                  {/* title, cart */}
                  <div className="flex items-center justify-between pb-2">
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

                    <div className="flex flex-col gap-y-1.5 absolute top-2 right-3">
                      <div
                        className="w-7 md:w-10 h-7 md:h-10 rounded-full shadow-md flex items-center justify-center opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 bg-white border border-gray-100 cursor-pointer "
                      >
                        <LuEye className="text-gray-9  md:text-xl" />
                      </div>
                      <div  className="w-7 md:w-10 h-7 md:h-10 rounded-full shadow-md flex items-center justify-center opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 bg-white border border-gray-100 cursor-pointer "
>
                        <CiHeart className="text-gray-9 md:text-xl" />
                      </div>
                    </div>
                  </div>
                  {/* rating */}
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center ">
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
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
        </CommonSection>
      </section>
    </>
  );
};

export default PopularProductSection;
