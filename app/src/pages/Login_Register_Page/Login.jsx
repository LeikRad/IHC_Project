import React from "react";
import { Navigate } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";
import { useState } from "react";

const Login = () => {
    const accounts = useUserStore((state) => state.accounts);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const check_login = () => {
        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].email === email && accounts[i].password === password) {
                
                useUserStore.getState().login(email, password);
                return true;
            }
        }
    }
    return (
        <>
            <div className="hero mt-20 rounded-xl bg-secondary/20">
                <div className="hero-content flex-col lg:flex-row-reverse  rounded-xl">
                    <div className="text-center lg:text-left px-10">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Unlock a world of linguistic possibilities and
                            embark on a journey of language mastery. Join our
                            community and discover the joy of learning
                            languages, one word at a time.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent/30 shadow-xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@gmail.com"
                                    className="bg-white/95 placeholder-gray-500 input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-white/95 placeholder-gray-500 input input-bordered"
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
