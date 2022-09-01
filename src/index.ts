import(/* webpackIgnore: true */ './file')
  .then((module) => console.log({ result: module.default }))
  .catch((error) => console.error({ error }));
