import React from "react";
import { Navigate } from "react-router-dom";

import Layout, { CleanLayout } from "./layouts/Layout";

import TestingPage from "./pages/TestingPage";
import TestingPage2 from "./pages/TestingPage2";
import LeftPanel from "./pages/LeftPanel";

const routes = ({ noNav }) => [
    {
        path: "/",
        element: noNav ? <CleanLayout /> : <Layout />,
        children: [
            { path: "/", element: <TestingPage /> },
            { path: "/profile", element: <TestingPage2 /> },
            { path: "/", element: <LeftPanel/>},
            { path: "*", element: <Navigate to="/" /> },
        ],
    }
]

export default routes;