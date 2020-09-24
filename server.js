require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database!'));

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
})

server.listen(process.env.PORT, () => console.log("Server started! Listening on Port 9000"));