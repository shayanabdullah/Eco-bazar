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


import {
  PiHandSoap,
  PiPlusSquareLight,
} from "react-icons/pi";
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

export const catagoriesMegaMenu = [
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

export const categories = [
  {
    id: 1,
    slug: "fresh-fruits",
    name: "Fresh Fruits",
    image: "fresh-fruits.webp",
  },
  {
    id: 2,
    slug: "fresh-vegetables",
    name: "Fresh Vegetables",
    image: "fresh-vegetables.webp",
  },
  {
    id: 3,
    slug: "meat-fish",
    name: "Meat & Fish",
    image: "meat-fish.webp",
  },
  {
    id: 4,
    slug: "snacks",
    name: "Snacks",
    image: "snacks.webp",
  },
  {
    id: 5,
    slug: "beverages",
    name: "Beverages",
    image: "beverages.webp",
  },
  {
    id: 6,
    slug: "beauty-health",
    name: "Beauty & Health",
    image: "beauty-health.webp",
  },
  {
    id: 7,
    slug: "bread-bakery",
    name: "Bread & Bakery",
    image: "bread-bakery.webp",
  },
  {
    id: 8,
    slug: "baking-needs",
    name: "Baking Needs",
    image: "baking-needs.webp",
  },
  {
    id: 9,
    slug: "cooking",
    name: "Cooking",
    image: "cooking.webp",
  },
  {
    id: 10,
    slug: "diabetic-food",
    name: "Diabetic Food",
    image: "diabetic-food.webp",
  },
  {
    id: 11,
    slug: "dish-detergents",
    name: "Dish Detergents",
    image: "dish-detergents.webp",
  },
  {
    id: 12,
    slug: "oil",
    name: "Oil",
    image: "oil.webp",
  },

  // Extra Categories

  {
    id: 13,
    slug: "dairy-eggs",
    name: "Dairy & Eggs",
    image: "dairy-eggs.webp",
  },
  {
    id: 14,
    slug: "rice-grains",
    name: "Rice & Grains",
    image: "rice-grains.webp",
  },
  {
    id: 15,
    slug: "spices-seasonings",
    name: "Spices & Seasonings",
    image: "spices-seasonings.webp",
  },
  {
    id: 16,
    slug: "frozen-foods",
    name: "Frozen Foods",
    image: "frozen-foods.webp",
  },
  {
    id: 17,
    slug: "organic-foods",
    name: "Organic Foods",
    image: "organic-foods.webp",
  },
  {
    id: 18,
    slug: "baby-care",
    name: "Baby Care",
    image: "baby-care.webp",
  },
  {
    id: 19,
    slug: "pet-care",
    name: "Pet Care",
    image: "pet-care.webp",
  },
  {
    id: 20,
    slug: "household-cleaning",
    name: "Household Cleaning",
    image: "household-cleaning.webp",
  },
  {
    id: 21,
    slug: "tea-coffee",
    name: "Tea & Coffee",
    image: "tea-coffee.webp",
  },
  {
    id: 22,
    slug: "instant-food",
    name: "Instant Food",
    image: "instant-food.webp",
  },
  {
    id: 23,
    slug: "seafood",
    name: "Seafood",
    image: "seafood.webp",
  },
  {
    id: 24,
    slug: "nuts-dry-fruits",
    name: "Nuts & Dry Fruits",
    image: "nuts-dry-fruits.webp",
  },
];

 export const allCategoriesSidebar = [
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
