(function(args, user) {
    const pals = require("./jsons/pals.json")
    const saveData = require("./jsons/pal-accs.json")

    if (checkCooldown('pal' + data.home, 60000)) {
        let obtained = _.sample(pals.pal)
        updateCooldown('pal' + data.home)
        if (!saveData.hasOwnProperty(data.home) || !saveData[data.home].includes(obtained)) {
            addCollectionData(saveData, data.home, obtained)
            setJSONFile('./jsons/pal-accs.json', saveData)
            send("You got a "+ obtained + "!" )
        } else {
            send("You tried to get "+ obtained + ", but you have already obtained it." )
        }
    } else {
        send("Please wait, cooldown is not off now. (" + Math.floor(getCooldownTimeLeft('pal' + data.home, 60000) / 1000) + ' seconds left)')
    }
})