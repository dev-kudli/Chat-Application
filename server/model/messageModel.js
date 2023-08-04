const { Schema } = require("database");

const userSchema = {
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

const model = Schema.createSchema(userSchema, "messages", options);

module.exports = model;
