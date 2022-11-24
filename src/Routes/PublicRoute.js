import AllBuggattiCard from "../Components/Card/AllBuggattiCard";
import AllBuggatti from "../Pages/AllBuggatti/AllBuggatti";
import AllVolkswagen from "../Pages/AllVolkswagen/AllVolkswagen";

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
                element: <AllVolkswagen/>
            },
            {
                path: '/category/buggatti',
                element: <AllBuggatti></AllBuggatti>
            },
        ]
    }
])
export default router;