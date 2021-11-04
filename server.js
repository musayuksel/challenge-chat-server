const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const data = require("./data/data.json");
//send all messages
app.get("/messages", (require, response) => {
  response.send(data);
});
app.listen(PORT, () => {
  console.log(`Server working on ${PORT}`);
});
