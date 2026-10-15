// Application prototype: init, lazyrouter, HTTP verb methods (get, post, ...), handle, listen.
// Chapter 1: https://github.com/antsmartian/lets-build-express/blob/master/chap01/CHAP01.md#applicationjs
var app = (exports = module.exports = {});

app.init = function () {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  //for holding the application router
  this._router = undefined;
};
