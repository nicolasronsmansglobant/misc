app.controller('homeCtrl', ['$scope', '$location', 'team', function ($scope, $location, team) {
  $scope.team = team.get();
  $scope.remove = function (slug) {
    team.remove(slug);
  };
  $scope.reset = function () {
    team.reset();
    $scope.team = team.get();
  };
}]);
