const userModal = require("../model/userModel.js");

// user sign up
const addUser = async (request, response) => {
  try {
    let exist = await userModal.findOne({ sub: request.body.sub });

    if (exist) {
      response.status(200).json("user already exists");
      return;
    }

    const newUser = new userModal(request.body);
    await newUser.save();
    response.status(200).json(newUser);
  } catch (error) {
    response.status(500).json(error);
  }
};

// user sign in
const getUser = async (request, response) => {
  try {
    const user = await userModal.find({});
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
};

// all groups joined by a user
const getUserGroups = async (request, response) => {
  try {
    const user = await userModal.find({});
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  addUser,
  getUser,
};
