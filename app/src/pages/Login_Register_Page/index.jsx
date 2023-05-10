import React from "react";
import { useStudentStore } from "../../stores/useStudentStore";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";


const Login_Register_Page = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    console.log(activeTab)
    return (
        <>
            <div className="flex flex-col items-center h-screen">
                <div className="tabs">
                    <a className={`tab tab-bordered ${activeTab === 0 ? "tab-active" : ""}`} onClick={() => handleTabChange(0)}>Login</a>
                    <a className={`tab tab-bordered ${activeTab === 1 ? "tab-active" : ""}`} onClick={() => handleTabChange(1)}>Register</a>
                </div>
                <div style={{margin: "2rem", width: "80%"}}>
                    {activeTab === 0 ? (
                        <Login />
                    ) : (
                        <Register />
                    )}
                </div>
            </div>
        </>

    );
};


export default Login_Register_Page;