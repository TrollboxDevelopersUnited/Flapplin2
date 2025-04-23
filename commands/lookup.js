(function(args, user) {
    const pals = require("./jsons/pals.json")
    const saveData = require("./jsons/pal-accs.json")

if (data.msg.toLowerCase().match(/^\;lookup(?:\s(.*))?$/i)[1]) {
        let lookuptarget = data.msg.match(/^\;lookup(?:\s(.*))?$/i)[1]
        if (_.includes(pals.pal, lookuptarget)) {
            if (_.includes(saveData[data.home], lookuptarget)) {
                send("You have this pal!" )
            } else {
                send("You might have this pal, but actually you don't have it." )
            }
        } else {
            send("Couldn't find that pal in the database. Ensure that you have spelt the pal's name correctly. Also note that pal names are case-sensitive." )
        }
    } else {
        send("What are you looking for?" )
    }
})