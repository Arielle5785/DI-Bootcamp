const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())

app.use(express.json())

const {products} = require ('./products.js')
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

app.post("/api/products", (req, res) => {
    const newPoduct = {
        id: products.length + 1,
        ame: req.body.name,
        price: req.body.price,
    };
    products.push(newProduct);
  res.status(201).json(newProduct);
});
