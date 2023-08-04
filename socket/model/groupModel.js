const { Schema } = require("database");

userGroupSchema = {
  sub: {
    type: Array,
    required: true,
  },
};

const model = Schema.createSchema(userGroupSchema, "groups");

module.exports = model;
