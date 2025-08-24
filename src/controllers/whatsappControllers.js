const verifyToken = (req, res, next) => {
  res.send("Token is valid");
};

const receivedMessage = (req, res, next) => {
  res.send("Message received");
};

module.exports = {
  verifyToken,
  receivedMessage
};