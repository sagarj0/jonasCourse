"use strict";
/*
const Person = function (firstN, birthY) {
  // console.log(this);

  this.firstN = firstN;
  this.birthY = birthY;

  // this.calcAge = function () {
  //   console.log(2023 - this.birthY);
  // };
};

const sagar = new Person("sagar", 2002);

console.log(sagar);

const joshi = new Person("joshi", 2002);

console.log(joshi);

// New {} is created
// function is called, this = {}
//{} linked to prototype
//function return {}

const sgr = "sgr";

console.log(sagar instanceof Person);

console.log(sgr instanceof Person);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthY);
};

sagar.calcAge();

joshi.calcAge();

console.log(sagar.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(sagar)); //true

console.log(Person.prototype.isPrototypeOf(Person)); //false

console.log(sagar.birthY);

Person.prototype.species = "Homo Sapiens";

console.log(sagar.species, joshi.species);

// const func = function (sagar) {

//   console.log(sagar);

// };

// const sgr = new func(3);

// console.log(sgr);
*/
// class PersonCl {
//   constructor(firstN, birthY) {
//     this.firstNmae = firstN;
//     this.birthYear = birthY;
//   }

//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }

//   get age() {
//     return 2023 - this.birthYear;
//   }

//   static hey() {
//     console.log("Hey there");
//   }
// }

// PersonCl.hey();

// const sagarJ = new PersonCl("sagar", 2001);

// console.log(sagarJ);

// sagarJ.calcAge();

// // sagarJ.hey();

// // const account = {
// //   owner: "jonas",

// //   movements: [210, 310, 200, 562],

// //   get latest() {
// //     return this.movements.slice(-1).pop();
// //   },

// //   set latest(mov) {
// //     this.movements.push(mov);
// //   },
// // };

// // console.log(account.latest);

// ///OBJECT.CREATE METHOD
// const personProto = {
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const sagar = Object.create(personProto);

// console.log(sagar);
// sagar.birthYear = 2001;
// sagar.calcAge();

// const joshi = Object.create(personProto);

// joshi.init("sagar", 2002);
// joshi.calcAge();

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} Km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} Km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const Bugatti = new CarCl("Bugatti", 230);

console.log(Bugatti.speedUS);

Bugatti.accelerate();
Bugatti.accelerate();
Bugatti.brake();
Bugatti.speedUS = 140;
console.log(Bugatti);
