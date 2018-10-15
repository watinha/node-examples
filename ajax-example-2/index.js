let express = require('express'),
    path = require('path'),
    http = require('http'),
    app = express();

app.use(express.static(path.join(__dirname, 'static/')));

app.get('/tempo', (req, res) => {
    res.end((new Date()).toString());
});

http.createServer(app).listen(3000);
