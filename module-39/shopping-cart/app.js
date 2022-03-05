const addToCart = () => {
  const productName = document.getElementById("product-name");
  const product = productName.value;

  if (!product) {
    return;
  }
  //   display in the ui
  displayProduct(product);
  //   add to local storage
  productAddToCart(product);

  productName.value = "";
};

const displayProduct = (product) => {
  const ul = document.getElementById("products");
  const li = document.createElement("li");
  li.innerText = product;

  ul.appendChild(li);
};

const getCart = () => {
  const cart = localStorage.getItem("cart");
  let cartObj;
  if (cart) {
    cartObj = JSON.parse(cart);
  } else {
    cartObj = {};
  }
  return cartObj;
};

const productAddToCart = (product) => {
  const cart = getCart();

  if (cart[product]) {
    cart[product] = cart[product] + 1;
  } else {
    cart[product] = 1;
  }
  //   console.log(cart);
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayLocalstorageCart = () => {
  const cart = getCart();
  for (const product in cart) {
    displayProduct(product);
  }
};

displayLocalstorageCart();

const placeOrder = () => {
  document.getElementById("products").innerText = "";
  localStorage.removeItem("cart");
};

// const getCart = () => {
//   const cart = localStorage.getItem("cart");
//   let cartObj;
//   if (cart) {
//     cartObj = JSON.parse(cart);
//   } else {
//     cartObj = {};
//   }
//   return cartObj;
// };

// const productAddToCart = (product) => {
//   const cart = getCart();
//   cart[product] = 1;
//   console.log(cart);
//   const cartStringified = JSON.stringify(cart);

//   localStorage.setItem("cart", cartStringified);
// };
