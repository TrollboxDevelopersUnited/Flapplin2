(function(args, user) {
    var freeze = 0
    if(freeze == 1) {return socket.send("Don't even try crashing me, I was on the verge of going down!")}
	const randoms = require("../jsons/random-names.json")
    const randcolors = require("../jsons/colorlist.json")
    const othername = randoms.randnames[randomInteger(0, randoms.randnames.length - 1)]
    const colorlist = randcolors.colorlist[randomInteger(0, randcolors.colorlist.length - 1)]
    socket.emit("user joined", ";"+othername, colorlist, "", "")

    freeze = 1
	setTimeout(() => {
		freeze = 0;
		}, 2000); // 2000ms = 2s
})