const { Socket } = require('socket.io');

const express = require('express');

const app = express();
const http = require('http').createServer(app);
const port = 8000;

const io = require('socket.io')(http)

app.get('/', (req, res) => {

});