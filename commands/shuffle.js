(function(args, user) {

    const shuffle = str => [...str].sort(()=>Math.random()-.5).join('')

    if(args.length>0) {
        send(shuffle(args.join(' ')))
    } else {
        send('Missing arguments! [text]')
    }
    if(args.length>256) {
        send("⚠️ Too long, shorten it. (256 letters max)")
        return
    }
})