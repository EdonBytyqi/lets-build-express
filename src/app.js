// Application prototype: init, lazyrouter, HTTP verb methods (get, post, ...), handle, listen.
// Chapter 1: https://github.com/antsmartian/lets-build-express/blob/master/chap01/CHAP01.md#applicationjs
var http = require("http");
var methods = require("methods");
var Router = require("./router");

var slice = Array.prototype.slice;

var app = (exports = module.exports = {});

app.init = function () {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  //for holding the application router
  this._router = undefined;
};

app.lazyrouter = function lazyrouter() {
  if (!this._router) {
    this._router = new Router({});
  }
};

// app.get(path, ...handlers), app.post(...), etc. for every HTTP verb
methods.forEach(function (method) {
  app[method] = function (path) {
    this.lazyrouter();

    var route = this._router.route(path);

    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});

app.handle = function handle(req, res, callback) {
  var router = this._router;

  router.handle(req, res);
};

app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};
