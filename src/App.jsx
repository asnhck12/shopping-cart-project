import { useState } from 'react'
import Header from './modules/Header/Header.jsx'
import Footer from './modules/Footer/Footer.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [addedItems, setAddedItems] = useState([]);

  //Stores the shopping list items, quantity and price across the components
  const addItemToCart = (items) => {
    setAddedItems(items);
};

  return (
    <>
    <div className='fullDisplay'>
      <Header items={addedItems}/>
      <Outlet context={{ addedItems, addItemToCart }}/>
      <Footer/>
      </div>
    </>
  )
}

export default App;