// Route: a path plus its own `stack` of Layers, one per handler, with HTTP verb methods.
// Chapter 1: https://github.com/antsmartian/lets-build-express/blob/master/chap01/CHAP01.md#routejs
var flatten = require("array-flatten");
var methods = require("methods");
var Layer = require("./Layer");

var toString = Object.prototype.toString;

module.exports = Route;

function Route(path) {
  this.path = path;
  this.stack = [];

  this.methods = {};
}

// Empty for now; covered in later chapters.
Route.prototype.dispatch = function dispatch(req, res, done) {};

methods.forEach(function (method) {
  Route.prototype[method] = function () {
    var handles = flatten(Array.prototype.slice.call(arguments));

    for (var i = 0; i < handles.length; i++) {
      var handle = handles[i];

      if (typeof handle !== "function") {
        var type = toString.call(handle);
        var msg =
          "Route." +
          method +
          "() requires a callback function but got a " +
          type;
        throw new Error(msg);
      }

      var layer = Layer("/", {}, handle);
      layer.method = method;

      this.methods[method] = true;
      this.stack.push(layer);
    }

    return this;
  };
});
