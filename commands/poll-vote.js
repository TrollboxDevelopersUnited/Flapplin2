(function(args, user) {
	const filename = data.msg.split(' ')[1];
	if(!filename) {
		send("⚠️ Missing arguments! [filename]")
	}
    let choice = data.msg.split(' ')[2];
    if(!choice){
        send("⚠️ Missing arguments! [y/n]")
    }

    fs.readFile(he.decode("./polls/"+filename+".json", 'utf8'), (err, dat) => {
		if (err && err.code === 'ENOENT') {
		  send(he.decode("The poll with specified id is not found."));
		} else {
            const pollData = JSON.parse(dat.toString())
            
            if(pollData.voted.includes(data.home)){
                send(he.decode("You have already voted."))
                return
            }
            if(choice = "y"){
                pollData.Y++
            } else if(choice = "n"){
                pollData.N++
            }
            pollData.voted.push(data.home)
            fs.writeFileSync(`./polls/${filename}.json`, JSON.stringify(pollData, null, 2));
            send("Voted.")
		}
	  });
})