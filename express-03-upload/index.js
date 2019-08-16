let http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express(),
    multer = require('multer'),
    upload = multer({ dest: 'public/uploads' }),
    images = [];

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log(images);
    res.render('index.hbs', { images: images });
});

app.post('/upload', upload.single('arquivo'), (req, res) => {
    images.push(req.file.filename)
    res.redirect('/');
});



app.listen(3000);
