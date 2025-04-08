(function(args, user) {
    if(args.length>0) {
        send(args.join(' '))
    } else {
        socket.emit("user joined", ";Flapplin/2", "#0077ff", "", "")
    }

    if(args.includes("fortnite") || arg.includes("sonic") || arg.includes("exe") || arg.includes("roblox")){
		socket.send("Lol no, nice try.")
		return
	}

    socket.emit("user joined", `;`+args, "#0077ff", "", "")
})