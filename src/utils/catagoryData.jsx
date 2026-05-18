import brocolli from "../assets/images/broccoli.webp";
import carrot from "../assets/images/carrot.webp";
import spinach from "../assets/images/spinach.webp";
import bellpaper from "../assets/images/pepper.webp";
import orange from "../assets/images/orange.webp";
import strawberry from "../assets/images/strawberry.webp";
import banana from "../assets/images/banana.webp";
import avocado from "../assets/images/avocado.webp";
import salmon from "../assets/images/salmon.webp";
import shrimp from "../assets/images/shrimp.webp";
import tuna from "../assets/images/tuna.webp";
import crab from "../assets/images/crab.webp";
import chicken from "../assets/images/chicken.webp";
import beef from "../assets/images/beef.webp";
import mutton from "../assets/images/mutton.webp";
import sausage from "../assets/images/sausage.webp";
import juice from "../assets/images/juice.webp";
import water from "../assets/images/water.webp";
import coffee from "../assets/images/coffee.webp";
import energy from "../assets/images/energy.webp";
import chocolate from "../assets/images/chocolate-icecream.webp";
import yogurt from "../assets/images/yogurt.webp";
import vanila from "../assets/images/vanila.webp";
import berryYogurt from "../assets/images/berryYogurt.webp";
import cake from "../assets/images/cake.webp";
import croissant from "../assets/images/croissant.webp";
import cupcake from "../assets/images/cupcake.webp";
import bread from "../assets/images/bread.webp";
import butter from "../assets/images/butter.webp";
import cheese from "../assets/images/cheese.webp";
import cream from "../assets/images/cream.webp";
import creamcheese from "../assets/images/creamcheese.webp";
import oil from "../assets/images/oil.webp";
import rice from "../assets/images/rice.webp";
import pasta from "../assets/images/pasta.webp";
import spices from "../assets/images/spices.webp";
import vegetableBanner from "../assets/images/vegetableBanner.webp";
import fruitBanner from "../assets/images/fruitBanner.webp";
import fishBanner from "../assets/images/fishBanner.webp";
import meatBanner from "../assets/images/meatBanner.webp";
import drinksBanner from "../assets/images/drinksBanner.webp";
import icecreamBanner from "../assets/images/icecreamBanner.webp";
import bakeryBanner from "../assets/images/bakeryBanner.webp";
import dairyBanner from "../assets/images/dairyBanner.webp";
import cookingBanner from "../assets/images/cookingBanner.webp";
import { CiApple, CiCoffeeCup } from "react-icons/ci";
import { TbCategory2, TbMeat, TbSalad } from "react-icons/tb";
import { IoFishOutline } from "react-icons/io5";
import { PiCookingPot, PiPopsicleLight } from "react-icons/pi";
import { GiCupcake } from "react-icons/gi";
import { LuIceCreamBowl } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
export const catagories = [
  {
    id: 1,
    category: "Fresh Vegetables",
    icon: <TbSalad />,
    slug: "fresh-vegetables",
    subCategories: [
      "Leafy Greens",
      "Root Vegetables",
      "Cruciferous Vegetables",
      "Beans & Pulses",
      "Gourds & Squash",
      "Mushrooms",
      "Peppers",
      "Herbs & Seasonings",
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
      image: vegetableBanner,
    },
  },
  {
    id: 2,
    category: "Fresh Fruits",
    icon: <CiApple />,
    slug: "fresh-fruits",
    subCategories: [
      "Citrus Fruits",
      "Tropical Fruits",
      "Berries",
      "Melons",
      "Stone Fruits",
      "Organic Fruits",
      "Seasonal Fruits",
      "Dry Fruits",
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
      image: fruitBanner,
    },
  },
  {
    id: 3,
    category: "River Fish",
    icon: <IoFishOutline />,
    slug: "river-fish",
    subCategories: [
      "Fresh Water Fish",
      "Frozen Fish",
      "Sea Fish",
      "Dry Fish",
      "Prawns & Shrimp",
      "Crab",
      "Salmon",
      "Tuna",
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
      image: fishBanner,
    },
  },
  {
    id: 4,
    category: "Chicken & Meat",
    icon: <TbMeat />,
    slug: "chicken-meat",
    subCategories: [
      "Fresh Chicken",
      "Beef",
      "Mutton",
      "Duck",
      "Frozen Meat",
      "Processed Meat",
      "Sausages",
      "Premium Cuts",
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
      image: meatBanner,
    },
  },
  {
    id: 5,
    category: "Drink & Water",
    icon: <CiCoffeeCup />,
    slug: "drink-water",
    subCategories: [
      "Soft Drinks",
      "Mineral Water",
      "Energy Drinks",
      "Juices",
      "Tea & Coffee",
      "Organic Drinks",
      "Milk Drinks",
      "Cold Beverages",
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
      image: drinksBanner,
    },
  },
  {
    id: 6,
    category: "Yogurt & Ice Cream",
    icon: <PiPopsicleLight />,
    slug: "yogurt-icecream",
    subCategories: [
      "Greek Yogurt",
      "Flavored Yogurt",
      "Vanilla Ice Cream",
      "Chocolate Ice Cream",
      "Frozen Desserts",
      "Low Fat Yogurt",
      "Fruit Yogurt",
      "Family Packs",
    ],
    popularItems: [
      { name: "Chocolate Ice Cream", price: "$5.99", image: chocolate },
      { name: "Greek Yogurt", price: "$3.49", image: yogurt },
      { name: "Vanilla Cone", price: "$2.99", image: vanila },
      { name: "Berry Yogurt", price: "$4.29", image: berryYogurt },
    ],
    banner: {
      title: "Cold & Creamy\nSweet Treats",
      description: "Taste happiness in every bite",
      button: "Grab Desserts",
      image: icecreamBanner,
    },
  },
  {
    id: 7,
    category: "Cake & Bread",
    icon: <GiCupcake />,
    slug: "cake-bread",
    subCategories: [
      "Fresh Bread",
      "Cakes",
      "Cupcakes",
      "Cookies",
      "Pastries",
      "Croissants",
      "Brown Bread",
      "Bakery Snacks",
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
      image: bakeryBanner,
    },
  },
  {
    id: 8,
    category: "Butter & Cream",
    icon: <LuIceCreamBowl />,
    slug: "butter-cream",
    subCategories: [
      "Salted Butter",
      "Unsalted Butter",
      "Fresh Cream",
      "Cheese",
      "Cooking Cream",
      "Whipped Cream",
      "Organic Butter",
      "Cream Cheese",
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
      image: dairyBanner,
    },
  },
  {
    id: 9,
    category: "Cooking",
    icon: <PiCookingPot />,
    slug: "cooking",
    subCategories: [
      "Cooking Oil",
      "Spices",
      "Rice",
      "Pasta",
      "Sauces",
      "Salt & Sugar",
      "Organic Ingredients",
      "Kitchen Essentials",
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
      image: cookingBanner,
    },
  },
  {
    id: 10,
    category: "View all Category",
    icon: <GoPlus />,
    last: true,
  },
];
