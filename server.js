const { request, response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const data = require("./data/data.json");
//send all messages
app.get("/messages", (request, response) => {
  response.send(data);
});

//Read one message specified by an ID
app.get("/messages/:messageId", (request, response) => {
  const messageId = +request.params.messageId;
  const dataIncludeId = data.filter(
    (message) => message.id === messageId
  );
  response.send(dataIncludeId);
});

app.listen(PORT, () => {
  console.log(`Server working on ${PORT}`);
});
