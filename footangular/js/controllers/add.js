app.controller('addCtrl', ['$scope', '$location', 'team', function ($scope, $location, team) {
  $scope.formType = 'add';
  $scope.cancel = function () {
    $location.path('/');
  };
  $scope.add = function () {
    team.add($scope.player);
    $location.path('player/view/' + $scope.player.slug);
  };
}]);
