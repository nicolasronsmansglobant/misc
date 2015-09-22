(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Director = function (name) {
  this.setName(name);
};

Director.prototype.setName = function (name) {
  this.name = name || 'Unknown';
};

Director.prototype.getName = function (name) {
  return this.name;
};

module.exports = Director;

},{}],2:[function(require,module,exports){
var Movie = require('./movie.js'),
    movie = new Movie();

console.log(movie.getName());
movie.setName('Up');
console.log(movie.getName());

console.log(movie.getDirector());
movie.setDirector('John Lasseter');
console.log(movie.getDirector());

},{"./movie.js":3}],3:[function(require,module,exports){
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

},{"./director.js":1}]},{},[2]);
