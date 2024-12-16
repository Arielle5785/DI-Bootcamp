const express = require('express');
const cors = require('cors');
app.use(cors());
const app = express();

app.use('/', express.static(__dirname+'/expressServer'))
const PORT = 3003
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
    
});