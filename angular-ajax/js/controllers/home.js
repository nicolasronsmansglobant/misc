app.controller('homeCtrl', ['$scope', 'ajax', function ($scope, AJAX) {
  var generateUser = function () {
        $scope.loading = true;
        $scope.user = null;

        AJAX.query({
          url: 'https://randomuser.me/api/',
        }, function (data) { // callback
          $scope.loading = false;

          if (data.results.length) {
            displayUser(data.results[0].user);
          }
        });
      },
      displayUser = function (user) {
        $scope.user = {
          name: user.name.first + ' ' + user.name.last,
          gender: user.gender
        };
      };

  $scope.loading = false;
  $scope.generateUser = generateUser;
}]);
