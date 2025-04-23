(function(args, user) {
    const cities = require("./jsons/cities.json")
    const saveData = require("./jsons/city-accs.json")
    
    let chosenHome = data.home

    if (_.has(saveData, [chosenHome])) {
        send('This user has went to ' + _.size(_.get(saveData, [chosenHome])) + '/' + _.size(cities.cities) + ' places.' )
    } else {
        send("You didn't visited any places." )
    }
})