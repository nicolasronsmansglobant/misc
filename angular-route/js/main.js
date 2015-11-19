var App = angular.module('myApp', ['ngRoute']);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeCtrl',
      templateUrl: '/js/views/home.html'
    })
    .when('/section1', {
      controller: 'section1Ctrl',
      templateUrl: '/js/views/section1.html'
    })
    .when('/section2', {
      controller: 'section2Ctrl',
      templateUrl: '/js/views/section2.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
