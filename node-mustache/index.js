let fs = require('fs'),
    Mustache = require('mustache');

fs.readFile('./abobrinha.mustache', 'utf-8', (err, template) => {
    if (err) throw err;
    console.log(Mustache.render(template, {a: 1}));
})
