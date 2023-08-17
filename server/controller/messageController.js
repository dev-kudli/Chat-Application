const messageModel = require("../model/messageModel");

// new message
const newMessage = async (request, response) => {
  const newMessage = new messageModel(request.body);
  try {
    await newMessage.save();
    // await messageModel.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
    response.status(200).json("Message has been sent successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

// recent messages between user A and B
const getRecentMessages = async (request, response) => {
  try {
    const messages = await messageModel
      .find({
        conversationId: request.query.conversationId,
      })
      .sort({ createdAt: 1 })
      .limit(100);
    response.status(200).json(messages);
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  newMessage,
  getRecentMessages
}