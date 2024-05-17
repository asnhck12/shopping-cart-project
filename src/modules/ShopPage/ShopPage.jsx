import {useState, useEffect} from "react";
import "./ShopPage.css";
import { useOutletContext } from "react-router-dom";

function ShopPage () {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const { addedItems, addItemToCart } = useOutletContext();

    
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
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productID]: prevQuantities[productID] + 1,
        }));
    }

    const minusClick = (productID) => {
        if (quantities[productID] > 1) {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productID]: prevQuantities[productID] - 1,
        }));
    }
};

    const addToCart = (image, productID, quantity, price) => {
        const existingItem = addedItems.find((item) => item.item === productID);

        if (existingItem) {
            const updatedItems = addedItems.map((item) =>
            item.item === productID
        ? { ...item, quantity: item.quantity + quantity}
    : item);
    addItemToCart(updatedItems);
}
 else {
    const newArray = {image: image,item: productID, quantity: quantity, price: price};
    addItemToCart([...addedItems, newArray]);
}}

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
                                <button className="addToCart" onClick={() => addToCart(product.image, product.id, quantities[product.id],product.price)}>Add to Cart</button>
                                </div>
                                </div>
                                </div> 
                            ))}
        </div>
        </>
    )
}

export default ShopPage