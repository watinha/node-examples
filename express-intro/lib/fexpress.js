let Mustache = require('mustache'),
    fs = require('fs'),
    util = require('util');

module.exports = () => {
    let urls = [],
        fexpress = (req, res) => {
            res.render = async (filename, params) => {
                template = await util.promisify(fs.readFile)(filename);
                res.write(Mustache.render(template.toString(), params));
                res.end();
            }
            for (var i = 0; i < urls.length; i++) {
                if (req.url === urls[i].url)
                    urls[i].callback(req, res);
            };
        };
    fexpress.get = (url, callback) => {
        urls.push({ url: url, callback: callback });
    };
    return fexpress;
}
