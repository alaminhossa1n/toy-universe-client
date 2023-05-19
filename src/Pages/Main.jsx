import { Outlet } from "react-router-dom";
import NavBar from "./Shared/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Main;