import React from "react";
import { useDynamicRating } from "../../hooks/useDynamicRating";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
const ProductCard = ({item, className}) => {
  return (
    <div
      className={`border border-gray-1 transition-all duration-300 hover:border-hard-primary group bg-white relative cursor-pointer hover:shadow-md shadow-primary/32 ${className}`}
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
              {item.name.slice(0, 25)} ...
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
            
            <div className="w-7 md:w-10 h-7 md:h-10 rounded-full shadow-md flex items-center justify-center opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 bg-white border border-gray-100 cursor-pointer ">
              <LuEye className="text-gray-9  md:text-xl" />
            </div>
            <div className="w-7 md:w-10 h-7 md:h-10 rounded-full shadow-md flex items-center justify-center opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 bg-white border border-gray-100 cursor-pointer ">
              <CiHeart className="text-gray-9 md:text-xl" />
            </div>

          </div>
        </div>
        {/* rating */}
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div className="flex items-center ">
            {useDynamicRating(item.rating).map((rate) =>
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
  );
};

export default ProductCard;
