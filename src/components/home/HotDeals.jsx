import React from "react";
import Container from "../layouts/Container";
import CommonSection from "../common/CommonSection";
import { popularProducts } from "../../utils/data";
import ProductCard from "./../common/ProductCard";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useDynamicRating } from "../../hooks/useDynamicRating";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";
import { UseCountDown } from "../../hooks/UseCountDown";

const HotDeals = () => {
    const { day, hour, min, sec, expired, message } = UseCountDown("Jun 17 2027");
  const maxProdToShow = popularProducts.slice(0, 13);
  return (
    <section className="bg-[#F7F7F7] py-15 ">
      <Container>
        <CommonSection
          title={"Hot Deals"}
          className={"text-2xl! md:text-heading-05!"}
        />
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 lg:grid-cols-5 px-4 lg:px-0">
          {maxProdToShow.map((item, index) => (
            <>
              {index === 0 && (
                <div className="right col-span-2 row-span-2 size-full bg-white px-6 border border-hard-primary pb-6 shadow-[0_15px_40px_rgba(32,181,38,0.12)] group  md:h-full">
                  <img
                    src={maxProdToShow[2].image}
                    alt="img"
                    className="w-full group-hover:scale-[1.02] transition-all duration-300"
                  />
               <div className="flex flex-col max-h-full">
                   <div className="flex items-center justify-between gap-x-1 pb-8">
                    {/* wishlist */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex items-center justify-center  bg-[#F2F2F2] border border-gray-100 cursor-pointer ">
                      <LuEye className="text-gray-9  md:text-2xl" />
                    </div>
                    {/* button  */}
                    <button className="w-full bg-primary py-3.25 rounded-full text-white font-poppins font-semibold text-sm md:text-base flex items-center justify-center gap-x-3 cursor-pointer">
                      Add To Cart
                      <HiOutlineShoppingBag className=" md:text-xl" />
                    </button>
                    {/* quick view */}
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full  flex items-center justify-center  bg-[#F2F2F2] border border-gray-100 cursor-pointer ">
                      <CiHeart className="text-gray-9 md:text-2xl" />
                    </div>
                  </div>

                  <div className=" flex flex-col items-center justify-center ">
                    {/* Title */}
                    <div className="text w-full text-center">
                      <h2 className="font-poppins font-normal text-lg text-hard-primary mb-2">
                        {maxProdToShow[2].name}
                      </h2>
                      {/* Price */}
                      <p className="font-poppins font-medium text-xl md:text-[26px] ">
                        ${maxProdToShow[2].price.toFixed(2)}{" "}
                        <span className="line-through text-gray-4 font-normal">
                          ${maxProdToShow[2].oldPrice.toFixed(2)}
                        </span>
                      </p>
                    </div>
                    {/* Rating */}
                    <div className="">
                      <div className="flex items-center gap-x-1 capitalize mt-2">
                        {useDynamicRating(maxProdToShow[2].rating).map(
                          (rate) =>
                            rate === "full" ? (
                              <FaStar className="text-warning text-body-md" />
                            ) : rate === "half" ? (
                              <FaStarHalfAlt className="text-warning text-body-md" />
                            ) : (
                              <FaRegStar className="text-gray-4 text-[17px]" />
                            ),
                        )}
                        <p className="font-poppins font-normal text-gray-4 text-sm">{`(${maxProdToShow[2].reviewCount} Feedbacks)`}</p>
                      </div>
                    </div>
                    {/* Countdown */}
                    <div className="flex flex-col gap-y-2 items-center  mt-12 md:mt-4.5">
                      <h3 className="font-poppins font-normal text-gray-4 text-sm ">
                        Hurry up! Offer ends In:
                      </h3>
                      <div className="">
                        {expired ? (
                          <p className="font-poppins font-medium text-xl w-full text-red-800 capitalize flex items-center">
                            {message} <IoWarningOutline className="text-xl" />
                          </p>
                        ) : (
                          <div className="">
                            <div className="flex items-start gap-x-3 font-poppins text-xl  font-medium text-gray-9 uppercase w-full justify-center">
                              {/* Days */}
                              <div className="flex flex-col gap-y-2 ">
                                <p className="text-center">
                                  {day}
                                  <span className="block text-xs font-normal text-center text-gray-4">
                                    Days
                                  </span>
                                </p>
                              </div>

                              <span>:</span>

                              {/* Hours */}
                              <div className="flex flex-col gap-y-2 ">
                                <p className="text-center">
                                  {hour < 10 ? "0" + hour : hour}
                                  <span className="block text-xs font-normal text-center text-gray-4">
                                    Hours
                                  </span>
                                </p>
                              </div>

                              <span>:</span>

                              {/* Minutes */}
                              <div className="flex flex-col gap-y-2 ">
                                <p className="text-center">
                                  {min < 10 ? "0" + min : min}
                                  <span className="block text-xs font-normal text-gray-4">
                                    mins
                                  </span>
                                </p>
                              </div>

                              <span>:</span>

                              {/* secs */}
                              <div className="flex flex-col gap-y-2">
                                <p className="text-center">
                                  {sec < 10 ? "0" + sec : sec}
                                  <span className="block text-xs font-normal text-center text-gray-4">
                                    secs
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
               </div>
                </div>
              )}
              {index !== 2 && index !== 0 && <ProductCard item={item} />}
            </>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HotDeals;
