module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  addMovie: () => {
  	console.log("add");
  },
  editMovie: () => {
  	console.log("edit");
  },
  deleteMovie: () => {
  	console.log("delete");
  }
};
