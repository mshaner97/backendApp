const express = require('express');

const app = express();

const posts = require('./posts.json')

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/users/:id', function (req, res) {
    const userId = parseInt(req.params.id);
    const userPosts = posts.filter(post => post.userId === userId);
    res.send(userPosts);
});
app.listen(port, () => console.log('Example app listening on port 3000'));