// recent messages between usaer A and B
const getRecentMessages = async (request, response) => {
    try {
      const user = await userModal.find({});
      response.status(200).json(user);
    } catch (error) {
      response.status(500).json(error);
    }
  };

  module.exports = {
    getRecentMessages,
  };