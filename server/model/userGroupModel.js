const { Schema } = require("database");

userGroupSchema = {
  sub: {
    type: String,
    required: true,
  },
  groupId: {
    type: Array,
    required: true,
  },
};

const model = Schema.createSchema(userGroupSchema, "userGroups");

module.exports = model;
