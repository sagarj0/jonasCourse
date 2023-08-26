//Exporting module
console.log("exporting from module");

const shippingCost = 83;

const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });

  console.log(`${product} ${quantity}  added to cart`);
};

const totalPrice = 500;

const totalQuantity = 20;

export { totalPrice, totalQuantity };

////
