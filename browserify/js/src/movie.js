var Director = require('./director.js');

var Movie = function (name) {
  this.setName(name);
  this.director = new Director();
};

Movie.prototype.setName = function (name) {
  this.name = name || 'Unknown';
};

Movie.prototype.getName = function () {
  return this.name;
};

Movie.prototype.setDirector = function (name) {
  this.director.setName(name);
};

Movie.prototype.getDirector = function () {
  return this.director.getName();
};

module.exports = Movie;
