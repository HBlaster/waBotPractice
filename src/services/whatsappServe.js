const https = require("https");

function sendMessageWhatsApp(textResponse, number) {
    const data = JSON.stringify({
        messaging_product: "whatsapp",
        to: number,
        text: {
            body: textResponse
        }
    })

const options = {
    host: "graph.facebook.com",
    path: "/v22.0/761040520423094/messages",
    method: "POST",
    body: data,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer EAAaZCZALokmGUBPSaEfKSZAvISZBQKDbQ0G0cbXeMruSMDvWQKtYB3CSmKh2EZCnJ9IkRgHXmpEmxafd31ht61WUyWAVaK5n8GygB0HiNPgeYLZCH1hdeexsQqwFAaTLV5ZAWCVQjFIJFvv0WdZA94OHENE2UPGRks6YqZCn6duZBLCNCcTPB5HpZCTSpoBWbItNjIRVRezp1ZA31XgyJJVQunzSUZAxJlaFz8sEZBgQiTGVE2Ez08vAZDZD`
    }
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
    sendMessageWhatsApp
};
