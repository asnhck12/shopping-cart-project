import App from "./App"
import ShopPage from "./modules/ShopPage/ShopPage"
import CartPage from "./modules/Cart/CartPage"
import HomePage from "./modules/HomePage/HomePage"

const routesConfig = ([
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

  export default routesConfig