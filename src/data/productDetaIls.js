
import { popularProducts } from "../utils/data";
import video from '../assets/images/video.png'

const productContent = {
  1: {
    brand: "Fresh Farm",
    weight: "01 kg",
    color: "Red",
    type: "Premium",
    stock: "Available (2,841)",
    description:
      "Fresh and juicy premium red apples carefully selected from quality farms. Perfect for snacking, desserts, juices, and everyday healthy meals.",
    paragraphs: [
      "These premium red apples are carefully selected for their crisp texture, natural sweetness, and fresh flavor. They are sourced from trusted farms and handled carefully to maintain their quality.",
      "Perfect for breakfast, snacks, salads, desserts, or fresh juice. Their naturally sweet flavor makes them a favorite choice for the whole family.",
    ],
  },

  2: {
    brand: "Green Valley",
    weight: "500 g",
    color: "Red",
    type: "Fresh",
    stock: "Available (1,932)",
    description:
      "Fresh red bell peppers with a crisp texture and naturally sweet flavor. Great for salads, stir-fries, grilling, and everyday cooking.",
    paragraphs: [
      "Our fresh red bell peppers are harvested at the right stage to provide a naturally sweet taste and crunchy texture.",
      "They are versatile vegetables that work beautifully in salads, pasta, stir-fries, grilled dishes, and many other recipes.",
    ],
  },

  3: {
    brand: "Green Garden",
    weight: "01 kg",
    color: "Green",
    type: "Fresh",
    stock: "Available (3,214)",
    description:
      "Crisp and refreshing Granny Smith apples with a deliciously tart flavor and naturally crunchy texture.",
    paragraphs: [
      "Fresh Granny Smith apples are known for their bright green skin, firm texture, and refreshing tart flavor.",
      "Enjoy them fresh, sliced into salads, baked into desserts, or paired with your favorite snacks.",
    ],
  },

  4: {
    brand: "Orange Valley",
    weight: "01 kg",
    color: "Orange",
    type: "Premium",
    stock: "Available (2,104)",
    description:
      "Juicy premium Indian oranges packed with refreshing citrus flavor. A perfect choice for fresh snacks and homemade juice.",
    paragraphs: [
      "These premium Indian oranges are selected for their juicy texture, vibrant color, and naturally refreshing citrus flavor.",
      "Enjoy them fresh or use them to prepare fresh juice, desserts, smoothies, and salads.",
    ],
  },

  5: {
    brand: "Farmary",
    weight: "01 kg",
    color: "Green",
    type: "Organic",
    stock: "Available (5,413)",
    description:
      "Fresh organic Chinese cabbage with tender leaves and a naturally mild flavor. Perfect for healthy everyday cooking.",
    paragraphs: [
      "Our organic Chinese cabbage is grown and selected with freshness and quality in mind. Its tender leaves and crisp texture make it suitable for a wide variety of dishes.",
      "Use it in soups, stir-fries, salads, wraps, or traditional recipes for a fresh and healthy addition to your meals.",
    ],
  },

  6: {
    brand: "Farm Fresh",
    weight: "500 g",
    color: "Green",
    type: "Fresh",
    stock: "Available (1,725)",
    description:
      "Fresh green leaf lettuce with crisp leaves and a light refreshing flavor. Ideal for salads, sandwiches, and wraps.",
    paragraphs: [
      "Fresh green leaf lettuce provides a crisp texture and refreshing taste that works perfectly in everyday salads.",
      "Wash and serve fresh or use it as a base for sandwiches, wraps, burgers, and healthy meals.",
    ],
  },

  7: {
    brand: "Green Farm",
    weight: "01 kg",
    color: "Purple",
    type: "Farm Fresh",
    stock: "Available (2,486)",
    description:
      "Farm fresh eggplant with smooth skin and tender flesh. A versatile vegetable for curries, grilling, frying, and roasting.",
    paragraphs: [
      "These farm fresh eggplants are selected for their smooth skin, firm texture, and tender interior.",
      "They are perfect for curries, roasted dishes, grilled recipes, fries, and many traditional vegetable dishes.",
    ],
  },

  8: {
    brand: "Golden Farm",
    weight: "01 kg",
    color: "Golden",
    type: "Fresh",
    stock: "Available (4,128)",
    description:
      "Fresh golden potatoes with a naturally creamy texture. A versatile kitchen staple for countless everyday recipes.",
    paragraphs: [
      "Golden fresh potatoes are carefully selected for their quality, firm texture, and naturally delicious flavor.",
      "Use them for fries, mashed potatoes, curries, soups, roasting, baking, and countless everyday meals.",
    ],
  },

  9: {
    brand: "Fresh Harvest",
    weight: "500 g",
    color: "Yellow",
    type: "Fresh",
    stock: "Available (2,963)",
    description:
      "Sweet yellow corn with naturally juicy kernels and a delicious sweet flavor. Great for salads, soups, snacks, and cooking.",
    paragraphs: [
      "Fresh yellow corn is selected for its juicy kernels and naturally sweet flavor.",
      "Enjoy it boiled, grilled, added to salads, mixed into soups, or used in your favorite recipes.",
    ],
  },

  10: {
    brand: "Organic Farm",
    weight: "01 kg",
    color: "White",
    type: "Organic",
    stock: "Available (1,543)",
    description:
      "Fresh white cauliflower with compact florets and a mild flavor. A healthy and versatile vegetable for everyday cooking.",
    paragraphs: [
      "Fresh cauliflower is carefully selected for its firm texture, clean appearance, and naturally mild flavor.",
      "It can be steamed, roasted, fried, added to curries, or used as a healthy ingredient in countless recipes.",
    ],
  },

  11: {
    brand: "Green Valley",
    weight: "500 g",
    color: "Green",
    type: "Fresh",
    stock: "Available (3,421)",
    description:
      "Fresh green bell peppers with a crisp texture and mild flavor. Perfect for salads, stir-fries, grilling, and cooking.",
    paragraphs: [
      "Fresh green bell peppers provide a crisp texture and mild vegetable flavor that fits perfectly into everyday recipes.",
      "Use them in salads, pizzas, stir-fries, pasta, grilled dishes, and many other meals.",
    ],
  },

  12: {
    brand: "Fresh Garden",
    weight: "250 g",
    color: "Green",
    type: "Fresh",
    stock: "Available (2,315)",
    description:
      "Fresh green chili peppers with a naturally spicy flavor. Perfect for adding heat and freshness to everyday dishes.",
    paragraphs: [
      "Fresh green chilies are carefully selected for their vibrant color, freshness, and naturally spicy flavor.",
      "Use them in curries, sauces, chutneys, stir-fries, or slice them into your favorite meals for extra heat.",
    ],
  },

  13: {
    brand: "Farm Fresh",
    weight: "01 kg",
    color: "Green",
    type: "Fresh",
    stock: "Available (3,874)",
    description:
      "Garden fresh cucumbers with a crisp texture and refreshing taste. Perfect for salads, snacks, juices, and healthy meals.",
    paragraphs: [
      "Garden fresh cucumbers are naturally crisp, juicy, and refreshing, making them an excellent choice for everyday meals.",
      "Enjoy them sliced in salads, sandwiches, drinks, or simply as a healthy refreshing snack.",
    ],
  },

  14: {
    brand: "Fresh Harvest",
    weight: "01 kg",
    color: "Red",
    type: "Farm Fresh",
    stock: "Available (4,216)",
    description:
      "Vine ripe tomatoes with juicy flesh and naturally rich flavor. Perfect for salads, sauces, curries, and everyday cooking.",
    paragraphs: [
      "These vine ripe tomatoes are selected for their vibrant color, juicy texture, and naturally rich flavor.",
      "Use them fresh in salads or sandwiches, or add them to sauces, soups, curries, and countless everyday recipes.",
    ],
  },

  15: {
    brand: "Organic Garden",
    weight: "500 g",
    color: "Orange",
    type: "Organic",
    stock: "Available (2,641)",
    description:
      "Fresh organic orange carrots with a naturally sweet crunch. Perfect for salads, soups, juices, and healthy meals.",
    paragraphs: [
      "Organic orange carrots are carefully selected for their natural sweetness, crisp texture, and vibrant color.",
      "They are perfect for fresh salads, soups, juices, roasted dishes, and healthy everyday snacks.",
    ],
  },

  16: {
    brand: "Fresh Farm",
    weight: "01 kg",
    color: "Red",
    type: "Fresh",
    stock: "Available (3,186)",
    description:
      "Fresh red onions with a crisp texture and rich flavor. An essential ingredient for salads, curries, sauces, and everyday cooking.",
    paragraphs: [
      "Fresh red onions are selected for their crisp texture, vibrant color, and rich natural flavor.",
      "They can be enjoyed raw in salads or used in curries, sauces, sandwiches, and countless everyday dishes.",
    ],
  },

  17: {
    brand: "Organic Farm",
    weight: "250 g",
    color: "Brown",
    type: "Organic",
    stock: "Available (1,862)",
    description:
      "Organic ginger root with a naturally strong and aromatic flavor. Perfect for tea, curries, sauces, and healthy recipes.",
    paragraphs: [
      "Organic ginger root is carefully selected for its fresh aroma, firm texture, and naturally spicy flavor.",
      "Use it in tea, curries, soups, sauces, marinades, juices, and a wide variety of healthy recipes.",
    ],
  },
};

const checklist = [
  "Fresh and carefully selected produce.",
  "Packed to maintain freshness and quality.",
  "Perfect for healthy everyday meals.",
  "Suitable for a variety of recipes.",
];

const getImages = (image) => [
  image,
  video,
  image,
  video,
];

export const productDetails = popularProducts.reduce((acc, item) => {
  const content = productContent[item.id];
if (!content) {
  console.error("Missing product content for:", item);
}
  acc[item.id] = {
    id: item.id,
    slug: item.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),

    name: item.name,

    brand: {
      name: content.brand,
      logo: `https://placehold.co/60x15/FFFFFF/00B712?text=${encodeURIComponent(
        content.brand
      )}&font=raleway`,
    },

    category: item.category || "Vegetables",

    tags: [
      item.category || "Vegetables",
      "Fresh",
      item.name,
    ],

    price: item.price,

    originalPrice: item.oldPrice || null,

    discountPercent: item.sale || 0,

    rating: item.rating,

    reviewCount: item.reviewCount,

    sku: `2,${item.id}5,${String(item.id * 913).padStart(3, "0")}`,

    inStock: true,

    defaultQuantity: 1,

    images: getImages(item.image),

    description: content.description,

    descriptionTab: {
      paragraphs: content.paragraphs,

      checklist,

      closingParagraph:
        "Fresh produce carefully selected to bring quality, flavor, and freshness to your everyday meals.",
    },

    specs: [
      {
        label: "Weight:",
        value: content.weight,
      },
      {
        label: "Color:",
        value: content.color,
      },
      {
        label: "Type:",
        value: content.type,
      },
      {
        label: "Category:",
        value: item.category || "Vegetables",
      },
      {
        label: "Stock Status:",
        value: content.stock,
      },
      {
        label: "Tags:",
        value: `${item.category || "Vegetables"}, Fresh, ${item.name}`,
      },
    ],

    promoVideo: {
      image: video,
    },

    promoBenefits: [
      {
        title: item.sale
          ? `${item.sale}% Discount`
          : "Fresh Quality",
        subtitle: item.sale
          ? `Save ${item.sale}% money with us`
          : "Fresh quality produce",
        icon: item.sale ? "percent" : "leaf",
      },
      {
        title: "100% Fresh",
        subtitle: "Fresh quality vegetables & fruits",
        icon: "leaf",
      },
    ],
  };

  return acc;
}, {});