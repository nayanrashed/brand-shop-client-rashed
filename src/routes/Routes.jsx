import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import MyAccount from "../pages/MyAccount/MyAccount";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('/data.json'),
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/mycart')
        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/myaccount',
        element:<PrivateRoute><MyAccount></MyAccount></PrivateRoute>,
      },
      {
        path:'/branddeatils/:brandName',
        element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/updateproduct/:id',
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: 'products/:id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      }
    ],
  },
]);
export default router;
