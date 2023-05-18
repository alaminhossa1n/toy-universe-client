import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const { createUser, profileUpdate } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;

        createUser(email, password)
            .then(result => {
                e.target.reset()
                const createdUser = result.user;
                navigate('/');

                profileUpdate(createdUser, {
                    displayName: `${name}`, photoURL: `${photoUrl}`
                })
                    .then(() => {

                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                setError(error.message);
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-medium text-center mb-6">Sign Up</h2>

                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block mb-2 text-sm font-medium text-gray-700">
                            Photo Url
                        </label>
                        <input
                            type="ulr"
                            name="photoUrl"
                            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            required
                        />
                    </div>
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
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;