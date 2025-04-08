(function(args, user) {

    var min = Math.floor(sec/60)%60
    var secs = sec%60
    var hour = Math.floor(sec/3600)%24
    var day = Math.floor(sec/86400)

	send(`Uptime: ${day}d, ${hour}hr, ${min}min, ${secs}sec.`)
})