// Replace placeholder image URLs with your real assets whenever ready.
// Each post has a unique `slug` — used for routing to /blog/:slug.
// Only "top-3-healthy-cooking-oils" has a full `article` object filled in
// (matching the Single Blog screenshot); add `article` to the others
// the same way once you have real content for them.

export const categories = [
  { name: "Fresh Fruit", count: 134 },
  { name: "Vegetables", count: 150 },
  { name: "Cooking", count: 54 },
  { name: "Snacks", count: 47 },
  { name: "Beverages", count: 43 },
  { name: "Beauty & Health", count: 38 },
  { name: "Bread & Bakery", count: 15 },
];

export const popularTags = [
  "Low fat",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Meat",
  "Launch",
  "Dinner",
  "Bakery",
  "Baking",
  "Breakfast",
  "Buying Guide",
  "Cake Recipe",
  "Cleaning",
  "Cooking",
  "Cooking Oil",
  "Diabetes Care",
  "Dishwash",
  "Fish",
  "Fresh Food",
  "Fresh Fruit",
  "Fresh Juice",
  "Fresh Meat",
  "Health",
  "Healthy Diet",
  "Healthy Fat",
  "Healthy Food",
  "Healthy Life",
  "Heart Health",
  "Home Care",
  "Hydration",
  "Immunity",
  "Kitchen",
  "Kitchen Hacks",
  "Mustard Oil",
  "Ingredients",
  "Natural Beauty",
  "Nutrition",
  "Nuts",
  "Organic Oil",
  "Recipe",
  "Skincare",
  "Snacks",
  "Sugar-Free",
  "Summer Drinks",
  "Tips",
  "Vegetables",
];

export const galleryImages = [
  "https://placehold.co/200x200/FFFFFF/D1D5DB?text=1",
  "https://placehold.co/200x200/FFFFFF/D1D5DB?text=2",
  "https://placehold.co/200x200/FFFFFF/D1D5DB?text=3",
  "https://placehold.co/200x200/FFFFFF/D1D5DB?text=4",
  "https://placehold.co/200x200/FFFFFF/D1D5DB?text=5",
  "https://placehold.co/200x200/FFFFFF/D1D5DB?text=6",
  "https://placehold.co/200x200/FFFFFF/D1D5DB?text=7",
  "https://placehold.co/200x200/FFFFFF/D1D5DB?text=8",
];

export const recentlyAdded = [
  {
    id: "r1",
    title: "Curabitur porttitor orci eget nequ accumsan.",
    date: "Apr 25, 2021",
    image: "https://placehold.co/100x100/FFFFFF/D1D5DB?text=Blog",
  },
  {
    id: "r2",
    title: "Donec mattis arcu faucibus suscipit viverra.",
    date: "Apr 25, 2021",
    image: "https://placehold.co/100x100/FFFFFF/D1D5DB?text=Blog",
  },
  {
    id: "r3",
    title: "Quisque posuere tempus rutrum. Integer velit ex.",
    date: "Apr 25, 2021",
    image: "https://placehold.co/100x100/FFFFFF/D1D5DB?text=Blog",
  },
];

export const blogPosts = [
  {
    id: "post-1",
    slug: "top-3-healthy-cooking-oils",
    image: "https://placehold.co/620x420/FFFFFF/D1D5DB?text=Blog+1",
    day: "18",
    month: "NOV",
    timestamp: 1751587200000,
    category: "Cooking",
    author: "Admin",
    commentsCount: 65,
    title: "Top 3 Healthy Cooking Oils You Must Have In Your Kitchen",
    summary:
      "Choosing the right cooking oil is the most important step toward a healthy lifestyle. Here are the top 3 oils you should include in your grocery list.",
    tags: ["Healthy", "Low fat", "Vitamins"],
    article: {
      heroImage:
        "https://placehold.co/1100x520/FFFFFF/D1D5DB?text=Cooking+Oils",
      title: "Top 3 Healthy Cooking Oils You Must Have In Your Kitchen",
      writer: {
        name: "Cameron Williamson",
        avatar:
          "https://placehold.co/64x64/E5E7EB/6B7280?text=CW",
        date: "18 November, 2025",
        readTime: "6 min read",
      },
      intro:
        "Choosing the right cooking oil can make everyday meals more enjoyable while helping you build balanced cooking habits. Different oils have different flavors and cooking properties, so knowing how to use them can make a big difference in the kitchen.",
      paragraphs: [
        "Olive oil is a popular choice for salads, dressings, and many everyday dishes. Its pleasant flavor makes it especially useful when you want the oil to contribute to the taste of your meal.",
        "Mustard oil is widely used in South Asian cooking and adds a distinctive flavor to vegetables, fish, and traditional recipes. It can be especially useful when you want to give a dish a rich and aromatic character.",
        "Sunflower oil has a mild flavor and works well for many types of cooking. Keeping a versatile oil like this in your kitchen can make everyday frying and cooking simple and convenient.",
      ],
      inlineImages: [
        "https://placehold.co/540x420/FFFFFF/D1D5DB?text=Olive+Oil",
        "https://placehold.co/540x420/D8ECE0/D1D5DB?text=Mustard+Oil",
      ],
      closingParagraph:
        "There is no single cooking oil that is perfect for every recipe. Choosing an oil based on the type of cooking, flavor you want, and how you use it in your overall diet is a practical approach for everyday meals.",
      promo: {
        eyebrow: "SUMMER SALES",
        title: "Fresh Fruit",
        discountLabel: "UP TO",
        discountValue: "56%",
        discountSuffix: "Off",
        ctaLabel: "Shop Now",
        image:
          "https://placehold.co/700x260/1A1A1A/D1D5DB?text=Fresh+Fruit",
      },
      comments: [
        {
          id: "c1",
          name: "Annette Black",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=AB",
          date: "26 Nov, 2025",
          text: "This was a helpful guide. I learned more about when to use different cooking oils.",
        },
        {
          id: "c2",
          name: "Devon Lane",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=DL",
          date: "24 Nov, 2025",
          text: "I have been using mustard oil for years, so it was nice to see it included.",
        },
      ],
    },
  },

  {
    id: "post-2",
    slug: "liquid-vs-bar-dishwashing",
    image: "https://placehold.co/620x420/D6EFFF/D1D5DB?text=Blog+2",
    day: "10",
    month: "NOV",
    timestamp: 1750896000000,
    category: "Beauty & Health",
    author: "Admin",
    commentsCount: 42,
    title: "Liquid vs Bar Dishwashing: Which Is Better For Your Home?",
    summary:
      "A detailed comparison of liquid and bar dishwashing soaps covering effectiveness, cost, eco-friendliness, and skin concerns.",
    tags: ["Healthy", "Vitamins"],
    highlighted: false,

    article: {
      heroImage:
        "https://placehold.co/1100x520/D6EFFF/6B7280?text=Dishwashing+Guide",
      title:
        "Liquid vs Bar Dishwashing: Which Is Better For Your Home?",
      writer: {
        name: "Cameron Williamson",
        avatar:
          "https://placehold.co/64x64/E5E7EB/6B7280?text=CW",
        date: "10 November, 2025",
        readTime: "5 min read",
      },
      intro:
        "Choosing between liquid and bar dishwashing soap can seem like a small decision, but each option has its own advantages. Understanding how they differ can help you choose the right option for your kitchen.",
      paragraphs: [
        "Liquid dishwashing soap is convenient because it can be quickly measured and applied directly to a sponge or dish. It is also easy to adjust the amount depending on how many dishes you need to clean.",
        "Bar dishwashing soap is a traditional option that many households prefer because it is simple to store and can last for a long time. It can also be convenient when you want to use a small amount at a time.",
        "The best choice depends on your kitchen routine, storage space, and personal preference. Both can work effectively when used properly and according to their instructions.",
      ],
      inlineImages: [
        "https://placehold.co/540x420/FFFFFF/D1D5DB?text=Liquid+Soap",
        "https://placehold.co/540x420/E8F5E9/D1D5DB?text=Dishwashing+Bar",
      ],
      closingParagraph:
        "Whether you choose liquid or bar soap, keeping your dishes clean also depends on using the right amount, washing tools, and good kitchen hygiene habits.",
      promo: {
        eyebrow: "FRESH DEALS",
        title: "Kitchen Essentials",
        discountLabel: "UP TO",
        discountValue: "30%",
        discountSuffix: "Off",
        ctaLabel: "Shop Now",
        image:
          "https://placehold.co/700x260/1A1A1A/D1D5DB?text=Kitchen+Essentials",
      },
      comments: [
        {
          id: "c1",
          name: "Annette Black",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=AB",
          date: "16 Nov, 2025",
          text: "I usually prefer liquid soap because it is easier for me to measure.",
        },
        {
          id: "c2",
          name: "Devon Lane",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=DL",
          date: "13 Nov, 2025",
          text: "Interesting comparison. I have always used dishwashing bars at home.",
        },
      ],
    },
  },

  {
    id: "post-3",
    slug: "seasonal-fruits-you-must-add",
    image: "https://placehold.co/620x420/FFFFFF/D1D5DB?text=Blog+3",
    day: "05",
    month: "OCT",
    timestamp: 1749081600000,
    category: "Fresh Fruit",
    author: "Sarah",
    commentsCount: 28,
    title: "10 Seasonal Fruits You Must Add To Your Diet This Week",
    summary:
      "Seasonal fruits are packed with the highest nutrition and flavor. Discover the top 10 fruits to shop for right now.",
    tags: ["Healthy", "Vegetarian", "Vitamins"],

    article: {
      heroImage:
        "https://placehold.co/1100x520/FFF7E6/6B7280?text=Seasonal+Fruits",
      title:
        "10 Seasonal Fruits You Must Add To Your Diet This Week",
      writer: {
        name: "Sarah",
        avatar:
          "https://placehold.co/64x64/E5E7EB/6B7280?text=SA",
        date: "5 October, 2025",
        readTime: "7 min read",
      },
      intro:
        "Fresh seasonal fruits are a simple way to bring variety, natural sweetness, and different nutrients into everyday meals. Shopping for fruits that are currently in season can also make grocery trips more interesting.",
      paragraphs: [
        "Apples, oranges, bananas, guavas, papayas, pineapples, watermelons, mangoes, grapes, and pomegranates are popular fruit choices that can be enjoyed in many different ways.",
        "You can enjoy fresh fruit on its own, add it to breakfast, blend it into smoothies, or combine several varieties into a colorful fruit bowl.",
        "When buying fruit, look for produce that is fresh, appropriately ripe for when you plan to eat it, and free from obvious damage. Proper storage can also help preserve freshness at home.",
      ],
      inlineImages: [
        "https://placehold.co/540x420/FFF7E6/D1D5DB?text=Fresh+Fruit",
        "https://placehold.co/540x420/E8F5E9/D1D5DB?text=Fruit+Basket",
      ],
      closingParagraph:
        "Adding different fruits throughout the week can make meals more colorful and enjoyable. Choose a variety that you like and rotate your choices as different fruits become available.",
      promo: {
        eyebrow: "FRESH FROM FARM",
        title: "Fresh Fruits",
        discountLabel: "UP TO",
        discountValue: "40%",
        discountSuffix: "Off",
        ctaLabel: "Shop Now",
        image:
          "https://placehold.co/700x260/1A1A1A/D1D5DB?text=Fresh+Fruits",
      },
      comments: [
        {
          id: "c1",
          name: "Jane Cooper",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=JC",
          date: "10 Oct, 2025",
          text: "I love making fruit bowls for breakfast. Great ideas!",
        },
        {
          id: "c2",
          name: "Jacob Jones",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=JJ",
          date: "8 Oct, 2025",
          text: "The storage tips are really useful.",
        },
      ],
    },
  },

  {
    id: "post-4",
    slug: "store-leafy-green-vegetables",
    image: "https://placehold.co/620x420/FFFFFF/D1D5DB?text=Blog+4",
    day: "28",
    month: "SEP",
    timestamp: 1748563200000,
    category: "Vegetables",
    author: "Admin",
    commentsCount: 19,
    title: "How To Store Leafy Green Vegetables For Longer Freshness",
    summary:
      "Stop throwing away wilted greens! Learn the best storage hacks to keep spinach, kale, and lettuce fresh for weeks.",
    tags: ["Vegetarian", "Snacks"],
    hasPlayButton: false,

    article: {
      heroImage:
        "https://placehold.co/1100x520/E8F5E9/6B7280?text=Leafy+Greens",
      title:
        "How To Store Leafy Green Vegetables For Longer Freshness",
      writer: {
        name: "Admin",
        avatar:
          "https://placehold.co/64x64/E5E7EB/6B7280?text=AD",
        date: "28 September, 2025",
        readTime: "5 min read",
      },
      intro:
        "Leafy greens can lose their freshness quickly when they are stored incorrectly. A few simple storage habits can help keep vegetables such as spinach, lettuce, and other greens crisp for longer.",
      paragraphs: [
        "Before storing leafy vegetables, remove any damaged leaves and avoid washing them unless you plan to dry them completely. Excess moisture can make greens spoil faster.",
        "A clean container lined with a paper towel can help manage excess moisture. Place the greens inside without packing them too tightly so air can circulate.",
        "Keeping vegetables in the appropriate section of your refrigerator and checking them regularly can also help you use them before they begin to wilt.",
      ],
      inlineImages: [
        "https://placehold.co/540x420/E8F5E9/D1D5DB?text=Fresh+Greens",
        "https://placehold.co/540x420/FFFFFF/D1D5DB?text=Vegetable+Storage",
      ],
      closingParagraph:
        "With proper preparation and storage, you can reduce food waste and enjoy fresh leafy vegetables for longer. The key is keeping them cool, clean, and protected from excess moisture.",
      promo: {
        eyebrow: "FRESH VEGETABLES",
        title: "Garden Fresh",
        discountLabel: "UP TO",
        discountValue: "35%",
        discountSuffix: "Off",
        ctaLabel: "Shop Now",
        image:
          "https://placehold.co/700x260/1A1A1A/D1D5DB?text=Garden+Fresh",
      },
      comments: [
        {
          id: "c1",
          name: "Darrell Steward",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=DS",
          date: "2 Oct, 2025",
          text: "The paper towel trick works really well for my vegetables.",
        },
        {
          id: "c2",
          name: "Annette Black",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=AB",
          date: "30 Sep, 2025",
          text: "Very useful tips for keeping lettuce fresh.",
        },
      ],
    },
  },

  {
    id: "post-5",
    slug: "refreshing-summer-drinks",
    image: "https://placehold.co/620x420/FFFFFF/D1D5DB?text=Blog+5",
    day: "20",
    month: "SEP",
    timestamp: 1747872000000,
    category: "Beverages",
    author: "Priya",
    commentsCount: 35,
    title: "5 Refreshing Summer Drinks To Beat The Heat Naturally",
    summary:
      "Stay hydrated and cool with these sugar-free, natural summer drink recipes made with fresh fruits and herbs.",
    tags: ["Healthy", "Low fat", "Vegetarian"],

    article: {
      heroImage:
        "https://placehold.co/1100x520/E6F7FF/6B7280?text=Summer+Drinks",
      title:
        "5 Refreshing Summer Drinks To Beat The Heat Naturally",
      writer: {
        name: "Priya",
        avatar:
          "https://placehold.co/64x64/E5E7EB/6B7280?text=PR",
        date: "20 September, 2025",
        readTime: "6 min read",
      },
      intro:
        "Warm days are a great opportunity to enjoy refreshing homemade drinks. Fresh fruits, herbs, and chilled water can be combined into simple beverages that are easy to prepare at home.",
      paragraphs: [
        "A simple lemon and mint drink is one of the easiest options. Add fresh lemon juice, mint leaves, chilled water, and ice for a refreshing combination.",
        "Watermelon and cucumber can also make a light and refreshing drink. Blend the fresh ingredients and serve chilled for a naturally flavorful beverage.",
        "You can also experiment with orange, pineapple, berries, and other seasonal fruits. Using fresh ingredients lets you adjust the flavor according to your preference.",
      ],
      inlineImages: [
        "https://placehold.co/540x420/E6F7FF/D1D5DB?text=Fruit+Drink",
        "https://placehold.co/540x420/FFF7E6/D1D5DB?text=Fresh+Juice",
      ],
      closingParagraph:
        "Homemade fruit drinks are easy to customize and can be a fun way to use fresh produce from your grocery basket. Keep the ingredients chilled and enjoy them fresh.",
      promo: {
        eyebrow: "SUMMER SPECIAL",
        title: "Fresh Beverages",
        discountLabel: "UP TO",
        discountValue: "25%",
        discountSuffix: "Off",
        ctaLabel: "Shop Now",
        image:
          "https://placehold.co/700x260/1A1A1A/D1D5DB?text=Summer+Drinks",
      },
      comments: [
        {
          id: "c1",
          name: "Devon Lane",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=DL",
          date: "24 Sep, 2025",
          text: "The watermelon and cucumber combination sounds delicious.",
        },
        {
          id: "c2",
          name: "Jane Cooper",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=JC",
          date: "22 Sep, 2025",
          text: "I will definitely try the lemon and mint drink.",
        },
      ],
    },
  },

  {
    id: "post-6",
    slug: "healthy-tiffin-box-ideas",
    image: "https://placehold.co/620x420/FFFFFF/D1D5DB?text=Blog+6",
    day: "15",
    month: "SEP",
    timestamp: 1747440000000,
    category: "Snacks",
    author: "Admin",
    commentsCount: 12,
    title: "Healthy Tiffin Box Ideas For Kids That They'll Actually Eat",
    summary:
      "A week of nutritious, kid-approved tiffin recipes that are easy to pack and fun to eat at school.",
    tags: ["Kid foods", "Tiffin", "Snacks"],

    article: {
      heroImage:
        "https://placehold.co/1100x520/FFF7E6/6B7280?text=Tiffin+Box+Ideas",
      title:
        "Healthy Tiffin Box Ideas For Kids That They'll Actually Eat",
      writer: {
        name: "Admin",
        avatar:
          "https://placehold.co/64x64/E5E7EB/6B7280?text=AD",
        date: "15 September, 2025",
        readTime: "6 min read",
      },
      intro:
        "Packing a school tiffin does not have to be complicated. With a few simple ingredients, you can create colorful and convenient lunch ideas that are easy to pack and enjoyable to eat.",
      paragraphs: [
        "Fresh fruit slices, yogurt, sandwiches, boiled eggs, and homemade snacks can all be combined in different ways throughout the week.",
        "Using different shapes and colors can make a lunch box more interesting. Small portions of several foods can also give children more variety during the school day.",
        "Preparing some ingredients in advance can make busy mornings easier. Wash fruits, prepare vegetables, and organize containers ahead of time so packing takes less effort.",
      ],
      inlineImages: [
        "https://placehold.co/540x420/FFF7E6/D1D5DB?text=Healthy+Tiffin",
        "https://placehold.co/540x420/E8F5E9/D1D5DB?text=Fresh+Snacks",
      ],
      closingParagraph:
        "The best tiffin is one that fits your family's routine and includes foods your child enjoys. Keep experimenting with different combinations to find a few reliable favorites.",
      promo: {
        eyebrow: "FAMILY FAVORITES",
        title: "Healthy Snacks",
        discountLabel: "UP TO",
        discountValue: "20%",
        discountSuffix: "Off",
        ctaLabel: "Shop Now",
        image:
          "https://placehold.co/700x260/1A1A1A/D1D5DB?text=Healthy+Snacks",
      },
      comments: [
        {
          id: "c1",
          name: "Jacob Jones",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=JJ",
          date: "18 Sep, 2025",
          text: "The preparation tips are especially helpful for busy school mornings.",
        },
        {
          id: "c2",
          name: "Jane Cooper",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=JC",
          date: "17 Sep, 2025",
          text: "Great ideas for making lunch boxes more interesting.",
        },
      ],
    },
  },

  {
    id: "post-7",
    slug: "artisan-bread-baking-guide",
    image: "https://placehold.co/620x420/EFF6E0/D1D5DB?text=Blog+7",
    day: "02",
    month: "SEP",
    timestamp: 1746316800000,
    category: "Bread & Bakery",
    author: "Rahul",
    commentsCount: 51,
    title: "Artisan Bread Baking At Home: A Beginner's Complete Guide",
    summary:
      "From choosing the right flour to getting that perfect crust, learn everything you need to start baking artisan bread.",
    tags: ["Bread", "Dinner", "Launch"],

    article: {
      heroImage:
        "https://placehold.co/1100x520/EFF6E0/6B7280?text=Artisan+Bread",
      title:
        "Artisan Bread Baking At Home: A Beginner's Complete Guide",
      writer: {
        name: "Rahul",
        avatar:
          "https://placehold.co/64x64/E5E7EB/6B7280?text=RA",
        date: "2 September, 2025",
        readTime: "8 min read",
      },
      intro:
        "Making homemade bread can be a rewarding kitchen project. With a few basic ingredients and some patience, beginners can learn the fundamentals of making a flavorful loaf at home.",
      paragraphs: [
        "Flour, water, yeast, and salt form the basic foundation of many bread recipes. The type of flour and the amount of water can affect the final texture of the loaf.",
        "Kneading and resting the dough are important parts of the process. Giving the dough enough time to develop structure can help create a better texture.",
        "Baking temperature also matters. A properly preheated oven helps the bread develop a good crust while allowing the inside to cook evenly.",
      ],
      inlineImages: [
        "https://placehold.co/540x420/EFF6E0/D1D5DB?text=Bread+Dough",
        "https://placehold.co/540x420/FFF7E6/D1D5DB?text=Fresh+Bread",
      ],
      closingParagraph:
        "Bread baking becomes easier with practice. Start with a simple recipe, learn how your ingredients behave, and make small adjustments each time you bake.",
      promo: {
        eyebrow: "BAKERY SPECIAL",
        title: "Fresh Bakery",
        discountLabel: "UP TO",
        discountValue: "30%",
        discountSuffix: "Off",
        ctaLabel: "Shop Now",
        image:
          "https://placehold.co/700x260/1A1A1A/D1D5DB?text=Fresh+Bakery",
      },
      comments: [
        {
          id: "c1",
          name: "Annette Black",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=AB",
          date: "8 Sep, 2025",
          text: "This makes bread baking feel much less complicated.",
        },
        {
          id: "c2",
          name: "Darrell Steward",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=DS",
          date: "5 Sep, 2025",
          text: "The explanation about resting the dough was very useful.",
        },
      ],
    },
  },

  {
    id: "post-8",
    slug: "choose-best-cuts-of-meat",
    image: "https://placehold.co/620x420/D6EFFF/D1D5DB?text=Blog+8",
    day: "22",
    month: "AUG",
    timestamp: 1745356800000,
    category: "Meat",
    author: "Admin",
    commentsCount: 23,
    title: "How To Choose The Best Cuts Of Meat For Every Recipe",
    summary:
      "A butcher's guide to selecting the right cut for steaks, curries, roasts, and stir-fries every single time.",
    tags: ["Meat", "Dinner"],

    article: {
      heroImage:
        "https://placehold.co/1100x520/D6EFFF/6B7280?text=Fresh+Meat",
      title:
        "How To Choose The Best Cuts Of Meat For Every Recipe",
      writer: {
        name: "Admin",
        avatar:
          "https://placehold.co/64x64/E5E7EB/6B7280?text=AD",
        date: "22 August, 2025",
        readTime: "7 min read",
      },
      intro:
        "Choosing the right cut of meat can make a noticeable difference in many recipes. Different cuts have different textures and cooking characteristics, so matching the cut to the cooking method is important.",
      paragraphs: [
        "For quick cooking methods such as grilling or pan cooking, tender cuts are often a convenient choice. These cuts generally require less cooking time and can work well in simple recipes.",
        "For slow-cooked dishes, tougher cuts can be a good option because longer cooking times can help develop tenderness and flavor.",
        "When shopping for meat, pay attention to the cut, freshness, packaging, and the cooking method you plan to use. Asking your butcher for advice can also help you choose appropriately.",
      ],
      inlineImages: [
        "https://placehold.co/540x420/D6EFFF/D1D5DB?text=Meat+Cuts",
        "https://placehold.co/540x420/FFF7E6/D1D5DB?text=Cooking+Meat",
      ],
      closingParagraph:
        "The best cut depends on the recipe rather than simply choosing the most expensive option. Once you understand how different cuts respond to different cooking methods, grocery shopping becomes much easier.",
      promo: {
        eyebrow: "FRESH FOOD",
        title: "Fresh Meat",
        discountLabel: "UP TO",
        discountValue: "25%",
        discountSuffix: "Off",
        ctaLabel: "Shop Now",
        image:
          "https://placehold.co/700x260/1A1A1A/D1D5DB?text=Fresh+Meat",
      },
      comments: [
        {
          id: "c1",
          name: "Devon Lane",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=DL",
          date: "27 Aug, 2025",
          text: "The difference between quick-cooking and slow-cooking cuts is much clearer now.",
        },
        {
          id: "c2",
          name: "Jacob Jones",
          avatar:
            "https://placehold.co/48x48/E5E7EB/6B7280?text=JJ",
          date: "25 Aug, 2025",
          text: "Good guide for someone who is still learning about different cuts.",
        },
      ],
    },
  },
];