const https = require("https");

function sendMessageWhatsApp(data) {
  const options = {
    host: "graph.facebook.com",
    path: "/v22.0/761040520423094/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer EAAaZCZALokmGUBPdpwyeJHGZC7YmMpAaNTWr4ZCgmhcktgk2Gcw7cBZBx7wBDDHZCsOCLYFZBk2bqaZC62KjScwtYfaUKqNUc5yu1q5pRMZBAx6ngDLBpnZABArBJoGNO3RQoSYUN04EucUztVaErcoBEsrZCH0CMSQmOAZA7Izo6UBUdbZCqXu6BnYxuzPakv8agHRreNj5ZCtwdh1DuogzIyNAgPRHJaKPZAbl9ZAvTzv7VFgtzDhyygZDZD`,
    },
  };

  const req = https.request(options, (res) => {
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });
  req.on("error", (e) => {
    console.error("Error:", e);
  });

  req.write(data);
  req.end();
}

module.exports = {
  sendMessageWhatsApp,
};
