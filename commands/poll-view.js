(function(args, user) {
	const filename = data.msg.split(' ')[1];
	if(!filename) {
		send("⚠️ Missing arguments! [filename]")
	}
    fs.readFile(he.decode("./polls/"+filename+".json", 'utf8'), (err, dat) => {
		if (err && err.code === 'ENOENT') {
		  send(he.decode("The poll with specified id is not found."));
		} else {
            const pollData = JSON.parse(dat.toString())
		  send(he.decode(`${pollData.name}\nY: ${pollData.Y}\nN: ${pollData.N}`));
		}
	  });
})