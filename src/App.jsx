import React, { useEffect } from "react";
import Login from "./Pages/Auth/Login";
import ProductPage from "./Pages/User/ProductPage";
import DetailPage from "./Pages/User/DetailPage";
import UserLayout from "./Layouts/UserLAyout/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Layouts/AuthLayout";
import Signup from "./Pages/Auth/Signup";
import { checkAuthorization, login } from "./Store/UserSlice";
import { useDispatch } from "react-redux";
const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: "",
                element: <ProductPage />,
            },
            {
                path: "/product/:id",
                element: <DetailPage />,
            },
        ],
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);
const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuthorization());
    }, []);

    return (
        <>
            <ToastContainer
                style={{ width: "auto", minWidth: "340px", maxWidth: "450px" }}
                position={"bottom-right"}
                bodyStyle={{ color: "#756f86" }}
            />
            <RouterProvider router={router} />
        </>
    );
};

export default App;
