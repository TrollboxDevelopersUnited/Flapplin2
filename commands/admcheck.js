(function(args, user) {
	if(config.admins.includes(user.home)) {
			send('You are an admin!')
	} else {
		send('You are an admin, however you are not...')
	}
})