
module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  addMovie: body => {
    return fetch('/api/movies',{ method: 'POST', body: body })
  	console.log("add");
  },
  editMovie: () => {
  	console.log("edit");
  },
  deleteMovie: () => {
  	console.log("delete");
  }
};
