'use strict';

const btn = document.querySelector('.btn-country');

const countriesContainer = document.querySelector('.countries');

const renderError = function () {
  countriesContainer.innerAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
 <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} millon people</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data.languages)[0]
    }</p>
    <p class="country__row">💰</ span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
 </article>
 `;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  request.send();

  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // console.log([Object.values(data.currencies)]);
    const html = `
 <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} millon people</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
 </article>
 `;

    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1;
  });
};

getCountryData('nepal');

getCountryData('bangladesh');

getCountryData('bharat');

getCountryData('bangladesh');
*/

// const getCountryAndNeibhourData = function (country) {
//   //ajax call country 1
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   console.log(request.responseText);

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //render country 1
//     renderCountry(data);
//     // console.log([Object.values(data.currencies)]);

//     //get neighbour country

//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //ajax call country 2

//     const request2 = new XMLHttpRequest();

//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);

//     request2.send();

//     request2.addEventListener('load', function () {
//       // console.log(this.responseText);
//       const [data2] = JSON.parse(this.responseText);
//       renderCountry(data2, ' neighbour');
//     });
//   });
// };

// getCountryAndNeibhourData('nepal');

// // getCountryAndNeibhourData('bharat');
// const request = fetch(`https://restcountries.com/v3.1/name/nepal`);

// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
/*
const getCountryData = function (country) {
  //country 1

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      //country 2

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} error`);
      renderError(`Something went wrong ${err.message}. try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('nepal');
});

getCountryData('abcdef');


/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const getCountryData = function (country) {
  //country 1

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      //country 2

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} error`);
      renderError(`Something went wrong ${err.message}. try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = function (lat, lang) {
  fetch(
    `https://geocode.xyz/${lat},${lang}?geoit=json&auth=18407264889908616115x32242`
  )
    .then(response => {
      // console.log(response);
      if (!response.ok) throw new Error(`problem with geocoding ${res.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.city}, ${data.country}`);
      getCountryData(data.country);

      // ApiData = data;
    })
    .catch(err => console.log(err.msg, 'error'));
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      // btn.addEventListener('click', function btnFunction(whereAmI) {
      whereAmI(latitude, longitude);
      // });
      // btn.removeEventListener('click', () => {});
      // console.log(latitude, longitude);
      // makeRequest();
    },
    function () {
      console.log('error');
    }
  );
}
*/
// whereAmI(27.66, 85.34);

// whereAmI(27.66, 85.34);

// console.log(navigator);
// console.log(Math);

// let longitude=0, latitude=0;
// let ApiData;

// const makeRequest = function ([lat, long]) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       // ApiData = data;
//     });

//   // console.log(ApiData.distance);
//   // if (!isNaN(+ApiData.distance)) return;

//   setTimeout(() => {
//     makeRequest([lat, long]);
//   }, 1000);
// };

// const makeRequest = function ([lat, long]) {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error("Error fetching data:", error);
//     });
// };

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       const { latitude, longitude } = position.coords;

//       const requestInterval = 1000; // 1 second in milliseconds
//       let lastRequestTime = 0;

//       setInterval(() => {
//         const currentTime = Date.now();
//         if (currentTime - lastRequestTime >= requestInterval) {
//           makeRequest([latitude, longitude]);
//           lastRequestTime = currentTime;
//         }
//       }, requestInterval);
//     },
//     function () {
//       console.log('error');
//     }
//   );
// }

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = 'Some fetched data';
//       resolve(data);
//     }, 1000);
//   });
// }

// fetchData()
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// console.log('test start');

// setTimeout(() => console.log('0 sec timer'), 0);

// Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// console.log('test end ');

/*

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery allotment is happening');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('you lost'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//promisifying setTimeot

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 sec');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 sec');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 sec');
    return wait(1);
  });

Promise.resolve('xyz').then(res => console.log(res));

Promise.reject(new Error('problem')).catch(res => console.error(res));
*/

const getCountryData = function (country) {
  //country 1

  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      //country 2

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} error`);
      renderError(`Something went wrong ${err.message}. try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos.coords));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lang } = pos.coords;

      return fetch(
        `https://geocode.xyz/${lat},${lang}?geoit=json&auth=18407264889908616115x32242`
      );
    })
    .then(response => {
      // console.log(response);
      if (!response.ok) throw new Error(`problem with geocoding ${res.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.city}, ${data.country}`);
      getCountryData(data.country);

      // ApiData = data;
    })
    .catch(err => console.log(err.msg, 'error'));
};

whereAmI();
