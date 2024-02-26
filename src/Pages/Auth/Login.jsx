import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/UserSlice";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const dispatch = useDispatch();
    // const { error, loading } = useSelector((state) => state.user);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        dispatch(login(input));
    };

    return (
        <div className="mt-5">
            <div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                        Email Address
                    </label>
                    <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mt-6">
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm text-gray-600 ">
                            Password
                        </label>
                        <div className="text-sm cursor-pointer text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">
                            Forgot password?
                        </div>
                    </div>

                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>

                <div className="mt-6">
                    <button
                        onClick={handleSubmit}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                    >
                        Sign in
                    </button>
                </div>
            </div>

            <p className="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?{" "}
                <Link to="/signup" className="text-blue-500 focus:outline-none focus:underline hover:underline">
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;
