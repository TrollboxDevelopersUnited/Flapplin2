(function(args, user) {
    if(config.admins.includes(user.home)) {
	send('Name: '+user.nick+'\nHome: '+user.home+'\nPermission Access: 2 (Admin)')
    }else{
    send('Name: '+user.nick+'\nHome: '+user.home+'\nPermission Access: 1 (User)')
    }
})