const fs = require("fs");
const jsonServer = require("json-server");

const dbFilename = "db.json";
const resetInterval = 60 * 60 * 1000;

const getDB = () => {
  const data = fs.readFileSync(dbFilename, "utf8");
  const json = JSON.parse(data);
  return json;
};

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
server.use(middlewares);

let router;

const setRouter = () => {
  router = jsonServer.router(getDB());
};

const routerWrapper = (req, res, next) => {
  router(req, res, next);
};

setRouter();
server.use(routerWrapper);

setInterval(() => {
  setRouter();
  console.log(
    `DB was reset to contents of ${dbFilename} per scheduled interval of ${resetInterval}ms`
  );
}, resetInterval);

const listener = server.listen(process.env.PORT || 3100, () => {
  console.log(
    `
    Your json-server is listening on port ${listener.address().port}.
    DB will be reset to contents of ${dbFilename} per scheduled interval of ${
      resetInterval / 1000 / 60
    } minutes.
    Tip: accessing /db could be a good starting point to refresh where you left off.
    `
  );
});
