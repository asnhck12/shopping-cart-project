import './Header.css';
import basket from "/src/assets/cart.svg";
import { Link } from 'react-router-dom';

function Header ({items}) {

    //displays total number of items in the basket
    const totalQuantity = () => {
        const total = items.reduce((total, item) => total + item.quantity, 0)
        return parseInt(total);
   }

    return (
        <>
        <div className="header">
            <div className="logo">
                <h1>Shop<br />
                Here</h1>
            </div>
            <div className="navBar">
                <div className="homeButton">
                    <Link to='/'>Home</Link>
                </div>
                <div className="shopButton">
                    <Link to='shop'>Shop</Link>
                </div>
                <div className="shoppingCart">
                    <Link to='cart'><img src={basket} alt="Shopping Cart"/>
                    <p className='itemsCount'>{totalQuantity()}</p></Link>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Header