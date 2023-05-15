import React from "react";
import { Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";

import TestingPage from "./pages/TestingPage";
import TestingPage2 from "./pages/TestingPage2";
import UserM from "./pages/UserMainPage";
import Announce from "./pages/Announcement";
import Login_Register_Page from "./pages/Login_Register_Page";
import TeacherM from "./pages/TeacherMainPage";
import LandingPage from "./pages/LandingPage";
import StudentSettings from "./pages/StudentSettings";
import TeacherSettings from "./pages/TeacherSettings";
import TeacherAnnounce from "./pages/TeacherAnnounce";

const routes = ({ logged_in, is_student }) => [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <LandingPage /> },
            { path: "*", element: <Navigate to="/" />}
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
            { path: "/homepage", element: (is_student) ? <UserM /> : <TeacherM /> }, 
            { path: "/announce", element: <Announce />}, 
            { path: "/settings", element: (is_student) ? <StudentSettings /> : <TeacherSettings /> },
            { path: "/profile", element: (is_student) ? <TestingPage2 /> : <TestingPage2 /> },            
        ],
    },
    
]

export default routes;