// Entry point: exports createApplication(), which builds and returns the `app` function.
// Chapter 1: https://github.com/antsmartian/lets-build-express/blob/master/chap01/CHAP01.md#expressjs
exports = module.exports = createApplication;

function createApplication() {
  var app = function (req, res, next) {};

  return app;
}
