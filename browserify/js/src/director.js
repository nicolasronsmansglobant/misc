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
