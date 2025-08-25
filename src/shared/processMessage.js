const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");

function process(textUser, phoneNumber) {
  textUser = textUser.toLowerCase();
  var models = [];
  if (textUser.includes("hola")) {
    var model = whatsappModel.MessageText(
      "Hola, un gusto saludarte",
      phoneNumber
    );
    models.push(model);
  } else if (textUser.includes("gracias")) {
    var model = whatsappModel.MessageText(
      "¡De nada! Si tienes más preguntas, no dudes en preguntar.",
      phoneNumber
    );
    models.push(model);
  } else if (textUser.includes("adios") || textUser.includes("hasta luego") || textUser.includes("chao") || textUser.includes("adiós")) {
    var model = whatsappModel.MessageText(
      "¡Hasta luego! Que tengas un buen día.",
      phoneNumber
    );
    models.push(model);
  } else {
    var model = whatsappModel.MessageText(
      "Lo siento, no entiendo tu mensaje.",
      phoneNumber
    );
    models.push(model);
  }
  models.forEach((model) => {
    whatsappService.sendMessageWhatsApp(model);
  });
}

module.exports = {
  process,
};
