// import { useState } from 'react'
import Header from './modules/Header/Header.jsx'
// import HomePage from './modules/HomePage/HomePage.jsx'
import Footer from './modules/Footer/Footer.jsx'
import './App.css'
// import ShopPage from './modules/ShopPage/ShopPage.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default App
