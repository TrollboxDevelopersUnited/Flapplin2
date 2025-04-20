(function(args, user) {
		if(args.length>0) {
			send("*"+data.nick+" "+args.join(' ')+"*")
		} else {
			send('Missing arguments! [text]')
		}
		if(args.length>256) {
			send("⚠️ Too long, shorten it. (256 letters max)")
			return
		}
})