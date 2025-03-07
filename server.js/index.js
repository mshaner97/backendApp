const express = require('express');

const app = express();

const posts = require('../posts.json')

const port = 5000

app.use(express.json());

let favorites = [];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/gifs', (req, res) => {
    res.json({ gifs: [/* array of gif objects */] });
  });
  app.get('/users/:id', function (req, res) {
    const userId = parseInt(req.params.id);
    const userPosts = posts.filter(post => post.userId === userId);
    res.send(userPosts);
});

app.get('/api/favorites', (req, res) => {
    res.json(favorites);
});

app.post('/api/favorites', (req, res) => {
    const newFavorite = req.body;
    favorites.push(newFavorite);
    res.status(201).json(newFavorite);
});

app.delete('/api/favorites/:id', (req, res) => {
    const id = req.params.id;
    favorites = favorites.filter(fav => fav.id !== id);
    res.status(204).send();
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));