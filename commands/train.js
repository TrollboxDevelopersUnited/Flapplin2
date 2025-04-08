(function(args, user) {
	let trainLength = parseInt(args);
	if(trainLength > 70) {return socket.send("❌ The train composition is too long to handle.")}

	if (!isNaN(trainLength)) {
		let emojiString = "🚅";
		for (let i = 0; i < trainLength; i++) {
			emojiString += "🚃";
		}
		socket.send(emojiString);
	} else {
		socket.send("Invalid length provided.");
	}
})