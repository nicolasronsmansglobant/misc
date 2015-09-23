app.controller('viewCtrl', ['$routeParams', '$scope', '$location', 'team', function ($routeParams, $scope, $location, team) {
  $scope.player = team.get($routeParams.name);

  if (!$scope.player) {
    $location.path('/');
  }

  $scope.player.slug = $routeParams.name;
  $scope.remove = function (slug) {
    team.remove(slug);
    $location.path('/');
  };
}]);
