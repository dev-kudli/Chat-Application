const { Schema } = require("database");

const groupMessageSchema = {
  senderId: {
    type: String,
  },
  groupId: {
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

const model = Schema.createSchema(groupMessageSchema, "groupMessages", options);

module.exports = model;
