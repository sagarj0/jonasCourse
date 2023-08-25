//Exporting module
console.log("exporting from module");

const shippingCost = 83;

const cart = [];

export const addToCart = function (produnct, quantity) {
  cart.push({ produnct, quantity });

  console.log(`${produnct} ${quantity}  added to cart`);
};

////
