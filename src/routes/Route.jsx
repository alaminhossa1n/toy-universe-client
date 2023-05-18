import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";

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
                path: 'add-toy',
                element: <AddToy></AddToy>
            },
            {
                path: 'all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: 'my-toys',
                element: <MyToys></MyToys>
            }
        ]
    }
])

export default router;