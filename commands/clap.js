(function(args, user) {

	var arg = data.msg.slice(6);
	arg = arg.replace(/ /g, "👏");
	if(arg.startsWith("*hugs")){
		socket.send("❌ Nope, I won't crash.")
		return
	}
	socket.send(he.decode(arg));
	})