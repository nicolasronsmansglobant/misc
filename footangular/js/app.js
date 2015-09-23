var app = angular.module('angulapp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'homeCtrl',
      templateUrl: '/js/views/home.html'
    })
    .when('/player/view/:name', {
      controller: 'viewCtrl',
      templateUrl: '/js/views/view.html'
    })
    .when('/player/edit/:name', {
      controller: 'editCtrl',
      templateUrl: '/js/views/form.html'
    })
    .when('/player/add', {
      controller: 'addCtrl',
      templateUrl: '/js/views/form.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
