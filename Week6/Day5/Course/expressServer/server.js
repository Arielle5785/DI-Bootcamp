const express = require('express')
const cors = require('cors');
app.use(cors())
const { products } = require{ './data/data.js'}
console.log(products);

const app = express();

app.use('/', express.static(__dirname+'/expressServer'))
const PORT = 3003
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
    
});
/**app.get
 * app.post
 * app.delete
 * 
 */
const users = [
    { name: 'John', email: 'jjj@gail.com' },
    { name: 'Anne', email: 'aaa@gail.com' },
    { name: 'Mary',email:'mmm@gail.com'}
]
app.get('/users', (req, res) => {
    // res.send('<h2>ggayiar<?\/h2>')
    res.json(users)
    }
)