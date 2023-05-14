import React from "react";
import { Navigate } from "react-router-dom";

const Login = () => {

    return (
        <>
            <div className="flex flex-col items-center h-screen">
                <div className="hero mt-20 rounded-xl bg-white/5 backdrop-blur-sm">
                    <div className="hero-content flex-col lg:flex-row-reverse  rounded-xl">
                        <div className="text-center lg:text-left px-10">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Unlock a world of linguistic possibilities and embark on a journey of language mastery. Join our community and discover the joy of learning languages, one word at a time.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent/30 shadow-xl">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="example@gmail.com" className="bg-white/95 placeholder-gray-500 input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="bg-white/95 placeholder-gray-500 input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;