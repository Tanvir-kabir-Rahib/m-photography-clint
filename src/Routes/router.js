import Main from "../components/layouts/Main";
import AddService from "../components/pages/AddService/AddService";
import AllServices from "../components/pages/AllServices/AllServices";
import Blogs from "../components/pages/Blogs/Blogs";
import Home from "../components/pages/HomePage/Home/Home";
import Login from "../components/pages/Login/Login";
import MyReviews from "../components/pages/MyReviews/MyReviews";
import NotFound from "../components/pages/NotFound/NotFound";
import SignUp from "../components/pages/SignUp/SignUp";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                path:"/services/:id",
                element:<ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://m-photo-server.vercel.app/services/${params.id}`)
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>
            },
            {
                path:"/my_reviews",
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:"/add_services",
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:"*",
                element:<NotFound/>
            }

        ]
    }
])