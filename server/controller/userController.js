const userModal = require("../modal/userModal.js");

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

const getUser = async (request, response) => {
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
