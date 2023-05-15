import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
const Layout = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="mx-auto w-full flex-grow ">
                <Outlet />
            </div>
            <Footer />
        </div>
        </>
    );
};

export { Layout as default };
