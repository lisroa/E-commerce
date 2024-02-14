import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home/Index";
//import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder/Index.jsx";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
//import SignIn from "../SignIn";
import NavBar from "../../Components/NavBar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/men's-clothing", element: <Home /> },
    { path: "/women's-clothing", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/jewelery", element: <Home /> },
    {
      /*path: "/my-account", element: <MyAccount/> */
    },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/*", element: <NotFound /> },
    {
      /*path: "/sign-in", element: <SignIn/>*/
    },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
