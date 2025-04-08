(function(args, user) {

    const arg = data.msg.split(' ')
    const inputNumber = parseInt(arg[1]);

    fs.readFile('./jsons/elements.json', (err, dat) => {
		if (err) throw err;

        const elementsJson = JSON.parse(dat);

    if(!inputNumber) {
        send('Invalid or missing arguments!')
    }
    if(inputNumber <= 0) {
        send("Type any number higher than 0.")
        return
    }

    const NumToName = {
        '0':'nil',
        '1':'un',
        '2':'bi',
        '3':'tri',
        '4':'quad',
        '5':'pent',
        '6':'hex',
        '7':'sept',
        '8':'oct',
        '9':'enn'
    }
    
        if(inputNumber > 118){
                  send(inputNumber.toString().replace(/(\d)/g, match => NumToName[match])+"ium");
                }
            
                if (!isNaN(inputNumber)) {
                    const targetElement = elementsJson.elements[inputNumber - 1];
                    socket.send(`${targetElement}`);
                  }

})
})