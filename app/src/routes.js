import React from "react";
import { Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";

import TestingPage from "./pages/TestingPage";
import TestingPage2 from "./pages/TestingPage2";
import UserM from "./pages/UserMainPage";
import Login_Register_Page from "./pages/Login_Register_Page";
import TeacherM from "./pages/TeacherMainPage";
import LandingPage from "./pages/LandingPage";

const routes = ({ logged_in, is_student }) => [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <LandingPage /> },
            { path: "/student", element: <UserM /> },       //Sorry for messing with your routes
            { path: "/teacher", element: <TeacherM /> },    
        ],
    },
    {
        path: "/",
        element: !logged_in ? <Layout /> : <Navigate to="/" />,
        children: [
            { path: "/login", element: <Login_Register_Page /> },
        ],
    },
    {
        path: "/",
        element: logged_in ? <Layout /> : <Navigate to="/" />,
        children: [
            { path: "/profile", element: (is_student) ? <TestingPage2 /> : <TestingPage />},
            
        ],
    },
]

export default routes;