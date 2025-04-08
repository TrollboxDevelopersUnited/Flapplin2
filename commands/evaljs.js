(function(args, user) {
	if(config.admins.includes(user.home)) {
		if(args.length>0) {
			send('Returned: '+eval(args.join(' ')).toString())
		} else {
			send('Missing arguments! [code]')
		}
	} else {
		send('❌ 401 Unauthorized: You need to have admin perms to use this command.')
	}
})