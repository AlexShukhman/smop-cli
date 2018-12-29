const http = require('http');

module.exports = async(r,e,t,p) => {
    var options = {
        "method": "POST"
		, "hostname": "localhost"
		, "port": "3000"
		, "path": "/parth_test"
		, 'headers': {
            "content-type": "application/x-www-form-urlencoded",
            "r": r,
            "e": e,
            "t": t,
            "p": p
		}
    }
    req = http.request(options, (res)=>{
        res.on('data', (data) => {
            console.log(data.toString());
        });

        res.on('error', (err) => {
            console.log(err);
        });
    }).on('error', (err) => {
        console.log(err);
    });
    req.end();
}