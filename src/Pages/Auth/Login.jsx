import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const handleEmailLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                navigate(from, { replace: true })

            })
            .catch(error => {
                setError('Invalid Email OR Password');
            })

    };

    const handleGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-medium text-center mb-6">Log In</h2>

                <form onSubmit={handleEmailLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                    >
                        Log In
                    </button>
                </form>

                <div className="flex items-center justify-between mt-6">
                    <hr className="w-1/3 border-gray-300" />
                    <span className="text-sm text-gray-500">or</span>
                    <hr className="w-1/3 border-gray-300" />
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full mt-6 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-500"
                >
                    Log In with Google
                </button>
                <div className="mt-6 text-center">
                    <p>Don’t have an account? <span className="text-blue-400"><Link to='/signup'>Sign Up Now!</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;