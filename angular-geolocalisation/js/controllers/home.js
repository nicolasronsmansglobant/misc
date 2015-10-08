app.controller('homeCtrl', ['$scope', 'geolocalisation', function ($scope, GEOLOCALISATION) {
  var onClick = function () {
        $scope.loading = true;

        GEOLOCALISATION.getUserCoords(function (coordinates) {
          $scope.loading = false;
          $scope.msg = coordinates
                        ? 'lat: ' + coordinates.coords.latitude + ', lng: ' + coordinates.coords.longitude
                        : 'Coordinates couldn\'t be determined.';
          $scope.$apply(); // assure that $scope changes are applied to the view
        });
      };

  $scope.onClick = onClick;
  $scope.coordsAvailable = GEOLOCALISATION.canGetCoords;
}]);
