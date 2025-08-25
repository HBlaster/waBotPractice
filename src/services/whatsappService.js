const https = require("https");

function sendMessageWhatsApp(data) {
  const options = {
    host: "graph.facebook.com",
    path: "/v22.0/761040520423094/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer EAAaZCZALokmGUBPdCizQ0bIUIdZCY5cl94INXEYnzbnfjZBK2JjujBnnaAeyzQsZAdm405GYUg2SrM5RnBKOZAQ1w47e0uMnhiZA9GRwgLwtCL7jxcxNJOShC9wS4K7Vyysj6VA84evL0e0rwo00oHjnvp2SL2odpnLemZCff4fkNwVG87ubNdRIoL5w5GqHFmFlIWkIwLceHDJcA8FsGiCd5YCFiNKvOexqZAuCG3koPjqJEcl4ZD`,
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
