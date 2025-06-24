const fs = require("fs");
module.exports.config = {
  name: "Desīī Luk",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "Chery x Ritu", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Chery x Ritu") ||
     react.includes("Chery x Ritu") || react.includes("Chery") || react.includes("shaan") ||
react.includes("Ritu") ||
react.includes("Cherīī") ||     
react.includes("Chery x Ritu")) {
    var msg = {
        body: `${name} 𝑻𝑼𝑴 𝑵𝑬 𝑩𝑯𝑼𝑳𝑨𝒀𝑨 𝑶𝑼𝑹 𝑯𝑼𝑴 𝑪𝑯𝑨𝑳𝑬 𝑨𝑨𝒀𝑬💞✿`,attachment: fs.createReadStream(__dirname + `/noprefix//received_1236460420763390.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (Arey Baby Yehan nahi ib chalo) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
