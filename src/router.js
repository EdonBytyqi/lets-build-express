// Router: one per app. Holds a `stack` of Layers and exposes route() and handle().
// Chapter 1: https://github.com/antsmartian/lets-build-express/blob/master/chap01/CHAP01.md#routerjs
var setPrototypeOf = require("setprototypeof");
var Route = require("./route");
var Layer = require("./Layer");

var proto = (module.exports = function (options) {
  var opts = options || {};

  function router(req, res, next) {
    router.handle(req, res, next);
  }

  setPrototypeOf(router, proto);

  /* express specific, we will go through them in later chapters */
  router.params = {};
  router._params = [];
  router.caseSensitive = opts.caseSensitive;
  router.mergeParams = opts.mergeParams;
  router.strict = opts.strict;
  router.stack = []; //really important property

  return router;
});

proto.route = function route(path) {
  var route = new Route(path);

  var layer = new Layer(path, {}, route.dispatch.bind(route));

  layer.route = route;

  this.stack.push(layer);

  return route;
};

// Temporary hack for chapter 1: no path matching yet, so always run the
// first handler of the first route. Replaced in the next chapter.
proto.handle = function handle(req, res, out) {
  var route = this.stack[0].route;
  route.stack[0].handle_request(req, res);
};
