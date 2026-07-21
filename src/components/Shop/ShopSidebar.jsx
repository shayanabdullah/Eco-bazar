import { useEffect, useState } from "react";
import { BsSliders } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";
import PopularTags from "./PopularTags";
import PromoBanner from "./PromoBanner";
import CategoryAccordion from "./CategoryAccordion";
import SaleProducts from "./SaleProducts";

const ShopSidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-5">
        <button
          onClick={() => setOpen(true)}
          className="py-3.5 px-8 rounded-[40px] flex items-center gap-x-3 text-sm bg-primary font-poppins font-semibold text-white"
        >
          Filter
          <BsSliders className="text-xl" />
        </button>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          h-screen lg:h-auto
          w-[85%] max-w-[340px] lg:max-w-none lg:w-full
          bg-white
          z-999
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          border-r border-gray-200
          pr-4
          font-poppins
          flex flex-col gap-y-5
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-5 border-b">
          <h2 className="text-xl font-semibold">Filters</h2>

          <button onClick={() => setOpen(false)}>
            <IoClose className="text-3xl" />
          </button>
        </div>

        {/* Existing Content (UNCHANGED) */}
        <CategoryAccordion />
        <PriceFilter />
        <RatingFilter />
        <PopularTags />
        <PromoBanner />
        <SaleProducts />
      </aside>
    </>
  );
};

export default ShopSidebar;