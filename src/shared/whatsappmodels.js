function MessageText(textResponse, number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    text: {
      body: textResponse,
    },
  });
  return data;
}

module.exports = {
  MessageText,
};
