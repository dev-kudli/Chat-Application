const express = require("express");

const { addUser, getAllUsers } = require("../controller/userController.js");
const {
  newConversation,
  getConversation,
} = require("../controller/conversationController.js");
const { newMessage } = require("../controller/messageController.js");
const { getRecentMessages } = require("../controller/messageController.js");
const {
  createGroup,
  deleteGroup,
} = require("../controller/groupController.js");

const route = express.Router();

route.post("/add-user", addUser);
route.get("/get-users", getAllUsers);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.get("/message/get", getRecentMessages);
route.post("/message/add", newMessage);

route.post("/create-group", createGroup);
route.post("/delete-group", deleteGroup);

module.exports = route;
