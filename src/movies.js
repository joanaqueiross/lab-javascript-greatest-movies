// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => {
    return movie.director;
  });
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filteredArray = moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return filteredArray.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const moviesTotal = moviesArray.reduce((sum, movie) => {
    if (typeof movie.rate === "number") {
      return movie.rate + sum;
    } else {
      return sum;
    }
  }, 0);
  let average = moviesTotal / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    moviesArray.sort(a.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
