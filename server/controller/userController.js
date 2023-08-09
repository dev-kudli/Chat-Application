const userModel = require("../model/userModel");
const userGroupModel = require("../model/userGroupModel");

// user sign up
const addUser = async (request, response) => {
  try {
    let exist = await userModel.findOne({ sub: request.body.sub });

    if (exist) {
      response.status(200).json("user already exists");
      return;
    }

    const newUser = new userModel(request.body);
    await newUser.save();
    response.status(200).json(newUser);
  } catch (error) {
    response.status(500).json(error);
  }
};

//add new conversation
const addNewConversation = async (request, response) => {
  try {
    const { senderSub, receiverId } = request.body;
    const updatedUser = await userModel.findOneAndUpdate(
      { sub: senderSub },
      { $push: { conversation: receiverId } },
      { new: true }
    );

    if (!updatedUser) {
      console.log('User not found');
      return;
    }

    response.status(200).json(updatedUser);
  } catch (error) {
    response.status(500).json(error);
  }
}

//get conversations
const getConversations = async (request, response) => {
  try {
    console.log(request.query.sub);
    const user = await userModel.findOne({ sub: request.query.sub });
    
    if (user) {
      response.status(200).json(user.conversation);
      return;
    } else throw new Error('User not found')
  } catch (error) {
    response.status(500).json(error);
  }
}

//get all users
const getAllUsers = async (request, response) => {
  try {
    const users = await userModel.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(500).json(error);
  }
};

// all groups joined by a user
const getUserGroups = async (request, response) => {
  try {
    const userGroups = await userGroupModel.findOne({ sub: request.body.sub });
    response.status(200).json(userGroups);
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  addUser,
  getUserGroups,
  addNewConversation,
  getAllUsers,
  getConversations
};
