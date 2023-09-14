const userModel = require("../model/userModel");
const userGroupModel = require("../model/userGroupModel");

// user sign up
const addUser = async (request, response) => {
  try {
    let exist = await userModel.findOne({ sub: request.body.sub });

    const cookieConfig = {
      httpOnly: true, // to disable accessing cookie via client side js
      maxAge: 24*3600, // ttl in seconds (remove this option and cookie will die when browser is closed)
      signed: true, // if you use the secret with cookieParser
      // secure: true, // to force https (if you use it)
      // sameSite: 'None', // For cross-origin requests
    };
    response.cookie('sub', request.body.sub, cookieConfig);

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

// current user session
const getCurrentUser = async (request, response) => {
  try {
    if (request.signedCookies?.sub) {
      const currentUser = await userModel.findOne({ sub: request.signedCookies.sub });
      if (currentUser) response.status(200).send(currentUser);
    }
    else response.status(204).send();
  } catch (error) {
    response.status(500).json(error); 
  }
};

module.exports = {
  addUser,
  getUserGroups,
  getAllUsers,
  getCurrentUser,
};
