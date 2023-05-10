import React from "react";
import { Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";

import TestingPage from "./pages/TestingPage";
import TestingPage2 from "./pages/TestingPage2";
import UserM from "./pages/UserMainPage";
import Login_Register_Page from "./pages/Login_Register_Page";

const routes = ({ auth }) => [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <TestingPage /> },
            { path: "*", element: <Navigate to="/" /> },
        ],
    },
    {
        path: "/",
        element: !auth ? <Layout /> : <Navigate to="/" />,
        children: [
            { path: "/login", element: <Login_Register_Page /> },
        ],
    },
    {
        path: "/",
        element: auth ? <Layout /> : <Navigate to="/" />,
        children: [
            { path: "/profile", element: <TestingPage2 /> },
            { path: "/profile", element: <TestingPage2 /> },
            { path: "/main", element: <UserM /> },
        ],
        }


    
]

export default routes;