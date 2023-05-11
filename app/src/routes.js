import React from "react";
import { Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";

import TestingPage from "./pages/TestingPage";
import TestingPage2 from "./pages/TestingPage2";
import UserM from "./pages/UserMainPage";
import Login_Register_Page from "./pages/Login_Register_Page";
import TeacherM from "./pages/TeacherMainPage";

const routes = ({ auth }) => [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <TestingPage /> },
            { path: "/student", element: <UserM /> },       //Sorry for messing with your routes
            { path: "/teacher", element: <TeacherM /> },    
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
            
        ],
        }


    
]

export default routes;