import React from "react";
import { Navigate } from "react-router-dom";

import Layout, { CleanLayout } from "./layouts/Layout";

import TestingPage from "./pages/TestingPage";
import TestingPage2 from "./pages/TestingPage2";
import UserM from "./pages/UserMainPage";
import LoginPage from "./pages/LoginPage";

const routes = ({ noNav, auth }) => [
    {
        path: "/",
        element: noNav ? <CleanLayout /> : <Layout />,
        children: [
            { path: "/", element: <TestingPage /> },
            { path: "*", element: <Navigate to="/" /> },
        ],
    },
    {
        path: "/",
        element: !auth ? <Layout /> : <Navigate to="/" />,
        children: [
            { path: "/login", element: <LoginPage /> },
            { path: "/profile", element: <TestingPage2 /> },
            { path: "/main", element: <UserM /> },
        ],
    },
    {

    }


    
]

export default routes;