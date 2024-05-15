import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ShopPage from './modules/ShopPage/ShopPage.jsx'
import HomePage from './modules/HomePage/HomePage.jsx'
import App from './App.jsx'
import CartPage from './modules/Cart/CartPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element:<HomePage />},
      {path: "shop", element: <ShopPage />},
      {path: "cart", element: <CartPage />}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
