(function(args, user) {
	send("Current date and time: "+ moment().format("MMMM D")+", "+moment().format("dddd")+"\n" + moment().format("HH:mm:ss")+", UTC+03:00 (Moscow Standard Time)")
})