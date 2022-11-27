import DashboardLayout from "../Layout/DashboardLayout";
import AllBuggatti from "../Pages/AllBuggatti/AllBuggatti";
import AllTrucks from "../Pages/AllTrucks/AllTrucks";
import AllVolkswagen from "../Pages/AllVolkswagen/AllVolkswagen";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Blogs from "../Pages/Home/Blogs/Blogs";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
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
        errorElement: <DisplayError/>,
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
                path: '/blogs',
                element: <Blogs></Blogs>

            },
        
            {
                path: '/category/volkswagen',
                element: <PrivateRoute><AllVolkswagen/></PrivateRoute>
            },
            {
                path: '/category/buggatti',
                element: <PrivateRoute> <AllBuggatti></AllBuggatti></PrivateRoute>
            },
            {
                path: '/category/nissan',
                element: <PrivateRoute> <AllTrucks></AllTrucks></PrivateRoute>
            },
        ]
    },
    {
       path: '/dashboard',
       element: <PrivateRoute><DashboardLayout/></PrivateRoute> ,
       errorElement: <DisplayError/>,
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
        },
        {
            path: '/dashboard/payment/:id',
            loader: ({params})=> fetch(`https://server-ivory-alpha.vercel.app/bookings/${params.id}`),
            element: <Payment></Payment>
        }
       ]
    }
])
export default router;