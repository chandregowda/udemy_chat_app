/**
 * This application is to demo Socket IO
 */
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

var app = express();
var server = http.createServer(app);
var io = socketIO(server); // web socket server for emitting / listing to events to communicate b/w server and client


const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New User connected");
    socket.on('disconnect', () => {
        console.log("User was disconnected");
    });
});
// instead of app.listen we need to use server.listen
server.listen(PORT, () => {
    console.log("Listining at port :", PORT);
});
console.log(publicPath);