const groupModel = require("../model/groupModel");

// get group members
const getGroupMembers = async (id) => {
    try {
      const group = await groupModel.findById(id);
      return group;
    } catch (error) {
        console.log(error)
    }
  };

  module.exports = {
    getGroupMembers
  }