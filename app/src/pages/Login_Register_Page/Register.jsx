import React from 'react';

const Register = () => {
    return (
        <>
            <div className="flex flex-col items-center h-screen">
                <div className="flex flex-col items-center h-screen">
                    <div className="hero mt-20 bg-white/5 rounded-xl backdrop-blur-sm">
                        <div className="hero-content flex-col lg:flex-row-reverse rounded-xl">
                            <div className="text-center lg:text-left px-10">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                                <p className="py-6">Unlock a world of linguistic possibilities and embark on a journey of language mastery. Join our community and discover the joy of learning languages, one word at a time.</p>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent/30 shadow-xl">
                                <div className="card-body">

                                    <div className="form-control inline">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Stefen" style={{ width: "47%" }} className="input input-bordered mr-2 bg-white/95 placeholder-gray-500" required />
                                        <input type="text" placeholder="Jonhson" style={{ width: "47%" }} className="input w-20 input-bordered bg-white/95 placeholder-gray-500" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="example@gmail.com" className="input input-bordered bg-white/95 placeholder-gray-500" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered bg-white/95 placeholder-gray-500" />
                                        <label className="label">
                                            <span className="label-text">Repeat Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered bg-white/95 placeholder-gray-500" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Nationality</span>
                                        </label>
                                        <input type="text" placeholder="Portuguese" className="input input-bordered bg-white/95 placeholder-gray-500" />
                                    </div>
                                    <div className="inline-flex justify-center ">
                                        <div className="form-control mt-6 mr-2" style={{ width: "40%" }}>
                                            <button className="btn btn-primary" >Login as a Student</button>
                                        </div>
                                        <div className="form-control mt-6" style={{ width: "40%" }}>
                                        <button className="btn btn-primary">Login as a Teacher</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;