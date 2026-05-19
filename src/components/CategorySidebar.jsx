import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenuFold2Line } from "react-icons/ri";
import { CiApple, CiCoffeeCup } from "react-icons/ci";
import { TbSalad, TbMeat } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import {
  PiCookingPot,
  PiHandSoap,
  PiPlusSquareLight,
  PiPopsicleLight,
} from "react-icons/pi";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl, LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import {
  GiCarrot,
  GiStrawberry,
  GiChickenLeg,
  GiBread,
  GiMilkCarton,
  GiPopcorn,
} from "react-icons/gi";
import {
  MdOutlineCleaningServices,
  MdOutlineChildCare,
  MdOutlineIcecream,
  MdOutlineLocalDrink,
  MdOutlineGridView,
  MdOutlineBakeryDining,
} from "react-icons/md";
import { TbEgg } from "react-icons/tb";
import { BsPlusLg } from "react-icons/bs";
import { AnimatePresence, motion } from "motion/react";
import useScrollLock from "./../hooks/useScrollLock";
import useClickOutside from "../hooks/useClickOutside";

const CategorySidebar = ({ isOpen = false, setIsOpen }) => {
  const [dropDown, setDropDown] = useState({});

  const categoriesData = [
    {
      category: "Fresh Vegetables",
      icon: <GiCarrot />,

      subCategories: [
        "Leafy Greens",
        "Root Vegetables",
        "Gourds & Squash",
        "Beans & Peas",
        "Mushrooms",
        "Onion, Garlic & Ginger",
        "Peppers & Chilies",
      ],
    },

    {
      category: "Fresh Fruits",
      icon: <CiApple />,

      subCategories: [
        "Tropical Fruits",
        "Citrus Fruits",
        "Berries",
        "Melons & Watermelons",
        "Stone Fruits",
        "Seasonal Fruits",
        "Imported Fruits",
      ],
    },

    {
      category: "Fish & Seafood",
      icon: <IoFishOutline />,

      subCategories: [
        "River Fish",
        "Sea Fish",
        "Shrimp & Prawns",
        "Crab & Lobster",
        "Fish Fillets",
        "Dried Fish",
        "Frozen Seafood",
      ],
    },

    {
      category: "Meat & Poultry",
      icon: <GiChickenLeg />,

      subCategories: [
        "Whole Chicken",
        "Chicken Cuts",
        "Beef",
        "Mutton & Goat",
        "Offal & Organ Meat",
        "Sausages & Cold Cuts",
      ],
    },

    {
      category: "Dairy & Eggs",
      icon: <GiMilkCarton />,

      subCategories: [
        "Milk",
        "Eggs",
        "Butter & Margarine",
        "Cheese",
        "Cream & Condensed Milk",
        "Paneer & Tofu",
      ],
    },

    {
      category: "Yogurt & Desserts",
      icon: <PiPopsicleLight />,

      subCategories: [
        "Plain Yogurt",
        "Flavored Yogurt",
        "Greek Yogurt",
        "Ice Cream",
        "Kulfi",
        "Frozen Desserts & Sorbet",
      ],
    },

    {
      category: "Bakery & Bread",
      icon: <MdOutlineBakeryDining />,

      subCategories: [
        "Bread & Loaves",
        "Buns & Rolls",
        "Croissants & Pastries",
        "Cakes & Cupcakes",
        "Cookies & Biscuits",
        "Rusk & Crackers",
      ],
    },

    {
      category: "Beverages",
      icon: <MdOutlineLocalDrink />,

      subCategories: [
        "Mineral Water",
        "Soft Drinks & Soda",
        "Fruit Juices",
        "Tea",
        "Coffee",
        "Energy & Sports Drinks",
        "Milk-Based Drinks",
      ],
    },

    {
      category: "Cooking Essentials",
      icon: <PiCookingPot />,

      subCategories: [
        "Rice & Grains",
        "Flour & Semolina",
        "Cooking Oil & Ghee",
        "Pasta & Noodles",
        "Spices & Herbs",
        "Salt & Sugar",
        "Vinegar & Sauces",
      ],
    },

    {
      category: "Snacks & Packaged Food",
      icon: <GiPopcorn />,

      subCategories: [
        "Chips & Crisps",
        "Nuts & Dried Fruits",
        "Instant Noodles",
        "Canned & Jarred Food",
        "Pickles & Condiments",
        "Breakfast Cereals",
      ],
    },

    {
      category: "Household & Cleaning",
      icon: <MdOutlineCleaningServices />,

      subCategories: [
        "Dishwashing",
        "Laundry",
        "Floor & Surface Cleaners",
        "Toilet Cleaners",
        "Air Fresheners",
        "Garbage Bags & Wrap",
      ],
    },

    {
      category: "Personal Care",
      icon: <PiHandSoap />,

      subCategories: [
        "Soap & Body Wash",
        "Shampoo & Conditioner",
        "Toothpaste & Oral Care",
        "Skincare",
        "Deodorants",
        "Feminine Hygiene",
      ],
    },

    {
      category: "Baby & Kids",
      icon: <MdOutlineChildCare />,

      subCategories: [
        "Baby Food & Formula",
        "Diapers & Wipes",
        "Baby Skincare",
        "Kids Snacks",
        "Baby Accessories",
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setDropDown((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    console.log(dropDown[index]);
  };

  useScrollLock(isOpen);
  const sideBarRef = useRef();

  useClickOutside(sideBarRef, () => setIsOpen(false), "mousedown", isOpen);

  return (
    <>
      <div>
        <div
          className={`max-w-93 bg-white fixed top-0 h-screen z-105 p-3 md:block hidden w-full transition-all duration-300 border-r border-gray-2 overflow-y-scroll catagory-scroll ${isOpen ? "left-0" : "-left-full"}`}
          ref={sideBarRef}
        >
          <div className="header w-full border-b border-gray-3/70 py-3 flex items-center justify-between mb-8">
            <div className="flex items-center gap-x-3  text-primary ">
              <RiMenuFold2Line
                className="text-2xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
              <h2 className="font-poppins font-semibold text-2xl">
                All Categories
              </h2>
            </div>
            <IoClose
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Drop Down items  */}
          <div className=" flex flex-col gap-y-3">
            {categoriesData.map((item, index) => {
              const isDropdownOpen = dropDown[index];

              return (
                <div
                  key={index}
                  onClick={() => toggleDropdown(index)}
                  className={`${index !== 0 && "border-t border-gray-2/50"}`}
                >
                  <div
                    className={`flex items-center justify-between font-poppins font-medium cursor-pointer text-gray-6 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 group rounded-md px-3 py-4 ${isDropdownOpen && "bg-primary text-white"}`}
                  >
                    <div className="flex items-center gap-x-3">
                      <i className="text-2xl">{item.icon}</i>
                      <p>{item.category}</p>
                    </div>
                    <div className="group-hover:text-white">
                      {isDropdownOpen ? <LuMinus /> : <BsPlusLg />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                        className="dropdown w-full pl-13 pt-3 pb-3 flex flex-col gap-y-2"
                      >
                        {item?.subCategories?.map((sub, index) => (
                          <p
                            key={index}
                            className="font-poppins font-medium text-base text-gray-5 hover:underline cursor-pointer"
                          >
                            {sub}
                          </p>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {isOpen && <div className="fixed top-0 inset-0 bg-gray-9/80 z-1" />}
    </>
  );
};

export default CategorySidebar;
