const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("API is running successfully");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = process.env.PORT || 4000;

app.listen(4000, console.log(`Server started on port ${PORT}`));
