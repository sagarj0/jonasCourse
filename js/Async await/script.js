'use strict';

const btn = document.querySelector('.btn-country');

const countriesContainer = document.querySelector('.countries');

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
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
 </article>
 `;

  countriesContainer.insertAdjacentHTML('beforeend', html);

  countriesContainer.style.opacity = 1;
};

const getCountryAndNeibhourData = function (country) {
  //ajax call country 1
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  request.send();

  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    //render country 1
    renderCountry(data);
    // console.log([Object.values(data.currencies)]);

    //get neighbour country

    const [neighbour] = data.borders;

    if (!neighbour) return;

    //ajax call country 2

    const request2 = new XMLHttpRequest();

    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);

    request2.send();

    request2.addEventListener('load', function () {
      // console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2, ' neighbour');
    });
  });
};

getCountryAndNeibhourData('nepal');

// getCountryAndNeibhourData('bharat');
