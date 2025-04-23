(function(args, user) {

const dat = fs.readFileSync("./jsons/poll_count.json", "utf-8")
const obj = JSON.parse(dat)

    let hejson = {
        "name": args.join(' '),
        "Y": 0,
        "N": 0,
        "voted":[]
    }

    if(args.length>0) {
        try{
            obj.polls++;
            fs.writeFileSync('./jsons/poll_count.json', JSON.stringify(obj));
            
            fs.writeFileSync('./polls/'+obj.polls+'.json', JSON.stringify(hejson, null, 2))
            send("Poll created.")
            }catch(e){
                send(e.toString())
            }
    } else {
        send('Missing arguments! [text]')
    }
    if(args.length>256) {
        send("⚠️ Too long, shorten it. (256 letters max)")
        return
    }
})