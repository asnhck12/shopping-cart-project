import './Header.css';
import basket from "/src/assets/cart.svg";
import { Link } from 'react-router-dom';

function Header () {

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
                    <img src={basket}/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Header