import React, { useEffect, useMemo, useState } from "react";
import Container from "../components/layouts/Container";
import { BiChevronDown } from "react-icons/bi";
import { useSearchParams } from "react-router";
import { BsSliders } from "react-icons/bs";
import ShopSidebar from "../components/Shop/ShopSidebar";
import { popularProducts } from "../utils/data";
import ProductCard from "../components/common/ProductCard";
import NoProductsFound from "../components/Shop/Noproductsfound";
import ProductGridSkeleton from "./../components/Shop/ProductGridSkeleton";
import ProductCardSkeleton from "../components/Shop/ProductCardSkeleton";

const sortOptions = [
  { value: "latest", label: "Latest" },
  { value: "new-arrivals", label: "New Arrivals" },
  { value: "best-selling", label: "Best Selling" },
  { value: "top-rated", label: "Top Rated" },
  { value: "oldest", label: "Oldest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];

const Shop = () => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const requestedSort = searchParams.get("sort");
  const selectedSort = sortOptions.some(({ value }) => value === requestedSort)
    ? requestedSort
    : "latest";
  const sortedProducts = useMemo(() => {
    const products = [...popularProducts];
    switch (selectedSort) {
      case "new-arrivals":
      case "latest":
        return products.sort((a, b) => b.id - a.id);
      case "best-selling":
      case "popular":
        return products.sort(
          (a, b) => (b.reviewCount ?? 0) - (a.reviewCount ?? 0),
        );
      case "top-rated":
        return products.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      case "oldest":
        return products.sort((a, b) => a.id - b.id);
      case "price-low":
        return products.sort((a, b) => a.price - b.price);
      case "price-high":
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  }, [selectedSort]);

  const handleSortChange = (event) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("sort", event.target.value);
    setSearchParams(nextParams);
  };

  return (
    <div>
      <Container>
        {/* Shop Header */}
        <div className="pt-8 pb-6 flex justify-between items-center ">
          <div className="w-full grid grid-cols-1 md:grid-cols-4 items-center justify-between ">
            {/* Filter Button */}
            <div className="left col-span-1 ">
              <button
                onClick={() => setOpen(true)}
                className="py-2.5 md:py-3.5 px-6  md:px-8 rounded-[40px] flex items-center gap-x-3 text-sm bg-primary  font-poppins font-semibold text-white cursor-pointer"
              >
                Filter
                <BsSliders className="text-xl" />
              </button>
            </div>

            {/* Sort */}
            <div className="w-full flex items-center justify-between col-span-3 mt-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">Sort by:</span>

                <div className="relative">
                  <select
                    value={selectedSort}
                    onChange={handleSortChange}
                    aria-label="Sort products"
                    className="appearance-none border border-gray-200 rounded-md bg-white px-4 py-2.5 pr-10 text-sm text-gray-700 focus:outline-none cursor-pointer"
                  >
                    {sortOptions.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>

                  <BiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Results */}
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-black">
                  {sortedProducts.length}
                </span>{" "}
                Results Found
              </p>
            </div>
          </div>
        </div>
        {/* Main */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 justify-between py-8">
          <div className="left col-span-1">
            <ShopSidebar open={open} setOpen={setOpen} />
          </div>
          {sortedProducts.length === 0 ? (
            <div className="w-full col-span-3">
              <NoProductsFound />
            </div>
          ) : (
            <div className="right col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
              {sortedProducts.map((item) => (
                <React.Fragment key={item.id}>
                  {loading && <ProductCardSkeleton />}
                  {!loading && (
                    <ProductCard item={item} className={"rounded-lg"} />
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Shop;
