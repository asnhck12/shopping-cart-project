import { useOutletContext } from "react-router-dom"
import './CartPage.css';

function CartPage() {
    const {addedItems} = useOutletContext();

    console.log(addedItems);

    const getTotalCost = () => {
         const totalCost = addedItems.reduce((total, item) => total + item.quantity * item.price, 0)
         return parseFloat(totalCost).toFixed(2);
    }


    return (
        <div className="main">
        <div className="cartMain">
            <h2> Shopping Cart</h2>
            {addedItems.length === 0 ? (
                <p>Your cart is empty</p>
            ): (
                <>
                <div className="cartListHeaders">
                        <div className="imgHeader">
                            <h3>Product</h3>
                        </div>
                        <div className="detailsHeader">
                            <div className="quantityHeader">
                            <h3>Quantity</h3>
                            </div>
                            <div className="unitPriceHeader">
                                <h3>Unit Price</h3>
                            </div>
                            <div className="totalUnitPriceHeader">
                                <h3>Total Price</h3>
                            </div>
                        </div>
                    </div>
                {addedItems.map((item, index) => (
                    <div className="cartList" key={index}>
                            <div className="cartImage">
                                <img src={item.image} />
                            </div>
                            <div className="cartListDetail">
                                <div className="quantity">
                                    {item.quantity} </div>
                                <div className="unitPrice">£{parseFloat(item.price).toFixed(2)}</div>
                                <div className="totalUnitPrice"> £{parseFloat(item.quantity * item.price).toFixed(2)}
                                </div>
                            </div>
                        </div>
                ))}
                <div className="totalAmount">
                    <h3 className="overallTotalText">Total</h3>
                    <h3 className="overallTotal">£{getTotalCost()}</h3>           
                    </div>
                    <div className="payButton">
                        <button className="button">Checkout</button>
                        </div>
            </>
            )}
            
        </div>
        </div>
    )
}

export default CartPage;