// Entry point: exports createApplication(), which builds and returns the `app` function.
// Chapter 1: https://github.com/antsmartian/lets-build-express/blob/master/chap01/CHAP01.md#expressjs
var mixin = require("merge-descriptors");
var proto = require("./app");

exports = module.exports = createApplication;

function createApplication() {
  var app = function (req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, proto, false);

  app.init();
  return app;
}
