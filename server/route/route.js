const express = require("express");

const { addUser, getUser } = require("../controller/userController.js");
const { getRecentMessages } = require("../controller/messageController.js");
const { createGroup, deleteGroup } = require("../controller/groupController.js");

const route = express.Router();

route.post("/add-user", addUser);
route.get("/users", getUser);

route.get("/messages", getRecentMessages);

route.post("/create-group", createGroup);
route.post("/delete-group", deleteGroup);

module.exports = route;
