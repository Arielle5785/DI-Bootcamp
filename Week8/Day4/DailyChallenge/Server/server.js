import express from 'express';
const app = express();
app.use(express.json());

import cors from 'cors';
app.use(cors());

// Define the /api/hello route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  const { inputValue } = req.body; // Extract inputValue from the request body
  res.json({ message: `I received your POST request. This is what you sent me: ${inputValue}` });
});


const PORT = 5009;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
