const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const whatsappService = require("../services/whatsappServe");
const samples = require("../shared/sampleModels");

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
    var messageObjet = value.messages;
    var messages = messageObjet[0];
    var text = getTextUser(messages);
    myConsole.log(text);
    var phoneNumber = messages.from;
    if(text == "text"){
      var data = samples.sampleText("hola usuario", phoneNumber);
      whatsappService.sendMessageWhatsApp(data);
    } else if (text == "image") {
      var data = samples.sampleImage(phoneNumber);
      whatsappService.sendMessageWhatsApp(data);
    } else if (text == "audio") {
      var data = samples.sampleAudio(phoneNumber);
      whatsappService.sendMessageWhatsApp(data);
    } else if (text == "video") {
      var data = samples.sampleVideo(phoneNumber);
      whatsappService.sendMessageWhatsApp(data);
    } else if (text == "document") {
      var data = samples.sampleDocument(phoneNumber);
      whatsappService.sendMessageWhatsApp(data);
    } else if (text == "button") {
      var data = samples.sampleButton(phoneNumber);
      whatsappService.sendMessageWhatsApp(data);
    } else if (text == "list") {
      var data = samples.sampleList(phoneNumber);
      whatsappService.sendMessageWhatsApp(data);
    } else if (text == "location") {
      var data = samples.sampleLocation(phoneNumber);
      whatsappService.sendMessageWhatsApp(data);
    } else {
      var data = samples.sampleText("Lo siento, no entiendo tu mensaje.", phoneNumber);
      whatsappService.sendMessageWhatsApp(data);
    }

    res.send("EVENT_RECEIVED");
  } catch (error) {
    res.send("EVENT_RECEIVED");
  }
};

function getTextUser(message) {
  var text = "";
  var type = message.type;
  if (type === "text") {
    text = message.text["body"];
  } else if (type == "interactive") {
    var interactiveObject = message.interactive;
    if (interactiveObject.type === "button_reply") {
      text = interactiveObject.button_reply.title;
    } else if (interactiveObject.type === "list_reply") {
      text = interactiveObject.list_reply.title;
    } else {
      myConsole.log("Unsupported interactive message type");
    }
  } else {
    myConsole.log("Unsupported message type");
  }
  return text;
}

module.exports = {
  verifyToken,
  receivedMessage,
};
