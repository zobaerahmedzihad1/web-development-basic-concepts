const products = [
  { name: "iphone 12", brand: "iphone", price: 2200, color: "pink" },
  //   { name: "samsung 12", brand: "samsung", price: 2700, color: "yellow" },
  { name: "watch", brand: "rolex", price: 2000, color: "red" },
  { name: "t-shirt", brand: "easy", price: 1200, color: "black" },
  { name: "oppo 12 pro", brand: "oppo", price: 1800, color: "purple" },
  { name: "samsung pro", brand: "oppo", price: 1800, color: "purple" },
];

const newProduct = {
  name: "camera",
  brand: "canon",
  price: 700,
  color: "blue",
};
// copy products array and add a newProduct object.
const newProducts = [...products, newProduct];
// console.log(newProducts);

const leather = { name: "jacket", price: 900 };
products.push(leather);

// console.log(products);

// without t-shirt create an array
const withoutShirt = products.filter((product) => product.name !== "t-shirt");
console.log(withoutShirt);

// featch

fetch("url")
  .then((response) => response.json())
  .then((data) => console.log(data));
