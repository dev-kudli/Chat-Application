const http = require('http');

const dotenv = require('dotenv');
const socketIO = require('socket.io');
const express = require('express');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server)

// Event listener for new socket connections
io.on('connection', (socket) => {
    console.log('user connected')

    //connect
    socket.on("addUser", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users);
    })

    //send message
    socket.on('sendMessage', (data) => {
        const user = getUser(data.receiverId);
        io.to(user.socketId).emit('getMessage', data)
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })

    console.log(users)
});

// Start the WebSocket server listening
server.listen(process.env.WEBSOCKET_PORT, () => {
    myInitializationFunction();
});

// Your initialization function
function myInitializationFunction() {
    console.log('Initialization function called after server start.');
}

const users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const removeUser = (socketId) => {
    const indexToRemove = users.findIndex(user => user.socketId === socketId);

    if (indexToRemove !== -1) {
        users.splice(indexToRemove, 1);
    }
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}