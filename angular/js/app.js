var app = angular.module('angulapp', []);

app.value('workers', [
  {
    firstName: 'Jonny',
    lastName: 'Lewis'
  },
  {
    firstName: 'Holden',
    lastName: 'Paden'
  },
  {
    firstName: 'Micheal',
    lastName: 'Brody'
  }
]);

// using data from model.js global variables
app.controller('employeesCtrl', function($scope) {
    $scope.employees = employees;
});

// using data from angular app.value dependency
app.controller('workersCtrl', ['$scope', 'workers', function($scope, workers) {
    $scope.workers = workers;
}]);
