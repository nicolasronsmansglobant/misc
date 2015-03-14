$(function () {
  var API = {
        accessToken: 'BQDBqv0TAsHOw5iRBPaPG7PWW4KcqgGvaeqKJDVrC1FCADd5j9HbV1BKpYmcYAKOzD4of9LRxBGCx0EFpjidy5W3KX4ov6IEH_12xHi0IdeTWxQ1mT7n9QswL58RsUif7HH5LiFE0eFbLt1JLA',
        base: 'https://api.spotify.com'
      },
      req = function (endpoint) {
        $.ajax({
          url: endpoint,
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + API.accessToken
          }
        }).done(res);
      },
      res = function (data) {
        console.log(data);
      };

  req(API.base + '/v1/browse/featured-playlists');
});
