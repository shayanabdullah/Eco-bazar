import React from "react";
import Container from "../components/layouts/Container";
import { BiChevronDown } from "react-icons/bi";
import { BsSliders } from "react-icons/bs";
import Accordion from "../components/common/Accordion";
import { FaChevronDown } from "react-icons/fa";
import { shopCategories } from "../utils/data";

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
                  <select className="appearance-none border border-gray-200 rounded-md bg-white px-4 py-2 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
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
            <Accordion
              title={"All Categories"}
              fontWeight={"medium"}
              fontSize={"text-xl"}
              icon={<FaChevronDown />}
              titleBorder={'border-t border-gray-2'}
            >
              <div className="my-5 flex flex-col gap-y-3">
                {
                  shopCategories.map((item) => (
                    <div className="relative flex gap-x-3 gap-y-2 items-center" key={item.id}>
                      <input type="checkbox" className="peer" id={item.name} hidden  />


                  <span className="w-5 h-5 rounded-full border border-[#CCCCCC] peer-checked:border-primary! relative after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-3 after:h-3 after:rounded-full  after:-translate-x-1/2 after:-translate-y-1/2  peer-checked:after:bg-primary after:transition-all"></span>


                      <label htmlFor={item.name} className="cursor-pointer text-sm font-poppins font-normal ">{item.name}
                        <span className="pl-1 text-gray-5">({item.products})</span>
                      </label>
                    </div>
                  ))
                }
              </div>


            </Accordion>
          </div>
          <div className="right col-span-3"></div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
