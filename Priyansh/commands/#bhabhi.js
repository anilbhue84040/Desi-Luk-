const fs = require("fs");
module.exports.config = {
  name: "#bhabhi.js",
    version: "1.1.1",
  hasPermssion: 0,
  credits: " Ritu ", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gayatri") ||
     react.includes("Gayatri") || react.includes("bhabhi") || react.includes("Bhabhi") ||
react.includes(" Desi Luk") ||
react.includes("Chery")) {
    var msg = {
        body: `😛 𝐌aīī 𝐁𝐎𝐓 Hum to Kīīya Hua Maīī 𝐁h𝐈 Bhabhīī Bolunga Bhabhīī😸`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }