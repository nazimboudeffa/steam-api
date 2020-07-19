var request = require('request');

exports.name = (appid) => {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://store.steampowered.com/api/appdetails?appids='+appid,
            json: true,
        }, (err, res) => {
            if(err) reject(err);
            if(res.body[appid].success === false) reject("Request wasn't successful. Try checking your variables. Message: " + JSON.stringify(body[appid].data));
            resolve(res.body[appid].data.name);
        });
    })

}
