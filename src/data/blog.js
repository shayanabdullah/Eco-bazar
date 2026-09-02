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
  "Healthy",
  "Low fat",
  "Vegetarian",
  "Bread",
  "Kid foods",
  "Vitamins",
  "Snacks",
  "Tiffin",
  "Meat",
  "Launch",
  "Dinner",
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
      heroImage: "https://placehold.co/1100x520/FFFFFF/D1D5DB?text=Blog+Hero",
      title:
        "Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.",
      writer: {
        name: "Cameron Williamson",
        avatar: "https://placehold.co/64x64/E5E7EB/6B7280?text=CW",
        date: "4 April, 2021",
        readTime: "6 min read",
      },
      intro:
        "Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet. Phasellus tristique felis dolor.",
      paragraphs: [
        "Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.",
        "Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus. Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.",
      ],
      inlineImages: [
        "https://placehold.co/540x420/FFFFFF/D1D5DB?text=Inline+1",
        "https://placehold.co/540x420/D8ECE0/D1D5DB?text=Inline+2",
      ],
      closingParagraph:
        "Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.",
      promo: {
        eyebrow: "SUMMER SALES",
        title: "Fresh Fruit",
        discountLabel: "UP TO",
        discountValue: "56%",
        discountSuffix: "Off",
        ctaLabel: "Shop Now",
        image: "https://placehold.co/700x260/1A1A1A/D1D5DB?text=Fresh+Fruit",
      },
      comments: [
        {
          id: "c1",
          name: "Annette Black",
          avatar: "https://placehold.co/48x48/E5E7EB/6B7280?text=AB",
          date: "26 Apr, 2021",
          text: "In a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus et aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.",
        },
        {
          id: "c2",
          name: "Devon Lane",
          avatar: "https://placehold.co/48x48/E5E7EB/6B7280?text=DL",
          date: "24 Apr, 2021",
          text: "Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean odio, ullamcorper quis turpis ac, volutpat imperdiet.",
        },
        {
          id: "c3",
          name: "Jacob Jones",
          avatar: "https://placehold.co/48x48/E5E7EB/6B7280?text=JJ",
          date: "20 Apr, 2021",
          text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        },
        {
          id: "c4",
          name: "Jane Cooper",
          avatar: "https://placehold.co/48x48/E5E7EB/6B7280?text=JC",
          date: "18 Apr, 2021",
          text: "Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean odio, ullamcorper quis turpis ac, volutpat imperdiet.",
        },
        {
          id: "c5",
          name: "Darrell Steward",
          avatar: "https://placehold.co/48x48/E5E7EB/6B7280?text=DS",
          date: "7 Apr, 2021",
          text: "Nulla molestie interdum ultricies.",
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
    highlighted: true,
  },
  {
    id: "post-3",
    slug: "post-3",
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
  },
  {
    id: "post-4",
    slug: "post-4",
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
    hasPlayButton: true,
  },
  {
    id: "post-5",
    slug: "post-5",
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
  },
  {
    id: "post-6",
    slug: "post-6",
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
  },
  {
    id: "post-7",
    slug: "post-7",
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
  },
  {
    id: "post-8",
    slug: "post-8",
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
  },
];
