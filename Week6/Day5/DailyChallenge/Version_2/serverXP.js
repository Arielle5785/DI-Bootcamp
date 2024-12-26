const express = require('express');
const cors = require('cors');
const { emojis, getRandomEmojiOptions } = require('./config/emoji_2.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = 5000;

// GET route to fetch emoji data
app.get('/api/emojis', (req, res) => {
    const randomEmojiOptions = getRandomEmojiOptions(emojis);
    res.send(randomEmojiOptions);
});

// POST route to receive scores
app.post('/api/score', (req, res) => {
    const { score } = req.body;
    console.log(`Score received: ${score}`);
    res.status(200).send('Score saved successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
