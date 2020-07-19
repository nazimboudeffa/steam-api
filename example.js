const steam = require('./index.js');

steam.name(730).then(data => {
    console.log(data);
}).catch(err => console.log(err));
