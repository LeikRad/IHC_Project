import React from "react";
import { useUserStore } from "../../stores/useUserStore";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Footer from "../../layouts/Footer";

const Login_Register_Page = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    return (
        <>
            <div className="flex flex-col justify-center text-center items-center h-[calc(100vh-65.5px)] backdrop-blur-[100px]">
                <div className="flex flex-col pt-10 items-center h-screen">
                    <div className="tabs scale-150 font-bold">
                        <a
                            className={`tab tab-bordered ${
                                activeTab === 0
                                    ? "tab-active text-primary-content"
                                    : "text-black/20"
                            }`}
                            onClick={() => handleTabChange(0)}
                        >
                            <span className="scale-125">Login</span>
                        </a>
                        <a
                            className={`tab tab-bordered ${
                                activeTab === 1
                                    ? "tab-active text-primary-content"
                                    : "text-black/20"
                            }`}
                            onClick={() => handleTabChange(1)}
                        >
                            <span className="scale-125">Register</span>
                        </a>
                    </div>

                    <div style={{ margin: "1rem", width: "80%" }}>
                        {activeTab === 0 ? <Login /> : <Register />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login_Register_Page;
