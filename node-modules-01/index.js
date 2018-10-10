let fs = require('fs');

fs.readFile('data/abobrinha.txt', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
});




