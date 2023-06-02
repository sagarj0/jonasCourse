'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, //
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');

const btnClose = document.querySelector('.form__btn--close');

const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const createUserName = accs => {
  accs.forEach(
    acc =>
      (acc.userName = acc.owner
        .split(' ')
        .map(word => word[0].toLowerCase())
        .join(''))
  );
};

createUserName(accounts);

const displaymovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, i) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type
       movements__type--${type}">
       ${i + 1} ${type} 
      </div>
      <div class="movements__value">
      ${movement}£  
      </div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} £`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}£`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(outcomes)}£`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}£`;
};

const update = function (acc) {
  //DISPLAYING MOVEMENTS

  displaymovements(acc.movements);

  //DISPLAYING BALANCE

  calcDisplayBalance(acc);

  //DISPLAYING SUMMARY

  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('login');
  currentAccount = accounts.find(
    acc =>
      acc.userName === inputLoginUsername.value &&
      acc.pin === Number(inputLoginPin.value)
  );

  console.log(currentAccount);

  //CLEARING INPUT FIELDS

  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  inputLoginUsername.blur();

  //DISPLAYIING MESSAGE
  if (currentAccount) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 1;

    update(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    receiverAcc &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);

    receiverAcc.movements.push(amount);

    update(currentAccount);

    inputTransferAmount.value = inputTransferTo.value = '';

    inputTransferAmount.blur();

    inputTransferTo.blur();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    update(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    accounts.splice(
      accounts.findIndex(acc => acc === currentAccount),
      1
    );

    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
  }
});

let sortedState = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displaymovements(currentAccount.movements, !sortedState);

  sortedState = !sortedState;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

// console.log(accounts);

// const user = 'Sagar Prasad Joshi';

// const userName = user
//   .split(' ')
//   .map(word => word[0].toLowerCase())
//   .join('');

// console.log(userName);

// user.split(' ').forEach(function (word) {
//   userName += word[0].toLowerCase();
// });

/*
  const arr = ['a', 'b', 'c', 'd', 'e'];
  
//SLICE

console.log(arr.slice(2));

console.log(arr.slice());

console.log([...arr]);

//SPLICE

console.log(arr.splice(2));

// console.log(arr.splice(-1));

console.log(arr);

//REVERSE

const arr2 = ['i', 'j', 'k', 'l'];

console.log(arr2.reverse());

console.log(arr2);

const a = [5, 6];

//CONCAT

const letters = arr.concat(arr2);
console.log(letters);


console.log([...arr, ...arr2]);

//JOIN

console.log(letters.join('-'));


*/

/*
//GETTING FIRST ELEMENT

const arr = [1, 2, 3];

console.log(arr[0]);

console.log(arr.at(0));

// GETTING LAST ELEMENT

console.log(arr[arr.length - 1]);

console.log(arr.slice(-1)[0]);

console.log(arr.at(-1));
*/
/*
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdraw ${Math.abs(movement)}`);
  }
}

console.log('-----');

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: you withdraw ${Math.abs(movement)}`);
  }
});
*/

/*
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

//SET
// console.log( currencies.keys());

const currenciesUnique = new Set([...currencies.keys()]);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, undefined, map) {
  console.log(`${value} : ${value} `);
});
*/

//////CODING CHALLANGE 1

/* 
Julia and Kate are doing a study on dogs.
So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dogsJulia = [1, 2, 3, 4, 5, 6];

// const dogsKate = [];
/*
const checkDogs = function (dogsJulia, dogsKate) {
  dogsJulia = dogsJulia.slice(1, -2);

  // console.log(dogsJulia);

  const dogs = dogsJulia.concat(dogsKate);

  // console.log(dogs);

  dogs.forEach(function (dog, i) {
    dog >= 3
      ? console.log(`Dog number${i + 1} is an adult and is ${dog} years old`)
      : console.log(`Dog no. ${i + 1} is still puppy`);
  });
};
 
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

*/

/*
const eurTOUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurTOUsd;
// });

const movementsUSD = movements.map(mov => mov * eurTOUsd);

console.log(movements);

console.log(movementsUSD);

const movementDescription = movements.map(
  (movement, index) =>
    `Movement ${index + 1}:you ${
      movement > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(movement)}`
);

console.log(movementDescription);
*/

/*
const deposits = movements.filter(mov => mov > 0);

console.log(movements);

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);

console.log(withdrawals);
*/

// console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}:${acc}`);

//   return acc + cur;
// }, 0);

// console.log(balance);

// let balance2 = 0;

// for (const mov of movements) balance2 += mov;

// console.log(balance2);

// ///MAXIMUM VALUE OF MOVEMENT

// const max = movements.reduce((acc, mov) => {
//   return (acc = acc < mov ? mov : acc);
// }, movements[0]);

// console.log(max);

////CODING CHALLANGE 2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge',
which accepts an arrays of dog's ages ('ages'),
and does the following things in order:

1. Calculate the dog age in human years using the following formula:
if the dog is <= 2 years old, humanAge = 2 * dogAge.
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*

const calcAverageHumanAge1 = function (dogAges) {
  let humanAges = dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18);

  console.log(
    humanAges.reduce((acc, age, i, arr) => acc + age / arr.length, 0)
  );
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

//BY ARROW FUNCTION AND CHAINIING METHOD

const calcAverageHumanAge = dogAges =>
  dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


*/

// const eurToUsd =  1.1;

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

/*
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(Math.abs(firstWithdrawal));

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jonas Schmedtmann');

console.log(account);
*/

/*
console.log(movements);

///EQUALITY
console.log(movements.includes(-130));

//CONDITION
const anyDeposits = movements.some(mov => mov > 500);

console.log(anyDeposits);

//EVERY

console.log(movements.every(mov => mov > 0));

console.log(account4.movements.every(mov => mov > 0));

const deposit = mov => mov > 0;

console.log(movements.some(deposit));

console.log(movements.every(deposit));

console.log(movements.filter(deposit));
*/

/*
const arr = [[1, 2, 4], 4, 5, [4, 3, 2]];

console.log(arr.flat());

// console.log(typeof arr);
const arrD = [[[1, 3], 2], 5, 6];

console.log(arrD.flat(1));

console.log(arrD.flat(2));

const overAllBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBalance);

//FLAT MAP

const overAllBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBalance2);

const arr1 = [1, 2, 3, 4, 5];

console.log(
  arr1.map((ele, index, arr) => (index === 0 ? ele : ele + arr[index - 1]))
);

//SORT

console.log(accounts.map(acc => acc.owner).sort());

// console.log(movements.sort()); //this doesnt work because sort property works by treating every element of array as string

//return <0 ,a,b,keep order
//return>0,b,a,switch ord  er
// movements.sort((a, b) => {
//   if (a > b) return 1;

//   if (b > a) return -1;
// });

// console.log(movements);

//

movements.sort((a, b) => a - b);

console.log(movements);
*/

// console.log([1, 2, 3, 4, 5]);

// console.log(new Array(1, 2, 3, 4, 5));

// //EMPTY ARRAYS AND FILL METHOD
// const newArr = new Array(5);
// console.log(newArr);

// // console.log(newArr.map((ele, i) => i));

// // newArr.fill(1, 3, 4);

// newArr.fill(1);

// console.log(newArr);

// // newArr.fill(2, 2, 4);

// //ARRAY.FROM METHOD

// console.log(Array.from({ length: 7 }, () => 1));

///ARRAY.FROM METHOD

// labelBalance.addEventListener('click', function () {
//   const movementsUi = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('£', ''))
//   );

//   console.log(movementsUi);
// });

//ARRAY PRACTISE METHOD

//1.

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(acc => acc > 0)
  .reduce((sum, acc) => acc + sum, 0);

console.log(bankDepositSum);

//2.

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;

console.log(numDeposits1000);

const numDeposits10002 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, ele) => (ele > 1000 ? count : count), 0);

console.log(numDeposits10002);

let a = 10;
console.log(a++);
console.log(a);
console.log(++a);
console.log(a);
console.log(a + 1);
console.log(a);

//3.

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

      sums[cur > 0 ? `deposits` : `withdrawals`] += cur;

      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

//4.
//CONVERTING TO TITLE CAPITALIZING FIRST LETTER OF EVERY WORD

const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const expression = title
    .split(' ')
    .map(word =>
      exceptions.includes(word.toLowerCase())
        ? word.toLowerCase()
        : word.toUpperCase()[0] + word.toLowerCase().slice(1)
    )
    .join(' ');

  return expression;
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is A  LONG TItle BuT noT Enough'));
console.log(convertTitleCase('and hERE is another one'));

////////////////////////
///////////////////////////////////////
// Coding Challenge #4

/*  
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects,
and for each dog, calculate the recommended food portion and add it to the object as a new property. 
Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

///1.

dogs.forEach(dog => {
  dog.foodAmount = dog.weight ** 0.75 * 28;
});

console.log(dogs);

///2.

const sarahDog = dogs.find(dog => dog.owners.find(owner => owner === 'Sarah'));
console.log(sarahDog);

sarahDog?.curFood > sarahDog.foodAmount
  ? console.log('Too little')
  : console.log('too much');

//3.

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.forEach(dog => {
  dog.curFood < dog.foodAmount
    ? ownersEatTooMuch.push(...dog.owners)
    : ownersEatTooLittle.push(...dog.owners);
});

console.log(ownersEatTooLittle, ownersEatTooMuch);

//4.

console.log(
  `"${ownersEatTooLittle.join(
    ' and '
  )}'s dog eat too little" and "${ownersEatTooMuch.join(
    ' and '
  )}'s dog eat too much."`
);

//5.

const dogEatingExact = dogs.some(dog => dog.curFood === dog.foodAmount);
console.log(dogEatingExact);

//6.

const checkEatingOkay = dog =>
  dog.foodAmount <= dog.curFood * 0.9 && dog.foodAmount <= dog.curFood * 1.1;

const dogEatingOkay = dogs.some(checkEatingOkay);

console.log(dogEatingOkay);

//7.

const dogEatingOkayArray = dogs.filter(checkEatingOkay);

console.log(dogEatingOkayArray);

//8.

const dogSorting = dogs
  .slice()
  .sort((dogA, dogB) => dogA.foodAmount - dogB.foodAmount);

console.log(dogSorting);

console.log(dogs);
