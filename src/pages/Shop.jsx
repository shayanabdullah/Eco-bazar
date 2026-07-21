import React from "react";
import Container from "../components/layouts/Container";
import { BiChevronDown } from "react-icons/bi";
import { BsSliders } from "react-icons/bs";
import ShopSidebar from "../components/Shop/ShopSidebar";

const Shop = () => {

  return (
    <div>
      <Container>
        {/* Shop Header */}
        <div className="pt-8 pb-6 flex justify-between items-center">
          <div className="w-full grid grid-cols-4 items-center justify-between ">
            {/* Filter Button */}
            <div className="left col-span-1 ">
              <button className="py-3.5 px-8 rounded-[40px] flex items-center gap-x-3 text-sm bg-primary  font-poppins font-semibold text-white cursor-pointer">
                Filter
                <BsSliders className="text-xl" />
              </button>
            </div>
            

            {/* Sort */}
            <div className="w-full flex items-center justify-between col-span-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">Sort by:</span>

                <div className="relative">
                  <select className="appearance-none border border-gray-200 rounded-md bg-white px-4 py-2.5 pr-10 text-sm text-gray-700 focus:outline-none  cursor-pointer">
                    <option>Latest</option>
                    <option>Oldest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>

                  <BiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Results */}
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-black">52</span> Results
                Found
              </p>
            </div>
          </div>
        </div>
        {/* Main */}
        <div className="w-full grid grid-cols-4 justify-between">
          <div className="left col-span-1">
        
                <ShopSidebar/>
          </div>
          <div className="right col-span-3"></div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
