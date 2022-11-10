import Main from "../components/layouts/Main";
import Home from "../components/pages/HomePage/Home/Home";
import Login from "../components/pages/Login/Login";
import SignUp from "../components/pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            }

        ]
    }
])