app.factory('geolocalisation', function () {
  var coords,
      getUserCoords = function (cb) { // cb = callback
        if (!coords && navigator.geolocation) { // if coords haven't been determined yet and if browser allows to get them
          navigator.geolocation.getCurrentPosition(function (pos) { // user shared his coords
            onUserChoice(cb, pos);
          }, function () { // user didn't share his coords
            onUserChoice(cb);
          });
        } else { // else, if coords are already determined or browser doesn't allow to get them
          cb(coords);
        }
      },
      onUserChoice = function (cb, pos) {
        if (pos) {
          coords = pos;
        }

        cb(coords);
      };

  return {
    canGetCoords: navigator.geolocation,
    getUserCoords: getUserCoords
  };
});
