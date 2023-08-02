const express = require("express");

const { addUser, getUser } = require("../controller/userController.js");

const route = express.Router();

route.post("/add-user", addUser);
route.get("/users", getUser);

module.exports = route;
