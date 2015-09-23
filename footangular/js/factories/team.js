app.factory('team', function () {
  var localStorageEnabled = localStorage && localStorage.getItem && localStorage.setItem,
      players = {
        'ter-stegen': {
          fullname: 'Marc-André ter Stegen',
          position: 'GK',
          nationality: 'German',
          age: 23,
          photo: 'https://s-media-cache-ak0.pinimg.com/736x/9c/c6/9b/9cc69b222e3f4348780d94584ea9261a.jpg'
        },
        'pique': {
          fullname: 'Gerard Piqué',
          position: 'DF',
          nationality: 'Spanish',
          age: 28,
          photo: 'http://a.fssta.com/content/dam/fsdigital/fscom/Soccer/images/2015/02/12/021215-SOCCER-FC-Barcelona-Gerard-Pique-2-SS-PI.vresize.1200.675.high.42.jpg'
        },
        'mascherano': {
          fullname: 'Javier Mascherano',
          position: 'MF',
          nationality: 'Argentine',
          age: 31,
          photo: 'https://cdn1.vox-cdn.com/thumbor/lBLbZNO5w1EkCpVYeCfHLin5umg=/0x276:2830x2163/730x487/cdn0.vox-cdn.com/uploads/chorus_image/image/45740108/463262928.0.jpg'
        },
        'alves': {
          fullname: 'Dani Alves',
          position: 'DF',
          nationality: 'Brazilian',
          age: 32,
          photo: 'http://a.fssta.com/content/dam/fsdigital/fscom/Soccer/images/2015/03/04/030415--occer-Daniel-Alves-of-FC-Barcelona-AS-PI.vresize.1200.675.high.97.jpg'
        },
        'alba': {
          fullname: 'Jordi Alba',
          position: 'DF',
          nationality: 'Spanish',
          age: 26,
          photo: 'https://cdn0.vox-cdn.com/thumbor/MIVemV2lOYPuwUqwRm7zxlzs7uk=/0x97:1995x1219/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/45638990/462695112.0.jpg'
        },
        'busquets': {
          fullname: 'Sergio Busquets',
          position: 'MF',
          nationality: 'Spanish',
          age: 27,
          photo: 'http://img.bleacherreport.net/img/images/photos/003/294/188/hi-res-2b5815d4b074ae28f00242c7df42768b_crop_north.jpg?w=630&h=420&q=75'
        },
        'rakitic': {
          fullname: 'Ivan Rakitić',
          position: 'MF',
          nationality: 'Croatian',
          age: 27,
          photo: 'http://cdn.caughtoffside.com/wp-content/uploads/2014/12/Ivan-Rakitic-Barcelona.png'
        },
        'iniesta': {
          fullname: 'Andrés Iniesta',
          position: 'MF',
          nationality: 'Spanish',
          age: 31,
          photo: 'http://www.olisa.tv/wp-content/uploads/2015/08/Andres-Iniesta.jpg'
        },
        'messi': {
          fullname: 'Lionel Messi',
          position: 'FW',
          nationality: 'Argentine',
          age: 28,
          photo: 'http://l3.yimg.com/bt/api/res/1.2/ZKwAQnqk7k4r.Cmh3EgJqw--/YXBwaWQ9eW5ld3NfbGVnbztmaT1maWxsO2g9Mzc3O2lsPXBsYW5lO3B4b2ZmPTUwO3B5b2ZmPTA7cT03NTt3PTY3MA--/http://media.zenfs.com/en_us/News/afp.com/Part-DV-DV2001808-1-1-0.jpg'
        },
        'neymar': {
          fullname: 'Neymar da Silva Santos Júnior',
          position: 'FW',
          nationality: 'Brazilian',
          age: 23,
          photo: 'http://www.neymarjr.net/wp-content/uploads/2015/01/neymar-jr-in-fc-barcelona-2015.jpg'
        },
        'suarez': {
          fullname: 'Luis Suárez',
          position: 'FW',
          nationality: 'Uruguayan',
          age: 28,
          photo: 'http://www.weloba.com/sites/default/files/images/general/082714-soccer-fc-barcelona-luis-suarez-hl-pi_0.jpg'
        }
      },
      playersBackup = angular.copy(players),
      load = function () {
        if (localStorageEnabled) {
          players = JSON.parse(localStorage.getItem('team')) || players;
        }
      },
      reset = function () {
        if (localStorageEnabled) {
          localStorage.clear();
        }

        players = angular.copy(playersBackup);
      },
      get = function (slug) {
        return slug ? players[slug] : players;
      },
      update = function (data, slug) {
        players[data.slug] = data;

        if (slug && slug !== data.slug) {
          delete players[slug];
        }

        save();
      },
      remove = function (slug) {
        delete players[slug];

        save();
      },
      save = function () {
        if (localStorageEnabled) {
          localStorage.setItem('team', JSON.stringify(players));
        }
      };

  load();

  return {
    reset: reset,
    get: get,
    update: update,
    add: update,
    remove: remove
  };
});
