const groupModel = require("../model/groupModel");

// create new group
const createGroup = async (request, response) => {
  try {
    const newGroup = new groupModel(request.body);
    newGroup.save();
    response.status(200).json(newGroup);
  } catch (error) {
    response.status(500).json(error);
  }
};

// delete group
const deleteGroup = async (request, response) => {
    try {
        const condition = { _id: request.body.groupId };
        const result = await groupModel.deleteOne(condition)
      response.status(200).json(result.deletedCount);
    } catch (error) {
      response.status(500).json(error);
    }
  };

module.exports = {
    createGroup,
    deleteGroup
};
