// // console.log("sagar");
// //Importing module
import { addToCart, totalPrice, totalQuantity } from "./shopingCart.js";

// import * as shoppingCart from "./shopingCart.js";

// console.log("imported from module");

// shoppingCart.addToCart("bread", 5);

// // console.log(totalPrice, totalQuantity);
/*
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

console.log(lastPost);

const lastPost2 = await getLastPost();

console.log(lastPost2);

// console.log(data);

// console.log("something");

// lastPost.then((last) => console.log(last));

const shoppingCart2 = (function () {
  const cart = [];

  const shippingCost = 100;

  const totalPrice = 200;

  const totalQuantity = 150;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function () {
    console.log(`${quantity} ${product} ordered from suppliers`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart(`apple`, 4);
shoppingCart2.addToCart(`banana`, 5);
*/
import cloneDeep from "../node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [],
};

console.log("sagar");

// if (module.hot) {
// module.hot.accept();
// }
