/*
  when a request is made it gets routed to a different function in controller.js
*/
module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/users", users.create);

  // Retrieve all Users
  router.get("/users", users.findAll);

  // Retrieve a single User with id
  router.get("/users/:id", users.findOne);

  // Update a User with id
  router.put("/users/:id", users.update);

  // Delete a User with id
  router.delete("/users/:id", users.delete);

  // Delete all Users
  router.delete("/users", users.deleteAll);

  //verify a user is in the db
  router.post("/users/verify", users.prove);

  app.use('/api', router);
};
