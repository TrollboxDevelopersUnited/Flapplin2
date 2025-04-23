(function(args, user) {
	socket.send(`;poll - Available options:\n\n;poll-create [name] - Creates a poll\n;poll-vote [poll-num] [y/n] - Vote to the poll\n;poll-view [poll-num] - View the poll`)
})