const express = require('express')
const app = express()


const cors = require('cors');
app.use(cors())

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});



// Serve the HTML file
app.use(express.static('public'));

// GET route to fetch emoji data
app.get('/api/emojis', (req, res) => {
    res.json(emojis); // Send the emojis data to the client
});

// POST route to receive scores
app.post('/api/score', (req, res) => {
    const { score } = req.body;
    console.log(`Score received: ${score}`);
    res.status(200).send('Score saved successfully!');
});

