let fs = require('fs'),
    util = require('util');

//  --- Callback ---
fs.readFile('./frutas.txt', (err, data) => {
    console.log(data.toString());
});

//  --- Promise ---
fs.readFile2 = util.promisify(fs.readFile);
fs.readFile2('./frutas.txt').then((data) => {
    console.log(data.toString());
});

//  --- Async/Await ---
(async function () {
    let data = await fs.readFile2('./frutas.txt');
    console.log(data.toString());
})();
