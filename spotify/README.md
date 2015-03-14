#Instructions

## Set Spotify up
You will need to create a spotify account. Once done, create an App within the Spotify website, this will give you the *Client ID* and allow you to define *Redirect URIs* (e.g.: http://localhost:8080/).
Once you have done all that, in your browser, go to that page:
```
https://accounts.spotify.com/authorize?client_id=XXXXXXXXX&redirect_uri=http:%2F%2Flocalhost:8080%2F&response_type=token
```
You will see a message, click *YES* and it will redirect you to http://localhost:8080/#access_token=YYYYYYYY.
This accessToken is what you need to be able to use the Spotify API with AJAX calls like:
```javascript
$.ajax({
  url: 'https://api.spotify.com/v1/browse/featured-playlists',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + accessToken
  }
}).done(function (data) {
  /* ... */
});
```

## Set Local App up
```
npm install
```
