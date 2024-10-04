const fs = require("fs");
module.exports.config = {
	name: "Aaiza",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Priyansh", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Arun",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("")==0 || event.body.indexOf("")==0 || event.body.indexOf("")==0) {
		var msg = {
				body: "🤟🤘चिन टपाक डम डम 🤟🤘",
				attachment: fs.createReadStream(__dirname + `/cache/chin.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }