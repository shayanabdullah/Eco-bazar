export const navMenus = [
  {
    id: "deals",
    label: "Deals",
    badge: "HOT",
    items: [
      {
        id: "todays-highlights",
        label: "Today's Highlights",
        icon: "tag",
        sort: "best-selling",
      },
      {
        id: "flash-savings",
        label: "Flash Savings",
        icon: "zap",
        sort: "popular",
      },
      {
        id: "bundle-value",
        label: "Bundle Value",
        icon: "gift",
        sort: "price-low",
      },
      {
        id: "weekend-market",
        label: "Weekend Market",
        icon: "calendar",
        sort: "new-arrivals",
      },
      {
        id: "clearance-corner",
        label: "Clearance Corner",
        icon: "percent",
        sort: "price-low",
      },
    ],
  },
  {
    id: "new-arrivals",
    label: "New Arrivals",
    badge: "NEW",
    items: [
      {
        id: "fresh-this-week",
        label: "Fresh This Week",
        icon: "calendar-days",
        sort: "new-arrivals",
      },
      {
        id: "just-in-stock",
        label: "Just In Stock",
        icon: "package-plus",
        sort: "latest",
      },
      {
        id: "seasonal-harvest",
        label: "Seasonal Harvest",
        icon: "leaf",
        sort: "new-arrivals",
      },
      {
        id: "farm-picks",
        label: "Farm Picks",
        icon: "sprout",
        sort: "top-rated",
      },
      {
        id: "new-to-shelf",
        label: "New to Shelf",
        icon: "shopping-basket",
        sort: "new-arrivals",
      },
    ],
  },
  {
    id: "best-picks",
    label: "Best Picks",
    items: [
      {
        id: "top-picks",
        label: "Top Picks",
        icon: "trending-up",
        sort: "best-selling",
      },
      {
        id: "customer-favorites",
        label: "Customer Favorites",
        icon: "heart",
        sort: "popular",
      },
      {
        id: "highly-rated",
        label: "Highly Rated",
        icon: "star",
        sort: "top-rated",
      },
      {
        id: "most-ordered",
        label: "Most Ordered",
        icon: "shopping-cart",
        sort: "best-selling",
      },
      {
        id: "community-choice",
        label: "Community Choice",
        icon: "users",
        sort: "popular",
      },
    ],
  },
  {
    id: "more",
    label: "More",
    items: [
      { id: "faq", label: "FAQ", icon: "question", to: "/faq" },
      { id: "blog", label: "Blog", icon: "newspaper", to: "/blog" },
      { id: "about", label: "About Us", icon: "info", to: "/about" },
      { id: "contact", label: "Contact Us", icon: "mail", to: "/contact" },
      {
        id: "everyday-essentials",
        label: "Everyday Essentials",
        icon: "shopping-basket",
        sort: "popular",
      },
    ],
  },
];
