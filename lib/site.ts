export const site = {
  name: "Cowboy Truck Stop 2",
  shortName: "Cowboy 2",
  tagline: "Fuel up. Eat well. Get back on the road.",
  description:
    "Cowboy Truck Stop 2 is an I-20 stop in Marshall, Texas — Mobil fuel, Desi Dhaba Indian and Pakistani food, a workshop, restrooms, Wi-Fi, and the truck-stop basics drivers actually need.",
  address: {
    line1: "304 I-20",
    city: "Marshall",
    state: "TX",
    zip: "75672",
    country: "United States",
    full: "304 I-20, Marshall, TX 75672, United States",
  },
  phone: {
    raw: "+19039383466",
    display: "(903) 938-3466",
  },
  hours: {
    fuel: "Open 24 hours",
    store: "Open 24 hours",
    restaurant: "6:00 AM – 10:00 PM daily",
    workshop: "Daytime service — call ahead",
  },
  maps: {
    query: "304 I-20, Marshall, TX 75672",
    embed:
      "https://maps.google.com/maps?q=304%20I-20%2C%20Marshall%2C%20TX%2075672&z=15&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=304+I-20,+Marshall,+TX+75672",
  },
  exit: "I-20, Marshall, Texas",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/eat", label: "Eat" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const amenities = [
  {
    title: "Mobil fuel",
    href: "/services#fuel",
    copy: "Gasoline and diesel at a 24-hour Mobil station. Fleet cards welcome.",
  },
  {
    title: "Desi Dhaba",
    href: "/eat",
    copy: "Indian and Pakistani home-style cooking — biryani, curries, paratha, and chai.",
  },
  {
    title: "Workshop",
    href: "/services#workshop",
    copy: "On-site service bays for the repairs that keep a truck moving.",
  },
  {
    title: "Restrooms",
    href: "/services#restrooms",
    copy: "Clean, working restrooms for drivers, families, and anyone passing through.",
  },
  {
    title: "Wi-Fi",
    href: "/services#wifi",
    copy: "Free wireless so you can check dispatch, call home, or sit a minute.",
  },
  {
    title: "Travel store",
    href: "/services#store",
    copy: "Snacks, drinks, ice, and the road-trip staples you do not want to hunt for.",
  },
  {
    title: "Truck parking",
    href: "/services#parking",
    copy: "Room to pull in, fuel up, eat, and get back on I-20 without a tight squeeze.",
  },
  {
    title: "ATM & extras",
    href: "/services#extras",
    copy: "ATM, ice, air, and the other truck-stop basics that save a second stop.",
  },
];

export const services = [
  {
    id: "fuel",
    title: "Mobil fuel",
    eyebrow: "Gasoline & diesel",
    copy: "Fill up at our Mobil station on I-20. We pump gasoline and diesel around the clock, and we take commercial diesel fleet cards. If you are running low between Dallas and Shreveport, this is a straightforward stop — pull in, fuel, and roll.",
    details: [
      "Mobil gasoline and diesel",
      "Open 24 hours",
      "Commercial diesel fleet cards accepted",
      "Walmart+ and Exxon Mobil Rewards+ at the pump",
    ],
  },
  {
    id: "workshop",
    title: "Workshop",
    eyebrow: "Service bays",
    copy: "Things break on the highway. Our on-site workshop is here for the work that cannot wait until the next terminal — checks, repairs, and the kind of service that gets you back in the lane. Call ahead so we can tell you what we can take today.",
    details: [
      "On-site service bays",
      "Daytime service hours",
      "Call (903) 938-3466 before you roll in",
    ],
  },
  {
    id: "restrooms",
    title: "Restrooms",
    eyebrow: "A real stop",
    copy: "Functional restrooms that get used the way truck-stop restrooms should: often, and by people who just need a clean place to go. That is the bar, and we keep it.",
    details: ["Open with the store", "Maintained through the day and night"],
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    eyebrow: "Stay connected",
    copy: "Grab a signal while you eat, fuel, or sit in the lot. Check the next load, send a message home, or just get off the phone hotspot for a while.",
    details: ["Free Wi-Fi on site", "Good for a meal or a short layover"],
  },
  {
    id: "store",
    title: "Travel store",
    eyebrow: "Open 24 hours",
    copy: "The store is stocked for the road: drinks, snacks, smokes, ice, and the last-minute things you forgot at the last exit. Open all night with the pumps.",
    details: ["Convenience store 24/7", "Drinks, snacks, and travel staples", "Ice available"],
  },
  {
    id: "parking",
    title: "Truck parking",
    eyebrow: "Pull in",
    copy: "This is a working I-20 stop with room for trucks, not just cars hugging the pumps. Pull in, take care of fuel, food, and a restroom break, then get back east or west.",
    details: ["Truck-friendly lot", "Easy in and out off I-20"],
  },
  {
    id: "extras",
    title: "The rest of the jazz",
    eyebrow: "Driver basics",
    copy: "A truck stop is only as good as the small things. ATM, air, ice, a store that is actually open, and staff who have seen every kind of night on this stretch of interstate.",
    details: [
      "ATM on site",
      "Air and the usual lot amenities",
      "U-Haul neighborhood dealer for trucks and trailers",
    ],
  },
];

export const menuHighlights = [
  {
    name: "Butter chicken",
    copy: "Creamy, familiar, and the plate most first-timers order. Good with rice or naan.",
  },
  {
    name: "Biryani",
    copy: "Chicken or mutton, piled high. A full meal if you have been driving since dawn.",
  },
  {
    name: "Paratha & chai",
    copy: "Aloo paratha, mixed paratha, and a proper cup of chai — breakfast that holds.",
  },
  {
    name: "Poori chole",
    copy: "Puffed poori with spiced chickpeas. A dhaba classic, not a gas-station afterthought.",
  },
  {
    name: "Dal & curries",
    copy: "Daily dals, chicken curry, and the gravy dishes that taste like somebody's kitchen.",
  },
  {
    name: "Naan, roti & samosas",
    copy: "Fresh bread to soak it up, plus samosas when you want something you can hold.",
  },
];
