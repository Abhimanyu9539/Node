function getMessages(req, res) {
  res.send("Hello Albert");
}

function postMessage(req, res) {
  console.log("Updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};
