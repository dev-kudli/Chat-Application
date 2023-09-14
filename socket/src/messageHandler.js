const { uploadNewMessage, uploadNewGroupMessage } = require("../controller/messageController");
const { getGroupMembers } = require("../controller/groupController");

const messageHandler = (io, socket, users) => {
  // send message
  const sendMesage = async (data) => {
    try {
      await uploadNewMessage(data);
      const user = getUser(data.receiverId, users);
      if (user) io.to(user.socketId).emit("getMessage", data);
      // else {
      //   console.log(`${data.receiverId} is offline`);
      // }
    } catch (err) {
      console.log(err);
    }
  };

  const sendGroupMesage = async (data) => {
    try {
      await uploadNewGroupMessage(data);
      console.log(data)
      const group = await getGroupMembers(data.groupId);
      group.sub.forEach(member => {
        const user = getUser(member, users)
        if (user) io.to(user.socketId).emit("getMessage", data)
      });
    } catch (err) {
      console.log(err);
    }
  };
  socket.on("sendMessage", sendMesage);
  socket.on("sendGroupMessage", sendGroupMesage);
};

const getUser = (userId, users) => {
  return users.find((user) => user.sub === userId);
};

module.exports = messageHandler;
