import Main from "../components/layouts/Main";
import AllServices from "../components/pages/AllServices/AllServices";
import Blogs from "../components/pages/Blogs/Blogs";
import Home from "../components/pages/HomePage/Home/Home";
import Login from "../components/pages/Login/Login";
import NotFound from "../components/pages/NotFound/NotFound";
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
            },
            {
                path:"/services",
                element:<AllServices></AllServices>
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>
            },
            {
                path:"*",
                element:<NotFound/>
            }

        ]
    }
])