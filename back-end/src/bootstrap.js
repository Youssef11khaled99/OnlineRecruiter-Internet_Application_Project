/* bootstrap.js */
route = require("./Routes");
//Default function that will bootstrap the routes and link it with controllers
module.exports = (app, router) => {
  //Initialize Routes
  route.appRoute(router);
};