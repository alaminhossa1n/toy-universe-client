import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut();
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all-toys'>All Toys</Link></li>
        <li><Link to='/my-toys'>My Toys</Link></li>
        <li><Link to='/add-toy'>Add A Toy</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {/* {
            user && <li><Link to='/bookings'>My Bookings</Link></li>
        } */}
    </>


    return (
        <div className="navbar bg-[#37306B] h-20 text-white px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="">
                    <div className="text-white font-bold flex gap-3 items-center">
                        <img className='w-16' src={logo} alt="" />
                        <p className="text-lg">Toy Universe</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className={user?.displayName ? 'tooltip tooltip-bottom' : ''} data-tip={user?.displayName}>

                    {
                        user && <img className=" h-12 w-12 rounded-full" src={user.photoURL} alt="" />
                    }
                </div>

                <div className='ms-3'>
                    {
                        user ? <button onClick={handleLogout} className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Sign Out</button> : <Link to='/login'><button className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;