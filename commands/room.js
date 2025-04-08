(function(args, user) {
	if(config.admins.includes(user.home)) {
		if(args.length>0) {
			send('/r '+args.join(' '))
		} else {
			send('Missing arguments! [room]')
		}
	} else {
		send('❌ 401 Unauthorized: You need to have admin perms to use this command.')
	}
})