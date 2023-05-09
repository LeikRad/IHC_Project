import React from "react";
import { Navigate } from "react-router-dom";

import Layout, { CleanLayout } from "./layouts/Layout";

import TestingPage from "./pages/TestingPage";
import TestingPage2 from "./pages/TestingPage2";
import UserM from "./pages/UserMainPage";


const routes = ({ noNav }) => [
    {
        path: "/",
        element: noNav ? <CleanLayout /> : <Layout />,
        children: [
            { path: "/", element: <TestingPage /> },
            { path: "/profile", element: <TestingPage2 /> },
            { path: "/main", element: <UserM />},
            { path: "*", element: <Navigate to="/" /> },
        ],
    }
]

export default routes;