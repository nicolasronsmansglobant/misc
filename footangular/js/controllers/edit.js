app.controller('editCtrl', ['$routeParams', '$scope', '$location', 'team', function ($routeParams, $scope, $location, team) {
  var player = team.get($routeParams.name),
      setData = function () {
        $scope.player = angular.copy(player);
        $scope.player.slug = $routeParams.name;
      };

  if (!player) {
    $location.path('/');
  } else {
    setData();
  }

  $scope.formType = 'edit';
  $scope.cancel = function () {
    $location.path('/');
  };
  $scope.reset = function () {
    setData();
  };
  $scope.update = function () {
    team.update($scope.player, $routeParams.name);
    $location.path('player/view/' + $scope.player.slug);
  };
}]);
