const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));

const verifyToken = (req, res) => {
  try {
    var accessToken = "sdvsdv23vdf";
    var token = req.query["hub.verify_token"];
    var challenge = req.query["hub.challenge"];
    if (challenge != null && token === accessToken) {
      res.send(challenge);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    res.sendStatus(400).send();
  }
  res.send("<h1>WhatsApp API</h1>");
};

const receivedMessage = (req, res) => {
  try {
    var entry = req.body.entry[0];
    var changes = entry.changes[0];
    var value = changes.value;
    var messages = value.messages;
    myConsole.log("Received messages: ", messages);
    res.send("EVENT_RECEIVED");
  } catch (error) {
    res.send("EVENT_RECEIVED");
  }
};

module.exports = {
  verifyToken,
  receivedMessage,
};
