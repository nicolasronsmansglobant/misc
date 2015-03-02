// Class pattern
function FruitClass () {
  this.name = 'undefined';
}

FruitClass.prototype.setName = function (name) {
  this.name = name;
};

FruitClass.prototype.getName = function () {
  return this.name;
};

var apple = new FruitClass();
apple.setName('apple');
console.log(apple.getName());


// Module pattern
function FruitModule () {
  var name = 'undefined',
      fruit = {
        setName: function (newName) {
          name = newName;
        },
        getName: function () {
          return name;
        }
      };

  return fruit;
}

var lemon = FruitModule();
lemon.setName('lemon');
console.log(lemon.getName());


var fruitModule = function () {
  var name = 'undefined';

  return {
    setName: function (newName) {
      name = newName;
    },
    getName: function () {
      return name;
    }
  };
};

var orange = fruitModule();
orange.setName('orange');
console.log(orange.getName());


// Singleton pattern
var fruitSingleton = (function () {
  var name = 'undefined';

  return {
    setName: function (newName) {
      name = newName;
    },
    getName: function () {
      return name;
    }
  };
})();

fruitSingleton.setName('maracyua');
console.log(fruitSingleton.getName());
fruitSingleton.setName('peach');
console.log(fruitSingleton.getName());
