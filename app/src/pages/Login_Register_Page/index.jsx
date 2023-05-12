import React from "react";
import { useStudentStore } from "../../stores/useStudentStore";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Footer from "../../components/Footer";


const Login_Register_Page = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (index) => {
        setActiveTab(index);
    };

    console.log(activeTab)
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(https://wallpaperaccess.com/full/1155165.png)` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="flex flex-col py-8 items-center h-screen">
                    <div className="tabs scale-150 font-bold">
                        <a className={`tab tab-bordered ${activeTab === 0 ? "tab-active text-primary" : "text-secondary/70"}`} onClick={() => handleTabChange(0)}><span className="text-dark scale-125">Login</span></a>
                        <a className={`tab tab-bordered ${activeTab === 1 ? "tab-active text-primary" : "text-secondary/70"}`} onClick={() => handleTabChange(1)}><span className="scale-125">Register</span></a>
                    </div>

                    <div style={{ margin: "1rem", width: "80%" }}>
                        {activeTab === 0 ? (
                            <Login />
                        ) : (
                            <Register />
                        )}
                    </div>
                    
                </div>
                
            </div>
            <Footer />
        </>

    );
};


export default Login_Register_Page;