const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipie = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/768b6fb3-58cf-4c0f-8430-c15e04bb1d7a'
    );

    const data = await res.json();

    console.log(res, data);
  } catch (err) {
    alert(err);
  }
};

showRecipie();
