import React from "react";
import { useUserStore } from "../../stores/useUserStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDatabaseStore } from "../../stores/useDatabaseStore";

const Register = () => {
    const [first_name, set_first_name] = useState("");
    const [last_name, set_last_name] = useState("");
    const [email, set_email] = useState("");
    const [password, set_password] = useState("");
    const [confirm_password, set_confirm_password] = useState("");
    const [nationality, set_nationality] = useState("");
    const accounts = useUserStore((state) => state.accounts);

    const LanguagesAvailable = useDatabaseStore((state) => state.LanguagesAvailable);

    const change_first_name = (e) => {
        set_first_name(e.target.value);
    };

    const change_last_name = (e) => {
        set_last_name(e.target.value);
    };

    const change_email = (e) => {
        set_email(e.target.value);
    };

    const change_password = (e) => {
        set_password(e.target.value);
    };

    const change_confirm_password = (e) => {
        set_confirm_password(e.target.value);
    };

    const change_nationality = (e) => {
        set_nationality(e.target.value);
    };

    const register_student_check = () => {
        if (!register_check()) {
            return;
        }
    
            let user = create_user();
        user["is_student"] = true;
        console.log(user);
        useUserStore.getState().create_user(user);

    };

    const register_teacher_check = () => {
        console.log("first_name" + first_name)
        console.log("last_name" + last_name)
        if (!register_check()) {
            return;
        }
        let user = create_user();
        user["is_student"] = false;
        console.log(user);
        useUserStore.getState().create_user(user);
    };

    const create_user = () => {
        return {
            first_name: first_name,
            final_name: last_name,
            email: email,
            password: password,
            nationality: nationality,
        };
    };

    const register_check = () => {
        if (first_name === "") {
            alert("First name is empty");
            return false;
        }
        if (last_name === "") {
            alert("Last name is empty");
            return false;
        }
        if (email === "") {
            alert("Email is empty");
            return false;
        }
        if (password === "") {
            alert("Password is empty");
            return false;
        }
        if (confirm_password === "") {
            alert("Confirm password is empty");
            return false;
        }
        if (password !== confirm_password) {
            alert("Passwords do not match");
            return false;
        }
        if (nationality === "") {
            alert("Nationality is empty");
            return false;
        }

        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].email === email) {
                alert("Email already exists");
                return false;
            }
        }

        let valid = false;

        for (let i = 0; i < LanguagesAvailable.length; i++) {
            if (nationality.toLowerCase() === LanguagesAvailable[i].fullname.toLowerCase()) {
                valid = true;
                break;
            }
        }

        if (!valid) {
            alert("Invalid nationality")
            return false;
        }
       
        return true;

    };

    return (
        <>
            <div className="hero mt-20 bg-secondary/20 rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse rounded-xl">
                    <div className="text-center lg:text-left px-10">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Unlock a world of linguistic possibilities and
                            embark on a journey of language mastery. Join our
                            community and discover the joy of learning
                            languages, one word at a time.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-accent/30 shadow-xl">
                        <div className="card-body">
                            <div className="form-control inline">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    placeholder="Stefen"
                                    onChange={change_first_name}
                                    style={{ width: "47%" }}
                                    className="input input-bordered mr-2 bg-white/95 placeholder-gray-500"
                                    required
                                />
                                <input
                                    type="text"
                                    id="last_name"
                                    onChange={change_last_name}
                                    placeholder="Jonhson"
                                    style={{ width: "47%" }}
                                    className="input w-20 input-bordered bg-white/95 placeholder-gray-500"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    onChange={change_email}
                                    placeholder="example@gmail.com"
                                    className="input input-bordered bg-white/95 placeholder-gray-500"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    onChange={change_password}
                                    placeholder="password"
                                    className="input input-bordered bg-white/95 placeholder-gray-500"
                                />
                                <label className="label">
                                    <span className="label-text">
                                        Repeat Password
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    onChange={change_confirm_password}
                                    placeholder="password"
                                    className="input input-bordered bg-white/95 placeholder-gray-500"
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Nationality
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    onChange={change_nationality}
                                    placeholder="Portuguese"
                                    className="input input-bordered bg-white/95 placeholder-gray-500"
                                />
                            </div>
                            <div className="inline-flex justify-center ">
                                <div
                                    className="form-control mt-6 mr-2"
                                    style={{ width: "40%" }}
                                >
                                    <button
                                        className="btn btn-primary"
                                        onClick={register_student_check}
                                    >
                                        Register as a Student
                                    </button>
                                </div>
                                <div
                                    className="form-control mt-6"
                                    style={{ width: "40%" }}
                                >
                                    <button
                                        className="btn btn-primary"
                                        onClick={register_teacher_check}
                                    >
                                        Register as a Teacher
                                    </button>
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
