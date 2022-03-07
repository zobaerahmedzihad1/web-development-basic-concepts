const products = [
  { name: "iphone 12", brand: "iphone", price: 2200, color: "pink" },
  { name: "samsung 12", brand: "samsung", price: 2700, color: "yellow" },
  { name: "watch", brand: "rolex", price: 2000, color: "red" },
  { name: "t-shirt", brand: "easy", price: 1200, color: "black" },
  { name: "oppo 12 pro", brand: "oppo", price: 1800, color: "purple" },
  { name: "samsung pro", brand: "oppo", price: 1800, color: "purple" },
];

const cheap = products.find((product) => product.price <= 2000);
console.log(cheap);

const needShirt = products.find((product) => product.name.includes("shirt"));
console.log(needShirt);
