// let js='5';
// console.log(typeof js);

"use strict";

// const { connect } = require("tone");

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico  Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(notObj) {
    console.log(`
    order recieved
    ${this.starterMenu[notObj.starterIndex]}
    and
    ${this.mainMenu[notObj.mainIndex]}
    will be delivered to
    ${notObj.address} 
    at
    ${notObj.time}
    `);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`pasta with ${ing1},${ing2},${ing3}`);
  },
};

//MAPS MORE

// const answer = Number(prompt("your answer is?"));
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));

//MAPS : fundamentals

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//SET : collection of unique objects.
// const orderSet = new Set([
//   "pasta",
//   "pizza",
//   "pizza",
//   "risotto",
//   "pasta",
//   "pizza",
// ]);

// console.log(orderSet);

// console.log(new Set("sagar"));

// console.log(orderSet.size);

// console.log(orderSet.has("pizza"));

// console.log(orderSet.has("rice"));

// orderSet.add("rice");

// console.log(orderSet);

// console.log(orderSet.has("rice"));

// orderSet.delete("rice");

// // console.log(orderSet);

// const staff = ["waiter", "cheff", "waiter", "manager", "cheff", "waiter"];

// // console.log(staff);

// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);

//LOOPING OBJECTS:OBJECT KEYS,VALUES AND ENTRIES

// const keys = Object.keys(openingHours);

// console.log(typeof keys);

// let str = `we are open on ${keys.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   // console.log(day);
//   str += ` ${day} at ${openingHours[day]?.open}`;
// }

// // console.log(str);

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//    OPTIONAL CHAINING
// if (restaurant.openingHours.mon.open) {
// console.log(restaurant.openingHours.mon.open);
// }

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

// for (const day of week) {
//   const open = restaurant.openingHours[day]?.open ?? "";
//   console.log(`on ${day}day restaurant opens at ${open}`);
//   console.log(restaurant.openingHours[day]?.open);
// }

// console.log(restaurant.order?.(1, 1));

//FOR-OF  LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const member of menu) console.log(member);
// let num = 1;
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}. ${el}`);
//   // num++;
// }

// console.log([...menu.entries()]);

//SPREAD i.e.right side of =
//{

// const arr = [1, 2, ...[3, 4]];

// const arr = [7, 8, 9];

// const NewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(NewArr);

// const newArr = [...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, "rice"];
// console.log(newMenu);
// restaurant.mainMenu = newMenu;
// console.log(restaurant.mainMenu);

// restaurant.mainMenu = [...restaurant.mainMenu, "chapati"];
// console.log(restaurant.mainMenu);

// const myName = "sagar";
// console.log(myName[0]);
// console.log([...myName, "j"]);

// restaurant.orderDelivery({
//   time: "19:00",
//   address: "imadol",
//   mainIndex: "0",
//   starterIndex: "2",
// });

// const ingrs = [prompt("ingr1"), prompt("ingr2"), prompt("ingr3")];
// console.log(ingrs);
// restaurant.orderPasta(...ingrs);
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: "Sagar joshi",
// };

// console.log(newRestaurant);

//}

//REST i.e. left side of ={

// const [a, b, ...remaining] = [1, 2, 3, 4, 5];
// console.log(a, b, remaining);

// const [...arrs] = [1, 2, 3];
// console.log(arrs);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// const print = (element) => {
// console.log(element);
// };

// const sum = (...numbers) => {
//   let sum = 0;
//   numbers.forEach(print);
//   // console.log(sum);
// };

// sum(2, 3, 5, 10, 20);
//}

//DESTRUCTURING OF DATA STRUCTURES{

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Tazza de cafe";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// console.log(restaurant.name);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: resturantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(resturantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starte rs);

// const obj = {
//   a: 12,
//   b: 3,
// };

// console.log(obj.a);

// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open: o, close: c },
// } = openingHours;

// console.log(o, c);
//}

//SHORT CIRCUITIING (&&, ||){

// console.log(1 || "sagar");

//}

//FOOTBALL GAME
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//#CODING CHALLANGE #2 REGARDING FOOTBALL
/*
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

*/

// const scoredValues = Object.values(game.scored);
//1.

// for (const [goalNo, player] of game.scored.entries()) {
//   console.log(`Goal ${goalNo + 1}: ${player}`);
// }

// //2.
// let average = 0;

// const oddsValues = Object.values(game.odds);
// for (const odd of oddsValues) {
//   average += odd;
//   // console.log(odd);
// }
// // console.log(Object.values(game.odds));
// console.log(average / oddsValues.length);

// //3.
// const oddsEntries = Object.entries(game.odds);

// // console.log(oddsEntries);

// for (const [oddName, oddValue] of oddsEntries) {
//   const teamStr = oddName === "x" ? "draw" : `victory ${game[oddName]}`;

//   console.log(`Odd of ${teamStr} is : ${oddValue}`);
// }

// //BONUS QUESTION

// let playerWithGoal = {};

// const players = game.scored;

// for (const player of players) {
//   playerWithGoal[player]
//     ? playerWithGoal[player]++
//     : (playerWithGoal[player] = 1);
// }

// console.log(playerWithGoal);

//#CODING CHALLANGE #1 REGARDING FOOTBALL
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 <input team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);
// //1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2.
// gameEvents.delete(64);

// //3.
// console.log(
//   `An event happened on average of every, ${90 / gameEvents.size} minutes`
// );

// console.log(
//   `Average event is happend in ${
//     [...gameEvents.keys()].pop() / gameEvents.size
//   }`
// );

// //4.

// // console.log(gameEvents.entries());

// for (const [key, value] of gameEvents.entries()) {
//   console.log(key <= 45 ? "[first half]" : "[second half]", key, ":", value);
// }

///////////////////////////////

//WORKING WITH STRINGS

// console.log("Sagar Joshi".split(" "));

// const [firstName, lastName] = "Sagar Joshi".split(" ");

// const newName = ["Mr.", firstName, lastName].join(" ");

// console.log(newName);

// const capitalizeName = (name) => {
//   let capitalizedName = [];

//   for (const word of name.split(" ")) {
//     capitalizedName.push(word.toUpperCase()[0] + word.toLowerCase().slice(1));
//   }
//   console.log(capitalizedName.join(" "));
// };

// capitalizeName("sagar joshi");

// //PADDING
// const message = "got to gate 3";

// console.log(message.padStart(20, "+").padEnd(27, "+"));

// const maskCreditCard = (number) => {
//   const strNumber = String(number);
//   console.log(strNumber.slice(-4).padStart(strNumber.length, "x"));
// };

// maskCreditCard(1234567890);

// const alert = "Your Flight Is Delayed...";
// console.log(alert.repeat(4));

// const newArray = [1, 2, 3, 4];
// console.log(newArray.slice(1));

// const airline = "TAP Air KAthmandu";
// const plane = "N123";

// console.log(airline.toLowerCase());

// console.log(airline.toUpperCase());

// const passenger = "sAgaR";
// const correctPassenger =
//   passenger.toUpperCase()[0] + passenger.toLowerCase().slice(1);

// console.log(correctPassenger);

// const email = "sagar123@gmail.com";
// const loginEmail = " SaGar123@Gmail.Com";

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// const priceNep = " 120.34 NPR ";

// const priceUSA = priceNep.replace("NPR", "$").trim();

// console.log(priceUSA);

// const announcement =
//   "All passengers are requested to go to  door 3. Boarding door 3";

// console.log(announcement.replace("door", "gate"));

// console.log(announcement.replace(/door/g, "gate"));

// console.log(announcement.replaceAll("door", "gate"));

// //Booleans return methods

// console.log(airline.includes("TAP"));
// console.log(airline.startsWith("Air"));
// console.log(airline.endsWith("andu"));

// const checkbaggage = (items) => {
//   const baggage = items.toLowerCase();

//   console.log(
//     baggage.includes("knife") || baggage.includes("guns")
//       ? "You are n0t allowed"
//       : "welcom aboard"
//   );
// };

// checkbaggage(" i have food");

// console.log(plane[2]);

// console.log("B123"[1]);

// console.log(airline.length);

// console.log("B123".length);

// console.log(airline.indexOf("Air"));

// console.log(airline.slice(8));

// console.log(airline.slice(8, 15));

// console.log(airline.slice(0, airline.indexOf(" ")));

// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));

// const middleSeat = (seat) => {
//   const s = seat.slice(-1);

//   console.log(s === "B" || s === "C" ? "you got middle seat" : "you got lucky");
// };

// middleSeat("11A");
// middleSeat("11B");
// middleSeat("11C");

// console.log(typeof airline);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

//// SOLUTION OF ABOVE PROBLEM

/*

// document.querySelector("body")  +=  `<input type="text"> `;

// let underscoreCase = document.getElementById("variable").innerHTML;
// const button = document.querySelector(".btn");

// button.addEventListener("click", function () {
//   console.log(underscoreCase);
// });
// document.body.append(document.createElement("input"));

// document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const underScore = document.querySelector("#variable").value.split("\n");

  let emo = "";

  for (const word of underScore) {
    emo += "✅";

    const [first, last] = word.trim().split("_");
    console.log(
      (
        first.toLowerCase() +
        last[0].toUpperCase() +
        last.toLowerCase().slice(1)
      ).padEnd(20, " "),
      "\t",
      emo
    );
  }
});
*/

///STRING METHOD PRACTISE

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // Data needed for first part of the section
// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// // const singleEvent = flights.split("+_");
// // console.log(singleEvent);

// for (const sentence of flights.split("+")) {
//   let [first, second, third, fourth] = sentence.split(";");

//   first = first.replaceAll("_", " ").trim();

//   first.includes("Delay") ? (first = "🔴 " + first) : "";

//   second = "from " + second.slice(0, 3).toUpperCase();

//   third = "to " + third.slice(0, 3).toUpperCase();

//   fourth = "(" + fourth.replace(":", "h") + ")";

//   const final = [first, second, third, fourth].join(" ").padStart(45, " ");

//   console.log(final);
// }

/////////////////////////////
//
