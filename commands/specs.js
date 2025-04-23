(function(args, user) {
    var os = require('os')
    var {version} = require('node:process')
	send("Flapplin​@​Hoyohou\n------------------\nOS: "+os.version()+" "+ os.machine()+"\nOS Version: "+os.type() + " " + os.release()+"\nNode.js Version: "+version+"\nBot Version: 2.0.0-alpha\nCPU: AMD Ryzen 5 5500 (12) @ 3,60 GHz\nGPU: NVIDIA GeForce GT 440 (979,44 MiB) [Integrated]\nTotal Memory: "+Math.round(os.totalmem() / 1024 / 1024)+" MBytes\nFree Memory: "+ Math.round(os.freemem() / 1024 / 1024)+" MBytes")
})