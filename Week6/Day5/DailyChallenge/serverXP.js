const express = require('express')
const app = express()


const cors = require('cors');
app.use(cors())

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});