const mongoose = require("mongoose");

class Schema {
  static createSchema(jsonSchema, name, options = {}) {
    try {
      const schema = new mongoose.Schema(jsonSchema, options);
      const modal = mongoose.model(name, schema);
      return modal;
    } catch (error) {
      console.error("Error creating schema:", error);
      throw error;
    }
  }
}

module.exports = Schema;
