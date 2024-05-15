import hero from "/src/assets/homepage_hero.jpg";
import './HomePage.css';

function HomePage () {
    
    return (
    <>
    <div className="heroSection">
        <div className="hero">
        <img src={hero}/>
                </div>
    <p>Welcome to ShopHere, we have great items for great prices!</p>
    </div>
    </>
    )
}

export default HomePage