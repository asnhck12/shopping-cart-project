import {useState, useEffect} from "react";
import "./ShopPage.css";

function ShopPage () {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState('1');
    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const responseData = await response.json();
                setProducts(responseData);

                const initialQuantities = {};
                responseData.forEach(product => {
                    initialQuantities[product.id] = 1;
                });
                setQuantities(initialQuantities);
            } catch (error) {
                console.log("Error fetching product data:", error);

            }
        };

        fetchProducts();
    }, []);

    const plusClick = (productID) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productID]: prevQuantities[productID] + 1
        }));
    }

    const minusClick = (productID) => {
        if (quantities[productID] > 1) {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productID]: prevQuantities[productID] - 1
        }));
    }
};

    const addToCart = (productID, quantity, pricing) => {
        const newArray = {item: productID, quantity: quantity, price: pricing};
        setAddedItems(list => [...list, newArray]);
        console.log(addedItems);
    }

    return (
        <>
        <div className="shopSection">
            {products.map((product) => (
                <div key={product.id} className="productCard">
                    <img src = {product.image} alt={product.title} className="productImg"/>
                    <p>{product.title}</p>
                    <p>£{product.price}</p>
                    <div className="purchasingSection">
                        <div className="purchase">
                            <button className="decrease" onClick={() => minusClick(product.id)}>-</button>
                            <input className="quantityValue" value={quantities[product.id]} readOnly />
                            <button className="increase" onClick={() => plusClick(product.id)}>+</button>
                            </div>
                            <div className="add">
                                <button className="addToCart" onClick={() => addToCart(product.id, quantities[product.id],product.price)}>Add to Cart</button>
                                </div>
                                </div>
                                </div> 
                            ))}
        </div>
        </>
    )
}

export default ShopPage