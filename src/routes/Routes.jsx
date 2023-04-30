import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import Login from "../pages/Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms/Terms";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/terms",
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path: "/",
                element: <Category></Category>, 
                loader: () => fetch('http://localhost:5000/news')
                
            },
            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]

    },
    {
        path: "/news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: "/news/:id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])