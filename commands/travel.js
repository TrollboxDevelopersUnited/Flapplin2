(function(args, user) {
    const cities = require("./jsons/cities.json")
    const saveData = require("./jsons/city-accs.json")

    if (checkCooldown('travel' + data.home, 60000)) {
        let obtained = _.sample(cities.cities)
        updateCooldown('travel' + data.home)
        if (!saveData.hasOwnProperty(data.home) || !saveData[data.home].includes(obtained)) {
            addCollectionData(saveData, data.home, obtained)
            setJSONFile('./jsons/city-accs.json', saveData)
            send("You went to "+ obtained)
        } else {
            send("You already went to "+ obtained)
        }
    } else {
        send("Please wait, cooldown is not off now. (" + Math.floor(getCooldownTimeLeft('travel' + data.home, 60000) / 1000) + ' seconds left)')
    }
})