const { Schema } = require("database");

userSchema = {
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
}

options = {
  timestamps: true,
};

const model = Schema.createSchema(userSchema, "messages", options);

module.exports = model;
