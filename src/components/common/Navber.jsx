import { AnimatePresence } from "motion/react";
import React, { useRef, useState } from "react";
import Container from "../layouts/Container";
import { IoIosMenu } from "react-icons/io";
import { CgChevronDown, CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { Link, NavLink } from "react-router";
import { FiPhoneCall } from "react-icons/fi";
import { CiApple, CiCoffeeCup } from "react-icons/ci";
import { TbCategory2, TbMeat, TbSalad } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import { PiCookingPot, PiPopsicleLight } from "react-icons/pi";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import useClickOutside from "../../hooks/useClickOutside";
import { motion } from "motion/react";
import { FaArrowRight, FaFire } from "react-icons/fa";
import poster from "../../assets/images/poster.webp";
import { HiOutlineChevronRight } from "react-icons/hi";
import brocolli from '../../assets/images/broccoli.webp'
import carrot from '../../assets/images/carrot.webp'
import spinach from '../../assets/images/spinach.webp'
import bellpaper from '../../assets/images/pepper.webp'
import orange from '../../assets/images/orange.webp';
import strawberry from '../../assets/images/strawberry.webp';
import banana from '../../assets/images/banana.webp';
import avocado from '../../assets/images/avocado.webp';
// import salmon from '../../assets/images/salmon.webp';
// import shrimp from '../../assets/images/shrimp.webp';
// import tuna from '../../assets/images/tuna.webp';
// import crab from '../../assets/images/crab.webp';
// import chicken from '../../assets/images/chicken.webp';
// import beef from '../../assets/images/beef.webp';
// import mutton from '../../assets/images/mutton.webp';
// import sausage from '../../assets/images/sausage.webp';
// import juice from '../../assets/images/juice.webp';
// import water from '../../assets/images/water.webp';
// import coffee from '../../assets/images/coffee.webp';
// import energy from '../../assets/images/energy.webp'; 
// import icecream from '../../assets/images/icecream.webp';
// import yogurt from '../../assets/images/yogurt.webp';
// import cone from '../../assets/images/cone.webp';
// import berry from '../../assets/images/berry.webp'; 
// import cake from '../../assets/images/cake.webp';
// import croissant from '../../assets/images/croissant.webp';
// import cupcake from '../../assets/images/cupcake.webp';
// import bread from '../../assets/images/bread.webp';
// import butter from '../../assets/images/butter.webp';
// import cheese from '../../assets/images/cheese.webp';
// import cream from '../../assets/images/cream.webp';
// import creamcheese from '../../assets/images/creamcheese.webp';
// import oil from '../../assets/images/oil.webp'; 
// import rice from '../../assets/images/rice.webp';
// import pasta from '../../assets/images/pasta.webp';
// import spices from '../../assets/images/spices.webp';
const Navber = () => {
  const navLinks = [
    {
      navItem: "Home",
      Link: "/",
      dropDown: true,
    },
    {
      navItem: "Shop",
      Link: "/shop",
      dropDown: true,
    },
    {
      navItem: "Blog",
      Link: "/blog",
      dropDown: true,
    },
    {
      navItem: "About Us",
      Link: "/about",
      dropDown: false,
    },
    {
      navItem: "Contact Us",
      Link: "/contact",
      dropDown: false,
    },
  ];
  

  const megaMenuCategories = [
    {
      title: "Fresh Fruits",
      icon: <CiApple />,
      items: ["Apple", "Banana", "Mango", "Orange", "Strawberry"],
      tag: "Hot",
    },
    {
      title: "Vegetables",
      icon: <TbSalad />,
      items: ["Tomato", "Potato", "Onion", "Carrot", "Broccoli"],
      tag: "New",
    },
    {
      title: "Meat & Fish",
      items: ["Chicken", "Beef", "Mutton", "Fresh Fish", "Prawns & Shrimp"],
      tag: "Sale",
    },
    {
      title: "Dairy & Drinks",
      icon: <CiCoffeeCup />,
      items: ["Milk", "Butter", "Yogurt", "Juice", "Soft Drinks"],
      tag: null, // no badge
    },
  ];

  const categoryButtons = {
    "Fresh Fruits": "See all fruits ",
    Vegetables: "See all vegetables ",
    "Meat & Fish": "Explore meat & seafood ",
    "Dairy & Drinks": "Discover dairy & drinks ",
  };

const catagories = [
    {
      id: 1,
      category: "Fresh Vegetables",
      icon: <TbSalad />,
      slug: "fresh-vegetables",
      subCategories: [
        "Leafy Greens", "Root Vegetables", "Cruciferous Vegetables", 
        "Beans & Pulses", "Gourds & Squash", "Mushrooms", "Peppers", "Herbs & Seasonings"
      ],
      popularItems: [
        { name: "Broccoli", price: "$2.49 / kg", image: brocolli },
        { name: "Carrot", price: "$1.49 / kg", image: carrot },
        { name: "Spinach", price: "$1.29 / bunch", image: spinach },
        { name: "Red Bell Pepper", price: "$2.99 / kg", image: bellpaper },
      ],
      banner: {
        title: "Eat Fresh\nStay Healthy",
        description: "Up to 30% OFF on Fresh Vegetables",
        button: "Shop Now",
        image: "/images/banners/vegetable-banner.png",
      },
    },
    {
      id: 2,
      category: "Fresh Fruits",
      icon: <CiApple />,
      slug: "fresh-fruits",
      subCategories: [
        "Citrus Fruits", "Tropical Fruits", "Berries", "Melons", 
        "Stone Fruits", "Organic Fruits", "Seasonal Fruits", "Dry Fruits"
      ],
      popularItems: [
        { name: "Orange", price: "$3.20 / kg", image: orange },
        { name: "Strawberry", price: "$4.50 / box", image: strawberry },
        { name: "Banana", price: "$1.10 / dozen", image: banana },
        { name: "Avocado", price: "$2.80 / pc", image: avocado },
      ],
      banner: {
        title: "Sweet & Juicy\nFresh Fruits",
        description: "Fresh arrivals directly from farms",
        button: "Explore Fruits",
        image: "/images/banners/fruits-banner.png",
      },
    },
    {
      id: 3,
      category: "River Fish",
      icon: <IoFishOutline />,
      slug: "river-fish",
      subCategories: [
        "Fresh Water Fish", "Frozen Fish", "Sea Fish", "Dry Fish", 
        "Prawns & Shrimp", "Crab", "Salmon", "Tuna"
      ],
      popularItems: [
        { name: "Salmon", price: "$12.99 / kg", image: salmon },
        { name: "Shrimp", price: "$9.49 / kg", image: shrimp },
        { name: "Tuna", price: "$10.29 / kg", image: tuna },
        { name: "Crab", price: "$14.99 / kg", image: crab },
      ],
      banner: {
        title: "Fresh Fish\nDelivered Daily",
        description: "Premium seafood with freshness guarantee",
        button: "Buy Seafood",
        image: "/images/banners/fish-banner.png",
      },
    },
    {
      id: 4,
      category: "Chicken & Meat",
      icon: <TbMeat />,
      slug: "chicken-meat",
      subCategories: [
        "Fresh Chicken", "Beef", "Mutton", "Duck", 
        "Frozen Meat", "Processed Meat", "Sausages", "Premium Cuts"
      ],
      popularItems: [
        { name: "Chicken Breast", price: "$6.99 / kg", image: chicken },
        { name: "Beef Steak", price: "$15.49 / kg", image: beef },
        { name: "Mutton", price: "$18.99 / kg", image: mutton },
        { name: "Sausage", price: "$4.99 / pack", image: sausage },
      ],
      banner: {
        title: "Premium Meat\nBest Quality",
        description: "Fresh and hygienic meat products",
        button: "Order Meat",
        image: "/images/banners/meat-banner.png",
      },
    },
    {
      id: 5,
      category: "Drink & Water",
      icon: <CiCoffeeCup />,
      slug: "drink-water",
      subCategories: [
        "Soft Drinks", "Mineral Water", "Energy Drinks", "Juices", 
        "Tea & Coffee", "Organic Drinks", "Milk Drinks", "Cold Beverages"
      ],
      popularItems: [
        { name: "Orange Juice", price: "$2.99", image: juice },
        { name: "Mineral Water", price: "$0.99", image: water },
        { name: "Coffee", price: "$5.49", image: coffee },
        { name: "Energy Drink", price: "$3.29", image: energy },
      ],
      banner: {
        title: "Stay Cool\nStay Refreshed",
        description: "Cold drinks & healthy beverages",
        button: "Shop Drinks",
        image: "/images/banners/drinks-banner.png",
      },
    },
    {
      id: 6,
      category: "Yogurt & Ice Cream",
      icon: <PiPopsicleLight />,
      slug: "yogurt-icecream",
      subCategories: [
        "Greek Yogurt", "Flavored Yogurt", "Vanilla Ice Cream", "Chocolate Ice Cream", 
        "Frozen Desserts", "Low Fat Yogurt", "Fruit Yogurt", "Family Packs"
      ],
      popularItems: [
        { name: "Chocolate Ice Cream", price: "$5.99", image: icecream },
        { name: "Greek Yogurt", price: "$3.49", image: yogurt },
        { name: "Vanilla Cone", price: "$2.99", image: cone },
        { name: "Berry Yogurt", price: "$4.29", image: berry },
      ],
      banner: {
        title: "Cold & Creamy\nSweet Treats",
        description: "Taste happiness in every bite",
        button: "Grab Desserts",
        image: "/images/banners/icecream-banner.png",
      },
    },
    {
      id: 7,
      category: "Cake & Bread",
      icon: <GiCupcake />,
      slug: "cake-bread",
      subCategories: [
        "Fresh Bread", "Cakes", "Cupcakes", "Cookies", 
        "Pastries", "Croissants", "Brown Bread", "Bakery Snacks"
      ],
      popularItems: [
        { name: "Chocolate Cake", price: "$12.99", image: cake },
        { name: "Croissant", price: "$1.99", image: croissant },
        { name: "Cupcake", price: "$2.49", image: cupcake },
        { name: "Bread", price: "$1.20", image: bread },
      ],
      banner: {
        title: "Freshly Baked\nEvery Morning",
        description: "Soft, warm & delicious bakery items",
        button: "Visit Bakery",
        image: "/images/banners/bakery-banner.png",
      },
    },
    {
      id: 8,
      category: "Butter & Cream",
      icon: <LuIceCreamBowl />,
      slug: "butter-cream",
      subCategories: [
        "Salted Butter", "Unsalted Butter", "Fresh Cream", "Cheese", 
        "Cooking Cream", "Whipped Cream", "Organic Butter", "Cream Cheese"
      ],
      popularItems: [
        { name: "Fresh Butter", price: "$4.20", image: butter },
        { name: "Cheese", price: "$6.49", image: cheese },
        { name: "Whipping Cream", price: "$5.29", image: cream },
        { name: "Cream Cheese", price: "$4.99", image: creamcheese },
      ],
      banner: {
        title: "Rich & Creamy\nDairy Essentials",
        description: "Premium dairy for every kitchen",
        button: "Explore Dairy",
        image: "/images/banners/dairy-banner.png",
      },
    },
    {
      id: 9,
      category: "Cooking",
      icon: <PiCookingPot />,
      slug: "cooking",
      subCategories: [
        "Cooking Oil", "Spices", "Rice", "Pasta", 
        "Sauces", "Salt & Sugar", "Organic Ingredients", "Kitchen Essentials"
      ],
      popularItems: [
        { name: "Olive Oil", price: "$9.99", image: oil },
        { name: "Basmati Rice", price: "$14.99", image: rice },
        { name: "Organic Pasta", price: "$3.99", image: pasta },
        { name: "Spice Mix", price: "$2.49", image: spices },
      ],
      banner: {
        title: "Cook Better\nEat Better",
        description: "Everything you need for your kitchen",
        button: "Start Cooking",
        image: "/images/banners/cooking-banner.png",
      },
    },
    {
      id: 10,
      category: "View all Category",
      icon: <GoPlus />,
      last: true,
    },
  ];
const [activeCategory, setActiveCategory] = useState(catagories[0]);

  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const handleCatagoryOpen = () => {
    setCategoriesOpen((prev) => !prev);
  };
 console.log(activeCategory);
 
  return (
    <nav className="bg-gray-8">
      <Container>
        <div className="nav-main hidden lg:flex justify-between items-center w-full  h-full relative">
          {/* right */}
          <div className="right flex items-center gap-x-8 relative">
            {/* Categories */}
            <div
              className="drop-down flex items-center h-full relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
              onClick={() => setCategoriesOpen((prev) => !prev)}
            >
              {/* BUTTON */}
              <button className="p-2.5 bg-primary cursor-pointer">
                <IoIosMenu className="text-4xl text-white" />
              </button>

              {/* TEXT BOX */}
              <div className="w-full flex items-center justify-between pr-4 pl-6 bg-gray-9 cursor-pointer text-white py-4 min-h-full min-w-62.5 font-poppins font-medium text-body-md group">
                <h2>All Categories</h2>
                <div>
                  <CgChevronDown
                    className={`text-2xl cursor-pointer transition-transform duration-400 ${categoriesOpen && "rotate-180 "}`}
                  />
                </div>
              </div>

              {/* mega menu */}

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0  w-full shadow z-99  border border-t-0 border-gray-1  bg-white font-poppins font-normal text-body-sm text-green-gray-9 rounded-sm mb-5"
                  >
                    {catagories?.map((catagory, index) => (
                      <>
                        <div
                          className="w-full py-4 px-5 flex gap-x-3 items-center cursor-pointer  hover:text-primary transition-colors duration-300 group relative"
                          key={index}
                          style={
                            catagory.last && { borderTop: "1px solid #e6e6e6" }
                          }
                          onMouseEnter={() => catagories.length - 1 > index && setActiveCategory(catagory)}
                        >
                          <i className="text-[26px] text-gray-4 group-hover:text-primary! transition-colors duration-300">
                            {catagory.icon}
                          </i>
                          <p>{catagory.category}</p>
                          {catagories.length - 1 > index && (
                            <i className="text-xl ms-auto text-gray-4 group-hover:text-primary  ">
                              <HiOutlineChevronRight />
                            </i>
                          )}
                        </div>
                      </>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {/* <AnimatePresence>
                {categoriesOpen && (
                <div className="hidden lg:block">
                    <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-full   bg-white p-5 rounded-md grid grid-cols-4 border border-gray-1 shadow z-99  "
                  >
                    <div className="right col-span-3">
                      <div className="grid grid-cols-4 gap-x-7 mb-6">
                        {megaMenuCategories.map((menu, index) => (
                          <div
                            className={`w-full  ${index === megaMenuCategories.length - 1 ? "border-r-0" : "border-r"}`}
                            key={index}
                          >
                            <div className="header flex items-center gap-x-1 font-poppins font-semibold text-green-gray-6 pb-4 relative">
                              <i className="text-2xl">{menu.icon}</i>
                              <h2>{menu.title}</h2>
                              {menu.tag == "Hot" && (
                                <span className="absolute p-1 -right-1 xl:right-5  capitalize! bg-orange-500 text-white text-xs rounded-md flex items-center gap-x-0.5">
                                  {menu.tag} <FaFire />
                                </span>
                              )}
                              {menu.tag == "Sale" && (
                                <span className="absolute p-1 -right-1 xl:right-5  capitalize! bg-green-500 text-white text-xs rounded-md flex items-center gap-x-0.5">
                                  {menu.tag} <FaFire />
                                </span>
                              )}
                              {menu.tag == "New" && (
                                <span className="absolute p-1 -right-1 xl:right-5 capitalize! bg-badge-blue text-white text-xs rounded-md flex items-center gap-x-0.5">
                                  {menu.tag} <FaFire />
                                </span>
                              )}
                            </div>
                            <div className="menus px-3">
                              <ul className="flex flex-col gap-y-2">
                                {menu.items.map((item) => (
                                  <>
                                    <li className="font-poppins font-medium text-base text-gray-5 w-full hover:bg-gray-0 hover:font-bold transition-all duration-300 hover:text-primary p-2 cursor-pointer rounded-md relative">
                                      {item}
                                      {menu.sale && (
                                        <span className="bg-primary p-1 text-xs font-poppins text-white">
                                          {menu.sale}
                                        </span>
                                      )}
                                    </li>
                                  </>
                                ))}
                              </ul>
                              <button className="font-poppins font-medium text-xs text-primary underline flex items-center gap-x-1 cursor-pointer mt-3">
                                {categoryButtons[menu.title]}{" "}
                                <CgChevronRight />{" "}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="font-poppins font-semibold hover:bg-green-800 hover:text-white transition-all duration-300 text-green-gray-6 py-2 px-12 border-2 border-green-gray-6 rounded-md cursor-pointer flex items-center gap-x-2">
                          View all
                          <TbCategory2 className="text-xl" />
                        </button>
                      </div>
                    </div>
                    <div className="banner col-span-1 w-full-full overflow-hidden">
                      <Link to={"/shop"}>
                        <img
                          src={poster}
                          alt="poster"
                          width={"100%"}
                          fetchPriority="high"
                          loading="lazy"
                          className="hover:scale-[1.02] transition-all duration-300 cursor-pointer h-92.5"
                        />
                      </Link>
                    </div>
                  </motion.div>
                </div>
                )}
              </AnimatePresence> */}    
            </div>
            
                <div className="absolute lg:grid grid-cols-4 hidden top-full left-[44%] max-w-[1200px] min-w-[800px] w-full  bg-white p-10 border-l border-gray-4 rounded-lg">
                <div className="col-span-3 grid grid-cols-2 items-start">
                    <div className="border-r-[0.5px] border-gray-2">
                    <h2 className="font-poppins font-semibold text-lg text-primary pb-5">{activeCategory.category}</h2>
                    <div className="flex flex-col gap-y-5 ">
                      {
                        activeCategory.subCategories.map((item)=> (
                         <div className="flex items-center gap-x-2">
                           <p className="font-poppins font-semibold text-sm text-gray-6">{item}</p>
                         </div>
                        ))
                      }

                      <div className="mt-10">
                        <p className="font-poppins font-medium text-primary flex items-center gap-x-2 cursor-pointer hover:underline">View All {activeCategory.category} <FaArrowRight/></p>
                      </div>
                    </div>
                  </div>
                  <div className="pl-5">
                    <h2 className="font-poppins font-semibold text-lg text-primary pb-5 capitalize">Populer Items</h2>
                    <div className="flex flex-col gap-y-5 px-4">
                      {
                        activeCategory.popularItems.map((item)=> (
                         <div className="flex items-center gap-x-4 pt-2 pb-3 border-b border-gray-2/60">
                          <img src={item.image} alt="" width={50} height={50} />
                        <div className="">
                          
                           <p className="font-poppins font-medium text-sm text-gray-6 pb-2">{item.name}</p>
                           <p className="font-poppins font-semibold text-base text-gray-9">{item.price}</p>
                        </div>
                         </div>
                        ))
                        
                      }
                      <div className="mt-2">
                        <p className="font-poppins font-medium text-primary text-sm flex items-center gap-x-2 cursor-pointer hover:underline">View All  <FaArrowRight/></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 py-10 bg-red-400">
                  
                </div>
                </div>
            {/* Nav Links */}
            <div className="navlinks">
              <ul className="flex items-center gap-x-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.Link}
                      style={({ isActive }) => ({
                        color: isActive ? "white" : "#808080",
                        textDecoration: "none",
                      })}
                    >
                      <h2 className="flex items-center gap-x-1  font-poppins font-medium text-body-sm hover:text-white transition-colors duration-300">
                        {link.navItem}
                      </h2>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left */}
          <div className="flex items-center gap-x-2 font-poppins font-medium text-body-sm text-white cursor-pointer ">
            <FiPhoneCall className="text-xl" />
            <Link to={"tel:01998-422037"}>01998-422037</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
