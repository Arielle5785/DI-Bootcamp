// const obj = require("./products.js")
const {products} = require("./products.js")

const searchProd = (productName) => {
    for (const product of products) {
        if (productName === product.name) { // Use '===' for comparison
            return product; // Return the product if found
        }
    }
}
    
console.log(searchProd('almonds'))
console.log(searchProd('peanuts'))
console.log(searchProd('t-shirt'))

