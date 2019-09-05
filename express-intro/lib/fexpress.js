let Mustache = require('mustache'),
    fs = require('fs'),
    util = require('util');

module.exports = () => {
    let urls = {},
        fexpress = (req, res) => {
            res.render = async (filename, params) => {
                template = await util.promisify(fs.readFile)(filename);
                res.write(Mustache.render(template.toString(), params));
                res.end();
            }
            if (urls[req.url]) urls[req.url](req, res);
            else res.end();
        };
    fexpress.get = (url, callback) => {
        urls[url] = callback;
    };
    return fexpress;
}
