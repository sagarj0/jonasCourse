"use strict";

////////FUNCTION

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = 5000 * numPassenger
// ) {
//   // Default parameter in ES5
//   // numPassenger ||= 1;
//   // price ||= 5000;
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("KTM123");
// createBooking("KTM123", 2, 1000);
// createBooking("KTM123", 4);
// createBooking("KTM123", undefined, 1000);

// const flight = "KTM5678";

// const sagar = {
//   name: "sagar joshi",
//   passport: 901234,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "KTM901";

//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passport === 901234) console.log("checked in");
//   else console.log("wrong  passport");
// };
// // checkIn(flight, sagar);

// // console.log(flight);
// // console.log(sagar);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(sagar);
// checkIn(flight, sagar);

//////////HIGHER-ORDER FUNCTION
/*
const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");

  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`Transformed string is : ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`);
};

transformer("hello its me sagar joshi", upperFirstWord);

transformer("hello its me sagar joshi", oneWord);

const high5 = function () {
  console.log("lets high five");
};

document.body.addEventListener("click", high5);
*/

///////FUNCTION RETURNING AS FUNCTION
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("hey");

greeterHey("sagar");

greeterHey("bro");

greet("hello")("Sagar");

const greetArr = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

greetArr("hi")("sagar");
*/

/*

const nepAirlines = {
  name: "Nepal Airlines",
  code: "NPA",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.name} flight ${this.code} ${flightNum}`
    );

    this.bookings.push({
      flight: `${this.code} ${flightNum}`,
      name,
    });
  },
};

const shreeAirlines = {
  name: "Shree",
  code: "SHA",
  bookings: [],
};

const yetiAirlines = {
  name: "Yeti",
  code: "Yti",
  bookings: [],
};

nepAirlines.book(231, "sagar joshi");

console.log(nepAirlines);

const book = nepAirlines.book;

//book(23,'sagar') //won't work because given expression is just a function normal call and this keyowrd will be undefined.
///  call method
book.call(shreeAirlines, 20, "sagar joshi");

console.log(shreeAirlines);

book.call(yetiAirlines, 20, "Aastha Singh");

console.log(yetiAirlines);

/// apply method

const flightData = [20, "deepak"];

book.apply(shreeAirlines, flightData);

book.call(shreeAirlines, ...flightData);

const bookSha = book.bind(shreeAirlines);

const bookYeti = book.bind(yetiAirlines);

bookSha(19, "Sagar j");

bookYeti(10, "adele");

//WITH EVENT  LISTNER

shreeAirlines.planes = 100;
shreeAirlines.buyPlanes = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// shreeAirlines.buyPlanes();

document
  .querySelector(".btn")
  .addEventListener("click", shreeAirlines.buyPlanes.bind(shreeAirlines));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.2, 100));

const addVAT = addTax.bind(null, 0.13);
console.log(addVAT(100));

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, 
an array of options from which people can choose,
and an array with the number of replies for each option.
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. 
  For example, if the option is 3, 
  increase the value AT POSITION 3 of the array by 1. 
  Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. 
The method takes a string as an input (called 'type'), 
which can be either 'string' or 'array'. 
If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. 
Use both the 'array' and the 'string' option. 
Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/*

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  let answer = Number(
    prompt(
      `${this.question}\n${this.options.join("\n")}\n (Write option number)`
    )
  );

  answer < this.answers.length && this.answers[answer]++;

  this.displayResults();
  this.displayResults("array");
};

poll.displayResults = function (type = "string") {
  type === "string"
    ? console.log("Poll result is ", this.answers.join(", "))
    : console.log("Poll result is ", this.answers);
};
// console.log(poll);

// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, "array"); //BONUS TEST DATA 1:

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }); //BONUS TEST DATA 2:

*/

//////IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)

// const runOnce = () => {
//   console.log("Only once");
// };

// runOnce();

// //IIFE

// (function () {
//   console.log("this will never run again");
//   const isPrivate = 20;
// })();

// console.log();

// (() => console.log("this also never runs again"))();

// (function () {
//   console.log(2 + 3 + 3);
// })();

//CLOSURE

/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;

    console.log(`${passengerCount} Passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 12;
  f = function () {
    console.log(b);
  };
};

g();

f();

console.dir(f);

//Re-assigned function

h();

f();

console.dir(f);

//Example 2

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);

    console.log(`there are 3 groups, each with ${perGroup} passenger`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 200;

boardPassenger(180, 3);


*/

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function,
attach an event listener that changes the color of the selected h1 element ('header') to blue,
each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need.
Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
