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
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://toy-universe-server.vercel.app/toys')
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
                loader: ({ params }) => fetch(`https://toy-universe-server.vercel.app/toys/${params.id}`)
            },
            {
                path: 'toy-details/:id',
                element: <PrivetRouts><ToyDetails></ToyDetails></PrivetRouts>,
                loader: ({ params }) => fetch(`https://toy-universe-server.vercel.app/toys/${params.id}`)
            }
        ]
    }
])



export default router;