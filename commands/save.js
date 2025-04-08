(function(args, user) {
	const filename = data.msg.split(' ')[1];

	if(!filename) {
		socket.send("⚠️ Missing arguments! [filename]")
	return }

	const contents = data.msg.substring(filename.length + 7); // Excluding "+save" and the space before the filename

	if(!contents) {
		socket.send("⚠️ Missing arguments! [contents]")
	return }

	if(contents.length >= 2000) {
		return send(`❌ The file contents in "${filename}" couldn't be written: 2000 letters max.`)
	}

	if(contents.includes("*hugs")) {
		socket.send("❌ Nope, you can't do that.")
	return }

	if(contents.endsWith(" --readonly")) {

		fs.writeFile(he.decode(`./PublicData/${filename}.txt`), he.decode(contents), (err) => {
			if (err) {
			  return socket.send(`❌ The file contents in "${filename}" couldn't be written: This file is marked as the read-only.`);
			}
			socket.send(he.decode(`A read-only file "${filename}" has been saved!`))
			fs.chmodSync(he.decode(`./PublicData/${filename}.txt`), 0o444);
		})}

	fs.writeFile(he.decode(`./PublicData/${filename}.txt`), he.decode(contents), (err) => {
	  if (err && err.code === 'EPERM') {
		return socket.send(he.decode(`❌ The file contents in "${filename}" couldn't be written: This file is marked as the read-only.`));
	  } else if (err && err.code === 'ENOENT') {
		return socket.send(he.decode(`❌ The file contents in "${filename}" couldn't be written: No special characters allowed.`));
	  } else if (err) {
		return socket.send(he.decode(`❌ The file contents in "${filename}" couldn't be written: `+err.toString()));
	  }
	  socket.send(he.decode(`File "${filename}" saved successfully!`));

	})}
)