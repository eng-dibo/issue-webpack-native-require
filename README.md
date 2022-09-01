a minimal repo for [webpack issue](https://github.com/webpack/webpack/issues/15975)

```
npm install
npm start
```

1- builds with webpack into `dist`, you should see `{ result }` in console
the file dist/main.js requires dist/1.js natively by __webpack_require__

2- then builds the angular app `example` through custom webpack
you should see the same `{ result }` when navigating to [/test](http://localhost:4000/test)