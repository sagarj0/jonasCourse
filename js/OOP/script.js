"use strict";

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
