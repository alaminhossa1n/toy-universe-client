import { Outlet } from "react-router-dom";
import NavBar from "./Shared/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "./Shared/Footer";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div><Toaster/></div>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;