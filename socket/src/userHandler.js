const userHandler = (io, socket, users) => {
  const connectUser = (userData) => {
    // authenticate user

    // add to online users list
    addUser(userData, socket.id, users);
    console.log('Added user', userData.name)
    io.emit("getUsers", users);
  };

  const disconnectUser = () => {
    console.log("user disconnected");
    removeUser(socket.id);
    io.emit("getUsers", users);
  };

  socket.on("connectUser", connectUser);
  socket.on("disconnectUser", disconnectUser);
};

const addUser = (userData, socketId, users) => {
  !users.some((user) => user.sub === userData.sub) &&
    users.push({ ...userData, socketId });
};

const removeUser = (socketId) => {
  const indexToRemove = users.findIndex((user) => user.socketId === socketId);

  if (indexToRemove !== -1) {
    users.splice(indexToRemove, 1);
  }
};

module.exports = userHandler;
