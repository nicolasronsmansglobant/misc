var Movie = require('./movie.js'),
    movie = new Movie();

console.log(movie.getName());
movie.setName('Up');
console.log(movie.getName());

console.log(movie.getDirector());
movie.setDirector('John Lasseter');
console.log(movie.getDirector());
