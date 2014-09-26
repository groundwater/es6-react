System.register("server", [], function() {
  "use strict";
  var __moduleName = "server";
  var traceur = require('traceur');
  traceur.require.makeDefault(function(filename) {
    return filename.indexOf('node_modules') === -1;
  });
  require('./app.js');
  return {};
});
System.get("server" + '');
