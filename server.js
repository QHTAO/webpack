const jsonServer = require("json-server");
const data = require("./mock/db");
const server = jsonServer.create();

const router = jsonServer.router(data());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
