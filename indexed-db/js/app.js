var IDB = (function () {
  var db,
      openDB = function (name, version, table, cb) {
        console.log('Opening "' + name + '"...');

        var request = indexedDB.open(name, version);

        request.onupgradeneeded = function (event) {
          console.log('Upgrading...');

          db = event.target.result;

          if (db && !db.objectStoreNames.contains(table)) {
            db.createObjectStore(table, {
              autoIncrement: true
            });
          }
        };
        request.onsuccess = function (event) {
          console.log('Database opened!');
          db = event.target.result;

          cb();
        };
        request.onerror = function (event) {
          console.log('Database error:', event.target.errorCode);
        };
      },
      getEntries = function (table, cb) {
          var transaction = db.transaction([table], 'readonly'),
              store = transaction.objectStore(table),
              request = store.openCursor(),
              dataset = {};

          request.onerror = function (event) {
            console.log('Entries error:', event.target.error.name);
          };

          request.onsuccess = function (event) {
            var cursor = event.target.result;

            if (cursor) {
              dataset[cursor.key] = (cursor.value);

              cursor.continue();
            } else {
              cb(dataset);
            }
          };
      },
      addEntry = function (table, data, cb) {
        var transaction = db.transaction([table], 'readwrite'),
            store = transaction.objectStore(table),
            request = store.add(data);

        request.onerror = function (event) {
          console.log('Entry error:', event.target.error.name);
        };

        request.onsuccess = function (event) {
          console.log('Entry added: ', event.target.result);

          cb(event.target.result);
        };
      },
      getEntry = function (table, key, cb) {
          var transaction = db.transaction([table], 'readonly'),
              store = transaction.objectStore(table),
              request = store.get(key);

          request.onerror = function (event) {
            console.log('Entry error:', event.target.error.name);
          };

          request.onsuccess = function (event) {
            console.log('Entry fetched: ', key);
            cb(event.target.result);
          };
      };

  return {
    openDB: openDB,
    getEntries: getEntries,
    addEntry: addEntry,
    getEntry: getEntry
  };
}());

IDB.openDB('FCBarcelona', 1, 'players', function () {
  IDB.getEntries('players', function (dataset) {
    console.log(dataset);
  });

  IDB.addEntry('players', {
    title: 'Messi'
  }, function (key) {
    IDB.getEntry('players', key, function (data) {
      console.log(data);
    });
  });
});
