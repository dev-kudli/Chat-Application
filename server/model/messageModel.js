const { Schema } = require("database");

const messageSchema = {
  conversationId: {
    type: String,
  },
  senderId: {
    type: String,
  },
  receiverId: {
    type: String,
  },
  text: {
    type: String,
  },
  type: {
    type: String,
  },
};

const options = {
  timestamps: true,
};

const model = Schema.createSchema(messageSchema, "messages", options);

module.exports = model;
