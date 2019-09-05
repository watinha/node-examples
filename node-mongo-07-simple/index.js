(async () => {
    let DB = require('./DB'),
        posts = await DB.buscar('post');

    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].content);
    };
    process.exit();
})();
