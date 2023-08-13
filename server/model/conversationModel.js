const { Schema } = require("database");

const conversationSchema = {
    members: {
        type: Array
    }
}

const options = {
    timestamps: true
}

const model = Schema.createSchema(conversationSchema, "conversations", options);

export default model;