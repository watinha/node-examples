let http = require('http'),
    post_dao = require('./model/PostDAO'),
    fexpress = require('./lib/fexpress'),
    app = fexpress();

app.get('/', async (req, res) => {
    let posts = await post_dao.find();
    res.render('./view/post.mustache.html', {posts: posts});
});

http.createServer(app).listen(3000);
