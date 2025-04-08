(function(args, user) {
		if(args.length>0) {
			send(args.join(' ') + ' is '+ Math.floor(Math.random() * 101) + '% gay')
		} else {
			send(user.nick + ' is '+ Math.floor(Math.random() * 101) + '% gay')
		}
})