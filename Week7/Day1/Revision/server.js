const express = require('express')
const app = express();
const cors = require('cors')
app.use('cors')


const PORT = 3000;
app.listen(PORT, (req, res) => {
    console.log(`run on ${PORT}`);
});
    
const users = [
    { name: 'John', email: 'jjj@gmail.com' },
    { name: 'Anne', email: 'aaa@gmail.com' },
    {name:'Mary', email:'mmm@gmail.com'}
]