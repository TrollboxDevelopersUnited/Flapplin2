(function(args, user) {
    const pals = require("./jsons/pals.json")
    const saveData = require("./jsons/pal-accs.json")
    
    let chosenHome = data.home

    if (_.has(saveData, [chosenHome])) {
        send('This person has ' + _.size(_.get(saveData, [chosenHome])) + '/' + _.size(pals.pal) + ' pals.' )
    } else {
        send("You don't have any pals." )
    }
})