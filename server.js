const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const messageData = require("./data/data.json");
//send all messages
app.get("/messages", (request, response) => {
  response.send(messageData);
});

//Read one message specified by an ID
app.get("/messages/:messageId", (request, response) => {
  const messageId = +request.params.messageId;
  const dataIncludeId = messageData.filter(
    (message) => message.id === messageId
  );
  response.send(dataIncludeId);
});

// Create a new message
app.post("/messages", (request, response) => {
  // console.log(`request.body`, request.query.from);
  const from = request.query.from;
  const text = request.query.text;
  let lastMessageId =
    messageData[messageData.length - 1].id;
  const newMessage = {
    id: lastMessageId + 1,
    from: from || "",
    text: text || "",
  };
  messageData.push(newMessage);
  response.send(messageData);
});

app.listen(PORT, () => {
  console.log(`Server working on ${PORT}`);
});
