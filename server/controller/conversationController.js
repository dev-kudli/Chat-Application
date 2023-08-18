const conversationModel = require("../model/conversationModel.js");

const newConversation = async (request, response) => {
  let senderId = request.body.senderId;
  let receiverId = request.body.receiverId;

  const exist = await conversationModel.findOne({
    members: { $all: [receiverId, senderId] },
  });

  if (exist) {
    response.status(200).json("conversation already exists");
    return;
  }
  const newConversation = new conversationModel({
    members: [senderId, receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    response.status(200).json(savedConversation);
  } catch (error) {
    response.status(500).json(error);
  }
};

const getConversation = async (request, response) => {
  try {
    const conversation = await conversationModel.findOne({
      members: { $all: [request.body.senderId, request.body.receiverId] },
    });
    response.status(200).json(conversation);
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  newConversation,
  getConversation
}
