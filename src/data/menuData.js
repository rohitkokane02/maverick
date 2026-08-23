export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'jain', label: 'Pure Jain Options 🌿' },
  { id: 'coffee', label: 'Coffee & Brews ☕' },
  { id: 'bites', label: 'Sandwiches & Burgers 🍔' },
  { id: 'mains', label: 'Pastas & Pizzas 🍕' },
  { id: 'desserts', label: 'Desserts & Shakes 🍨' }
];

export const MENU_ITEMS = [
  // Coffee & Brews
  {
    id: 1,
    name: "Maverick Signature Cold Coffee",
    category: "coffee",
    price: 140,
    description: "Thick, creamy handcrafted cold coffee topped with rich cocoa powder and dark chocolate drizzle.",
    tags: ["Bestseller", "Pure Jain"],
    isJain: true,
    isBestseller: true
  },
  {
    id: 2,
    name: "Kolhapuri Spice Hazelnut Cappuccino",
    category: "coffee",
    price: 160,
    description: "Freshly pulled espresso with velvety steamed milk infused with roasted hazelnut and a subtle hint of cinnamon.",
    tags: ["Chef Special", "Pure Jain"],
    isJain: true,
    isChefSpecial: true
  },
  {
    id: 3,
    name: "Boho Dark Mocha Frappe",
    category: "coffee",
    price: 180,
    description: "Blended double espresso with Belgian dark chocolate paste, milk, ice, and whipped cream topping.",
    tags: ["Pure Jain"],
    isJain: true
  },
  {
    id: 4,
    name: "Iced Caramel Macchiato",
    category: "coffee",
    price: 170,
    description: "Chilled espresso poured gently over vanilla milk and topped with buttery salted caramel drizzle.",
    tags: ["Pure Jain"],
    isJain: true
  },

  // Pure Jain Specials
  {
    id: 5,
    name: "Pure Jain Supreme Paneer Sandwich",
    category: "jain",
    price: 190,
    description: "Grilled multi-grain sandwich loaded with fresh cottage cheese, capsicum, sweetcorn, herbs & melted Jain butter (No root veggies).",
    tags: ["Pure Jain", "Bestseller"],
    isJain: true,
    isBestseller: true
  },
  {
    id: 6,
    name: "Jain Farmhouse Cheese Burst Pizza",
    category: "jain",
    price: 280,
    description: "Hand-tossed thin crust pizza topped with fresh tomato puree, bell peppers, sweetcorn, paneer, and double mozzarella.",
    tags: ["Pure Jain", "Chef Special"],
    isJain: true,
    isChefSpecial: true
  },
  {
    id: 7,
    name: "Pure Jain Creamy White Sauce Pasta",
    category: "jain",
    price: 240,
    description: "Penne pasta tossed in velvety Jain cream sauce with oregano, black olives, bell peppers & golden corn.",
    tags: ["Pure Jain"],
    isJain: true
  },
  {
    id: 8,
    name: "Jain Loaded Nachos with Cheese Fountain",
    category: "jain",
    price: 210,
    description: "Crispy tortilla chips topped with melted liquid Jain cheddar, diced tomatoes, olives, and jalapenos.",
    tags: ["Pure Jain"],
    isJain: true
  },

  // Sandwiches & Burgers
  {
    id: 9,
    name: "Urban Jungle Paneer Tikka Sandwich",
    category: "bites",
    price: 200,
    description: "Smoky tandoori paneer marinated in house spices, crisp lettuce, mint mayonnaise, and grilled to perfection.",
    tags: ["Bestseller", "Spicy"],
    isBestseller: true
  },
  {
    id: 10,
    name: "Maverick Double Cheese Crunch Burger",
    category: "bites",
    price: 220,
    description: "Crispy veggie patty stuffed with molten cheese, chipotle sauce, pickled cucumbers, and caramelised onion relish.",
    tags: ["Chef Special"],
    isChefSpecial: true
  },
  {
    id: 11,
    name: "Cheesy Garlic Herb Toast",
    category: "bites",
    price: 150,
    description: "Artisanal baguette slices toasted with garlic butter, mixed herbs, and bubbling golden mozzarella.",
    tags: ["Pure Jain Available"],
    isJain: true
  },

  // Pastas & Pizzas
  {
    id: 12,
    name: "Fiery Kolhapuri Peri-Peri Pizza (10\")",
    category: "mains",
    price: 320,
    description: "Spicy peri-peri seasoned paneer, red paprika, jalapenos, onions, and rich mozzarella cheese base.",
    tags: ["Spicy", "Chef Special"],
    isChefSpecial: true
  },
  {
    id: 13,
    name: "Classic Pink Sauce Penne Pasta",
    category: "mains",
    price: 250,
    description: "Rich fusion of tangy tomato arrabbiata and velvety Jain Alfredo cream sauce with exotic veggies.",
    tags: ["Bestseller", "Pure Jain Available"],
    isBestseller: true,
    isJain: true
  },

  // Desserts & Shakes
  {
    id: 14,
    name: "Belgian Chocolate Sizzling Brownie",
    category: "desserts",
    price: 220,
    description: "Warm dense chocolate brownie served on a sizzling hot plate with vanilla ice cream and hot chocolate fudge.",
    tags: ["Bestseller", "Pure Jain"],
    isJain: true,
    isBestseller: true
  },
  {
    id: 15,
    name: "Nutella Ferrero Thick Shake",
    category: "desserts",
    price: 230,
    description: "Luxurious blend of real Nutella cocoa, crushed Ferrero Rocher, whole milk, and chocolate ice cream.",
    tags: ["Chef Special"],
    isChefSpecial: true
  },
  {
    id: 16,
    name: "Biscoff Cookie Butter Freakshake",
    category: "desserts",
    price: 250,
    description: "Decadent Lotus Biscoff spread shake topped with whipped cream, Biscoff crumbs, and a whole biscuit.",
    tags: ["Pure Jain"],
    isJain: true
  }
];
