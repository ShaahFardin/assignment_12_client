import AllBuggattiCard from "../Components/Card/AllBuggattiCard";
import DashboardLayout from "../Layout/DashboardLayout";
import AllBuggatti from "../Pages/AllBuggatti/AllBuggatti";
import AllVolkswagen from "../Pages/AllVolkswagen/AllVolkswagen";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");
const { default: Login } = require("../Pages/Home/Login/Login");
const { default: Registration } = require("../Pages/Home/Login/Registration");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/registration',
                element: <Registration/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/category/volkswagen',
                element: <PrivateRoute><AllVolkswagen/></PrivateRoute>
            },
            {
                path: '/category/buggatti',
                element: <PrivateRoute> <AllBuggatti></AllBuggatti></PrivateRoute>
            },
        ]
    },
    {
       path: '/dashboard',
       element: <PrivateRoute><DashboardLayout/></PrivateRoute> ,
       children: [
        {
            path: '/dashboard',
            element: <MyOrders></MyOrders>
        },
        {
            path: '/dashboard/allusers',
            element: <AllUsers></AllUsers>
        },
        {
            path: '/dashboard/addproduct',
            element: <AddProduct/>
        },
        {
            path: '/dashboard/myproducts',
            element: <MyProducts></MyProducts>
        }
       ]
    }
])
export default router;