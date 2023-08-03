const { uploadNewMessage } = require('../controller/messageController');

const userHandler = (io, socket, users) => {
  // send message
  socket.on("sendMessage", async (data) => {
    console.log("sendmessage")
    // store message
    try {
      await uploadNewMessage(data);
    } catch (err) { 
      console.log(err)
    }
    // check if user is online
    const user = getUser(data.receiverId, users);
    if (user) io.to(user.socketId).emit("getMessage", data);
    else {
      console.log(`${data.receiverId} is offline`);
    }
  });
};

const getUser = (userId, users) => {
  return users.find((user) => user.sub === userId);
};

module.exports = userHandler;
