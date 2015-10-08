var app = angular.module('angulapp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeCtrl',
      templateUrl: '/js/views/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
