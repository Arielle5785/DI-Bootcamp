import{useState, useEffect} from "react"
const Shop = (props){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const products = [
            { id: 1, name: 'iPhone19', proce: 1000 },
            { id: 1, name: 'iPhone19', proce: 1000 },
        ]
        setProducts(products)
    });
   
    return (
        <>
            <h2>My Shop</h2>
            {products.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <Link to={`/product/${item.id}`}>buy now</Link>
                    </div>
                );
            })}
        </>
    );
}
export default Shop