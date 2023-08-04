const messageModel = require("../model/messageModel");
const groupMessageModel = require("../model/groupMessageModel");

const uploadNewMessage = async (data) => {
  try {
    const newDmMessage = new messageModel(data);
    await newDmMessage.save();
    return true;
  } catch (error) {
    throw error;
  }
};

const uploadNewGroupMessage = async (data) => {
  try {
    const newGroupMessage = new groupMessageModel(data);
    await newGroupMessage.save();
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  uploadNewMessage,
  uploadNewGroupMessage,
};
