function sampleText(textResponse, number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    text: {
      body: textResponse,
    },
  });
  return data;
}

function sampleImage(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "image",
    image: {
      link: "https://kinsta.com/es/wp-content/uploads/sites/8/2021/07/performance-testing-tools-1024x512.png",
    },
  });
  return data;
}

function sampleAudio(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "audio",
    audio: {
      link: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
  });
  return data;
}

function sampleVideo(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "video",
    video: {
      link: "https://www.youtube.com/watch?v=FwOTs4UxQS4",
    },
  });
  return data;
}

function sampleDocument(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "document",
    document: {
      link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  });
  return data;
}

function sampleButton(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "Reservacion",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "<UNIQUE_BUTTON_ID_1>",
              title: "boton reservacion",
            },
          },
          {
            type: "reply",
            reply: {
              id: "<UNIQUE_BUTTON_ID_2>",
              title: "cancelar",
            },
          },
        ],
      },
    },
  });
  return data;
}

function sampleList(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "list",
      header: {
        type: "text",
        text: "lista de opciones",
      },
      body: {
        text: "Selecciona una opción:",
      },
      footer: {
        text: "Este es un pie de lista",
      },
      action: {
        button: "Seleccionar",
        sections: [
          {
            title: "Sección 1",
            rows: [
              {
                id: "001",
                title: "Opción 1",
                description: "Descripción de la opción 1",
              },
              {
                id: "002",
                title: "Opción 2",
                description: "Descripción de la opción 2",
              },
            ],
          },
          {
            title: "Sección 2",
            rows: [
              {
                id: "003",
                title: "Opción 3",
                description: "Descripción de la opción 3",
              },
              {
                id: "004",
                title: "Opción 4",
                description: "Descripción de la opción 4",
              },
            ],
          },
        ],
      },
    },
  });
  return data;
}

function sampleLocation(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "location",
    location: {
      latitude: "37.7749",
      longitude: "-122.4194",
      name: "San Francisco",
      address: "California, USA",
    },
  });
  return data;
}

module.exports = {
  sampleText,
  sampleImage,
  sampleAudio,
  sampleVideo,
  sampleDocument,
  sampleButton,
  sampleList,
  sampleLocation,
};
