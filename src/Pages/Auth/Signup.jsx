import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignUp } from "../../Store/UserSlice";

const Signup = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        username: "",
        fullname: "",
    });
    const dispatch = useDispatch();

    const { error, loading } = useSelector((state) => state.user);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        dispatch(SignUp(input)).then((res) => console.log("response in signup page", res.payload));
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
                </div>{" "}
                <div className="mt-4">
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                        User Name
                    </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="username"
                        id="username"
                        placeholder="User Name"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>{" "}
                <div className="mt-4">
                    <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm text-gray-600 ">
                            Password
                        </label>
                    </div>

                    <input
                        onChange={handleChange}
                        autoComplete="on"
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mt-6">
                    <button
                        onClick={handleSubmit}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:bg-green-400 focus:ring focus:ring-green-300 focus:ring-opacity-50"
                    >
                        Sign up
                    </button>
                </div>
            </div>

            <p className="mt-6 text-sm text-center text-gray-400">
                Already have an account ?{" "}
                <Link to="/login" className="text-blue-500 focus:outline-none focus:underline hover:underline">
                    Sign in
                </Link>
                .
            </p>
        </div>
    );
};

export default Signup;
