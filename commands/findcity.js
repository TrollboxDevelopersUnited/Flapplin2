(function(args, user) {
    const cities = require("./jsons/cities.json")
    const saveData = require("./jsons/city-accs.json")

if (data.msg.toLowerCase().match(/^\;findcity(?:\s(.*))?$/i)[1]) {
        let lookuptarget = data.msg.match(/^\;findcity(?:\s(.*))?$/i)[1]
        if (_.includes(cities.cities, lookuptarget)) {
            if (_.includes(saveData[data.home], lookuptarget)) {
                send("You went to that place." )
            } else {
                send("You didn't went to that place." )
            }
        } else {
            send("Invalid place name. Ensure that you have spelt the town/city's name correctly. Also note that town/city names are case-sensitive." )
        }
    } else {
        send("What are you looking for?" )
    }
})