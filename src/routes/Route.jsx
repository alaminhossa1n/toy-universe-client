import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivetRouts from "./PrivetRouts";
import UpdateToy from "../Pages/MyToys/UpdateToy";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import Blog from "../Pages/Blog";

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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'add-toy',
                element: <PrivetRouts><AddToy></AddToy></PrivetRouts>
            },
            {
                path: 'all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: 'my-toys',
                element: <PrivetRouts><MyToys></MyToys></PrivetRouts>
            },
            {
                path: 'my-toys/:id',
                element: <UpdateToy></UpdateToy>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: 'toy-details/:id',
                element: <ToyDetails></ToyDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ]
    }
])

export default router;