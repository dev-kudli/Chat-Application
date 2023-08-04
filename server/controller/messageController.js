const messageModel = require("../model/messageModel");

// recent messages between user A and B
const getRecentMessages = async (request, response) => {
  try {
    const messages = await messageModel
      .find({
        senderId: request.query.senderId,
        receiverId: request.query.receiverId,
      })
      .sort({ createdAt: -1 })
      .limit(100);
    response.status(200).json(messages);
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  getRecentMessages,
};
