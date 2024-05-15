import { useState } from 'react'
import Header from './modules/Header/Header.jsx'
import Footer from './modules/Footer/Footer.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [addedItems, setAddedItems] = useState([]);

  const addItemToCart = (items) => {
    setAddedItems(items);
};

  return (
    <>
    <div>
      <Header items={addedItems}/>
      <Outlet context={{ addedItems, addItemToCart }}/>
      <Footer/>
      </div>
    </>
  )
}

export default App;