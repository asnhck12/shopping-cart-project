import './Header.css';
import basket from "/src/assets/cart.svg";

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
                    Home
                </div>
                <div className="shopButton">
                    Shop
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