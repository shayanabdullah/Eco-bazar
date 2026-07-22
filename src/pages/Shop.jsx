import React, { useEffect, useState } from "react";
import Container from "../components/layouts/Container";
import { BiChevronDown } from "react-icons/bi";
import { BsSliders } from "react-icons/bs";
import ShopSidebar from "../components/Shop/ShopSidebar";
import { popularProducts } from "../utils/data";
import ProductCard from "../components/common/ProductCard";
import NoProductsFound from "../components/Shop/Noproductsfound";
import ProductGridSkeleton from './../components/Shop/ProductGridSkeleton';
import ProductCardSkeleton from "../components/Shop/ProductCardSkeleton";

const Shop = () => {
  
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

   return (
    <div>
      <Container>
        {/* Shop Header */}
        <div className="pt-8 pb-6 flex justify-between items-center px-2">
          <div className="w-full grid grid-cols-1 md:grid-cols-4 items-center justify-between ">
            {/* Filter Button */}
            <div className="left col-span-1 ">
              <button onClick={() => setOpen(true)} className="py-3.5 px-8 rounded-[40px] flex items-center gap-x-3 text-sm bg-primary  font-poppins font-semibold text-white cursor-pointer">
                Filter
                <BsSliders className="text-xl" />
              </button>
            </div>
            

            {/* Sort */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between col-span-3">
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
                <span className="font-semibold text-black">{popularProducts.length}</span> Results
                Found
              </p>
            </div>
          </div>
        </div>
        {/* Main */}
       <div className="w-full grid grid-cols-1 lg:grid-cols-4 justify-between py-8">
          <div className="left col-span-1">
        
                <ShopSidebar open={open} setOpen={setOpen} />
          </div>
         {
          popularProducts.length === 0 ? (
            <div className="w-full col-span-3">
              <NoProductsFound/>
            </div>
          ) : (
              
          <div className="right col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 px-3">
           
            {
              popularProducts.map((item) => (
                <>
                        {loading && <ProductCardSkeleton/>}
                        {!loading && <ProductCard item={item} key={item.id} className={'rounded-lg'}/>}
                </>
              ))
            }
          </div>
          )
        }
        </div>
      </Container>
    </div>
  );
};

export default Shop;
