const messageModal = require("../model/messageModel.js");

const uploadNewMessage = async (data) => {
  try {
    const newMessage = new messageModal(data);
    await newMessage.save();
    return true;
  } catch (error) {
    throw error
  }
};

module.exports = {
    uploadNewMessage
};
