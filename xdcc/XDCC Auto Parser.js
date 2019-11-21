const request = require("request");
var p = {k:[]};
var result = [];
var latest = [];
var counter = 0;

searchList = [
    "[HorribleSubs] Psycho Pass 3",
    "[HorribleSubs] Sword Art Online - Alicization - War of Underworld",
    "[HorribleSubs] Choyoyu",
    "[HorribleSubs] Honzuki no Gekokujou"
]

//formatting
var maxLength = 0;

for (let i = 0; i < searchList.length; i++) {
    var searchTerm = searchList[i];
    searchTerm += " [1080p]";
    searchTerm.replace(" ", "%20")
    
    request(`https://xdcc.horriblesubs.info/search.php?nick=CR-HOLLAND|NEW&t=${searchTerm}`, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        // console.log(body);
        eval(body);
        // console.log(JSON.stringify(p, null, '\t'));

        //Do stuff with p
        p.k.forEach(x => {
            result.push(x);
            maxLength = Math.max(maxLength, x.f.length - 27);
        });

        latest.push(p.k[p.k.length-1]);
    
        p = {k:[]};

        done();
    })
}

function done() {
    if (counter !== searchList.length - 1) {
        counter++;
    }
    else {
        result.forEach(x => {
            var name = x.f.substring(15, x.f.length - 12);
            name = name.padEnd(maxLength);
            console.log(`${name}    ||    /msg ${x.b} xdcc send #${x.n}`);
        });

        console.log("");
        console.log("Latest Entries: ");

        latest.forEach(x => {
            var name = x.f.substring(15, x.f.length - 12);
            name = name.padEnd(maxLength);
            console.log(`${name}    ||    /msg ${x.b} xdcc send #${x.n}`);
        });
    }
}

