const products = [
  { name: "iphone 12", brand: "iphone", price: 2200, color: "pink" },
  { name: "samsung 12", brand: "samsung", price: 2700, color: "yellow" },
  { name: "watch", brand: "rolex", price: 2000, color: "red" },
  { name: "t-shirt", brand: "easy", price: 1200, color: "black" },
  { name: "oppo 12 pro", brand: "oppo", price: 1800, color: "purple" },
  { name: "samsung pro", brand: "oppo", price: 1800, color: "purple" },
];

const budget = products.filter((product) => product.price < 2000);
console.log(budget);

const sameBrandProduct = products.filter((product) =>
  product.name.includes("samsung")
);
console.log(sameBrandProduct);

const sameModel = products.filter((product) => product.name.includes(12));
console.log(sameModel);
