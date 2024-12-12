const express = require('express')
const app = express();
const cors = require('cors');
app.use(cors());

const {fetchPosts} = require('./data/dataService.js') 

const PORT = 5000;
app.listen = (PORT, () => {
    console.log(`run on ${PORT}`);
});

app.get('/api/posts', async (req, res) => {
    try {
        const post = await fetchPosts();
        console.log('Posts successfully retrieved and sent as a response.');
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ msg: 'Post not found' })
    }
});


