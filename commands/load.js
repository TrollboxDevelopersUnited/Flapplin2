(function(args, user) {
	const filename = data.msg.split(' ')[1];
	if(!filename) {
		socket.send("⚠️ Missing arguments! [filename]")
	}
	fs.readFile(he.decode("./PublicData/"+filename+".txt", 'utf8'), (err, filecontent) => {
		if (err && err.code === 'ENOENT') {
		  socket.send(he.decode("❌ 404 Not Found\nThe requested file \""+filename+"\" couldn't be found."));
		} else {

			let contents = filecontent.toString();
			let index = contents.lastIndexOf(' --readonly');
			if (index !== -1) {
				contents = contents.substring(0, index);
			}

		  socket.send(he.decode(contents));
		}
	  });
	}
)