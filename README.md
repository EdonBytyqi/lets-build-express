# lets-build-express

My implementation of a minimal [Express](https://expressjs.com/) clone, built from scratch by following
[antsmartian/lets-build-express](https://github.com/antsmartian/lets-build-express).

## Progress

- [ ] [Chapter 01: Building Express abstractions](https://github.com/antsmartian/lets-build-express/blob/master/chap01/CHAP01.md)
- [ ] [Chapter 02: Handling routes out of the box](https://github.com/antsmartian/lets-build-express/blob/master/chap02/CHAP02.md)
- [ ] [Chapter 03: Implementing `next`](https://github.com/antsmartian/lets-build-express/blob/master/chap03/CHAP03.md)
- [ ] [Chapter 04: Extending the response object](https://github.com/antsmartian/lets-build-express/blob/master/chap04/CHAP04.md)
- [ ] [Chapter 05: Implementing `send`/`json` on `response`](https://github.com/antsmartian/lets-build-express/blob/master/chap05/CHAP05.md)

## Layout

```
index.js         playground app that uses our express
src/express.js   createApplication(): what `express()` returns
src/app.js       application prototype (get/post/..., handle, listen)
src/router.js    the app's single Router and its stack of Layers
src/route.js     a Route: a path and its handler Layers
src/Layer.js     wraps a path and a handler function
```

Chapter 4 adds `src/middleware/init.js`.

## Running

```sh
npm install
npm start      # or: npm run dev  (restarts on file changes)
```

Then open http://localhost:3000.

## Dependencies

The same small packages Express itself uses: `methods`, `setprototypeof`, `merge-descriptors`,
`array-flatten` and `parseurl`. They're pinned to the major versions the tutorial targets
(`merge-descriptors@1`, `array-flatten@2`) because newer majors changed their exports.

## License

MIT. The tutorial is © its original author.
