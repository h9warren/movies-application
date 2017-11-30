/**
 * es6 modules and imports
 */
const $ = require('jquery');
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const { getMovies, addMovie, editMovie, deleteMovie } = require('./api.js');
// const results = document.getElementById("results");
addMovie();
editMovie();
deleteMovie();

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    $("#results").append(`<h2>id#${id} - ${title} - rating: ${rating}</h2>`);

  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});
