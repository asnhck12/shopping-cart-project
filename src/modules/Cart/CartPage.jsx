import { useOutletContext } from "react-router-dom"
import './CartPage.css';

function CartPage() {
    const {addedItems} = useOutletContext();

    console.log(addedItems);

    const getTotalCost = () => {
         const totalCost = addedItems.reduce((total, item) => total + item.quantity * item.price, 0)
         return parseFloat(totalCost).toFixed(2);
    }

    const totalQuantity = () => {
        const total = addedItems.reduce((total, item) => total + item.quantity, 0)
        console.log("header total: " + total)
        return parseInt(total);
   }

    // console.log(getTotalCost());

    return (
        
        <div>
            <h2> Shopping Cart</h2>
            {addedItems.length === 0 ? (
                <p>Your cart is empty</p>
            ): (
                <>
            <ul>
                {addedItems.map((item, index) => (
                    <li key={index}>
                        <div className="cartImages">
                        <img src={item.image} />
                        </div>
                        Item: {item.item}, Quantity: {item.quantity}, Price: £{parseFloat(item.price).toFixed(2)}, Subtotal: £{parseFloat(item.quantity * item.price).toFixed(2)}
                    </li>
                ))}
            </ul>
            <h3>Total Cost: £{getTotalCost()}</h3>
            <h3>Total quantity: {totalQuantity()}</h3>            
            <button>Pay Now</button>
            </>
            )}
            
        </div>
    )
}

export default CartPage;